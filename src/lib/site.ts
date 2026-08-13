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
    title: "Keşif ve Yaratıcılık",
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
    title: "Orff ve Ritim",
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
    a: "Okulumuz okul öncesi çocuklara yöneliktir (3–6 yaş). Güncel kontenjan için bizi arayın.",
  },
  {
    q: "Okulunuz nerededir?",
    a: "Yenişehir Mahallesi 55. Sokak No:4 Merkezefendi / Denizli adresindeyiz.",
  },
  {
    q: "Yemekler nasıl hazırlanıyor?",
    a: "Beslenme düzenimiz çocuk dostu menülerle planlanır. Alerji ve özel ihtiyaçları kayıt sırasında not ederiz.",
  },
  {
    q: "Eğitim yönteminiz nedir?",
    a: "Oyun temelli, keşif ve yaratıcılık odaklı bir yaklaşım izliyoruz; bilim, sanat, dil ve meslek köşeleriyle öğrenmeyi hayata bağlıyoruz.",
  },
] as const;

/** @deprecated kept for programlar page compatibility */
export const programs = featuredServices.map((s) => ({
  slug: s.slug,
  title: s.title,
  summary: s.text,
}));

export const photos = {
  hero: "/images/fairy-classroom.png",
  about: "/images/play-area.png",
  hours: "/images/dining-room.png",
  faq: "/images/brand-wall.png",
  wall: "/images/brand-wall.png",
  dining: "/images/dining-room.png",
  play: "/images/play-area.png",
  classroom: "/images/fairy-classroom.png",
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
