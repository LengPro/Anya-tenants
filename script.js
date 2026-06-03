const imageFiles = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
];

const translations = {
  en: {
    htmlLang: "en",
    pageTitle: "Anya House for Rent",
    metaDescription:
      "Rental home website with gallery, house details, key contacts, and a living guide.",
    navHome: "Home",
    navGallery: "Gallery",
    navDetails: "Details",
    navLiving: "Living Guide",
    navContacts: "Contacts",
    heroEyebrow: "Guidebook for Anya tenants",
    heroTitle:
      "This website is a guide for the Anya rental house owned by Teerachai Poldejparinya. It provides essential information for tenants",
    heroText:
      "Browse the address, map, house photos, contact information, and community living rules within Anya Village",
    heroPrimaryButton: "Gallery",
    heroSecondaryButton: "Living Guide",
    heroStatOne: "Real house photo as the hero background",
    heroStatTwo: "Open house details and contacts anytime",
    introText:
      "This website is a guide for the Anya rental house owned by Teerachai Poldejparinya. It provides essential information for tenants, including the address, map, house photos, contact information, and community living rules within Anya Village.",
    galleryHeading: "All House Photos",
    detailsHeading: "Rental House Details",
    stayGuideHeading: "Emergency Contacts",
    livingHeading: "Living Guide",
    serviceHeading: "Neighborhood Services",
    rulesHeading: "Living With Others",
    checklistHeading: "Move-in Checklist",
    contactsHeading: "Important Contacts",
    contactNote:
      'You can update the real house information, names, and phone numbers in <code>script.js</code>.',
    footerText:
      "Thank you for viewing this home. We hope it feels warm, calm, and welcoming.",
    backToTop: "Back to Top",
    zoomButton: "View Large Photo",
    closeButton: "Close",
    prevAria: "Previous photo",
    nextAria: "Next photo",
    galleryPhotoPrefix: "House Photo",
    galleryThumbAria: "Select photo",
    featuredAlt: "House photo",
    lightboxAlt: "Large house photo",
    contactAction: "Call",
    houseDetails: [
      {
        label: "House Name",
        value: "Anya Bangna Ramkhamhaeng 2",
      },
      {
        label: "House Type",
        value:
          "Modern semi-detached house Eva type | 41 sq.wah | usable area 146 sq.m. | 3 bedrooms | 2 bathrooms | Garden view | Land and House developer",
      },
      {
        label: "Facility",
        value:
          "Fitness center | Swimming pool | Working space | Pet friendly | Wide garden center",
      },
      {
        label: "Address",
        value: "36/255 Soi Ramkhamhaeng 2, Dok Mai, Prawet, Bangkok 10250",
        linkLabel: "Google Maps",
        href: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
      },
      {
        label: "Owner",
        value: "Teerachai Poldejparinya | 064-241-7555",
      },
    ],
    supportInfo: [
      {
        title: "Home Owner",
        body: "For rent questions, maintenance requests, or more information about the house.",
      },
      {
        title: "Juristic Office / Common Area",
        body: "For common area issues, access cards, village entry, and shared facilities.",
      },
      {
        title: "Emergency Support",
        body: "Keep key emergency contacts ready, such as police, fire, hospital, and medical hotlines.",
      },
    ],
    serviceSchedule: [
      "Garbage truck: every Monday, Wednesday, and Friday morning",
      "Large item or yard waste pickup: please contact the common area office in advance",
      "Common area maintenance: contact the juristic office or village staff",
    ],
    houseRules: [
      "Please park inside the house and do not block your home or your neighbors' frontage",
      "Do not leave wet food waste outside the bin to avoid smell and pests",
      "Keep noise low at night for a peaceful neighborhood",
      "If you have pets, please maintain cleanliness and respect shared spaces",
    ],
    checklist: [
      "Check all keys, remotes, and access devices on move-in day",
      "Record water, electricity, and internet meter readings when you move in",
      "Report any issue in the house as soon as possible so it can be fixed quickly",
    ],
    contacts: [
      {
        title: "Security Guard",
        description:
          "24 Hrs. Solve basic problems such as stealing, snakes, and foreign animals.",
        phone: "080-554-6606",
        action: "tel:0805546606",
      },
      {
        title: "Legal Entity",
        description:
          "9.00-18.00. The middleman who takes care of the conditions and manages the things of the village.",
        phone: "091-050-2046",
        action: "tel:0910502046",
      },
      {
        title: "Garden Caretaker",
        description: "Appointment in advance. K. Bubpha - mowing the grass (charged).",
        phone: "092-289-1957",
        action: "tel:0922891957",
      },
      {
        title: 'Choktawee Commercial Gas (Ram 2) (Main)',
        description:
          "8.00-19.00. Refill gas 15KG for cooking when the gas runs out or there is a problem with gas use.",
        phone: "097-162-6295",
        action: "tel:0971626295",
      },
      {
        title: "Gas Ram 2 Store (Optional)",
        description: "8.00-19.00. Nearby gas tank store for refill gas (optional).",
        phone: "088-882-4992",
        action: "tel:0888824992",
      },
      {
        title: "AIS Internet Fibre",
        description: "24 Hrs. For any internet problem.",
        phone: "1175",
        action: "tel:1175",
      },
      {
        title: "Metropolitan Electricity Authority",
        description: "24 Hrs. Power problem, power outage.",
        phone: "1130",
        action: "tel:1130",
      },
      {
        title: "Metropolitan Waterworks Authority",
        description: "24 Hrs. Water problem, water does not flow.",
        phone: "1125",
        action: "tel:1125",
      },
      {
        title: "Police",
        description: "24 Hrs. Thai police.",
        phone: "191",
        action: "tel:191",
      },
      {
        title: "Fire Station",
        description: "24 Hrs. The central number of the fire station.",
        phone: "199",
        action: "tel:199",
      },
    ],
  },
  th: {
    htmlLang: "th",
    pageTitle: "บ้านอบอุ่นให้เช่า",
    metaDescription:
      "เว็บไซต์แนะนำบ้านเช่า พร้อมรูปภาพ รายละเอียดบ้าน ช่องทางติดต่อ และคู่มือการอยู่อาศัย",
    navHome: "หน้าหลัก",
    navGallery: "รูปบ้าน",
    navDetails: "รายละเอียด",
    navLiving: "การอยู่อาศัย",
    navContacts: "ติดต่อ",
    heroEyebrow: "คู่มือสำหรับผู้เช่าบ้าน Anya",
    heroTitle:
      "เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นคู่มือสำหรับบ้านเช่า Anya ของ Teerachai Poldejparinya โดยรวบรวมข้อมูลสำคัญสำหรับผู้เช่า",
    heroText:
      "ดูที่อยู่ แผนที่ รูปภาพบ้าน ช่องทางติดต่อ และกฎระเบียบการอยู่อาศัยร่วมกันภายในหมู่บ้าน Anya",
    heroPrimaryButton: "แกลเลอรี",
    heroSecondaryButton: "การอยู่อาศัย",
    heroStatOne: "รูปบ้านจริงเป็นภาพพื้นหลังหลัก",
    heroStatTwo: "เปิดดูข้อมูลบ้านและเบอร์ติดต่อได้ทุกเวลา",
    introText:
      "เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นคู่มือสำหรับบ้านเช่า Anya ของ Teerachai Poldejparinya โดยรวบรวมข้อมูลสำคัญสำหรับผู้เช่า เช่น ที่อยู่ แผนที่ รูปภาพบ้าน ช่องทางติดต่อ และกฎระเบียบการอยู่อาศัยร่วมกันภายในหมู่บ้าน Anya",
    galleryHeading: "รูปบ้านทั้งหมด",
    detailsHeading: "รายละเอียดบ้านเช่า",
    stayGuideHeading: "เบอร์ติดต่อสำคัญ",
    livingHeading: "รายละเอียดการอยู่อาศัย",
    serviceHeading: "ตารางบริการในหมู่บ้าน",
    rulesHeading: "ข้อแนะนำการอยู่ร่วมกับผู้อื่น",
    checklistHeading: "สิ่งที่ควรเช็กเมื่อเข้าพัก",
    contactsHeading: "ติดต่อสำคัญ",
    contactNote:
      'คุณสามารถแก้ชื่อ เบอร์โทร และรายละเอียดจริงของบ้านได้ง่าย ๆ ในไฟล์ <code>script.js</code>.',
    footerText: "ขอบคุณที่ดูบ้านหลังนี้ หวังว่าจะเป็นพื้นที่ที่อยู่แล้วสบายใจและอบอุ่น",
    backToTop: "กลับด้านบน",
    zoomButton: "ดูภาพขนาดใหญ่",
    closeButton: "ปิด",
    prevAria: "ภาพก่อนหน้า",
    nextAria: "ภาพถัดไป",
    galleryPhotoPrefix: "ภาพบ้าน",
    galleryThumbAria: "เลือกรูป",
    featuredAlt: "ภาพบ้านเช่า",
    lightboxAlt: "ภาพบ้านขนาดใหญ่",
    contactAction: "โทรติดต่อ",
    houseDetails: [
      {
        label: "ชื่อบ้าน",
        value: "Anya Bangna Ramkhamhaeng 2",
      },
      {
        label: "ประเภทบ้าน",
        value:
          "บ้านแฝดสไตล์โมเดิร์น แบบ Eva | 41 ตารางวา | พื้นที่ใช้สอย 146 ตารางเมตร | 3 ห้องนอน | 2 ห้องน้ำ | วิวสวน | โครงการโดย Land and House",
      },
      {
        label: "สิ่งอำนวยความสะดวก",
        value:
          "ฟิตเนส | สระว่ายน้ำ | พื้นที่ทำงาน | เลี้ยงสัตว์ได้ | สวนส่วนกลางขนาดกว้าง",
      },
      {
        label: "ที่อยู่",
        value: "36/255 ซอยรามคำแหง 2 แขวงดอกไม้ เขตประเวศ กรุงเทพฯ 10250",
        linkLabel: "Google Maps",
        href: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
      },
      {
        label: "เจ้าของบ้าน",
        value: "Teerachai Poldejparinya | 064-241-7555",
      },
    ],
    supportInfo: [
      {
        title: "เจ้าของบ้าน",
        body: "เหมาะสำหรับติดต่อเรื่องค่าเช่า การซ่อมบำรุง หรือสอบถามรายละเอียดเพิ่มเติมของบ้าน",
      },
      {
        title: "นิติบุคคล / ส่วนกลาง",
        body: "ใช้สำหรับแจ้งปัญหาส่วนกลาง การเข้าออกหมู่บ้าน การ์ด หรือพื้นที่ส่วนรวม",
      },
      {
        title: "เหตุฉุกเฉิน",
        body: "รวมช่องทางติดต่อที่ควรมีติดไว้ เช่น ตำรวจ ดับเพลิง โรงพยาบาล และเบอร์ฉุกเฉิน",
      },
    ],
    serviceSchedule: [
      "รถขยะ: ทุกวันจันทร์ พุธ และศุกร์ เวลาเช้า",
      "เก็บกิ่งไม้หรือขยะชิ้นใหญ่: กรุณาติดต่อส่วนกลางล่วงหน้า",
      "แจ้งซ่อมส่วนกลาง: ติดต่อผ่านนิติบุคคลหรือเจ้าหน้าที่หมู่บ้าน",
    ],
    houseRules: [
      "กรุณาจอดรถภายในบ้าน และไม่จอดขวางหน้าบ้านหรือหน้าบ้านผู้อื่น",
      "งดทิ้งขยะสดนอกถัง เพื่อป้องกันกลิ่นและสัตว์รบกวน",
      "ดูแลระดับเสียงในช่วงกลางคืน เพื่อความสงบของเพื่อนบ้าน",
      "หากมีสัตว์เลี้ยง ควรรักษาความสะอาดและไม่รบกวนพื้นที่ส่วนรวม",
    ],
    checklist: [
      "ตรวจสอบกุญแจ รีโมต และอุปกรณ์เข้าออกที่ได้รับในวันย้ายเข้า",
      "บันทึกมิเตอร์น้ำ ไฟ และอินเทอร์เน็ตเมื่อเริ่มเข้าพัก",
      "แจ้งปัญหาที่พบในบ้านให้เจ้าของทราบโดยเร็ว เพื่อแก้ไขได้ทันเวลา",
    ],
    contacts: [
      {
        title: "รปภ.",
        description:
          "ตลอด 24 ชั่วโมง แก้ปัญหาเบื้องต้น เช่น ขโมย งู และสัตว์แปลกปลอม",
        phone: "080-554-6606",
        action: "tel:0805546606",
      },
      {
        title: "นิติบุคคล",
        description:
          "เวลา 9.00-18.00 ดูแลสภาพความเป็นอยู่และจัดการเรื่องต่าง ๆ ภายในหมู่บ้าน",
        phone: "091-050-2046",
        action: "tel:0910502046",
      },
      {
        title: "คนสวน",
        description: "นัดหมายล่วงหน้า K. Bubpha - รับตัดหญ้า (มีค่าใช้จ่าย)",
        phone: "092-289-1957",
        action: "tel:0922891957",
      },
      {
        title: "โชคทวีพาณิชย์แก๊ส (ราม 2) ร้านหลัก",
        description:
          "เวลา 8.00-19.00 เติมแก๊ส 15 กก. สำหรับทำอาหารเมื่อแก๊สหมดหรือมีปัญหาในการใช้งานแก๊ส",
        phone: "097-162-6295",
        action: "tel:0971626295",
      },
      {
        title: "ร้านแก๊สราม 2 (ทางเลือก)",
        description: "เวลา 8.00-19.00 ร้านแก๊สใกล้บ้านสำหรับเติมแก๊ส (ทางเลือก)",
        phone: "088-882-4992",
        action: "tel:0888824992",
      },
      {
        title: "AIS Internet Fibre",
        description: "ตลอด 24 ชั่วโมง สำหรับปัญหาอินเทอร์เน็ต",
        phone: "1175",
        action: "tel:1175",
      },
      {
        title: "การไฟฟ้านครหลวง",
        description: "ตลอด 24 ชั่วโมง สำหรับปัญหาไฟฟ้าหรือไฟดับ",
        phone: "1130",
        action: "tel:1130",
      },
      {
        title: "การประปานครหลวง",
        description: "ตลอด 24 ชั่วโมง สำหรับปัญหาน้ำไม่ไหลหรือน้ำมีปัญหา",
        phone: "1125",
        action: "tel:1125",
      },
      {
        title: "ตำรวจ",
        description: "ตลอด 24 ชั่วโมง ตำรวจไทย",
        phone: "191",
        action: "tel:191",
      },
      {
        title: "สถานีดับเพลิง",
        description: "ตลอด 24 ชั่วโมง หมายเลขกลางของสถานีดับเพลิง",
        phone: "199",
        action: "tel:199",
      },
    ],
  },
};

