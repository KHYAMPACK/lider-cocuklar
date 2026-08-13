export const site = {
  name: "Özel Denizli Lider Çocuklar Anaokulu",
  shortName: "Lider Çocuklar",
  tagline: "Denizli’de güvenli, neşeli ve lider ruhlu bir anaokulu.",
  description:
    "Merkezefendi Yenişehir’de oyun temelli eğitim, güvenli ortam ve sıcak bir ekiple çocuklarınızın ilk adımlarına eşlik ediyoruz.",
  phoneDisplay: "0 507 245 37 46",
  phoneTel: "+905072453746",
  whatsapp: "905072453746",
  email: "info@denizlilidercocuklaranaokulu.com",
  address: {
    street: "Yenişehir Mahallesi 55. Sokak No:4",
    district: "Merkezefendi",
    city: "Denizli",
    full: "Yenişehir Mahallesi 55. Sokak No:4 Merkezefendi / DENİZLİ",
  },
  instagram: "denizli_lidercocuklar_anaokulu",
  instagramUrl: "https://www.instagram.com/denizli_lidercocuklar_anaokulu/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Yenişehir+Mahallesi+55.+Sokak+No:4+Merkezefendi+Denizli",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Yenişehir%20Mahallesi%2055.%20Sokak%20No:4%20Merkezefendi%20Denizli&z=16&output=embed",
  classHours: "07:30 – 18:30",
  ageRange: "3–6 yaş",
  hours: [
    { days: "Pazartesi – Cuma", hours: "07:30 – 18:30" },
    { days: "Cumartesi – Pazar", hours: "Kapalı" },
  ],
  url: "https://denizlilidercocuklaranaokulu.com",
} as const;

export const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/programlar", label: "Hizmetlerimiz" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "Bize Ulaşın" },
] as const;

export const aboutIntro =
  "Çocuklarımızın bütünlüğünü gözeterek; zihinsel, bedensel ve psikolojik gelişimlerini destekleyen eğitim vermeyi, demokratik bir ortamda eğitim programımız ile çocuklarımızın kişilik özelliklerini, bağımsızlık, yaratıcılık, sorumluluk ve liderlik becerilerini güçlendirmeyi amaçlıyoruz.";

export const aboutMore = {
  title: "Bir Anaokulundan Daha Fazlası...",
  paragraphs: [
    "Okulumuz M.E.B standartlarında ve İSO9001 normlarına uygun yapılmış olup, özel tasarımlı kız ve erkek ayrı bölmeli çocuk tuvaletleri, sadece okul öncesi çocuklara yönelik (3-6 yaş), son teknoloji ile donatılmıştır.",
    "Çocuklarımızın gerçek hayatta gördükleri farklı meslek gruplarına yönelik oluşturulan alanlarda; kaba motor ve sosyal-duygusal gelişimleri ile günlük yaşam becerilerini geliştirebilecekleri bir yaşam alanı olarak düzenlenmiştir. Aynı zamanda eğlenerek, enerjilerini olumlu yönde atabilecekleri oyun alanımız bulunmaktadır.",
  ],
} as const;

export const whyCards = [
  {
    title: "Oyun Tabanlı Eğitim",
    text: "Eğitici oyunlarla öğrenmeyi eğlenceli hale getiriyoruz.",
    color: "#6B3FA0",
    image: "/images/why/play.jpg",
    icon: "puzzle",
  },
  {
    title: "Sevgi Dolu Ortam",
    text: "Çocuklarınıza sıcak ve güvenli bir eğitim yuvası sunuyoruz.",
    color: "#E8A317",
    image: "/images/why/love.jpg",
    icon: "heart",
  },
  {
    title: "Sosyal Destek",
    text: "Arkadaşlık, paylaşma gibi sosyal becerileri öğretiyoruz.",
    color: "#E85A4F",
    image: "/images/why/social.jpg",
    icon: "share",
  },
  {
    title: "Keşif Ve Yaratıcılık",
    text: "Müzik, resim ve atölyelerle çocuğun keşfetmesine alan açıyoruz.",
    color: "#3D7EA6",
    image: "/images/why/create.jpg",
    icon: "spark",
  },
] as const;

export const aboutChecks = [
  "M.E.B standartları ve İSO9001 uyumu",
  "3–6 yaşa özel donanımlı ortam",
  "Meslek köşeleriyle yaşam becerileri",
  "Enerjiyi olumlu atan oyun alanları",
] as const;

