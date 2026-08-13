import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Gizlilik Politikası",
  description: `${site.shortName} web sitesi gizlilik ve kişisel verilerin korunması metni.`,
  path: "/gizlilik",
  robots: { index: true, follow: true },
});

const h2Class = "font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]";
const linkClass = "font-semibold text-[var(--grape)]";

export default function PrivacyPage() {
  return (
    <div>
      <PageIntro eyebrow="KVKK" title="Gizlilik Politikası" />

      <div className="container-page max-w-3xl py-20 md:py-28">
        <div className="space-y-8 text-base leading-relaxed text-[var(--muted)]">
          <p>
            Bu metin, {site.name} web sitesinin kişisel verileri nasıl aldığını ve kullandığını anlatır. Yalnızca
            sitede gerçekten olan işlemlere dayanır.
          </p>

          <section>
            <h2 className={h2Class}>1. Veri Sorumlusu</h2>
            <p className="mt-3">
              Web sitesinde kişisel verilerin işlenmesinden {site.name} sorumludur.
            </p>
            <p className="mt-3">Adres: {site.address.full}</p>
            <p className="mt-3">
              E-posta:{" "}
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </p>
            <p className="mt-3">
              Telefon:{" "}
              <a href={`tel:${site.phoneTel}`} className={linkClass}>
                {site.phoneDisplay}
              </a>
            </p>
          </section>

          <section>
            <h2 className={h2Class}>2. Toplanan Bilgiler</h2>
            <p className="mt-3">
              İletişim formunda ad, telefon, isteğe bağlı çocuk yaşı ve mesaj alanları bulunur. Formu gönderdiğinizde
              bu bilgiler WhatsApp mesajına yazılır. Site formları sunucularımızda saklanmaz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>3. Amaç Ve Hukuki Sebep</h2>
            <p className="mt-3">
              Bilgiler, sizin talebiniz üzerine okul hakkında bilgi vermek, kontenjan sormak veya kayıt / randevu
              görüşmesi planlamak için kullanılır. Hukuki sebep, veli olarak ilettiğiniz bilgi veya randevu talebini
              yerine getirmektir. Pazarlama amacıyla üçüncü taraflara satılmaz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>4. WhatsApp</h2>
            <p className="mt-3">
              Formu gönderince tarayıcınız okulun WhatsApp hattını açar; yazdıklarınız oraya taşınır. İletişim
              sayfasında da belirtildiği gibi mesaj sitemize kaydedilmez. WhatsApp / Meta, okul numarasına giden
              yazışmayı kendi hizmet kurallarına göre işler.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>5. Harita</h2>
            <p className="mt-3">
              Anasayfa ve iletişim sayfalarında Google Haritalar gömülü çerçevesi (iframe) kullanılır. Harita
              yüklenirken Google teknik verilerinizi (örneğin IP adresi) işleyebilir; Google kendi çerezlerini
              kullanabilir. Haritayı Google’ın sayfasında açmak için ayrı bir bağlantı da sunulur.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>6. Teknik Kayıt</h2>
            <p className="mt-3">
              Tarayıcınızda yalnızca giriş animasyonunun aynı oturumda tekrarlanmaması için sessionStorage içinde{" "}
              <span className="font-mono text-sm text-[var(--ink)]">lc-intro</span> adlı bir işaret tutulur. Biz reklam
              veya ölçüm çerezi koymayız; sitede analitik veya reklam aracı yoktur.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>7. Saklama</h2>
            <p className="mt-3">
              Web sitesi formun bir kopyasını tutmaz. WhatsApp yazışması, velilere yanıt verildiği olağan süreçte
              okulun WhatsApp hesabında kalır; oradan silindiğinde de kalkar.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>8. Haklar</h2>
            <p className="mt-3">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verilerinizin işlenip işlenmediğini öğrenme,
              düzeltilmesini veya silinmesini isteme ve işlenmesine itiraz etme haklarınız vardır. Başvurularınızı
              aşağıdaki e-posta adresine yazabilirsiniz. Şikâyet için Kişisel Verileri Koruma Kurulu’na başvurabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>9. Çocuklar</h2>
            <p className="mt-3">
              İletişim formu ebeveyn veya vasiler içindir; çocukların doldurması için değildir. Çocuk yaşı alanı isteğe
              bağlıdır ve yalnızca sınıf veya program hakkında doğru bilgi verebilmek için sorulur.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>10. Fotoğraflar</h2>
            <p className="mt-3">
              Sitedeki okul hayatı fotoğrafları okula aittir ve aile izniyle kullanılır. Tanınabilir bir görüntünün
              kaldırılmasını istiyorsanız e-posta ile yazın; talebinizi inceleriz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>11. İletişim</h2>
            <p className="mt-3">
              Gizlilik ve kişisel veri talepleriniz için{" "}
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>{" "}
              veya{" "}
              <a href={`tel:${site.phoneTel}`} className={linkClass}>
                {site.phoneDisplay}
              </a>
              . Adres: {site.address.full}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
