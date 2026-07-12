export type Lang = "en" | "hi";

/**
 * Central translation dictionary. Keep keys short and semantic.
 * Adding a new language = add a new entry with the same keys.
 */
const dict = {
  en: {
    nav_home: "Home",
    nav_mission: "Mission",
    nav_protection: "Protection",
    nav_relocation: "Relocation",
    nav_plantation: "Plantation",
    nav_impact: "Impact",
    nav_stories: "Stories",
    nav_gallery: "Gallery",
    nav_blog: "Blog",
    nav_faq: "FAQs",
    nav_contact: "Contact",
    cta_donate: "Donate Now",
    cta_volunteer: "Become Volunteer",
    cta_explore: "Explore Mission",

    hero_eyebrow: "A movement for Mother Nature",
    hero_title: "Every tree we save is a promise to tomorrow.",
    hero_sub: "We rescue endangered trees, relocate the mature, plant thousands more, and awaken cities to the quiet magic of the forest.",

    mission_title: "Our Mission",
    mission_sub: "Trees give us breath, shade, rain, and memory. We stand for the ones that cannot speak.",

    counter_title: "Our Impact So Far",
    counter_sub: "Numbers that keep growing — because you keep showing up.",

    footer_tag: "Rooted in India. Growing for the planet.",
    footer_rights: "All rights reserved.",
    newsletter_title: "Get monthly stories from the forest",
    newsletter_sub: "Impact updates, plantation drives, volunteer calls. No spam. Unsubscribe anytime.",
    subscribe: "Subscribe",
    email_placeholder: "you@example.com",
  },
  hi: {
    nav_home: "मुखपृष्ठ",
    nav_mission: "मिशन",
    nav_protection: "संरक्षण",
    nav_relocation: "स्थानांतरण",
    nav_plantation: "वृक्षारोपण",
    nav_impact: "प्रभाव",
    nav_stories: "कहानियाँ",
    nav_gallery: "गैलरी",
    nav_blog: "ब्लॉग",
    nav_faq: "प्रश्नोत्तर",
    nav_contact: "संपर्क",
    cta_donate: "अभी दान करें",
    cta_volunteer: "स्वयंसेवक बनें",
    cta_explore: "मिशन जानें",

    hero_eyebrow: "प्रकृति माँ के लिए एक आंदोलन",
    hero_title: "हर बचाया पेड़, कल के लिए एक वादा है।",
    hero_sub: "हम खतरे में पड़े पेड़ों को बचाते हैं, बड़े पेड़ों का स्थानांतरण करते हैं, हज़ारों नए पौधे लगाते हैं, और शहरों को जंगल की सादगी से जोड़ते हैं।",

    mission_title: "हमारा मिशन",
    mission_sub: "पेड़ हमें साँस, छाँव, बारिश और यादें देते हैं। हम उनकी आवाज़ बनते हैं।",

    counter_title: "अब तक का प्रभाव",
    counter_sub: "बढ़ते हुए आँकड़े — क्योंकि आप हमेशा साथ हैं।",

    footer_tag: "भारत में जड़ें। धरती के लिए विकास।",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    newsletter_title: "जंगल की मासिक कहानियाँ पाएँ",
    newsletter_sub: "प्रभाव अपडेट, वृक्षारोपण अभियान, स्वयंसेवक अवसर। कोई स्पैम नहीं।",
    subscribe: "सदस्यता लें",
    email_placeholder: "you@example.com",
  },
} as const;

export type TranslationKey = keyof (typeof dict)["en"];
export const translations: Record<Lang, Record<TranslationKey, string>> = dict;