const featuredImage = document.getElementById("featuredImage");
const lightboxImage = document.getElementById("lightboxImage");
const thumbnailList = document.getElementById("thumbnailList");
const houseDetailsContainer = document.getElementById("houseDetails");
const supportInfoContainer = document.getElementById("supportInfo");
const serviceScheduleContainer = document.getElementById("serviceSchedule");
const houseRulesContainer = document.getElementById("houseRules");
const checklistContainer = document.getElementById("checklist");
const contactGrid = document.getElementById("contactGrid");
const lightbox = document.getElementById("lightbox");
const openLightbox = document.getElementById("openLightbox");
const closeLightbox = document.getElementById("closeLightbox");
const galleryCounter = document.getElementById("galleryCounter");
const galleryTitle = document.getElementById("galleryTitle");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const langEn = document.getElementById("langEn");
const langTh = document.getElementById("langTh");
const metaDescription = document.getElementById("metaDescription");

let currentLanguage = "en";
let activeGalleryIndex = 0;
let galleryTimer;

function getGalleryImages(language) {
  const prefix = translations[language].galleryPhotoPrefix;
  return imageFiles.map((file, index) => ({
    src: `assets/${file}`,
    title: `${prefix} ${String(index + 1).padStart(2, "0")}`,
  }));
}

