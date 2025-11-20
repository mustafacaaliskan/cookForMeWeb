import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div className="container-custom py-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 text-5xl">
                🏗️
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemize İlginiz İçin Teşekkür Ederiz!</h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8">
                Sitemiz yapım aşamasındadır. Maalesef henüz aktif değil.
                En kısa sürede sizlerle buluşmak için çalışıyoruz!
            </p>

            <div className="bg-muted/30 p-6 rounded-xl max-w-md w-full mb-8 text-left">
                <h3 className="font-semibold mb-2">Neden Bu Mesajı Görüyorsunuz?</h3>
                <p className="text-sm text-muted-foreground">
                    Şu anda platformumuzu test ediyoruz ve kullanıcı ilgisini ölçüyoruz.
                    Seçtiğiniz yemek tercihiniz kaydedildi ve bu bilgiyi hizmete başladığımızda
                    size en iyi deneyimi sunmak için kullanacağız.
                </p>
            </div>

            <Link href="/" className="btn btn-primary px-8 py-3">
                Ana Sayfaya Dön
            </Link>
        </div>
    );
}
