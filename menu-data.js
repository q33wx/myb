const MENU = [
  { cat: "KAHVALTI", icon: "☀️", side: 2, panel: 1, items: [
    { n: "Serpme Kahvaltı", p: "₺1000", d: "Ezine Peyniri, Eski Kaşar, Hellim Peyniri, İzmir Tulum Peyniri, Dil Peyniri, Reçel, Bal, Kaymak, Çikolata, Fındık Ezmesi, Siyah Zeytin, Yeşil Zeytin, Roka, Biber, Çeri Domates, Salatalık, Patates Kızartması, Sigara Böreği, Sosis, Menemen, Sahanda Yumurta. Sınırsız çay (2 kişilik)." },
    { n: "Kahvaltı Tabağı", p: "₺375", d: "Ezine Peyniri, Eski Kaşar, Hellim Peyniri, İzmir Tulum Peyniri, Dil Peyniri, Reçel, Bal, Kaymak, Çikolata, Fındık Ezmesi, Siyah Zeytin, Yeşil Zeytin, Roka, Biber, Çeri Domates, Salatalık, Rafadan Yumurta" },
    { n: "Sıcak Kahvaltı Tabağı", p: "₺420", d: "Ezine Peyniri, Eski Kaşar, Hellim Peyniri, İzmir Tulum Peyniri, Dil Peyniri, Reçel, Bal, Kaymak, Çikolata, Fındık Ezmesi, Siyah Zeytin, Yeşil Zeytin, Roka, Biber, Çeri Domates, Salatalık, Patates Kızartması, Sigara Böreği, Sosis, Göz Yumurta." },
    { n: "Menemen", p: "₺210" },
    { n: "Omlet", p: "₺165", d: "Çeri domates, salatalık ile servis edilir" },
    { n: "Göz Yumurta", p: "₺165" }
  ]},
  { cat: "TOST", icon: "🧀", side: 2, panel: 1, items: [
    { n: "Kavurmalı Kaşarlı Tost", p: "₺330", d: "Patates Kızartması, Çeri Domates, Salatalık, Zeytin ile servis edilir." },
    { n: "Beyaz Peynirli Domatesli Tost", p: "₺215", d: "Patates Kızartması, Çeri Domates, Salatalık, Zeytin ile servis edilir." },
    { n: "Karışık Tost", p: "₺240", d: "Patates Kızartması, Çeri Domates, Salatalık, Zeytin ile servis edilir." },
    { n: "Kaşarlı Tost", p: "₺215", d: "Patates Kızartması, Çeri Domates, Salatalık, Zeytin ile servis edilir." }
  ]},
  { cat: "APERATİFLER", icon: "🍟", side: 1, panel: 1, items: [
    { n: "Süzme Mercimek Çorbası", p: "₺110" },
    { n: "Çıtır Tavuk", p: "₺280" },
    { n: "Patates Tava", p: "₺110" },
    { n: "Karışık Aperatif Tabağı", p: "₺320", d: "Patates kızartması, sosis, soğan halkası, nugget, sigara böreği" },
    { n: "Sigara Böreği", p: "₺130", d: "5 adet sigara böreği, çeri domates, salatalık ile servis edilir." },
    { n: "Soğan Halkası", p: "₺100", d: "8 adet" },
    { n: "Sosis Tava", p: "₺165", d: "Patates kızartması ile servis edilir" }
  ]},
  { cat: "KEBAP & IZGARA", icon: "🔥", side: 2, panel: 2, items: [
    { n: "Adana Kebap", p: "₺445", d: "Zırhla çekilmiş 180 gr kıyma, domates, biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Urfa Kebap", p: "₺445", d: "Zırhla çekilmiş 180 gr kıyma, domates, biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Izgara Köfte", p: "₺395", d: "180 gr kasap köfte, ızgara domates, köz biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Kuzu Şiş", p: "₺475", d: "180 gr kuzu şiş, ızgara domates, köz biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Ciğer Şiş", p: "₺425", d: "180 gr ciğer şiş, ızgara domates, köz biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Tavuk Kanat", p: "₺385", d: "8 adet soslu kanat, ızgara domates, köz biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Tavuk Şiş", p: "₺360", d: "180 gr tavuk şiş, ızgara domates, köz biber, soğan, bulgur pilavı ve lavaş eşliğinde servis edilir." },
    { n: "Pideli köfte", p: "₺600", d: "Yoğurt ve tereyağlı soslu pide ile" },
    { n: "Adana İskender", p: "₺650", d: "Yoğurt ve tereyağlı soslu pide ile" },
    { n: "Izgara dana antrikot", p: "₺850", d: "Közlenmiş biber domates mantar, pilav, patates" },
    { n: "Izgara dana bonfile", p: "₺900", d: "Közlenmiş biber domates mantar, pilav, patates" }
  ]},
  { cat: "DÜRÜMLER", icon: "🌯", side: 2, panel: 2, items: [
    { n: "Adana Dürüm", p: "₺310", d: "Zırhta çekilmiş kıyma ile hazırlanır; kuru domates, soğan ve yeşillik eşliğinde lavaşa dürüm yapılarak sunulur." },
    { n: "Urfa Dürüm", p: "₺310", d: "Zırhta çekilmiş kıyma ile hazırlanır; kuru domates, soğan ve yeşillik eşliğinde lavaşa dürüm yapılarak sunulur." },
    { n: "Izgara Köfte Dürüm", p: "₺290", d: "Izgara köfte ile hazırlanır; soğan ve yeşillik eşliğinde lavaşa dürüm yapılarak sunulur." },
    { n: "Ciğer Şiş Dürüm", p: "₺300", d: "Ciğer şiş ile hazırlanır; soğan ve yeşillik eşliğinde lavaşa dürüm yapılarak sunulur." },
    { n: "Kuzu Şiş Dürüm", p: "₺375", d: "Kuzu şiş ile hazırlanır; soğan ve yeşillik eşliğinde lavaşa dürüm yapılarak sunulur." },
    { n: "Tavuk Şiş Dürüm", p: "₺260", d: "Tavuk şiş ile hazırlanır; soğan ve yeşillik eşliğinde lavaşa dürüm yapılarak sunulur." }
  ]},
  { cat: "BURGERLER", icon: "🍔", side: 2, panel: 3, items: [
    { n: "Hamburger", p: "₺340", d: "100 Gr Burger Köftesi, Domates, Turşu Ve Yeşillik İle Hazırlanır; Yanında Patates Kızartması İle Servis Edilir." },
    { n: "Tavukburger", p: "₺315", d: "120 Gr Panelenmiş Tavuk Göğsü, Domates, Turşu Ve Yeşillik İle Hazırlanır; Yanında Patates Kızartması İle Servis Edilir." },
    { n: "Cheeseburger", p: "₺350", d: "100 Gr Burger Köftesi, Cheddar Peyniri, Domates, Turşu Ve Yeşillik İle Hazırlanır; Yanında Patates Kızartması İle Servis Edilir." },
    { n: "Kingburger", p: "₺430", d: "150 Gr Burger Köftesi, Cheddar Peyniri, Izgara Sucuk, Karamelize Soğan, Domates, Turşu Ve Yeşillik İle Hazırlanır; Yanında Patates Kızartması İle Servis Edilir." },
    { n: "Rodeoburger", p: "₺430", d: "100 Gr Burger Köftesi, Cheddar Peyniri, Izgara Mantar, Karamelize Soğan, Domates, Turşu Ve Yeşillik İle Hazırlanır; Yanında Patates Kızartması İle Servis Edilir." },
    { n: "Myburger", p: "₺495", d: "2x100 Gr Burger Köftesi, Cheddar Peyniri, Dana Füme, Domates, Turşu Ve Yeşillik İle Hazırlanır; Yanında Patates Kızartması İle Servis Edilir." }
  ]},
  { cat: "LAHMACUN", icon: "🫓", side: 2, panel: 3, items: [
    { n: "Lahmacun", p: "₺160", d: "Kırmızı Lahana, Soğanlı Maydanoz Salatası, Limon İle Servis Edilir." },
    { n: "Tel Peynirli Lahmacun", p: "₺210", d: "Kırmızı Lahana, Soğanlı Maydanoz Salatası, Limon İle Servis Edilir." },
    { n: "Cevizli Lahmacun", p: "₺210", d: "Kırmızı Lahana, Soğanlı Maydanoz Salatası, Limon İle Servis Edilir." },
    { n: "Special Lahmacun", p: "₺245", d: "Kırmızı Lahana, Soğanlı Maydanoz Salatası, Limon İle Servis Edilir." }
  ]},
  { cat: "PİDELER", icon: "🥖", side: 2, panel: 3, items: [
    { n: "Kaşarlı Pide", p: "₺300" },
    { n: "Tel Peynirli Pide", p: "₺325" },
    { n: "Sebzeli Pide", p: "₺325" },
    { n: "Sucuklu Kaşarlı Pide", p: "₺360" },
    { n: "Kavurmalı Kaşarlı Pide", p: "₺395" },
    { n: "Kavurmalı Pide", p: "₺395" },
    { n: "Kıymalı Kaşarlı Pide", p: "₺360" },
    { n: "Kıymalı Pide", p: "₺360" },
    { n: "Kuşbaşı Kaşarlı Pide", p: "₺395" },
    { n: "Kuşbaşılı Pide", p: "₺395" },
    { n: "Pastırmalı Kaşarlı Pide", p: "₺495" },
    { n: "My Pide", p: "₺440" },
    { n: "Ramazan Pide", p: "₺75" }
  ]},
  { cat: "PİZZALAR", icon: "🍕", side: 1, panel: 2, items: [
    { n: "Karışık Pizza", p: "₺435", d: "Mozzarella Peyniri, Sucuk, Sosis, Salam, Mantar, Zeytin, Biber Ve Mısır İle Hazırlanır; Domates Soslu Taban Üzerinde Taş Fırında Pişirilir." },
    { n: "Sebzeli Pizza", p: "₺365", d: "Mozzarella Peyniri, Mantar, Zeytin, Biber, Domates Ve Mısır İle Hazırlanır; Domates Soslu Taban Üzerinde Taş Fırında Pişirilir." },
    { n: "Margarita Pizza", p: "₺355", d: "Mozzarella Peyniri Ve Fesleğenli Domates Soslu Taban Üzerinde Hazırlanır; Taş Fırında Pişirilir." },
    { n: "My Pizza", p: "₺505", d: "Mozzarella Peyniri, Dana Kavurma, Pastırma, Sosis, Sucuk, Salam, Mantar, Zeytin, Biber, Domates Ve Mısır İle Hazırlanır; Domates Soslu Taban Üzerinde Taş Fırında Pişirilir." }
  ]},
  { cat: "TAVA YEMEKLERİ", icon: "🍳", side: 1, panel: 2, items: [
    { n: "Barbekü Soslu Tavuk", p: "₺345", d: "150 Gr Tavuk Eti, Yeşil Ve Kırmızı Şerit Biber, Mantar Ve Krema İle Hazırlanır; Yanında Mevsim Salata Ve Pirinç Pilavı İle Servis Edilir." },
    { n: "Köri Soslu Tavuk", p: "₺345", d: "150 Gr Tavuk Eti, Yeşil Ve Kırmızı Şerit Biber, Mantar Ve Krema İle Hazırlanır; Yanında Mevsim Salata Ve Pirinç Pilavı İle Servis Edilir." },
    { n: "Mantar Soslu Tavuk", p: "₺345", d: "150 Gr Tavuk Eti, Yeşil Ve Kırmızı Şerit Biber, Mantar Ve Krema İle Hazırlanır; Yanında Mevsim Salata Ve Pirinç Pilavı İle Servis Edilir." },
    { n: "Meksika Soslu Tavuk", p: "₺345", d: "150 Gr Tavuk Eti, Yeşil Ve Kırmızı Şerit Biber, Mantar Ve Krema İle Hazırlanır; Yanında Mevsim Salata Ve Pirinç Pilavı İle Servis Edilir." },
    { n: "Soya Soslu Tavuk", p: "₺345", d: "150 Gr Tavuk Eti, Yeşil Ve Kırmızı Şerit Biber, Mantar Ve Krema İle Hazırlanır; Yanında Mevsim Salata Ve Pirinç Pilavı İle Servis Edilir." },
    { n: "Güveçte Mantarlı Et Sote", p: "₺580", d: "Dana Eti, Mantar, Özel Sos Ve Sebzeler İle Güveçte Hazırlanır; Yanında Pirinç Pilavı İle Servis Edilir." },
    { n: "Sac Tava", p: "₺580", d: "Dana Eti Ve Sebzeler Sac Tavada Hazırlanır; Yanında Pirinç Pilavı İle Servis Edilir." }
  ]},
  { cat: "MAKARNALAR", icon: "🍝", side: 1, panel: 1, items: [
    { n: "Peynirli Tortellini", p: "₺345", d: "Krema Ve Pesto Sosu İle Hazırlanır, Üzerine Parmesan Peyniri Eklenerek Servis Edilir." },
    { n: "Spaghetti Napolitan", p: "₺245", d: "Özel Napolitan Sosu İle Hazırlanır, Üzerine Parmesan Peyniri Eklenerek Servis Edilir." },
    { n: "Spaghetti Bolonez", p: "₺345", d: "Özel Bolonez Sosu İle Hazırlanır, Üzerine Parmesan Peyniri Eklenerek Servis Edilir." },
    { n: "Penne Arrabiata", p: "₺245" },
    { n: "Tavuklu Penne", p: "₺270", d: "Krema, Tavuk Eti Ve Pesto Sosu İle Hazırlanır, Üzerine Parmesan Peyniri Eklenerek Servis Edilir." },
    { n: "Fettucine Alfredo", p: "₺315", d: "Krema, Tavuk Eti Ve Pesto Sosu İle Hazırlanır, Üzerine Parmesan Peyniri Eklenerek Servis Edilir." },
    { n: "Mantı (Ev Yapımı)", p: "₺345", d: "Ev Yapımı Dana Etli Mantı, Özel Sosu Ve Yoğurt Eşliğinde Servis Edilir." }
  ]},
  { cat: "SALATALAR", icon: "🥗", side: 1, panel: 1, items: [
    { n: "Akdeniz Salata", p: "₺245", d: "Akdeniz Yeşillikleri, Domates, Salatalık, Zeytin Ve Beyaz Peynir İle Hazırlanır." },
    { n: "Cevizli Tulum Peynirli Salata", p: "₺270", d: "Mevsim Yeşillikleri, Ceviz, Tulum Peyniri Ve Domates İle Hazırlanır." },
    { n: "Çıtır Tavuk Salata", p: "₺295", d: "Mevsim Yeşillikleri, Panelenmiş Çıtır Tavuk Parçaları İle Hazırlanır." },
    { n: "Çoban Salata", p: "₺165", d: "Domates, Salatalık, Soğan Ve Yeşillikler İle Hazırlanır." },
    { n: "Sezar Salata", p: "₺295", d: "Marul, Izgara Tavuk, Kruton Ve Sezar Sosu İle Hazırlanır." },
    { n: "Ton Balıklı Salata", p: "₺330", d: "Mevsim Yeşillikleri, Ton Balığı, Mor Soğan İle Hazırlanır." }
  ]},
  { cat: "MEŞRUBATLAR", icon: "🥤", side: 1, panel: 2, items: [
    { n: "Pepsi", p: "₺100" },
    { n: "Ayran", p: "₺90" },
    { n: "Lipton Ice Tea", p: "₺100", d: "Şeftali, Limon" },
    { n: "7up Gazoz", p: "₺100" },
    { n: "Yedigün", p: "₺100" },
    { n: "Su 0.33", p: "₺25" },
    { n: "Meyveli Soda", p: "₺75" },
    { n: "Sade Soda", p: "₺70" },
    { n: "Tropicana Meyve Suyu", p: "₺100", d: "Şeftali, vişne, karışık" }
  ]}
];
