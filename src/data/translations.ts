export type Lang = "en" | "hi";

const dict = {
  en: {
    nav_home: "Home",
    nav_mission: "Mission",
    nav_protection: "Protection",
    nav_relocation: "Tree Care",
    nav_plantation: "Plantation",
    nav_impact: "Impact",
    nav_stories: "Stories",
    nav_gallery: "Gallery",
    nav_blog: "Resources",
    nav_faq: "FAQs",
    nav_contact: "Contact",
    cta_donate: "Join Our Mission",
    cta_volunteer: "Become a Volunteer",
    cta_explore: "Contact Us",
    hero_eyebrow: "Vriksh Rakshak Dal Sewa Trust",
    hero_title: "Protect Trees • Protect Nature • Protect the Future",
    hero_sub:
      "Vriksh Rakshak Dal Sewa Trust is dedicated to tree plantation, tree protection, environmental conservation, and public participation for a greener and healthier India.",
    mission_title: "Our Mission",
    mission_sub:
      "To protect, nurture, and preserve trees for future generations through public awareness and community participation.",
    counter_title: "Our Impact",
    counter_sub:
      "We focus on long-term tree survival and ongoing green expansion across Vrindavan and nearby Braj areas.",
    footer_tag: "Registered Public Charitable Trust | Environmental & Social Welfare Organization",
    footer_rights: "All rights reserved.",
    newsletter_title: "Join the green mission",
    newsletter_sub:
      "Receive updates about plantation campaigns, volunteer opportunities, and public awareness programs.",
    subscribe: "Join",
    email_placeholder: "you@example.com",
  },
  hi: {
    nav_home: "मुखपृष्ठ",
    nav_mission: "मिशन",
    nav_protection: "संरक्षण",
    nav_relocation: "देखभाल",
    nav_plantation: "वृक्षारोपण",
    nav_impact: "प्रभाव",
    nav_stories: "कहानियां",
    nav_gallery: "गैलरी",
    nav_blog: "संसाधन",
    nav_faq: "प्रश्न",
    nav_contact: "संपर्क",
    cta_donate: "मिशन से जुड़ें",
    cta_volunteer: "स्वयंसेवक बनें",
    cta_explore: "संपर्क करें",
    hero_eyebrow: "वृक्ष रक्षक दल सेवा ट्रस्ट",
    hero_title: "पेड़ों की रक्षा • प्रकृति की रक्षा • भविष्य की रक्षा",
    hero_sub:
      "वृक्ष रक्षक दल सेवा ट्रस्ट वृक्षारोपण, वृक्ष संरक्षण, पर्यावरण संरक्षण और जनभागीदारी के लिए समर्पित है।",
    mission_title: "हमारा मिशन",
    mission_sub:
      "जनजागरण और सामुदायिक भागीदारी से पेड़ों को रोपना, बचाना और आने वाली पीढ़ियों के लिए संरक्षित करना।",
    counter_title: "हमारा प्रभाव",
    counter_sub: "ट्रस्ट वृंदावन और ब्रज क्षेत्र में वृक्षारोपण और संरक्षण कार्य निरंतर कर रहा है।",
    footer_tag: "पंजीकृत सार्वजनिक धर्मार्थ ट्रस्ट | पर्यावरण एवं सामाजिक कल्याण संगठन",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    newsletter_title: "हरित मिशन से जुड़ें",
    newsletter_sub: "वृक्षारोपण अभियान, स्वयंसेवा और जनजागरण कार्यक्रमों की जानकारी प्राप्त करें।",
    subscribe: "जुड़ें",
    email_placeholder: "you@example.com",
  },
} as const;

export type TranslationKey = keyof (typeof dict)["en"];
export const translations: Record<Lang, Record<TranslationKey, string>> = dict;
