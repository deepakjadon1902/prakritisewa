import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  if (!installEvent || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-md rounded-2xl border border-border bg-card p-4 shadow-lift sm:left-auto">
      <div className="flex items-start gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-[color:var(--forest)]">
          <Download className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Install Prakriti Sewa</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Add the app for faster access and offline reading.
          </p>
          <button
            type="button"
            className="mt-3 rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-primary-foreground"
            onClick={async () => {
              await installEvent.prompt();
              await installEvent.userChoice;
              setDismissed(true);
              setInstallEvent(null);
            }}
          >
            Install
          </button>
        </div>
        <button
          type="button"
          aria-label="Dismiss install prompt"
          className="grid size-8 place-items-center rounded-full hover:bg-accent"
          onClick={() => setDismissed(true)}
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
