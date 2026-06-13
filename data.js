/* Anya Tenants — content data (bilingual TH / EN) */
(function () {
  const PHOTO_BASE = "./assets/";
  const PHOTOS = Array.from({ length: 30 }, (_, i) => ({
    src: PHOTO_BASE + (i + 1) + ".jpg",
    n: i + 1,
  }));

  const ASSET_ROOMS_TH = [
    {
      room: "ห้องนั่งเล่น",
      items: [
        { name: "Air conditioner", model: "25200BTU 42TVEA028A/38TVEA028A", amount: 1, price: "31,900฿" },
        { name: 'Television Toshiba 65"', model: "55E330NP", amount: 1, price: "10,390฿" },
        { name: "Soundbar Toshiba", model: "2ch 60w TS205", amount: 1, price: "1,999฿" },
        { name: "Shoe storage cabinet SB Furniture", model: "Preem", amount: 1, price: "2,290฿" },
        { name: "TV stand IKEA", model: "Brimnes 180cm.", amount: 1, price: "4,990฿" },
        { name: "Sofa IKEA", model: "Smedstorp", amount: 1, price: "14,990฿" },
        { name: "Dining table Index", model: "Danus", amount: 1, price: "10,990฿" },
        { name: "Storage cabinet IKEA", model: "Hauga", amount: 1, price: "4,590฿" },
        { name: "Mijia Vacuum", model: "Cleaner 2 600w", amount: 1, price: "990฿" },
        { name: "Long working table IKEA", model: "Lagkapten", amount: 1, price: "3,590฿" },
        { name: "Work chair Index", model: "Wallard", amount: 1, price: "2,090฿" },
        { name: "One sofa IKEA", model: "Oskarshamn", amount: 1, price: "5,490฿" },
      ],
    },
    {
      room: "ห้องครัว",
      items: [
        { name: "Washing-Dry machine Toshiba", model: "TWD-T21BU115UWT(MG) 10.5/7", amount: 1, price: "17,990฿" },
        { name: "Refrigerator Toshiba", model: "8.2Q GR-RT303WE-PMTH", amount: 1, price: "7,590฿" },
        { name: "Microwave Toshiba", model: "MW3-EM20PE(BK) 20L 800W", amount: 1, price: "2,590฿" },
        { name: "Double-decker chair IKEA", model: "Bekvam", amount: 1, price: "590฿" },
      ],
    },
    {
      room: "ห้องนอนใหญ่",
      items: [
        { name: "Air conditioner", model: "18000BTU", amount: 1, price: "26,900฿" },
        { name: "Water heater Toshiba", model: "TWH-38WTH 3800W", amount: 1, price: "2,190฿" },
        { name: "Storage cabinet IKEA", model: "Malm", amount: 1, price: "5,490฿" },
        { name: "6 feet bed IKEA", model: "Askvoll", amount: 1, price: "7,990฿" },
        { name: "6 feet mattress SleepHappy", model: "Atlantis V2", amount: 1, price: "7,890฿" },
        { name: "Bedside table IKEA", model: "Skruvby", amount: 2, price: "1,580฿" },
        { name: "Wardrobe SB Furniture", model: "Wardrobe Plus", amount: 1, price: "16,000฿" },
      ],
    },
    {
      room: "ห้องนอนเล็ก",
      items: [
        { name: "Air conditioner", model: "12000BTU 38TVEA013A/42TVEA01A3", amount: 1, price: "15,900฿" },
        { name: "Water heater Toshiba", model: "TWH-38WTH 3800W", amount: 1, price: "2,190฿" },
        { name: "5 feet bed Index", model: "Vivid", amount: 1, price: "7,990฿" },
        { name: "5 feet mattress SleepHappy", model: "Atlantis V2", amount: 1, price: "8,590฿" },
        { name: "Wardrobe Index", model: "Rome", amount: 1, price: "11,990฿" },
      ],
    },
    {
      room: "อื่นๆ",
      items: [
        { name: "กุญแจบ้าน", model: "หน้าบ้าน หลังบ้าน ห้องนอนใหญ่ ห้องนอนเล็ก", amount: 4, price: "600฿" },
        { name: "รีโมทเข้าหมู่บ้าน", model: "-", amount: 1, price: "1,000฿" },
        { name: "บัตรฟิตเนส", model: "-", amount: 1, price: "500฿" },
      ],
    },
  ];

  const ASSET_ROOMS_EN = [
    {
      room: "Living Room",
      items: ASSET_ROOMS_TH[0].items,
    },
    {
      room: "Kitchen Room",
      items: ASSET_ROOMS_TH[1].items,
    },
    {
      room: "Master Bedroom",
      items: ASSET_ROOMS_TH[2].items,
    },
    {
      room: "Small Bedroom",
      items: ASSET_ROOMS_TH[3].items,
    },
    {
      room: "Other",
      items: [
        { name: "Door key", model: "Front, back, master bedroom, small bedroom", amount: 4, price: "600฿" },
        { name: "Village gate remote", model: "-", amount: 1, price: "1,000฿" },
        { name: "Fitness key card", model: "-", amount: 1, price: "500฿" },
      ],
    },
  ];

  const DATA = {
    photos: PHOTOS,
    heroBg: PHOTO_BASE + "house-hero.jpg",

    th: {
      langLabel: "TH",
      brand: "Anya",
      village: "Anya บางนา–รามคำแหง 2",
      nav: {
        gallery: "รูปบ้าน",
        details: "รายละเอียด",
        living: "คู่มือ",
        contacts: "ติดต่อ",
      },
      hero: {
        eyebrow: "ยินดีต้อนรับสู่บ้านใหม่ของคุณ",
        title: "สวัสดี ยินดีต้อนรับสู่ Anya",
        sub: "บ้านที่ Anya บางนา–รามคำแหง 2 — ดีใจที่คุณมาเป็นส่วนหนึ่งของที่นี่",
        body: "ทุกอย่างที่คุณต้องรู้รวมไว้ในหน้านี้แล้ว ทั้งรูปบ้านทั้งหมด ที่อยู่และแผนที่ คู่มือการอยู่อาศัยในหมู่บ้าน และเบอร์ติดต่อสำคัญ",
        ctaPrimary: "ดูรูปบ้าน",
        ctaSecondary: "ดูแผนที่",
      },
      gallery: {
        eyebrow: "แกลเลอรี",
        title: "รูปบ้านทั้งหมด",
        sub: "ภาพถ่ายจริงทุกมุมของตัวบ้าน แตะที่รูปเพื่อดูขนาดใหญ่",
        count: (n) => `${n} รูป`,
        viewAll: "ดูรูปทั้งหมด",
        showLess: "ย่อกลับ",
        of: "จาก",
      },
      details: {
        eyebrow: "รายละเอียดบ้าน",
        title: "ข้อมูลตัวบ้าน",
        sub: "สเปกและทำเลของบ้านเช่าหลังนี้",
        specs: [
          { label: "ประเภท", value: "บ้านแฝด 2 ชั้น แบบ Eva", icon: "home" },
          { label: "พื้นที่ใช้สอย", value: "146 ตร.ม.", icon: "ruler" },
          { label: "ขนาดที่ดิน", value: "41 ตร.วา", icon: "land" },
          { label: "ห้องนอน", value: "3 ห้องนอน", icon: "bed" },
          { label: "ห้องน้ำ", value: "2 ห้องน้ำ", icon: "bath" },
          { label: "สิ่งอำนวยความสะดวก", value: "ฟิตเนส · สระน้ำ · เลี้ยงสัตว์ได้", icon: "car" },
        ],
        addressLabel: "ที่อยู่",
        address: "36/255 ซอยรามคำแหง 2\nแขวงดอกไม้ เขตประเวศ\nกรุงเทพฯ 10250",
        mapLabel: "ตำแหน่งบน Google Maps",
        mapButton: "เปิดใน Google Maps",
        mapUrl: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
        mapNote: "แตะปุ่มเพื่อนำทางไปยังบ้าน",
        assetHeading: "รายการทรัพย์สิน",
        assetColItem: "รายการ",
        assetColModel: "รุ่น",
        assetColQty: "จำนวน",
        assetColPrice: "ราคา",
        assetRooms: ASSET_ROOMS_TH,
      },
      living: {
        eyebrow: "การอยู่อาศัยร่วมกัน",
        title: "คู่มือการอยู่อาศัย",
        sub: "ข้อมูลเบื้องต้นที่ช่วยให้การอยู่ในหมู่บ้านราบรื่นและเป็นมิตรกับเพื่อนบ้าน",
        cards: [
          {
            icon: "trash",
            title: "บริการในหมู่บ้าน",
            items: [
              { k: "วันเก็บขยะ", v: "จันทร์ / พุธ / ศุกร์ (เช้า)" },
              { k: "ขยะชิ้นใหญ่", v: "ติดต่อส่วนกลางล่วงหน้า" },
              { k: "แจ้งซ่อมส่วนกลาง", v: "ติดต่อนิติบุคคลหรือเจ้าหน้าที่หมู่บ้าน" },
              { k: "รปภ.", v: "ตลอด 24 ชั่วโมง" },
            ],
          },
          {
            icon: "people",
            title: "มารยาทการอยู่ร่วมกัน",
            items: [
              { k: "จอดรถ", v: "จอดในพื้นที่บ้านของตนเอง ไม่ขวางหน้าบ้านผู้อื่น" },
              { k: "ขยะสด", v: "งดทิ้งขยะสดนอกถัง ป้องกันกลิ่นและสัตว์รบกวน" },
              { k: "เสียง", v: "ดูแลระดับเสียงในช่วงกลางคืน" },
              { k: "สัตว์เลี้ยง", v: "รักษาความสะอาดและไม่รบกวนพื้นที่ส่วนรวม" },
            ],
          },
          {
            icon: "check",
            title: "เช็กลิสต์ก่อนเข้าอยู่",
            items: [
              { k: "กุญแจ", v: "รับกุญแจ รีโมต และคีย์การ์ดฟิตเนส" },
              { k: "มิเตอร์", v: "บันทึกมิเตอร์น้ำและไฟวันเข้าอยู่" },
              { k: "ตรวจสภาพ", v: "แจ้งปัญหาที่พบในบ้านให้เจ้าของทราบโดยเร็ว" },
              { k: "Wi-Fi", v: "ติดต่อ AIS เพื่อย้ายหรือติดตั้งใหม่" },
            ],
          },
        ],
        inventory: {
          title: "ทรัพย์สินในสัญญา",
          sub: "รายการที่ผู้เช่าต้องดูแลและรับผิดชอบตามสัญญาเช่า",
          items: [
            "แอร์ 3 เครื่อง (ห้องนั่งเล่น, ห้องนอนใหญ่, ห้องนอนเล็ก)",
            "เครื่องทำน้ำอุ่น 2 เครื่อง",
            "เครื่องซักผ้า-อบผ้า Toshiba",
            "ตู้เย็น + ไมโครเวฟ Toshiba",
            "โทรทัศน์ Toshiba 65\" + Soundbar",
            "เฟอร์นิเจอร์ครบชุด (โซฟา โต๊ะ เตียง ตู้เสื้อผ้า)",
            "กุญแจบ้าน 4 ชุด",
            "รีโมทเข้าหมู่บ้าน + คีย์การ์ดฟิตเนส",
          ],
        },
      },
      contacts: {
        eyebrow: "เหตุฉุกเฉินและการช่วยเหลือ",
        title: "เบอร์ติดต่อสำคัญ",
        sub: "บันทึกเบอร์เหล่านี้ไว้ เผื่อต้องใช้ยามจำเป็น",
        groups: [
          {
            label: "เจ้าของบ้าน",
            items: [
              { name: "Teerachai Poldejparinya", phone: "064-241-7555", role: "เรื่องบ้าน / สัญญา" },
            ],
          },
          {
            label: "หมู่บ้าน",
            items: [
              { name: "รปภ. ประจำหมู่บ้าน", phone: "080-554-6606", role: "24 ชม." },
              { name: "นิติบุคคลหมู่บ้าน", phone: "091-050-2046", role: "09:00–18:00" },
            ],
          },
          {
            label: "บริการ",
            items: [
              { name: "ช่างสวน K. Bubpha", phone: "092-289-1957", role: "นัดล่วงหน้า" },
              { name: "แก๊ส Choktawee Ram2", phone: "097-162-6295", role: "08:00–19:00" },
              { name: "AIS อินเทอร์เน็ต", phone: "1175", role: "24 ชม." },
              { name: "การไฟฟ้า MEA", phone: "1130", role: "ไฟฟ้าขัดข้อง" },
              { name: "การประปา MWA", phone: "1125", role: "น้ำประปา" },
            ],
          },
          {
            label: "ฉุกเฉิน",
            items: [
              { name: "ตำรวจ", phone: "191", role: "เหตุด่วนเหตุร้าย" },
              { name: "ดับเพลิง", phone: "199", role: "ไฟไหม้" },
              { name: "การแพทย์ฉุกเฉิน", phone: "1669", role: "รถพยาบาล" },
            ],
          },
        ],
        callLabel: "โทร",
      },
      footer: {
        thanks: "ขอบคุณที่แวะชมบ้านหลังนี้ หวังว่าจะรู้สึกอบอุ่นและเป็นบ้านที่น่าอยู่",
        top: "กลับขึ้นด้านบน",
      },
    },

    en: {
      langLabel: "EN",
      brand: "Anya",
      village: "Anya Bangna–Ramkhamhaeng 2",
      nav: {
        gallery: "Gallery",
        details: "Details",
        living: "Guide",
        contacts: "Contacts",
      },
      hero: {
        eyebrow: "Welcome to your new home",
        title: "Hello, welcome to Anya",
        sub: "Your home at Anya Bangna–Ramkhamhaeng 2 — we're so glad you're here.",
        body: "Everything you need is on this page — all house photos, the address & map, the living guide for our village, and the key contacts.",
        ctaPrimary: "View photos",
        ctaSecondary: "Open map",
      },
      gallery: {
        eyebrow: "Gallery",
        title: "All house photos",
        sub: "Real photos of every corner of the house. Tap any photo to view it larger.",
        count: (n) => `${n} photos`,
        viewAll: "View all photos",
        showLess: "Show less",
        of: "of",
      },
      details: {
        eyebrow: "House details",
        title: "About the house",
        sub: "Specs and location of this rental home.",
        specs: [
          { label: "Type", value: "Semi-detached house (Eva model)", icon: "home" },
          { label: "Living area", value: "146 sq.m.", icon: "ruler" },
          { label: "Land size", value: "41 sq.wah", icon: "land" },
          { label: "Bedrooms", value: "3 bedrooms", icon: "bed" },
          { label: "Bathrooms", value: "2 bathrooms", icon: "bath" },
          { label: "Facilities", value: "Fitness · Pool · Pet-friendly", icon: "car" },
        ],
        addressLabel: "Address",
        address: "36/255 Soi Ramkhamhaeng 2\nDok Mai, Prawet\nBangkok 10250",
        mapLabel: "Location on Google Maps",
        mapButton: "Open in Google Maps",
        mapUrl: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
        mapNote: "Tap the button to navigate to the house",
        assetHeading: "Asset List",
        assetColItem: "Item",
        assetColModel: "Model",
        assetColQty: "Qty",
        assetColPrice: "Price",
        assetRooms: ASSET_ROOMS_EN,
      },
      living: {
        eyebrow: "Living together",
        title: "Living guide",
        sub: "A few essentials to help life in the village run smoothly and stay friendly with the neighbors.",
        cards: [
          {
            icon: "trash",
            title: "Neighborhood services",
            items: [
              { k: "Garbage pickup", v: "Mon / Wed / Fri (morning)" },
              { k: "Large item disposal", v: "Contact common area office in advance" },
              { k: "Common area repairs", v: "Contact the juristic office or village staff" },
              { k: "Security", v: "24 hours" },
            ],
          },
          {
            icon: "people",
            title: "Living with others",
            items: [
              { k: "Parking", v: "Park within your own space, don't block neighbors" },
              { k: "Food waste", v: "No wet waste outside the bin to avoid pests" },
              { k: "Noise", v: "Keep noise low at night for a peaceful neighborhood" },
              { k: "Pets", v: "Maintain cleanliness and respect shared spaces" },
            ],
          },
          {
            icon: "check",
            title: "Move-in checklist",
            items: [
              { k: "Keys", v: "Receive house keys, remotes and fitness key card" },
              { k: "Meters", v: "Photograph water & electric meters on day one" },
              { k: "Inspection", v: "Report any issues to the owner as soon as possible" },
              { k: "Wi-Fi", v: "Contact AIS to move or install internet" },
            ],
          },
        ],
        inventory: {
          title: "Property in the contract",
          sub: "Items the tenant is responsible for caring for under the lease.",
          items: [
            "3 air conditioners (living room, master & small bedroom)",
            "2 water heaters",
            "Toshiba washer-dryer",
            "Toshiba refrigerator + microwave",
            '65" Toshiba TV + Soundbar',
            "Full furniture set (sofa, tables, beds, wardrobes)",
            "4 sets of house keys",
            "Village gate remote + fitness key card",
          ],
        },
      },
      contacts: {
        eyebrow: "Emergency & support",
        title: "Important contacts",
        sub: "Save these numbers in case you need them.",
        groups: [
          {
            label: "Owner",
            items: [
              { name: "Teerachai Poldejparinya", phone: "064-241-7555", role: "House / lease" },
            ],
          },
          {
            label: "Village",
            items: [
              { name: "Security guard", phone: "080-554-6606", role: "24 hrs" },
              { name: "Village juristic office", phone: "091-050-2046", role: "09:00–18:00" },
            ],
          },
          {
            label: "Services",
            items: [
              { name: "Garden caretaker (K. Bubpha)", phone: "092-289-1957", role: "By appointment" },
              { name: "Gas shop (Choktawee Ram2)", phone: "097-162-6295", role: "08:00–19:00" },
              { name: "AIS Internet", phone: "1175", role: "24 hrs" },
              { name: "Electricity (MEA)", phone: "1130", role: "Power outage" },
              { name: "Water authority (MWA)", phone: "1125", role: "Water supply" },
            ],
          },
          {
            label: "Emergency",
            items: [
              { name: "Police", phone: "191", role: "Emergency" },
              { name: "Fire", phone: "199", role: "Fire" },
              { name: "Medical emergency", phone: "1669", role: "Ambulance" },
            ],
          },
        ],
        callLabel: "Call",
      },
      footer: {
        thanks: "Thank you for viewing this home. We hope it feels warm, calm, and welcoming.",
        top: "Back to top",
      },
    },
  };

  window.ANYA_DATA = DATA;
})();
