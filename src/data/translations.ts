export type Lang = "en" | "hi";

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
    hero_eyebrow: "A selfless movement for Mother Nature",
    hero_title: "Every saved tree is a promise to tomorrow.",
    hero_sub:
      "Prakriti Sewa rescues endangered trees, relocates vulnerable trees, plants native saplings, and inspires communities to protect nature.",
    mission_title: "Our Mission",
    mission_sub:
      "Trees give breath, shade, rain, food, habitat, and memory. We stand for the ones that cannot speak.",
    counter_title: "Our Impact So Far",
    counter_sub:
      "Numbers that keep growing because volunteers, donors, and citizens keep showing up.",
    footer_tag: "Rooted in selfless service. Growing for Mother Nature.",
    footer_rights: "All rights reserved.",
    newsletter_title: "Get monthly stories from the field",
    newsletter_sub:
      "Impact updates, plantation drives, volunteer calls. No spam. Unsubscribe anytime.",
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
    nav_stories: "कहानियां",
    nav_gallery: "गैलरी",
    nav_blog: "ब्लॉग",
    nav_faq: "प्रश्नोत्तर",
    nav_contact: "संपर्क",
    cta_donate: "दान करें",
    cta_volunteer: "स्वयंसेवक बनें",
    cta_explore: "मिशन जानें",
    hero_eyebrow: "प्रकृति मां के लिए निःस्वार्थ सेवा",
    hero_title: "हर बचाया गया पेड़, आने वाले कल की सांस है।",
    hero_sub:
      "प्रकृति सेवा असुरक्षित पेड़ों को बचाता है, कमजोर पेड़ों का सुरक्षित स्थानांतरण करता है, देशी पौधे लगाता है और समाज को प्रकृति रक्षा के लिए प्रेरित करता है।",
    mission_title: "हमारा मिशन",
    mission_sub:
      "पेड़ हमें सांस, छांव, बारिश, भोजन, जीवन और स्मृतियां देते हैं। हम उनकी आवाज बनते हैं।",
    counter_title: "अब तक का प्रभाव",
    counter_sub: "ये आंकड़े इसलिए बढ़ते हैं क्योंकि स्वयंसेवक, दानदाता और नागरिक साथ आते हैं।",
    footer_tag: "निःस्वार्थ सेवा में जड़ें। प्रकृति मां के लिए समर्पण।",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    newsletter_title: "मैदान से मासिक कहानियां पाएं",
    newsletter_sub: "प्रभाव अपडेट, वृक्षारोपण अभियान और स्वयंसेवक अवसर। कोई स्पैम नहीं।",
    subscribe: "सदस्यता लें",
    email_placeholder: "you@example.com",
  },
} as const;

export type TranslationKey = keyof (typeof dict)["en"];
export const translations: Record<Lang, Record<TranslationKey, string>> = dict;
