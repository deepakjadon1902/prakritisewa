import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/impact")({
  beforeLoad: () => {
    throw redirect({ to: "/tree-protection", statusCode: 301, replace: true });
  },
});
