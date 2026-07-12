export interface SourceLink {
  label: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
  date: string;
  author: string;
  image: string;
  imageCredit: SourceLink;
  sources: SourceLink[];
  content: string[];
}

const unsplash = "https://unsplash.com";

export const posts: BlogPost[] = [
  {
    slug: "jadav-payeng-molai-forest",
    title: "एक इंसान, एक रेत का टापू और 1,360 एकड़ का जीवित जंगल",
    excerpt:
      "असम के जादव पायेंग ने ब्रह्मपुत्र के सूखे रेतीले टापू को दशकों की सेवा से मोलाई वन में बदल दिया।",
    category: "सच्ची कहानी",
    tags: ["जादव पायेंग", "वन संरक्षण", "जैव विविधता"],
    readingTime: "6 मिनट",
    date: "12 जुलाई 2026",
    author: "प्रकृति सेवा शोध टीम",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jadav%20Payeng%20Forest%20Man%20Of%20India.jpg",
    imageCredit: {
      label: "Wikimedia Commons: Jadav Payeng Forest Man Of India.jpg",
      url: "https://commons.wikimedia.org/wiki/File:Jadav_Payeng_Forest_Man_Of_India.jpg",
    },
    sources: [
      { label: "Wikipedia: Jadav Payeng", url: "https://en.wikipedia.org/wiki/Jadav_Payeng" },
      {
        label: "Wikimedia Commons: Jadav Payeng media",
        url: "https://commons.wikimedia.org/wiki/Category:Jadav_Payeng",
      },
    ],
    content: [
      "1979 में असम के माजुली क्षेत्र में एक किशोर ने बाढ़ के बाद धूप में मरे हुए सांप देखे। उस दृश्य ने जादव पायेंग के भीतर एक सवाल जगा दिया: अगर यहां पेड़ होते, तो क्या यह जीवन बच सकता था?",
      "उन्होंने शुरुआत कुछ बांस और पौधों से की। कोई बड़ा मंच नहीं था, कोई अभियान नहीं था, केवल रोज का श्रम था। वर्षों तक वे उसी रेत पर लौटते रहे, पौधे लगाते रहे, उनकी देखभाल करते रहे और धीरे-धीरे वह जगह एक जीवित वन में बदलती गई।",
      "आज मोलाई वन को बाघ, गैंडे, हिरण, पक्षियों और हाथियों के आवास के रूप में जाना जाता है। यह कहानी हमें सिखाती है कि प्रकृति की सेवा में सबसे बड़ा संसाधन पैसा नहीं, निरंतरता है।",
      "प्रकृति सेवा के लिए यह कहानी एक दिशा है: हर शहर में ऐसे छोटे मोलाई वन बन सकते हैं, यदि नागरिक किसी खाली जमीन, किसी सूखे किनारे या किसी घायल पेड़ को अपना मान लें।",
    ],
  },
  {
    slug: "piplantri-111-trees-for-every-daughter",
    title: "पिपलांत्री: जहां बेटी के जन्म पर 111 पेड़ लगाए जाते हैं",
    excerpt:
      "राजस्थान के पिपलांत्री गांव ने बेटी, पेड़ और जल को एक ही उत्सव में जोड़कर सामाजिक सोच बदल दी।",
    category: "समुदाय",
    tags: ["पिपलांत्री", "बेटी और पेड़", "राजस्थान"],
    readingTime: "5 मिनट",
    date: "10 जुलाई 2026",
    author: "प्रकृति सेवा संपादकीय टीम",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash forest image", url: unsplash },
    sources: [
      { label: "Wikipedia: Piplantri", url: "https://en.wikipedia.org/wiki/Piplantri" },
      {
        label: "Times of India: Piplantri story",
        url: "https://timesofindia.indiatimes.com/life-style/travel/destinations/the-story-of-the-village-where-every-girls-birth-is-celebrated-by-planting-111-trees-for-this-heartwarming-reason/articleshow/130348838.cms",
      },
    ],
    content: [
      "पिपलांत्री की कहानी केवल वृक्षारोपण की कहानी नहीं है; यह उस समाज की कहानी है जिसने बेटी के जन्म को हरियाली के उत्सव में बदल दिया। गांव में हर बेटी के जन्म पर 111 पेड़ लगाने की परंपरा ने परिवार, जल, जमीन और भविष्य को एक धागे में बांध दिया।",
      "इस पहल से पेड़ों की संख्या बढ़ी, साझा भूमि हरी हुई और लोगों में यह भाव मजबूत हुआ कि बेटी बोझ नहीं, जीवन की शुरुआत है। कई स्रोत बताते हैं कि गांव ने पेड़ों के साथ एलोवेरा और सामुदायिक देखभाल को भी जोड़ा, जिससे पर्यावरण के साथ आजीविका की संभावना बनी।",
      "इस मॉडल की सबसे बड़ी सीख है: पेड़ तब बचते हैं जब वे किसी भावना से जुड़े हों। यदि हर जन्म, हर स्मृति, हर विवाह और हर त्योहार एक पौधे से जुड़ जाए, तो वृक्षारोपण फोटो नहीं, परंपरा बन सकता है।",
    ],
  },
  {
    slug: "chami-murmu-jharkhand-green-leadership",
    title: "चामी मुर्मू: गांव की महिलाओं से शुरू हुई लाखों पौधों की शक्ति",
    excerpt:
      "झारखंड की चामी मुर्मू ने सामुदायिक भागीदारी से पेड़ लगाने और बचाने की ऐसी मिसाल बनाई जिसे राष्ट्रीय सम्मान मिला।",
    category: "प्रेरणा",
    tags: ["चामी मुर्मू", "महिला नेतृत्व", "झारखंड"],
    readingTime: "4 मिनट",
    date: "8 जुलाई 2026",
    author: "प्रकृति सेवा शोध टीम",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash sapling image", url: unsplash },
    sources: [
      { label: "Wikipedia: Chami Murmu", url: "https://en.wikipedia.org/wiki/Chami_Murmu" },
    ],
    content: [
      "झारखंड की चामी मुर्मू की यात्रा बताती है कि हरियाली केवल वन विभाग का काम नहीं है। जब गांव की महिलाएं, परिवार और स्थानीय समूह एक साथ खड़े होते हैं, तो पौधे आंदोलन बन जाते हैं।",
      "उपलब्ध सार्वजनिक स्रोतों के अनुसार चामी मुर्मू ने वर्षों तक पौधे लगाए, समुदाय को जोड़ा और जंगलों की रक्षा को महिलाओं की भागीदारी से मजबूत किया। उन्हें नारी शक्ति पुरस्कार जैसे राष्ट्रीय सम्मान भी मिले।",
      "प्रकृति सेवा इस कहानी से यह सीख लेती है कि पेड़ बचाने की सबसे मजबूत इकाई ‘स्थानीय समूह’ है। कोई भी शहर अपने वार्ड, स्कूल, कॉलोनी और गांव में छोटे-छोटे हरित दल बना सकता है।",
    ],
  },
  {
    slug: "daripalli-ramaiah-seeds-in-pocket",
    title: "दारिपल्ली रमैय्या: जेब में बीज, मन में जंगल",
    excerpt:
      "तेलंगाना के दारिपल्ली रमैय्या ने बीज बांटकर और पौधे लगाकर दिखाया कि व्यक्तिगत संकल्प भी जनआंदोलन बन सकता है।",
    category: "जन आंदोलन",
    tags: ["दारिपल्ली रमैय्या", "बीज", "तेलंगाना"],
    readingTime: "4 मिनट",
    date: "5 जुलाई 2026",
    author: "प्रकृति सेवा संपादकीय टीम",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash plantation image", url: unsplash },
    sources: [
      {
        label: "Wikipedia: Daripalli Ramaiah",
        url: "https://en.wikipedia.org/wiki/Daripalli_Ramaiah",
      },
      {
        label: "Economic Times: Tree Man of Telangana",
        url: "https://m.economictimes.com/news/new-updates/with-just-a-bicycle-and-seeds-in-his-pocket-he-planted-1-crore-trees-telanganas-tree-man-proved-how-one-person-can-change-india/articleshow/130301334.cms",
      },
    ],
    content: [
      "दारिपल्ली रमैय्या को लोग तेलंगाना के ‘ट्री मैन’ के रूप में याद करते हैं। उनके बारे में प्रकाशित कहानियां बताती हैं कि वे बीज साथ रखते थे, लोगों को पौधे लगाने के लिए प्रेरित करते थे और हरियाली को रोजमर्रा की आदत बनाना चाहते थे।",
      "उनकी यात्रा हमें यह समझाती है कि पर्यावरण सेवा हमेशा बड़े बजट से शुरू नहीं होती। कभी-कभी शुरुआत बस एक बीज, एक साइकिल और एक भरोसे से होती है कि आने वाली पीढ़ी छांव की हकदार है।",
      "प्रकृति सेवा हर स्वयंसेवक से यही कहती है: अपने बैग में एक पानी की बोतल, एक छोटा औजार और एक जिम्मेदारी रखिए। शहर बदलने से पहले आदत बदलती है।",
    ],
  },
  {
    slug: "van-mahotsav-tree-festival-india",
    title: "वन महोत्सव: जब वृक्षारोपण त्योहार नहीं, जिम्मेदारी बनता है",
    excerpt:
      "भारत में जुलाई का पहला सप्ताह पेड़ों के लिए समर्पित माना जाता है; पर असली काम पौधा लगाने के बाद शुरू होता है।",
    category: "जागरूकता",
    tags: ["वन महोत्सव", "वृक्षारोपण", "मानसून"],
    readingTime: "5 मिनट",
    date: "1 जुलाई 2026",
    author: "प्रकृति सेवा शिक्षा टीम",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash tree canopy image", url: unsplash },
    sources: [
      { label: "Wikipedia: Van Mahotsav", url: "https://en.wikipedia.org/wiki/Van_Mahotsav" },
    ],
    content: [
      "वन महोत्सव हमें याद दिलाता है कि पेड़ लगाना भारतीय सार्वजनिक जीवन की पुरानी और सुंदर परंपरा है। जुलाई का समय इसलिए महत्वपूर्ण है क्योंकि मानसून में पौधों की जीवित रहने की संभावना बेहतर होती है।",
      "लेकिन एक सच्चा वृक्षारोपण अभियान फोटो, भाषण और संख्या पर खत्म नहीं होता। असली परीक्षा 30 दिन, 90 दिन, एक गर्मी और एक मानसून बाद होती है: क्या पौधा अभी भी जीवित है?",
      "प्रकृति सेवा हर अभियान में तीन नियम जोड़ना चाहती है: स्थानीय प्रजाति चुनो, पानी और सुरक्षा की जिम्मेदारी तय करो, और पौधे को कम से कम तीन साल तक देखो। यही वृक्षारोपण को वृक्ष-संरक्षण बनाता है।",
    ],
  },
  {
    slug: "pune-tree-mapping-citizen-science",
    title: "पेड़ों की गिनती नागरिक करेंगे, तभी शहर सच देखेगा",
    excerpt:
      "पुणे जैसे शहरों में नागरिक पेड़ों को जियो-टैग कर रहे हैं ताकि हर पेड़ की प्रजाति, सेहत और जिम्मेदार देखभाल दर्ज हो सके।",
    category: "सिटी एक्शन",
    tags: ["ट्री मैपिंग", "पुणे", "सिटिजन साइंस"],
    readingTime: "5 मिनट",
    date: "28 जून 2026",
    author: "प्रकृति सेवा डेटा टीम",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash landscape image", url: unsplash },
    sources: [
      {
        label: "Times of India: Pune citizens geotag green cover",
        url: "https://timesofindia.indiatimes.com/city/pune/citizens-take-geotagging-of-punes-green-cover-into-their-own-hands/articleshow/122800619.cms",
      },
      {
        label: "arXiv: Plantation site recommendation research",
        url: "https://arxiv.org/abs/2009.08002",
      },
    ],
    content: [
      "किसी शहर में कितने पेड़ हैं, कौन-सी प्रजाति कहां है, कौन-सा पेड़ बीमार है और किस पौधे को पानी चाहिए—जब तक यह डेटा साफ नहीं होगा, शहर अपनी हरियाली नहीं बचा पाएगा।",
      "पुणे में नागरिकों और पर्यावरण समूहों द्वारा पेड़ों की जियो-टैगिंग की खबरें दिखाती हैं कि लोग अब केवल शिकायत नहीं कर रहे; वे प्रमाण बना रहे हैं। यह प्रमाण अवैध कटाई रोकने, देखभाल बांटने और योजना बनाने में मदद कर सकता है।",
      "अनुसंधान भी बताता है कि पौधे सही जगह लगाए जाएं तो सफलता बढ़ती है। इसलिए प्रकृति सेवा वृक्षारोपण से पहले मिट्टी, पानी, प्रजाति, छाया, स्थानीय जैव-विविधता और रखरखाव की क्षमता देखना जरूरी मानती है।",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return posts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, limit);
}
