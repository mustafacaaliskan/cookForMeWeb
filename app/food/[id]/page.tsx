import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FOODS } from '@/lib/data';
import OrderButton from '@/components/OrderButton';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function FoodDetailPage({ params }: PageProps) {
    const { id } = await params;
    const food = FOODS.find((f) => f.id === id);

    if (!food) {
        notFound();
    }

    return (
        <div className="container-custom py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={food.image}
                        alt={food.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Info Section */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                            {food.title}
                        </h1>
                        <div className="flex items-center gap-1 text-yellow-500 font-bold text-lg">
                            <span>★</span>
                            <span>{food.cook.rating}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                            <Image
                                src={food.cook.avatar}
                                alt={food.cook.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">{food.cook.name}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <span className="text-primary">✓</span> Onaylı Aşçı • {food.cook.location}
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-gray max-w-none mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {food.description}
                        </p>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold mb-3">İçindekiler</h3>
                        <div className="flex flex-wrap gap-2">
                            {food.ingredients.map((ingredient, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white border border-border rounded-full text-sm text-muted-foreground"
                                >
                                    {ingredient}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Porsiyon Fiyatı</p>
                            <p className="text-3xl font-bold text-primary">₺{food.price}</p>
                        </div>
                        <OrderButton foodId={food.id} price={food.price} />
                    </div>
                </div>
            </div>

            {/* Reviews Section (Static for MVP) */}
            <div className="mt-16 pt-12 border-t border-border">
                <h2 className="text-2xl font-bold mb-8">Değerlendirmeler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-xl border border-border">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex text-yellow-500 text-sm">★★★★★</div>
                            <span className="text-sm font-medium">Zeynep K.</span>
                            <span className="text-xs text-muted-foreground ml-auto">2 gün önce</span>
                        </div>
                        <p className="text-muted-foreground">
                            Gerçekten anne eli değmiş gibi. Çok lezzetliydi, ellerinize sağlık!
                        </p>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-border">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex text-yellow-500 text-sm">★★★★☆</div>
                            <span className="text-sm font-medium">Ahmet Y.</span>
                            <span className="text-xs text-muted-foreground ml-auto">1 hafta önce</span>
                        </div>
                        <p className="text-muted-foreground">
                            Porsiyon gayet doyurucuydu. Sıcak geldi. Teşekkürler.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
