// ==========================================================
// 📝 峇里島行程資料檔（只需要編輯這個檔案！）
// ==========================================================
//
// ── 每個行程卡片（event）可用的欄位 ──────────────────────
//   time:     "10:20" 或 "Flexible Schedule"
//   tag:      "flight" ✈️交通 | "hotel" 🏠住宿 | "food" 🍽️餐飲 | "ship" 🚢
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
    dateHeader: "9/11 (五) 📍Kuta",
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
        transit: { mode: "car", time: "車程：1 hour, 飯店接駁、大廳舉牌、抵達付費450K" },
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
          "Check-In 時間未到，先寄存行李",
        ],
        transit: { mode: "car", time: "車程：15 min, 使用Gojek叫車" },
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
        transit: { mode: "car", time: "車程：15 min, 使用Gojek叫車" },
      },
      {
        time: "Flexible",
        tag: "shop",
        title: "Jl. Pantai Pererenan",
        duration: "⚓ 預計停留 2h 30m",
        // ⭐ 多張圖片示範：每間店一張照片＋說明
        images: [
          { src: "EttoreGelatoPererenan.jpg", caption: "Ettore Gelato｜最推開心果、草莓起司蛋糕" },
          { src: "Sensatia.jpg", caption: "Balancing Shampoo,Tea Tree & Lemon Facial Cleanser熱賣，Aesop平替" },
          // { src: "MuseStore.jpg", caption: "Múse store｜價格較貴、注意品質" },
        ],
        address: "Jl. Pantai Pererenan",
        mapUrl: "https://maps.app.goo.gl/PGhXA4XRtF9v3sn16",
        notes: [
          "整條街有許多可以逛的地方",
          "<b>飲食：</b><br>- Ettore Gelato Pererenan：可以試吃，最推開心果、草莓起司蛋糕、榛果",
          "<b>服飾店：</b><br>- Beige Store：價格合理<br>- Múse store. Pererenan：價格較貴、注意品質<br>- Lingery-Nina des Criquets：內衣、睡衣類",
        ],
        transit: { mode: "car", time: "：15 min, 使用Gojek叫車" },
      },
      {
        time: "17:45 (有預訂)",
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
          "用餐時間到19:45",
        ],
        transit: { mode: "car", time: "15 min, 使用Gojek叫車" },
      },
      {
        time: "Flexible",
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
    dateHeader: "9/12 (六) 📍Kuta",
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
        transit: { mode: "car", time: "15 min, 使用Gojek叫車" },
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
        transit: { mode: "car", time: "15 min, 使用Gojek叫車" },
      },
      {
        time: "13:40",
        tag: "shop",
        title: "Gourmet Market Echo Beach by Pepito",
        duration: "⚓ 預計停留 1h",
        hours: "08:00 – 22:00",
        address: "Jl. Munduk Catu No.94, Canggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/fwZ6bvGXrNDjRX499",
        images: [
          { src: "supermarket-1.jpg", caption: "Coconut Chip巧克力口味" },
          { src: "supermarket-2.jpg", caption: "Kacang Kapri TARI BALI（蒜香花生）" },
        ],
        notes: [
          "零食伴手禮",
          "推薦必買：Coconut Chip巧克力口味, 蒜香花生",
        ],
        transit: { mode: "car", time: "15 min, 使用Gojek叫車" },
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
        ],
        transit: { mode: "car", time: "40 min, 使用Gojek叫車" },
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
        time: "Flexible",
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
    dateHeader: "9/13 (日) 📍Kuta > Kintamani",
    events: [
      {
        time: "11:00",
        tag: "hotel",
        title: "Jiva Jules by RE|VIVE",
        duration: "⚓ 此為司機接駁點1",
        address: "Gg. Klp. Gading No.4, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/JMtF1Qp1w2cJv6vK7",
        notes: [
          "與司機約定11:00來此地點接🦁嘉嘉，請Check-Out等司機",
        ],
        transit: { mode: "car", time: "車程：30 min," },
      },
      {
        time: "11:30",
        tag: "hotel",
        title: "lodgeinthewoods",
        duration: "⚓ 此為司機接駁點2",
        address: "Kaba-Kaba, Kediri, Tabanan Regency",
        mapUrl: "https://maps.app.goo.gl/jGFCG27aTTBPuAeD9",
        notes: [
          "與司機約定11:30來此地點接🧸🐶葶&倫，請提前Check-Out等司機",
        ],
        transit: { mode: "car", time: "車程：30 min" },
      },
      {
        time: "12:00",
        tag: "shop",
        title: "La Brisa Sunday Market",
        duration: "⚓ 預計停留 2h, 最晚14:15前離開",
        hours: "星期日 10:00 – 16:00",
        address: "Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara, Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/Q4kkfkU7SbKPGqKR9",
        notes: [
          "一定要帶現金",
          "價格比較高，記得殺價",
          "因為黃鵬倫哭腰行程太趕，所以午餐在這邊吃",
        ],
        transit: { mode: "car", time: "車程：2 hours 15 min" },
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
        time: "Flexible",
        tag: "food",
        title: "Black Lava Cafe",
        duration: "⚓ 預計停留 2h",
        hours: "7:00 – 22:00",
        address: "Jalan Bukit Payang No.88, Kintamani, Kec. Kintamani",
        mapUrl: "https://maps.app.goo.gl/HMAEYwxGJMwHKtUM8",
        images: ["BlackLavaCafe.jpg"],
        notes: [
          "可以選BBQ 或 火鍋",
          "泳池可以下水，要下水記得帶泳衣",
        ],
      },
      {
        time: "Flexible",
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
        notes: [
          "11:00 Check-Out",
        ],
        transit: { mode: "car", time: "車程：8 min, 包車開始，費用900K，行程結束時付費"},
      },
      {
        time: "11:10",
        tag: "food",
        title: "Montana Del Cafe",
        duration: "⚓ 預計停留 2h",
        hours: "5:30 – 21:00",
        price: "75K+ IDR",
        address: "Jl. Raya Penelokan No.889, Batur Sel., Kec. Kintamani",
        mapUrl: "https://maps.app.goo.gl/XMG53VdJwM6jVKeg6",
        notes: [
          "推薦：提拉米蘇, 沒有特別哪個必點，普遍好評",
        ],
        transit: { mode: "car", time: "車程：40 min" },
      },
      {
        time: "13:40",
        tag: "exp",
        title: "Tegal alang rice terrace",
        duration: "⚓ 預計停留 1h",
        hours: "8:00 – 18:00",
        price: "門票50K IDR、游泳池120K、飲料另外加錢",
        address: "Jl. Raya Tegallalang, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar",
        mapUrl: "https://maps.app.goo.gl/CtfZ7xTefFQ2T2nw7",
        images: ["TegalAlangRiceTerrace-1.jpg"],
        notes: [
          "推薦：普普通通，當作吃飽飯散步",
        ],
        transit: { mode: "car", time: "車程：30 min" },
      },
      {
        time: "15:00",
        tag: "shop",
        title: "Ubud Art Market 烏布傳統藝術市場",
        duration: "⚓ 預計停留 2h",
        address: "Jl. Raya Ubud No.35, Ubud",
        mapUrl: "https://maps.app.goo.gl/81MamC99Qvdja8br5",
        notes: [
          "記得殺價，帶現金",
          "這本的特色是買一些藤編製品、傳統沙龍布",
        ],
        transit: { mode: "car", time: "車程：2 min, 包車結束，費用900K，付費給司機" },
      },
      {
        time: "17:00",
        tag: "hotel",
        title: "Rumah Weda",
        duration: "⚓ 預計停留 2h",
        address: "No 88x, Jl. Raya, Ubud, Gianyar Regency",
        mapUrl: "https://maps.app.goo.gl/LUd352YWnrvutAs36",
        notes: [
          "稍作休息，準備去吃晚餐",
          "可以請飯店先幫忙訂餐廳位置",
        ],
        transit: { mode: "car", time: "車程：2 min, 使用Gojek叫車" },
      },
      {
        time: "19:00",
        tag: "food",
        title: "L'Osteria Pizza e Cucina Ubud",
        duration: "⚓ 預計停留 2h",
        address: "Jl. Monkey Forest No.8, Ubud, Kecamatan Ubud, Kabupaten Gianyar",
        mapUrl: "https://maps.app.goo.gl/wsRnrFJ2Az9WzdcQA",
        images: ["LOsteria.jpg"],
        notes: [
          "Sourdough pizza酸種麵包披薩非常好吃，但份量很多",
          "義大利麵看起來也很好吃",
        ],
        transit: { mode: "car", time: "車程：2 min, 使用Gojek叫車" },
      },
      {
        time: "Flexible",
        tag: "hotel",
        title: "Rumah Weda",
        duration: "🌙 Good Night",
        address: "No 88x, Jl. Raya, Ubud, Gianyar Regency",
        mapUrl: "https://maps.app.goo.gl/LUd352YWnrvutAs36",
        notes: [
          "問飯店隔日早餐是否可提供餐盒，或者前一天先到附近超商買好",
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
        time: "6:00",
        tag: "hotel",
        title: "Rumah Weda (Check-out)",
        duration: "⚓ 預計停留 15m",
        address: "No 88x, Jl. Raya, Ubud, Gianyar Regency",
        mapUrl: "https://maps.app.goo.gl/4QGCjQ1JJpFEYY5b8",
        notes: [
          "預留登船手續 1h20m",
          ],
        transit: {mode: "car", time: "車程約 - 1h 55m｜前往搭船", docName: "船票", docUrl: "https://drive.google.com/file/d/1yqlUOINRb30bdpT0iEuAve7DxvFJ02lE/view?usp=drive_link"},
      },
      {
        time: "9:30",
        tag: "ship",
        title: "前往Nusa Penida(Tara Resto換票)",
        duration: "⚓ 航程約 1h 30m",
        mapUrl: "https://maps.app.goo.gl/o1nLXr3cDtkshBFTA",
        notes: [
          "告知計司機前往沙努爾馬塔哈里特比特海灘，到Tara Resto兌換櫃台換票，領取實體票後，請前往*沙努爾新港*等候並登船",
          "船隻名稱：Wahana Virendra Fast Boat",
          "船票：9:30，預計航程45m",
          "登島後須付入島費25,000/人（現場支付現金）",
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
        title: "Slaza Penida Kitchen & Bar",
        duration: "⚓ 預計停留 1h 30m",
        price: "900K+ IDR",
        address: "jalan raya pelilit Ka, Pejukutan, Kec. Nusa Penida, Kabupaten Klungkung",
        mapUrl: "https://maps.app.goo.gl/UuniBgKKL7rBkxTZ6",
        images: [
          { src: "SlazaPenida-1.jpg", caption: "網路好評餐廳" },
          { src: "SlazaPenida-2.jpg", caption: "推薦烤魚" },
          { src: "SlazaPenida-3.jpg", caption: "冰淇淋也很多人推薦" },
        ],
        notes: [
          "網上推薦：烤魚、芒果冰、漢堡，大部份都不錯，不太踩雷",
        ],
      },
      {
        time: "14:50",
        tag: "exp",
        title: "Diamond Beach",
        duration: "⚓ 預計停留 2h",
      },
      {
        time: "Flexible",
        tag: "hotel",
        title: "Kaje Cottage & Restaurant (Check-in)",
        notes: [
          "整理&休息一下，準備去吃晚餐",
        ],
        transit: { mode: "walk", time: "約 - 1m" },
      },
      {
        time: "Flexible",
        tag: "food",
        title: "Eastside Penida Kitchen & Bar",
        duration: "⚓ 預計停留 2h",
        address: "jalan raya pelilit, Pejukutan, Kec. Nusa Penida, Kabupaten Klungkung",
        mapUrl: "https://maps.app.goo.gl/SbRY6mmKueQ2SZHM8",
        images: [
          { src: "EastsidePenida-1.jpg", caption: "網路好評餐廳" },
        ],
        notes: [
          "每道菜都好吃，不會踩雷",
        ],
        transit: { mode: "walk", time: "約 - 1m" },
      },
      {
        time: "Flexible",
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
        time: "5:30 - Sunrise",
        tag: "exp",
        title: "Rumah Pohon -Tree House",
        duration: "⚓ 預計停留 1h, 請在6:45前離開",
        images: ["TreeHouse.png"],
        address: "6JC8+HPW, Pejukutan, Kec. Nusa Penida, Kabupaten Klungkung",
        mapUrl: "https://maps.app.goo.gl/u6FpX3gLwgVBxtwq8",
        notes: [
          "預計8:00抵達港口，換票須提前1小時",
        ],
      },
      {
        time: "6:45",
        tag: "exp",
        title: "從Penida搭船回本島",
        duration: "⚓ 預計停留 1h",
        notes: [
          "預計8:00抵達港口，換票須提前1小時",
        ],
        transit: { mode: "car", time: "車程：1h 10m｜前往搭船", docName: "船票", docUrl: "https://drive.google.com/file/d/1c6p591CxlyxQbi9GTSgwW6nwJ29at9IR/view?usp=drive_link" },
      },
      {
        time: "9:00",
        tag: "ship",
        title: "從Penida搭船回本島",
        duration: "⚓ 航程約 1h",
        notes: [
          "實際開船時間9:00，須預留1小時到現場換票",
        ],
        transit: { mode: "car", time: "車程：1 hour 45min" },
      },
      {
        time: "11:45 (有預訂)",
        tag: "food",
        title: "Sapa Seafood & Grill - Nusa Dua",
        duration: "⚓ 預計停留 2h",
        hours: "10:00 – 22:00",
        price: "155,000+ IDR",
        images: ["SapaSeafood.jpg"],
        address: "Bali Collection, The Nusa Dua, ITDC, Benoa, Kec. Kuta Sel., Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/u6iBWA2Psv88qgkJ8",
        notes: [
          "印尼菜、可刷卡",
          "雞肉印尼炒飯不錯、份量很多，但是白飯很硬建議不要點",
        ],
        transit: { mode: "car", time: "車程：50 mim" },
      },
      {
        time: "14:35 (15:00開拍)",
        tag: "exp",
        title: "Nyang Nyang Beach",
        duration: "⚓ 預計停留 3h 50m, 請在18:25前離開",
        images: [
          { src: "NyangNyangBeach-1.jpg", caption: "前往途中的小徑" },
          { src: "NyangNyangBeach-2.jpg", caption: "安靜的沙灘" },
        ],
        address: "Jl. Raya Uluwatu Pecatu, Pecatu, Kec. Kuta Sel., Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/fXVoSjA8MZ6dvz6E7",
        notes: [
          "拍攝時間：15:00-18:00 | 攝影師：AJ |方案：提供所有原始檔案、精修60張",
          "走很多台階才能到達海灘，可以用25,000IDR搭乘摩托計程車往返停車場",
        ],
        transit: { mode: "car", time: "車程：30 mim" },
      },
      {
        time: "18:50 ",
        tag: "exp",
        title: "Karma Spa",
        duration: "⚓ 預計停留 1h 40m, 請在20:30前離開",
        images: ["Karma.jpg"],
        address: "Jalan Villa Kandara Banjar Wijaya Kusuma, Ungasan, South Kuta, Badung Regency",
        mapUrl: "https://maps.app.goo.gl/WDKqaH7LArU7zoem8",
        notes: [
          "建議方案：Sacred Valinese Massage 60分鐘(搭配椰子油/茉莉、依蘭精油的按摩)",
          "請店家先讓我們做Ocean Shower洗澡",
        ],
        transit: { mode: "car", time: "車程：30 mim" },
      },
      {
        time: "21:00 (有預訂)",
        tag: "food",
        title: "Bartolo French/Italian Restaurant Uluwatu Bali",
        duration: "⚓ 預計停留 2h",
        hours: "17:00 – 00:00",
        price: "300,000+ IDR",
        images: [
          { src: "Restaurant_Bartolo-1.png", caption: "Bartolo" },
          { src: "Restaurant_Bartolo-2.png", caption: "義大利麵+卡喬佩佩醬" },
          { src: "Restaurant_Bartolo-3.png", caption: "提拉米蘇" },
        ],
        address: "Uluwatu, Jl. Labuansait, Pecatu, Kec. Kuta Sel., Kabupaten Badung",
        mapUrl: "https://maps.app.goo.gl/EutxXFRLfM7pUpZh9",
        notes: [
          "推薦：Pasta with cacio e pepe sauce(義大利麵+卡喬佩佩醬), Seafood linguine(海鮮義大利麵), Pici cacio e pepe with truffle(起司+黑胡椒+松露義大利麵), 提拉米蘇",
        ],
        transit: { mode: "car", time: "車程：40 mim" },
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