export const gardenPlay = {
  eyebrow: "Açık hava",
  title: "Güvenli Bahçede Özgür Oyun",
  accent: "Özgür Oyun",
  paragraphs: [
    "Lider Çocuklar’da günün sevilen parçalarından biri bahçe zamanı. Temiz havada koşar, keşfeder ve arkadaşlarıyla oyun kurar; hareket, sosyalleşme ve hayal gücü birlikte büyür.",
    "Güvenli oyun alanımızda açık hava etkinlikleri, serbest oyun ve doğa ile buluşma — her çocuğun temposuna saygıyla.",
  ],
} as const;

export const dayRhythm = {
  eyebrow: "Günlük ritim",
  title: "Bir Günün Ritmi",
  intro: "Çalışan ebeveynler için erken açılış; gün boyu oyun, öğün ve esnek çıkış.",
  steps: [
    { time: "07:30", title: "Kapılar Açılır", detail: "Tam gün karşılama", tone: "grape" },
    { time: "09:00", title: "Gün Başlar", detail: "Oyun ve keşif", tone: "pool" },
    { time: "", title: "Sofraya Otururuz", detail: "Kahvaltı · kuşluk · öğle · ikindi", tone: "gold" },
    { time: "13:00", title: "Yarım Gün Çıkış", detail: "İsteğe bağlı", tone: "blush" },
    { time: "17:00", title: "Esnek Çıkış", detail: "Tercihe göre", tone: "pool" },
    { time: "18:30", title: "Gün Kapanır", detail: "Tam gün bitiş", tone: "grape" },
  ],
} as const;

export const ageGroups = {
  eyebrow: "Sınıflar",
  title: "Yaş Grupları",
  intro: "Küçük gruplar — her yaşa kendi temposu.",
  bands: [
    { range: "3 yaş", text: "İlk ayrılık, güven ve oyun. Küçük adımlarla okula alışma." },
    { range: "4–5 yaş", text: "Keşif, arkadaşlık ve atölye. Merakın günlük işe dönüştüğü yıllar." },
    { range: "5–6 yaş", text: "Okula hazırlık, sorumluluk ve liderlik. Bir sonraki basamağa yumuşak geçiş." },
  ],
} as const;

export const branchTeachers = {
  eyebrow: "Branşlar",
  title: "Uzman Branş Öğretmenleriyle Zengin Gün",
  intro:
    "Müzikten dramaya, spordan sanata — branş öğretmenlerimiz miniklerin farklı yönlerini destekler.",
  subjects: [
    { title: "Müzik", text: "Ritim, ses ve şarkı ile ifade; kulak ve beden uyumu." },
    { title: "Drama", text: "Hayal gücü, rol oynama ve kendini ifade etme." },
    { title: "İngilizce", text: "Oyun ve şarkı yoluyla erken dil farkındalığı." },
    { title: "Jimnastik / Spor", text: "Denge, güç ve beden farkındalığı; hareketle özgüven." },
    { title: "Dans", text: "Müzik eşliğinde hareket, koordinasyon ve neşe." },
    { title: "Görsel Sanatlar", text: "Boyama, yoğurma ve yaratıcı üretim; ince motor beceri." },
    { title: "Akıl Oyunları", text: "Odak, planlama ve sabır — yaşa uygun zihin etkinlikleri." },
    { title: "Doğa Ve Keşif", text: "Açık hava, duyusal deneyim ve meraka dayalı gözlem." },
  ],
} as const;

export const nutrition = {
  eyebrow: "Sofrada",
  title: "Doğal Ve Dengeli Beslenme",
  intro: "Sofrada da öğrenme var — masa alışkanlığı ve birlikte yaşam.",
  points: [
    {
      title: "Taze Öğünler",
      text: "Hazır atıştırmalık yerine çocuk dostu, taze malzemelerle planlanan menüler.",
    },
    {
      title: "Öğün Düzeni",
      text: "Tam gün: kahvaltı, kuşluk, öğle ve ikindi. Yarım gün: kahvaltı, kuşluk ve öğle.",
    },
    {
      title: "Sosyalleşme",
      text: "Yemek zamanı yalnızca beslenme değil; masa alışkanlığı ve birlikte yaşam.",
    },
    {
      title: "Özel İhtiyaç",
      text: "Alerji ve özel beslenme notlarını kayıt sırasında alıyor, mutfağa iletiyoruz.",
    },
  ],
} as const;

