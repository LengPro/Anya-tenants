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
        { name: "Electric stove TechnoPlus+", model: "IHB 2070 DG", amount: 1, price: "15,000฿" },
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

  const ASSET_ROOMS_ZH = [
    { room: "客厅", items: ASSET_ROOMS_TH[0].items },
    { room: "厨房", items: ASSET_ROOMS_TH[1].items },
    { room: "主卧室", items: ASSET_ROOMS_TH[2].items },
    { room: "小卧室", items: ASSET_ROOMS_TH[3].items },
    {
      room: "其他",
      items: [
        { name: "门钥匙", model: "前门、后门、主卧室、小卧室", amount: 4, price: "600฿" },
        { name: "小区门遥控器", model: "-", amount: 1, price: "1,000฿" },
        { name: "健身房门卡", model: "-", amount: 1, price: "500฿" },
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
        ctaPrimary: "คู่มือ",
        ctaSecondary: "ติดต่อ",
        nextEvent: [
          { label: "Event", desc: "ติดตั้งเตาไฟฟ้า", date: "3 ก.ค. 2026" },
          { label: "Event", desc: "ล้างแอร์", date: "10 ธ.ค. 2026" },
        ],
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
        address: "Anya บางนา-รามคำแหง 2\n36/255 ซอยรามคำแหง 2\nแขวงดอกไม้ เขตประเวศ\nกรุงเทพฯ 10250",
        mapLabel: "ตำแหน่งบน Google Maps",
        mapButton: "เปิดใน Google Maps",
        mapUrl: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
        mapNote: "แตะปุ่มเพื่อนำทางไปยังบ้าน",
        assetHeading: "รายการทรัพย์สิน",
        assetColItem: "รายการ",
        assetColModel: "รุ่น",
        assetColQty: "จำนวน",
        assetColPrice: "ราคา",
        assetTotal: (n) => `รวมทั้งหมด ${n} รายการ`,
        assetRooms: ASSET_ROOMS_TH,
      },
      living: {
        eyebrow: "การอยู่อาศัยร่วมกัน",
        title: "คู่มือการอยู่อาศัย",
        sub: "ข้อมูลเบื้องต้นที่ช่วยให้การอยู่ในหมู่บ้านราบรื่นและเป็นมิตรกับเพื่อนบ้าน",
        cards: [
          {
            icon: "trash",
            title: "บริการส่วนกลาง",
            items: [
              { k: "วันเก็บขยะ", v: "จันทร์ / พฤหัสบดี (เช้า)" },
              { k: "ฟิตเนส", v: "06:00–22:00 (ปิดทุกวันจันทร์)" },
              { k: "สระว่ายน้ำ", v: "ผู้ใหญ่ & เด็ก · ยาว 12–15ม.\nลึก 1.25ม. (ผู้ใหญ่) / 0.65ม. (เด็ก)\nอ.–ศ. 10:00–20:00 · ส.–อา. 9:00–20:00\n(ปิดทุกวันจันทร์)" },
            ],
          },
          {
            icon: "people",
            title: "มารยาทการอยู่ร่วมกัน",
            items: [
              { k: "จอดรถ", v: "จอดในพื้นที่บ้านของตนเอง ไม่ขวางหน้าบ้านผู้อื่น" },
              { k: "ขยะสด", v: "งดทิ้งขยะสดนอกถัง ป้องกันกลิ่นและสัตว์รบกวน" },
              { k: "เสียง", v: "ดูแลระดับเสียงในช่วงกลางคืน" },
              { k: "สัตว์เลี้ยง", v: "ใช้สายจูงเมื่อใช้พื้นที่ส่วนกลางและดูแลความสะอาด" },
              { k: "Smoking", v: "สูบบุหรี่นอกบ้านเท่านั้น และระวังกลิ่นรบกวนเพื่อนบ้าน" },
            ],
          },
          {
            icon: "check",
            title: "Stuff guide",
            items: [
              { k: "แอร์ Carrier", v: "เชื่อมต่อ Wi-Fi กับแอพ Carrier โดยกดปุ่ม Mode ค้างไว้" },
              { k: "Wash & Dry Machine", v: "วาวล์น้ำเปิดที่ด้านหลังเครื่อง" },
              { k: "Electric stove", v: "ซ้าย : Induction | ใช้กับอุปกรณ์ที่รองรับ Induction เท่านั้น\nขวา : Ceramic | ใช้ได้กับอุปกรณ์ทั่วไป เช่น หม้อสแตนเลส กะทะ หรือแบบ Induction" },
              { k: "Smoke Detector", v: "อยู่ในห้องครัว ไฟกระพริบสีแดง = Standby" },
              { k: "Joy Life", v: "แอพของโครงการ เพื่อ E-Stamp บัตรจอดรถ" },
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
              { name: "Teerachai (Leng)", phone: "064-241-7555", role: "เรื่องบ้าน / สัญญา" },
            ],
          },
          {
            label: "หมู่บ้าน",
            items: [
              { name: "รปภ. ประจำหมู่บ้าน", phone: "02-125-2256", role: "24 ชม." },
              { name: "นิติบุคคลหมู่บ้าน", phone: "091-050-2046", role: "09:00–18:00" },
              { name: "K. Taworn", phone: "094-991-1589", role: "ผู้จัดการ ฝ่ายปฏิบัติการ" },
              { name: "ผู้จัดการกระต่าย", phone: "062-352-4390", role: "ผู้จัดการ" },
              { name: "หัวหน้าชุดสายตรวจ (กลางวัน)", phone: "063-891-2362", role: "กะกลางวัน" },
              { name: "หัวหน้าชุดสายตรวจ (กลางคืน)", phone: "063-891-2362", role: "กะกลางคืน" },
            ],
          },
          {
            label: "ฉุกเฉิน",
            items: [
              { name: "ตำรวจ", phone: "191", role: "เหตุด่วนเหตุร้าย" },
              { name: "สถานีดับเพลิง", phone: "199", role: "ไฟไหม้" },
              { name: "การแพทย์ฉุกเฉิน", phone: "1669", role: "รถพยาบาล" },
              { name: "ร.พ. สินแพทย์ เทพารักษ์", phone: "02-761-9888", role: "โรงพยาบาล" },
            ],
          },
          {
            label: "บริการ",
            items: [
              { name: "K. Buppha", phone: "092-289-1957", role: "ดูแลสวน" },
              { name: "แก๊ส Choktawee Ram2", phone: "097-162-6295", role: "08:00–19:00" },
              { name: "ช่างบิ๊ก", phone: "082-343-1243", role: "แจ้งซ่อมระบบประปาฉุกเฉิน" },
              { name: "ช่างบิ๊ก", phone: "082-343-1243", role: "ซ่อมไฟฟ้า" },
              { name: "ช่างจิ๋ว", phone: "095-324-2504", role: "ซ่อมไฟฟ้า" },
              { name: "ช่างสอง", phone: "062-664-5559", role: "ซ่อมไฟฟ้า" },
              { name: "ช่างโอ", phone: "064-051-8087", role: "ล้างแอร์" },
              { name: "AIS อินเทอร์เน็ต", phone: "1175", role: "24 ชม." },
              { name: "การไฟฟ้า MEA", phone: "1130", role: "ไฟฟ้าขัดข้อง" },
              { name: "การประปา MWA", phone: "1125", role: "น้ำประปา" },
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
        ctaPrimary: "Guide",
        ctaSecondary: "Contacts",
        nextEvent: [
          { label: "Event", desc: "Electric stove installation", date: "3 Jul 2026" },
          { label: "Event", desc: "AC cleaning", date: "10 Dec 2026" },
        ],
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
        address: "Anya Bangna-Ramkhamhaeng 2\n36/255 Soi Ramkhamhaeng 2\nDok Mai, Prawet district\nBangkok 10250",
        mapLabel: "Location on Google Maps",
        mapButton: "Open in Google Maps",
        mapUrl: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
        mapNote: "Tap the button to navigate to the house",
        assetHeading: "Asset List",
        assetColItem: "Item",
        assetColModel: "Model",
        assetColQty: "Qty",
        assetColPrice: "Price",
        assetTotal: (n) => `Total: ${n} items`,
        assetRooms: ASSET_ROOMS_EN,
      },
      living: {
        eyebrow: "Living together",
        title: "Living guide",
        sub: "A few essentials to help life in the village run smoothly and stay friendly with the neighbors.",
        cards: [
          {
            icon: "trash",
            title: "Property services",
            items: [
              { k: "Garbage pickup", v: "Mon / Thu (morning)" },
              { k: "Fitness", v: "06:00–22:00 (closed Mon)" },
              { k: "Swimming pool", v: "Adult & Kids · 12–15m long\nDepth 1.25m (Adult) / 0.65m (Kids)\nTue–Fri 10:00–20:00 · Sat–Sun 9:00–20:00\n(Closed Mon)" },
            ],
          },
          {
            icon: "people",
            title: "Living with others",
            items: [
              { k: "Parking", v: "Park within your own space, don't block neighbors" },
              { k: "Food waste", v: "No wet waste outside the bin to avoid pests" },
              { k: "Noise", v: "Keep noise low at night for a peaceful neighborhood" },
              { k: "Pets", v: "Keep on a leash in common areas and maintain cleanliness" },
              { k: "Smoking", v: "Outdoors only — be mindful of smoke affecting neighbors" },
            ],
          },
          {
            icon: "check",
            title: "Stuff guide",
            items: [
              { k: "Carrier AC", v: "Connect to Wi-Fi via the Carrier app — hold the Mode button to pair" },
              { k: "Wash & Dry Machine", v: "Water valve is at the back of the machine" },
              { k: "Electric stove", v: "Left: Induction | For induction-compatible cookware only\nRight: Ceramic | Works with general cookware — steel pots, pans, or induction" },
              { k: "Smoke Detector", v: "Located in the kitchen — red blinking light = Standby" },
              { k: "Joy Life", v: "Village app for parking E-Stamp" },
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
              { name: "Teerachai (Leng)", phone: "064-241-7555", role: "House / lease" },
            ],
          },
          {
            label: "Village",
            items: [
              { name: "Security guard", phone: "02-125-2256", role: "24 hrs" },
              { name: "Village juristic office", phone: "091-050-2046", role: "09:00–18:00" },
              { name: "K. Taworn", phone: "094-991-1589", role: "Operations Manager" },
              { name: "Manager Kratai", phone: "062-352-4390", role: "Village Manager" },
              { name: "Patrol Chief (Day)", phone: "063-891-2362", role: "Day shift" },
              { name: "Patrol Chief (Night)", phone: "063-891-2362", role: "Night shift" },
            ],
          },
          {
            label: "Emergency",
            items: [
              { name: "Police", phone: "191", role: "Emergency" },
              { name: "Fire Station", phone: "199", role: "Fire" },
              { name: "Medical emergency", phone: "1669", role: "Ambulance" },
              { name: "Synphaet Theparak Hospital", phone: "02-761-9888", role: "Hospital" },
            ],
          },
          {
            label: "Services",
            items: [
              { name: "K. Buppha", phone: "092-289-1957", role: "Garden caretaker" },
              { name: "Gas shop (Choktawee Ram2)", phone: "097-162-6295", role: "08:00–19:00" },
              { name: "K. Big", phone: "082-343-1243", role: "Emergency plumbing" },
              { name: "K. Big", phone: "082-343-1243", role: "Electrical repair" },
              { name: "K. Jiw", phone: "095-324-2504", role: "Electrical repair" },
              { name: "K. Song", phone: "062-664-5559", role: "Electrical repair" },
              { name: "K. O", phone: "064-051-8087", role: "AC cleaning" },
              { name: "AIS Internet", phone: "1175", role: "24 hrs" },
              { name: "Electricity (MEA)", phone: "1130", role: "Power outage" },
              { name: "Water authority (MWA)", phone: "1125", role: "Water supply" },
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

    zh: {
      langLabel: "ZH",
      brand: "Anya",
      village: "Anya Bangna–Ramkhamhaeng 2",
      nav: {
        gallery: "照片",
        details: "详情",
        living: "指南",
        contacts: "联系",
      },
      hero: {
        eyebrow: "欢迎来到您的新家",
        title: "你好，欢迎来到 Anya",
        sub: "您在 Anya Bangna–Ramkhamhaeng 2 的家 — 很高兴您的到来。",
        body: "您需要的一切都在这页 — 所有房屋照片、地址与地图、小区生活指南以及重要联系方式。",
        ctaPrimary: "指南",
        ctaSecondary: "联系",
        nextEvent: [
          { label: "Event", desc: "安装电磁炉", date: "2026年7月3日" },
          { label: "Event", desc: "清洗空调", date: "2026年12月10日" },
        ],
      },
      gallery: {
        eyebrow: "图库",
        title: "所有房屋照片",
        sub: "房屋每个角落的真实照片，点击任意照片可放大查看。",
        count: (n) => `${n} 张照片`,
        viewAll: "查看全部照片",
        showLess: "收起",
        of: "共",
      },
      details: {
        eyebrow: "房屋详情",
        title: "关于房屋",
        sub: "此出租房的规格与位置。",
        specs: [
          { label: "类型", value: "联排别墅（Eva款）", icon: "home" },
          { label: "使用面积", value: "146 平方米", icon: "ruler" },
          { label: "土地面积", value: "41 平方哇", icon: "land" },
          { label: "卧室", value: "3间卧室", icon: "bed" },
          { label: "浴室", value: "2间浴室", icon: "bath" },
          { label: "设施", value: "健身房 · 泳池 · 可养宠物", icon: "car" },
        ],
        addressLabel: "地址",
        address: "Anya Bangna-Ramkhamhaeng 2\n36/255 Soi Ramkhamhaeng 2\nDok Mai, Prawet区\n曼谷 10250",
        mapLabel: "谷歌地图位置",
        mapButton: "在谷歌地图中打开",
        mapUrl: "https://maps.app.goo.gl/ikcjuk8DuZXbWgGy8",
        mapNote: "点击按钮导航至房屋",
        assetHeading: "资产清单",
        assetColItem: "项目",
        assetColModel: "型号",
        assetColQty: "数量",
        assetColPrice: "价格",
        assetTotal: (n) => `共 ${n} 项`,
        assetRooms: ASSET_ROOMS_ZH,
      },
      living: {
        eyebrow: "共同生活",
        title: "生活指南",
        sub: "帮助在小区中顺利生活并与邻居保持友好关系的基本要点。",
        cards: [
          {
            icon: "trash",
            title: "物业服务",
            items: [
              { k: "垃圾收集", v: "周一 / 周四（早上）" },
              { k: "健身房", v: "06:00–22:00（周一休息）" },
              { k: "游泳池", v: "成人 & 儿童 · 长12–15米\n深1.25米（成人）/ 0.65米（儿童）\n周二至周五 10:00–20:00 · 周六至周日 9:00–20:00\n（周一休息）" },
            ],
          },
          {
            icon: "people",
            title: "与他人共处",
            items: [
              { k: "停车", v: "在自己的停车位停车，不要阻挡邻居" },
              { k: "厨余垃圾", v: "不要将湿垃圾放在垃圾桶外，避免异味和害虫" },
              { k: "噪音", v: "晚上请保持低音量" },
              { k: "宠物", v: "在公共区域须使用牵引绳，并保持清洁" },
              { k: "吸烟", v: "仅限户外吸烟，注意烟味影响邻居" },
            ],
          },
          {
            icon: "check",
            title: "设备使用指南",
            items: [
              { k: "Carrier空调", v: "通过Carrier应用连接Wi-Fi — 长按Mode键配对" },
              { k: "洗烘一体机", v: "水阀位于机器背面" },
              { k: "电磁炉", v: "左: Induction | 仅适用于支持电磁加热的锅具\n右: Ceramic | 适用于一般锅具 — 不锈钢锅、平底锅或电磁锅" },
              { k: "烟雾探测器", v: "位于厨房 — 红灯闪烁 = 待机状态" },
              { k: "Joy Life", v: "小区应用程序，用于停车电子印章" },
            ],
          },
        ],
        inventory: {
          title: "合同中的财产",
          sub: "租户在租约下负责照管的物品。",
          items: [],
        },
      },
      contacts: {
        eyebrow: "紧急联系与支援",
        title: "重要联系方式",
        sub: "请保存这些号码以备不时之需。",
        groups: [
          {
            label: "房东",
            items: [
              { name: "Teerachai (Leng)", phone: "064-241-7555", role: "房屋 / 租约" },
            ],
          },
          {
            label: "小区",
            items: [
              { name: "保安", phone: "02-125-2256", role: "24小时" },
              { name: "小区物业", phone: "091-050-2046", role: "09:00–18:00" },
              { name: "K. Taworn", phone: "094-991-1589", role: "运营经理" },
              { name: "Manager Kratai", phone: "062-352-4390", role: "小区经理" },
              { name: "巡逻队长（白班）", phone: "063-891-2362", role: "白班" },
              { name: "巡逻队长（夜班）", phone: "063-891-2362", role: "夜班" },
            ],
          },
          {
            label: "紧急",
            items: [
              { name: "警察", phone: "191", role: "紧急情况" },
              { name: "消防站", phone: "199", role: "火灾" },
              { name: "急救", phone: "1669", role: "救护车" },
              { name: "Synphaet Theparak Hospital", phone: "02-761-9888", role: "医院" },
            ],
          },
          {
            label: "服务",
            items: [
              { name: "K. Buppha", phone: "092-289-1957", role: "园丁" },
              { name: "Gas shop (Choktawee Ram2)", phone: "097-162-6295", role: "08:00–19:00" },
              { name: "K. Big", phone: "082-343-1243", role: "紧急管道维修" },
              { name: "K. Big", phone: "082-343-1243", role: "电气维修" },
              { name: "K. Jiw", phone: "095-324-2504", role: "电气维修" },
              { name: "K. Song", phone: "062-664-5559", role: "电气维修" },
              { name: "K. O", phone: "064-051-8087", role: "清洗空调" },
              { name: "AIS Internet", phone: "1175", role: "24小时" },
              { name: "Electricity (MEA)", phone: "1130", role: "停电" },
              { name: "Water authority (MWA)", phone: "1125", role: "供水" },
            ],
          },
        ],
        callLabel: "致电",
      },
      footer: {
        thanks: "感谢您参观这个家，希望它让您感到温暖、宁静和舒适。",
        top: "返回顶部",
      },
    },
  };

  window.ANYA_DATA = DATA;
})();
