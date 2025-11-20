
export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/50 mt-auto">
            <div className="container-custom py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-primary">CookForMe</h3>
                        <p className="text-sm text-muted-foreground">
                            Ev yapımı lezzetleri kapınıza getiren platform.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Keşfet</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Yemekler</a></li>
                            <li><a href="#" className="hover:text-primary">Aşçılar</a></li>
                            <li><a href="#" className="hover:text-primary">Popüler</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Kurumsal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-primary">İletişim</a></li>
                            <li><a href="#" className="hover:text-primary">Kariyer</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Yasal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Kullanım Koşulları</a></li>
                            <li><a href="#" className="hover:text-primary">Gizlilik Politikası</a></li>
                            <li><a href="#" className="hover:text-primary">KVKK</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} CookForMe. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
}
