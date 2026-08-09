// ==========================================================
// 📝 峇里島行程資料檔（只需要編輯這個檔案！）
// ==========================================================
//
// ── 每個行程卡片（event）可用的欄位 ──────────────────────
//   time:     "10:20" 或 "Flexible Schedule"
//   tag:      "flight" ✈️交通 | "hotel" 🏠住宿 | "food" 🍽️餐飲
//             "shop" 🛍️購物  | "exp" ⭐體驗
//   title:    "地點名稱"
//   duration: "⚓ 預計停留 1h 30m"（可省略）
//   hours:    "09:00 - 22:00"（營業時間，可省略）
//   price:    "50,000 IDR +"（可省略）
//   address:  "地址"（可省略）
//   mapUrl:   "Google Maps 連結"（可省略）
//
//   ⭐ 圖片（可放多張！會變成可左右滑動的相簿）：
//   images: [
//     "photo1.jpg",                                  ← 純檔名也可以
//     { src: "photo2.jpg", caption: "圖片說明文字" },  ← 想加說明就用這種寫法
//   ],
//
//   ⭐ 注意事項（一行一項，不用再寫 <ul><li> 了！）：
//   notes: [
//     "第一點",
//     "第二點，想加粗可以用 <b>粗體</b>",
//   ],
//
//   ⭐ 卡片之間的車程：
//   transit: { mode: "car"🚗 / "scooter"🛵 / "walk"🚶, time: "車程約 - 1h",
//              docName: "包車憑證", docUrl: "連結" }   ← doc 兩項可省略
//
//   ⭐ 分頭行動時：
//   who: "🧸🐶葶&倫" 或 "🦁嘉嘉"   ← 卡片上會多一個灰色小標籤
//   想插入一條分隔線，就加一筆只有 divider 的資料：
//   { divider: "🔀 晚上分頭行動" },
//
// 欄位順序不重要，不需要的欄位直接整行刪掉即可。
// 小提醒：每個欄位結尾記得加逗號，文字裡如果要用雙引號請改用「」。
// ==========================================================

