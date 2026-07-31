/* ============================================================
   قلانس — GLANCÉ  |  قهوة مختصة  ·  EST. 2021
   بيانات المنيو — أسعار حقيقية من منيو المحل (المنيو المطبوع)
   `k` = مفتاح الصورة → assets/img/items/<k>.jpg
   `e` = الاسم الإنجليزي (المنيو ثنائي اللغة زي المطبوع)
   ============================================================ */
window.MENU = {

  brand: {
    nameAr: "قلانس",
    nameEn: "GLANCÉ",
    sub: "SPECIALTY COFFEE",
    est: "2021",
    tagline: "قهوة مختصة",
    about: "قهوة مختصة، تحضير هادي، وتفصيل ما ينقال إلا بالفنجان.",
    address: "",
    hours: "",
    phone: "",
    instagram: "",
    igLabel: "glance.cafe",
    maps: "",
    currency: "ر.س",
    theme: { primary: "#A87E5C", accent: "#C9A47C", ink: "#3B2E24" }
  },

  sections: [

    {
      id: "hot",
      title: "مشروبات ساخنة",
      titleEn: "HOT DRINKS",
      icon: "hot",
      desc: "من محمصة مختصة — تحضير على أصوله",
      cats: [
        {
          id: "hot-a",
          title: "على أساس الإسبريسو",
          items: [
            { n: "أسبريسو", e: "Espresso", k: "espresso", d: "شوت مركّز — صافي وبنكهة كاملة", p: 11 },
            { n: "أمريكانو", e: "Americano", k: "americano", d: "إسبريسو مع ماء ساخن.. نقي وخفيف", p: 12 },
            { n: "كورتادو", e: "Cortado", k: "cortado", d: "إسبريسو مع حليب مبخّر بالتساوي", p: 13 },
            { n: "فلات وايت", e: "Flat White", k: "flatwhite", d: "قهوة أقوى ورغوة أنعم", p: 14 },
            { n: "كابتشينو", e: "Cappuccino", k: "cappuccino", d: "رغوة غنية وتوازن كلاسيكي", p: 15 },
            { n: "لاتيه", e: "Latte", k: "latte", d: "حليب مخملي على إسبريسو", p: 15 },
            { n: "سبانش لاتيه", e: "Spanish Latte", k: "spanish", d: "حلاوة إسبانية بطعم غني", p: 17 },
            { n: "قلانس لاتيه", e: "Glancé Latte", k: "glancelatte", d: "توقيعنا — لاتيه بلمسة ما تلقاها إلا عندنا", p: 17, sig: true }
          ]
        }
      ]
    },

    {
      id: "drip",
      title: "قهوة مقطرة",
      titleEn: "DRIP COFFEE",
      icon: "v60",
      desc: "تقطير يدوي — اسأل الباريستا عن محصول اليوم",
      cats: [
        {
          id: "drip-a",
          title: "تقطير",
          items: [
            { n: "قهوة اليوم", e: "Coffee of the Day", k: "dailycoffee", d: "اختيار الباريستا من محصول اليوم", p: 9 },
            { n: "V60", e: "V60", k: "v60", d: "تقطير يدوي يُبرز نكهة البن كاملة", p: 16 },
            {
              n: "V60 بريميوم", e: "V60 Premium", k: "v60premium",
              d: "محاصيل مختارة — نكهات أوضح وحموضة ألطف",
              s: [19, 21], sn: ["محصول مختار", "محصول نادر"]
            }
          ]
        }
      ]
    },

    {
      id: "cold",
      title: "مشروبات باردة",
      titleEn: "COLD DRINKS",
      icon: "cold",
      desc: "انتعاش على ثلج",
      cats: [
        {
          id: "cold-a",
          title: "باردة",
          items: [
            { n: "الفريدو", e: "Alfredo", k: "alfredo", d: "قهوة مخفوقة كريمية بقوام ناعم", p: 13 },
            { n: "آيس أمريكانو", e: "Ice Americano", k: "iceamericano", d: "قهوة سوداء منعشة على ثلج", p: 12 },
            { n: "آيس لاتيه", e: "Ice Latte", k: "icelatte", d: "انتعاش مخملي على ثلج", p: 15 },
            { n: "آيس سبانش لاتيه", e: "Ice Spanish Latte", k: "icespanish", d: "الحلاوة الإسبانية.. باردة", p: 17 },
            { n: "سقنتشر لاتيه", e: "Signature Latte", k: "signature", d: "خلطتنا الخاصة — حلا هادي وقهوة واضحة", p: 17, sig: true },
            { n: "كركديه", e: "Roselle", k: "roselle", d: "كركديه مثلج بحموضة لطيفة", p: 16 },
            { n: "موهيتو", e: "Mojito", k: "mojito", d: "نعناع وليمون وانتعاش يفوق الوصف", p: 16 },
            { n: "آيس تي", e: "Ice Tea", k: "icetea", d: "شاي مثلج منعش", p: 16 },
            { n: "ماتشا", e: "Matcha", k: "matcha", d: "ماتشا يابانية مع حليب بارد", p: 20 }
          ]
        }
      ]
    },

    {
      id: "sweet",
      title: "حلويات",
      titleEn: "DESSERTS",
      icon: "sweet",
      desc: "يمشي مع القهوة صح",
      cats: [
        {
          id: "sweet-a",
          title: "الحلا",
          items: [
            { n: "تيراميسو", e: "Tiramisu", k: "tiramisu", d: "طبقات ماسكاربوني وقهوة", p: 21 },
            { n: "كريم كيك", e: "Cream Cake", k: "creamcake", d: "كيكة خفيفة بكريمة ناعمة", p: 20 },
            { n: "تشيز كيك بيكان", e: "Pecan Cheese Cake", k: "pecan", d: "تشيز كيك بكراميل وبيكان محمّص", p: 21 },
            { n: "تشيز كيك مدريد", e: "Madrid Cheese Cake", k: "madrid", d: "الوجه المحروق والقلب الكريمي", p: 20 },
            { n: "تشيز كيك براونيز", e: "Brownies Cheese Cake", k: "brownies", d: "براونيز كثيف تحت طبقة تشيز", p: 22 },
            { n: "قلانس كيك", e: "Glancé Cake", k: "glancecake", d: "توقيع الحلا عندنا — وصفة البيت", p: 23, sig: true }
          ]
        }
      ]
    }

  ]
};