export const enrollment = {
  eyebrow: "Kayıt",
  title: "Kayıt Nasıl İşler?",
  intro: "Kayıt sürecimiz öncelikle randevu ile başlar. Randevu gününde şöyle ilerleriz:",
  motto: "Çünkü bizim için kayıt, bir form doldurmakla değil; çocuğu tanımakla başlar.",
  steps: [
    {
      n: "01",
      title: "Aileyi Tanırız",
      text: "Randevu gününde veliyle birebir görüşerek aileyi tanırız; çocuğun yaşı, gelişimi, günlük rutinleri, ilgi alanları, ihtiyaçları ve varsa önceki okul deneyimi hakkında bilgi alırız.",
    },
    {
      n: "02",
      title: "Çocukla Tanışırız",
      text: "Ardından çocukla tanışır, okul ortamındaki iletişimini ve ihtiyaçlarını gözlemleyerek hangi programın ve devam süresinin daha uygun olacağını değerlendiririz.",
    },
    {
      n: "03",
      title: "Yaklaşımımızı Anlatırız",
      text: "Bu ilk görüşmede eğitim yaklaşımımız, günlük işleyiş, sınıf düzeni ve programlar hakkında ayrıntılı bilgi verir; merak edilen tüm soruları yanıtlarız.",
    },
    {
      n: "04",
      title: "Birlikte Karar Veririz",
      text: "Karşılıklı değerlendirme sonrasında Lider Çocuklar’ın uygun olduğuna birlikte karar verdiğimizde kayıt işlemlerini tamamlar ve uyum sürecini planlarız.",
    },
  ],
} as const;

export const featuredServices = [
  {
    slug: "atolye-bilim",
    title: "Atölye Bilim",
    text: "Çocukların öğrenme meraklarını arttıracak, bilimin hayatın içinde olduğunu ve eğlenceli yönünü hissedecekleri bir atölye.",
    image: "/images/play-area.png",
  },
  {
    slug: "atolye-sanat",
    title: "Atölye Sanat",
    text: "Sanat eğitimi ile çocukların hayal gücü desteklenerek, sanatsal bakış açısı kazandırabilme ve estetik beğeni oluşturabilme.",
    image: "/images/dining-room.png",
  },
  {
    slug: "atolye-dil",
    title: "Atölye Dil",
    text: "Lider Çocuklar Anaokulu’nda çocukların Türkçe ve çeşitli yabancı dil eğitimi alabilecekleri bir dil öğrenme merkezi bulunmaktadır.",
    image: "/images/fairy-classroom.png",
  },
] as const;

export const allServices = [
  { slug: "atolye-bilim", title: "Atölye Bilim", image: "/images/play-area.png" },
  { slug: "atolye-bilis-tasarim", title: "Atölye Biliş Tasarım", image: "/images/brand-wall.png" },
  { slug: "atolye-dil", title: "Atölye Dil", image: "/images/fairy-classroom.png" },
  { slug: "atolye-masal", title: "Atölye Masal", image: "/images/fairy-classroom.png" },
  { slug: "atolye-matematik", title: "Atölye Matematik Kavram", image: "/images/play-area.png" },
  { slug: "atolye-sanat", title: "Atölye Sanat", image: "/images/dining-room.png" },
  { slug: "fiziki-bolumler", title: "Fiziki Diğer Bölümler", image: "/images/brand-wall.png" },
  { slug: "lider-park", title: "Lider Park", image: "/images/play-area.png" },
  { slug: "spor-salonu", title: "Spor Salonu", image: "/images/play-area.png" },
  { slug: "yemekhane", title: "Yemekhane", image: "/images/dining-room.png" },
] as const;