const itineraryData = {

  // ─────────────── Day 1 ───────────────
  1: {
    tabName: "Day 1",
    dateHeader: "9/11 (五) 📍Canggu",
    events: [
      {
        time: "10:20",
        tag: "flight",
        title: "抵達 - 峇里島機場(DPS)",
        duration: "⚓ 預計停留 1h 30m",
        address: "Ngurah Rai International Airport",
        mapUrl: "https://maps.app.goo.gl/pYdbEAWAQ3MrYsuF7",
        notes: [
          "入境手續預留 1.5h",
          "請先換少許印尼盾 IDR",
        ],
        transit: { mode: "car", time: "車程約 - 1h", docName: "包車憑證", docUrl: "#" },
      },
      {
        time: "12:50",
        tag: "hotel",
        title: "Jiva Jules by RE|VIVE (left luggage)",
        duration: "⚓ 預計停留 25m",
        hours: "Check-in 15:00 | Check-out 12:00",
        address: "Gg. Klp. Gading No.4, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/JMtF1Qp1w2cJv6vK7",
        notes: [
          "含早餐",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m" },
      },
      {
        time: "13:30",
        tag: "food",
        title: "Babi Guling Men Lari",
        duration: "⚓ 預計停留 1h 30m",
        images: ["BabiGulingMenLari.jpg"],
        hours: "09:00 - 22:00",
        price: "50,000 IDR +",
        address: "Jl. Raya Canggu, Munggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/2omiunGjLM1Ys1gJ6",
        notes: [
          "可以刷卡、口味偏辣",
          "推薦烤豬肉飯(Babi Guling)",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m (視逛街地點)" },
      },
      {
        time: "Flexible Schedule",
        tag: "shop",
        title: "Jl. Pantai Pererenan",
        duration: "⚓ 預計停留 2h 30m",
        // ⭐ 多張圖片示範：每間店一張照片＋說明
        images: [
          { src: "EttoreGelatoPererenan.jpg", caption: "Ettore Gelato｜最推開心果、草莓起司蛋糕" },
          // { src: "BeigeStore.jpg", caption: "Beige Store｜價格合理" },
          // { src: "MuseStore.jpg", caption: "Múse store｜價格較貴、注意品質" },
        ],
        address: "Jl. Pantai Pererenan",
        mapUrl: "https://maps.app.goo.gl/PGhXA4XRtF9v3sn16",
        notes: [
          "整條街有許多可以逛的地方",
          "<b>飲食：</b><br>- Ettore Gelato Pererenan：可以試吃，最推開心果、草莓起司蛋糕、榛果",
          "<b>服飾店：</b><br>- Beige Store：價格合理<br>- Múse store. Pererenan：價格較貴、注意品質<br>- Lingery-Nina des Criquets：內衣、睡衣類",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m (視逛街地點)" },
      },
      {
        time: "18:00",
        tag: "food",
        title: "Santanera",
        duration: "⚓ 預計停留 2h",
        images: ["Santanera.jpg"],
        hours: "12:00 - 00:00",
        price: "250,000 IDR +",
        address: "Jl. Tanah Barak No.55-57, Canggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/zuk9adqEmvSLPdc66",
        notes: [
          "<b>前菜與小點(Snacks & Appetizers)</b><br>- 木烤小魷魚(Woodfired Baby Squid)<br>- 黃鰭鮪魚與鮭魚卵塔(Yellowfin Tuna & Salmon Roe Tartelette)<br>- 馬鈴薯千層(Potato Mille Feuille)<br>- 油甘魚刺身生醃(Hamachi Ceviche)",
          "<b>經典海鮮與主菜(Seafood & Mains)</b><br>- 炭烤章魚(Char-Grilled Octopus)<br>- 熟成鴨胸(Dry Aged Duck)、烤豬戰斧/帶骨豬排 (Kurobuta Pork Chop)",
          "<b>甜點推薦(Desserts)</b><br>- 百香果雪酪 (Passion Fruit Sorbet)",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m" },
      },
      {
        time: "Flexible Schedule",
        tag: "hotel",
        title: "Jiva Jules by RE|VIVE",
        duration: "🌙 Good Night",
        images: ["Jiva Jules by REVIVE.jpg"],
        hours: "Check-in 15:00 | Check-out 12:00",
        address: "Gg. Klp. Gading No.4, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/JMtF1Qp1w2cJv6vK7",
        notes: [
          "隔天早上有皮拉提斯課程，請早睡！",
        ],
      },
    ],
  },

  // ─────────────── Day 2 ───────────────
  2: {
    tabName: "Day 2",
    dateHeader: "9/12 (六) 📍Canggu",
    events: [
      {
        time: "10:00",
        tag: "exp",
        title: "Nala Pilates",
        duration: "⚓ 預計停留 1h",
        hours: "Book the 10:00 class.",
        address: "Teratai Promenade, Jl. Shortcut Teratai Batu Bolong Shop P2",
        mapUrl: "https://maps.app.goo.gl/eE8sYTNmagoyVRgx7",
        notes: [
          "預約10:00課程，3位。",
          "請著寬鬆或瑜珈衣服，並將頭髮綁起。",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m" },
      },
      {
        time: "11:15",
        tag: "food",
        title: "BOSSMAN Burgers Canggu",
        duration: "⚓ 預計停留 1h 30m",
        images: ["bossman.jpg"],
        hours: "11:00 – 05:00",
        price: "150,000 IDR +",
        address: "Jl. Pantai Batu Bolong No.69",
        mapUrl: "https://maps.app.goo.gl/dffxT2kK3mKNcTUp8",
        notes: [
          "漢堡份量大、肉汁飽滿。",
          "必點：漢堡、松露薯條",
        ],
      },
      {
        time: "12:45",
        tag: "shop",
        title: "Love Anchor Concept Store",
        duration: "⚓ 預計停留 45m",
        images: ["LoveAnchorConceptStore.jpg"],
        hours: "08:00 – 22:00",
        address: "Jl. Pantai Batu Bolong No.56 Unit B",
        mapUrl: "https://maps.app.goo.gl/mJAS4sZAexWf5m4D7",
        notes: [
          "主要賣紀念品、飾品、衣物，重複性稍高且通常沒標價",
          "殺價建議從3-5折開始砍，概念店通常不二價",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m" },
      },
      {
        time: "13:40",
        tag: "shop",
        title: "Gourmet Market Echo Beach by Pepito",
        duration: "⚓ 預計停留 1h",
        hours: "08:00 – 22:00",
        address: "Jl. Munduk Catu No.94, Canggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/fwZ6bvGXrNDjRX499",
        notes: [
          "零食伴手禮",
          "推薦必買：",
        ],
        transit: { mode: "scooter", time: "車程約 - 15m" },
      },
      {
        time: "14:40",
        tag: "hotel",
        title: "Jiva Jules by RE|VIVE (take a break and makeup)",
        duration: "⚓ 預計停留 1h",
        address: "Gg. Klp. Gading No.4, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/JMtF1Qp1w2cJv6vK7",
        notes: [
          "🧸🐶葶&倫需整理行李轉換飯店",
          "機車歸還",
        ],
        transit: { mode: "car", time: "車程約 - 40m" },
      },
      {
        time: "15:55",
        tag: "exp",
        title: "Pura Taman Ayun 塔曼阿尤寺",
        duration: "⚓ 預計停留 1h 00m",
        hours: "08:00 – 18:15",
        price: "30,000 IDR",
        address: "Jl. Ayodya No.10, Mengwi, Kec. Mengwi, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/LxBV5ihsTbZrrUbw5",
        notes: [
          "門票包含參觀一個小型展覽，展出繪畫和其他文物。",
        ],
        transit: { mode: "car", time: "車程約 - 40m" },
      },
      // ⭐ 晚上開始分頭行動：卡片用 who 標籤標明誰去哪
      {
        divider: "🔀 晚上分頭行動",
      },
      {
        time: "18:00",
        tag: "hotel",
        who: "🧸🐶葶&倫",
        title: "lodgeinthewoods (Check-in & 晚餐)",
        duration: "🌙 Good Night",
        address: "Kaba-Kaba, Kediri, Tabanan Regency",
        mapUrl: "https://maps.app.goo.gl/jp8yJW32j5D8TE3LA",        
        notes: [
          "晚餐直接在住宿內享用",
          "記得先跟住宿確認晚餐供應時間＆是否需預訂",
        ],
      },
      {
        time: "17:40",
        tag: "food",
        who: "🦁嘉嘉",
        title: "LOVA CAFE",
        duration: "⚓ 預計停留 1h 30m",
        hours: "08:00 – 23:00",
        address: "Gg. Strawberry, Tibubeneng, Kec. Kuta Utara",
        mapUrl: "https://maps.app.goo.gl/4AfvisY4vsML1UAn8",
        notes: [
          "從 Jiva Jules <b>走路約 3 分鐘</b>就到，不用擔心迷路！",
          "義式料理，推薦海鮮義大利麵，也有調酒和稻田景觀",
        ],
        transit: { mode: "walk", time: "走路約 - 3m 回飯店" },
      },
      {
        time: "Flexible Schedule",
        tag: "hotel",
        who: "🦁嘉嘉",
        title: "Jiva Jules by RE|VIVE",
        duration: "🌙 Good Night",
        address: "Gg. Klp. Gading No.4, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/JMtF1Qp1w2cJv6vK7",
      },
    ],
  },

  // ─────────────── Day 3 ───────────────
  3: {
    tabName: "Day 3",
    dateHeader: "9/13 (日) 📍Kintamani",
    events: [
      {
        time: "10:00",
        tag: "shop",
        title: "La Brisa Sunday Market",
        duration: "⚓ 預計停留 2h",
        hours: "星期日 10:00 – 16:00",
        address: "Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/Q4kkfkU7SbKPGqKR9",
        notes: [
          "一定要帶現金",
          "價格比較高，記得殺價",
        ],
        transit: { mode: "car", time: "車程約 - 20m" },
      },
      {
        time: "12:00",
        tag: "food",
        title: "Papa Lee's Taiwan noodle & Dumplings",
        duration: "⚓ 預計停留 1h 30m",
        images: ["PapaLee.jpg"],
        hours: "11:30 – 03:30",
        address: "Jl. Pantai Batu Bolong No.168, Canggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/EcQEAEr1bN28iv64A",
        notes: [
          "推薦：牛肉麵、小籠包、炸雞排",
        ],
        transit: { mode: "car", time: "車程約 - 3h" },
      },
      {
        time: "16:30",
        tag: "hotel",
        title: "Stone Ridge Kintamani",
        duration: "⚓ 預計停留 2h",
        images: ["StoneRidgeKintamani.jpg"],
        address: "Bukit Payang, Kintamani",
        mapUrl: "https://maps.app.goo.gl/6f5QPUmgrjKUQGQ76",
        notes: [
          "休息一下! 享受飯店設施，也可以付費到房按摩",
          "記得預定隔日Jeep行程，$1,500K/3 Person(Same Jeep) 或 $800K/2 Person，這個金額是否含Hot Spring門票?",
        ],
      },
      {
        time: "18:30",
        tag: "food",
        title: "Black Lava Cafe",
        duration: "⚓ 預計停留 2h",
        hours: "7:00 – 22:00",
        address: "Jalan Bukit Payang No.88, Kintamani, Kec. Kintamani",
        mapUrl: "https://maps.app.goo.gl/HMAEYwxGJMwHKtUM8",
        notes: [
          "可以選BBQ 或 火鍋",
          "泳池可以下水，要下水記得帶泳衣",
        ],
      },
      {
        time: "Flexible Schedule",
        tag: "hotel",
        title: "Stone Ridge Kintamani",
        duration: "🌙 Good Night",
        images: ["StoneRidgeKintamani.jpg"],
        address: "Bukit Payang, Kintamani",
        mapUrl: "https://maps.app.goo.gl/6f5QPUmgrjKUQGQ76",
        notes: [
          "早點睡! 明天凌晨4點要搭Jeep看日出",
        ],
      },
    ],
  },

  // ─────────────── Day 4 ───────────────
  4: {
    tabName: "Day 4",
    dateHeader: "9/14 (一) 📍Ubud",
    events: [
      {
        time: "4:00",
        tag: "exp",
        title: "Jeep tour for Sunrise",
        duration: "⚓ 預計時長 4h",
        hours: "4:00 – 8:00",
        notes: [
          "此行程須在Check-In時預定。1.500.000/1-3 person",
          "行程：Black Lava, Sunrise Point, Hot Spring",
          "半夜可能會冷，帶小外套。去溫泉的話要帶泳衣&換洗衣物",
        ],
      },
      {
        time: "8:00",
        tag: "hotel",
        title: "Stone Ridge Kintamani (Check-out)",
        duration: "⚓ 預計停留 2h",
        address: "Bukit Payang, Kintamani",
        mapUrl: "https://maps.app.goo.gl/6f5QPUmgrjKUQGQ76",
        transit: { mode: "car", time: "車程約 - 2h" },
      },
      {
        time: "12:00",
        tag: "food",
        title: "Ivy Cafe",
        duration: "⚓ 預計停留 2h",
        hours: "7:00 – 23:00",
        price: "75,000 ~ 200,000 IDR",
        address: "Jl Pengosenkan Jl. Raya Pengosekan Ubud, Ubud",
        mapUrl: "https://maps.app.goo.gl/sFinQcVXNUJ6mkzw5",
        notes: [
          "推薦：Smoothie Bowls, Chicken Parm, Pizza burrata, Egg Benedict",
        ],
        transit: { mode: "car", time: "車程約 - 10m" },
      },
      {
        time: "14:10",
        tag: "hotel",
        title: "Rumah Weda (left luggage)",
        duration: "⚓ 預計停留 30m",
        address: "Ubud",
        transit: { mode: "car", time: "車程約 - 10m" },
      },
      {
        time: "14:40",
        tag: "shop",
        title: "Ubud Art Market 烏布傳統藝術市場",
        duration: "⚓ 預計停留 3h",
        address: "Jl. Raya Ubud No.35, Ubud",
        notes: [
          "記得殺價，帶現金",
        ],
        transit: { mode: "car", time: "車程約 - 10m" },
      },
      {
        time: "17:50",
        tag: "food",
        title: "L'Osteria Pizza e Cucina Ubud",
        duration: "⚓ 預計停留 2h",
        address: "Ubud",
        transit: { mode: "car", time: "車程約 - 10m" },
      },
      {
        time: "Flexible Schedule",
        tag: "hotel",
        title: "Rumah Weda",
        duration: "🌙 Good Night",
        address: "Ubud",
        notes: [
          "明天一早搭船去 Nusa Penida，行李先整理好",
        ],
      },
    ],
  },

  // ─────────────── Day 5 ───────────────
  5: {
    tabName: "Day 5",
    dateHeader: "9/15 (二) 📍Nusa Penida",
    events: [
      {
        time: "7:00",
        tag: "hotel",
        title: "Rumah Weda (早餐 & Check-out)",
        duration: "⚓ 預計停留 15m",
        transit: { mode: "car", time: "車程約 - 1h 30m｜前往搭船" },
      },
      {
        time: "8:45",
        tag: "flight",
        title: "搭船前往 Nusa Penida",
        duration: "⚓ 航程約 1h 30m",
        notes: [
          "船票：<a href='https://www.klook.com/zh-TW/activity/45954-ferry-ticket-nusa-penida/' target='_blank' class='map-link'>Klook 訂票連結</a>",
          "登島後須付入島費",
          "記得先把船票憑證存起來",
        ],
        transit: { mode: "car", time: "車程約 - 50m" },
      },
      {
        time: "11:05",
        tag: "exp",
        title: "Tembeling Beach and Forest",
        duration: "⚓ 預計停留 2h",
        transit: { mode: "car", time: "車程約 - 15m" },
      },
      {
        time: "13:20",
        tag: "food",
        title: "午餐（店家待定）",
        duration: "⚓ 預計停留 1h 30m",
      },
      {
        time: "14:50",
        tag: "exp",
        title: "Diamond Beach",
        duration: "⚓ 預計停留 2h",
      },
      {
        time: "Flexible Schedule",
        tag: "hotel",
        title: "Kaje Cottage & Restaurant (Check-in)",
      },
      {
        time: "Flexible Schedule",
        tag: "food",
        title: "Eastside Penida Kitchen & Bar",
        duration: "⚓ 晚餐",
      },
      {
        time: "Flexible Schedule",
        tag: "hotel",
        title: "Kaje Cottage & Restaurant",
        duration: "🌙 Good Night",
        notes: [
          "明天早起看日出（Rumah Pohon Tree House）",
        ],
      },
    ],
  },

  // ─────────────── Day 6 ───────────────
  6: {
    tabName: "Day 6",
    dateHeader: "9/16 (三) 📍Uluwatu",
    events: [
      {
        time: "Sunrise",
        tag: "exp",
        title: "Rumah Pohon「Tree House」看日出",
      },
      {
        time: "Flexible Schedule",
        tag: "flight",
        title: "從 Nusa Penida 搭船回本島",
      },
      {
        time: "Flexible Schedule",
        tag: "food",
        title: "Alma Tapas Bar - Uluwatu",
        duration: "⚓ 午餐",
        notes: [
          "注意營業時間",
        ],
      },
      {
        time: "Flexible Schedule",
        tag: "exp",
        title: "Blue Point Beach",
      },
      {
        time: "Flexible Schedule",
        tag: "exp",
        title: "Thomas Beach",
      },
      {
        time: "Flexible Schedule",
        tag: "exp",
        title: "Karma Spa",
      },
      {
        time: "Flexible Schedule",
        tag: "food",
        title: "Bartolo French/Italian Restaurant Uluwatu Bali",
        duration: "⚓ 晚餐",
        transit: { mode: "car", time: "包車前往機場 - 約 2h" },
      },
      {
        time: "23:05",
        tag: "flight",
        title: "抵達機場，辦理出境手續",
      },
    ],
  },

  // ─────────────── Day 7 ───────────────
  7: {
    tabName: "Day 7",
    dateHeader: "9/17 (四) ✈️ 回程",
    events: [
      {
        time: "1:05",
        tag: "flight",
        title: "離境 - 峇里島機場(DPS)",
      },
      {
        time: "3:05",
        tag: "flight",
        title: "抵達 - 新加坡樟宜機場(SIN)",
        transit: { mode: "car", time: "轉機空檔" },
      },
      {
        time: "Flexible Schedule",
        tag: "food",
        title: "早餐｜機場吃",
      },
      {
        time: "5:31",
        tag: "flight",
        title: "搭地鐵往市區",
      },
    ],
  },
};