function getCurrentGalleryImages() {
  return getGalleryImages(currentLanguage);
}

function updateStaticText() {
  const t = translations[currentLanguage];
  document.documentElement.lang = t.htmlLang;
  document.title = t.pageTitle;
  metaDescription.setAttribute("content", t.metaDescription);

  const textMap = {
    navGallery: t.navGallery,
    navHome: t.navHome,
    navDetails: t.navDetails,
    navLiving: t.navLiving,
    navContacts: t.navContacts,
    heroEyebrow: t.heroEyebrow,
    heroTitle: t.heroTitle,
    heroText: t.heroText,
    heroPrimaryButton: t.heroPrimaryButton,
    heroSecondaryButton: t.heroSecondaryButton,
    heroStatOne: t.heroStatOne,
    heroStatTwo: t.heroStatTwo,
    introText: t.introText,
    galleryHeading: t.galleryHeading,
    detailsHeading: t.detailsHeading,
    stayGuideHeading: t.stayGuideHeading,
    livingHeading: t.livingHeading,
    serviceHeading: t.serviceHeading,
    rulesHeading: t.rulesHeading,
    checklistHeading: t.checklistHeading,
    contactsHeading: t.contactsHeading,
    footerText: t.footerText,
    backToTop: t.backToTop,
    openLightbox: t.zoomButton,
    closeLightbox: t.closeButton,
  };

  Object.entries(textMap).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });

  document.getElementById("contactNote").innerHTML = t.contactNote;
  prevImage.setAttribute("aria-label", t.prevAria);
  nextImage.setAttribute("aria-label", t.nextAria);
  closeLightbox.setAttribute("aria-label", t.closeButton);
}

