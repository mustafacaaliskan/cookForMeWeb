'use client';

import FoodCard from "@/components/FoodCard";
import { FOODS } from "@/lib/data";

export default function Home() {
  const scrollToFoods = () => {
    const foodsSection = document.getElementById('foods-section');
    if (foodsSection) {
      foodsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Anne Yemeği Tadında, <br />
              <span className="text-primary">Sıcacık Lezzetler</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Mahallenizdeki yetenekli aşçıların hazırladığı ev yemeklerini keşfedin.
              Sağlıklı, taze ve güvenilir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToFoods} className="btn btn-primary text-lg px-8 py-3">
                Hemen Sipariş Ver
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent hidden md:block" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </section>

      {/* Food Listing Section */}
      <section id="foods-section" className="container-custom py-12 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-10">
          Günün Menüsü
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOODS.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 mt-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-card shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏠
              </div>
              <h3 className="text-xl font-bold mb-2">Ev Yapımı</h3>
              <p className="text-muted-foreground">
                Fabrikasyon değil, gerçek ev mutfaklarında hazırlanan lezzetler.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-2">Onaylı Aşçılar</h3>
              <p className="text-muted-foreground">
                Tüm aşçılarımız hijyen ve lezzet testlerinden geçerek onaylanmıştır.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-sm">
              <div className="w-12 h-12 bg-accent/10 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-2">Hızlı Teslimat</h3>
              <p className="text-muted-foreground">
                Sıcak sıcak kapınıza gelen lezzetler.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