export const upcomingActivities = [
  {
    slug: "p4c",
    title: "P4C",
    kicker: "Düşünme",
    text: "Çocuklar için felsefe: soru sormayı, dinlemeyi ve birlikte düşünmeyi oyun gibi kuruyoruz.",
    tone: "grape",
    sticker: "/stickers/star.svg",
    image: "/images/activities/p4c.jpg",
  },
  {
    slug: "orff-ritim",
    title: "Orff Ve Ritim",
    kicker: "Müzik",
    text: "Beden, ses ve basit çalgılarla ritim duygusu; müzik bir ders değil, sınıfın nabzı.",
    tone: "gold",
    sticker: "/stickers/blossom.svg",
    image: "/images/activities/orff.jpg",
  },
  {
    slug: "satranc",
    title: "Satranç",
    kicker: "Strateji",
    text: "Sıra beklemek, plan kurmak ve kaybetmeyi de öğrenmek — tahta üzerinde liderlik.",
    tone: "pool",
    sticker: "/stickers/castle.svg",
    image: "/images/activities/satranc.jpg",
  },
  {
    slug: "drama",
    title: "Drama",
    kicker: "İfade",
    text: "Rol, masal ve doğaçlama ile kendilerini anlatmayı; utangaçlığı oyuna çevirmeyi çalışıyoruz.",
    tone: "blush",
    sticker: "/stickers/kid.svg",
    image: "/images/activities/drama.jpg",
  },
  {
    slug: "ingilizce",
    title: "İngilizce",
    kicker: "Dil",
    text: "Şarkı, oyun ve günlük rutinle İngilizce; ezber değil, kulağın alıştığı bir ikinci ses.",
    tone: "pool",
    sticker: "/stickers/star.svg",
    image: "/images/activities/ingilizce.jpg",
  },
  {
    slug: "terzilik",
    title: "Terzilik Atölyesi",
    kicker: "El işi",
    text: "Kumaş, iğne ve dikiş masası: ince motor, sabır ve “ben yaptım” gururu.",
    tone: "blush",
    sticker: "/stickers/blossom.svg",
    image: "/images/activities/terzilik.jpg",
  },
  {
    slug: "maker",
    title: "Maker Atölyesi",
    kicker: "Keşif",
    text: "Yaparak öğrenme: basit mekanizma, malzeme ve merak. Bozmak da müfredatın parçası.",
    tone: "gold",
    sticker: "/stickers/traffic-light.svg",
    image: "/images/activities/maker.jpg",
  },
  {
    slug: "jimnastik",
    title: "Jimnastik",
    kicker: "Beden",
    text: "Denge, esneklik ve güvenli hareket — enerjiyi salonun içinde doğru yere koyuyoruz.",
    tone: "grape",
    sticker: "/stickers/kid.svg",
    image: "/images/activities/jimnastik.jpg",
  },
  {
    slug: "yoga",
    title: "Yoga",
    kicker: "Denge",
    text: "Nefes, duruş ve yumuşak bir duraklama. Küçük bedenler için kısa, oyunlu seanslar.",
    tone: "pool",
    sticker: "/stickers/blossom.svg",
    image: "/images/activities/yoga.jpg",
  },
  {
    slug: "mindfulness",
    title: "Mindfulness",
    kicker: "Dikkat",
    text: "Duyguyu fark etmek, sakinleşmek ve yeniden oyuna dönmek için minik duruşlar.",
    tone: "grape",
    sticker: "/stickers/star.svg",
    image: "/images/activities/mindfulness.jpg",
  },
] as const;

export const faqs = [
  {
    q: "Lider Çocuklar Anaokulu hangi yaş gruplarını kabul ediyor?",
    a: "Okulumuz okul öncesi çocuklara yöneliktir (3–6 yaş). Küçük gruplarda her yaşın kendi temposu vardır. Güncel kontenjan için bizi arayın.",
  },
  {
    q: "Günlük saatler ve yarım gün var mı?",
    a: "Kapılar 07:30’da açılır, tam gün 18:30’da kapanır. İsteğe bağlı yarım gün çıkış 13:00’tedir; esnek çıkış 17:00 civarı tercihe göredir.",
  },
  {
    q: "Okulunuz nerededir?",
    a: "Yenişehir Mahallesi 55. Sokak No:4 Merkezefendi / Denizli adresindeyiz.",
  },
  {
    q: "Yemekler nasıl hazırlanıyor?",
    a: "Tam günde kahvaltı, kuşluk, öğle ve ikindi; yarım günde kahvaltı, kuşluk ve öğle. Menüler çocuk dostu ve taze planlanır. Alerji ve özel ihtiyaçları kayıt sırasında not ederiz.",
  },
  {
    q: "Kayıt nasıl işler?",
    a: "Önce randevu alırız. Görüşmede aileyi ve çocuğu tanır, yaklaşımımızı anlatır, birlikte karar veririz. Kayıt bir form değil; çocuğu tanımakla başlar.",
  },
  {
    q: "Eğitim yönteminiz nedir?",
    a: "Oyun temelli, keşif ve yaratıcılık odaklı bir yaklaşım izliyoruz; bilim, sanat, dil, branş öğretmenleri ve meslek köşeleriyle öğrenmeyi hayata bağlıyoruz.",
  },
] as const;

export const photos = {
  wall: "/images/brand-wall.png",
  dining: "/images/dining-room.png",
  play: "/images/play-area.png",
  classroom: "/images/fairy-classroom.png",
  garden: "/images/garden.jpg",
} as const;

export const heroSlides = [
  { src: photos.classroom, alt: "Masal temalı pembe sınıf" },
  { src: photos.play, alt: "Oyun evleri ve trafik köşesi" },
  { src: photos.dining, alt: "Yemek salonu" },
  { src: photos.wall, alt: "Lider Çocuklar marka duvarı" },
] as const;

export function whatsappLink(text?: string) {
  const msg = encodeURIComponent(
    text ?? "Merhaba, Lider Çocuklar Anaokulu hakkında bilgi almak istiyorum.",
  );
  return `https://wa.me/${site.whatsapp}?text=${msg}`;
}