function updateLanguageButtons() {
  langEn.classList.toggle("active", currentLanguage === "en");
  langTh.classList.toggle("active", currentLanguage === "th");
}

function updateGallery(index) {
  const galleryImages = getCurrentGalleryImages();
  const image = galleryImages[index];
  const t = translations[currentLanguage];
  activeGalleryIndex = index;
  featuredImage.src = image.src;
  featuredImage.alt = t.featuredAlt;
  lightboxImage.src = image.src;
  lightboxImage.alt = t.lightboxAlt;
  galleryCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(
    galleryImages.length
  ).padStart(2, "0")}`;
  galleryTitle.textContent = image.title;

  document.querySelectorAll(".thumbnail-button").forEach((thumbnail, thumbnailIndex) => {
    thumbnail.classList.toggle("active", thumbnailIndex === index);
    thumbnail.setAttribute("aria-label", `${t.galleryThumbAria} ${thumbnailIndex + 1}`);
  });
}

function moveGallery(step) {
  const galleryImages = getCurrentGalleryImages();
  const nextIndex = (activeGalleryIndex + step + galleryImages.length) % galleryImages.length;
  updateGallery(nextIndex);
}

function startGalleryAutoplay() {
  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => {
    moveGallery(1);
  }, 3500);
}

function stopGalleryAutoplay() {
  clearInterval(galleryTimer);
}

function renderGallery() {
  const galleryImages = getCurrentGalleryImages();
  thumbnailList.innerHTML = "";

  galleryImages.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `thumbnail-button${index === activeGalleryIndex ? " active" : ""}`;
    button.setAttribute(
      "aria-label",
      `${translations[currentLanguage].galleryThumbAria} ${index + 1}`
    );
    button.innerHTML = `<img src="${image.src}" alt="${image.title}">`;

    button.addEventListener("click", () => {
      updateGallery(index);
      startGalleryAutoplay();
    });

    thumbnailList.appendChild(button);
  });

  updateGallery(activeGalleryIndex);
}

function renderDetails() {
  houseDetailsContainer.innerHTML = "";
  translations[currentLanguage].houseDetails.forEach((itemData) => {
    const item = document.createElement("article");
    item.className = "detail-item";
    const valueHtml = itemData.href
      ? `<strong>${itemData.value} | <a href="${itemData.href}" target="_blank" rel="noreferrer">${
          itemData.linkLabel || itemData.value
        }</a></strong>`
      : `<strong>${itemData.value}</strong>`;
    item.innerHTML = `<span>${itemData.label}</span>${valueHtml}`;
    houseDetailsContainer.appendChild(item);
  });
}

function renderSupportInfo() {
  supportInfoContainer.innerHTML = "";
  translations[currentLanguage].supportInfo.forEach((info) => {
    const item = document.createElement("article");
    item.innerHTML = `<strong>${info.title}</strong><p>${info.body}</p>`;
    supportInfoContainer.appendChild(item);
  });
}

function renderList(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderContacts() {
  contactGrid.innerHTML = "";
  const t = translations[currentLanguage];
  t.contacts.forEach((contact) => {
    const card = document.createElement("article");
    card.className = "contact-card";
    card.innerHTML = `
      <h4>${contact.title}</h4>
      <p>${contact.description}</p>
      <small>${contact.phone}</small>
      <a href="${contact.action}">${t.contactAction}</a>
    `;
    contactGrid.appendChild(card);
  });
}

function renderLivingLists() {
  const t = translations[currentLanguage];
  renderList(serviceScheduleContainer, t.serviceSchedule);
  renderList(houseRulesContainer, t.houseRules);
  renderList(checklistContainer, t.checklist);
}

function applyLanguage(language) {
  currentLanguage = language;
  updateStaticText();
  updateLanguageButtons();
  renderGallery();
  renderDetails();
  renderSupportInfo();
  renderLivingLists();
  renderContacts();
}

openLightbox.addEventListener("click", () => {
  lightbox.showModal();
});

closeLightbox.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

prevImage.addEventListener("click", () => {
  moveGallery(-1);
  startGalleryAutoplay();
});

nextImage.addEventListener("click", () => {
  moveGallery(1);
  startGalleryAutoplay();
});

featuredImage.addEventListener("mouseenter", stopGalleryAutoplay);
featuredImage.addEventListener("mouseleave", startGalleryAutoplay);
thumbnailList.addEventListener("mouseenter", stopGalleryAutoplay);
thumbnailList.addEventListener("mouseleave", startGalleryAutoplay);

langEn.addEventListener("click", () => {
  applyLanguage("en");
});

langTh.addEventListener("click", () => {
  applyLanguage("th");
});

applyLanguage("en");
startGalleryAutoplay();
