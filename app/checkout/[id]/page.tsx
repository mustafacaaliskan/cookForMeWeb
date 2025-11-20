
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FOODS } from '@/lib/data';
import CheckoutForm from '@/components/CheckoutForm';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function CheckoutPage({ params }: PageProps) {
    const { id } = await params;
    const food = FOODS.find((f) => f.id === id);

    if (!food) {
        notFound();
    }

    return (
        <div className="container-custom py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Siparişi Tamamla</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Order Summary */}
                <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                        <h2 className="font-semibold text-lg mb-4">Sipariş Özeti</h2>

                        <div className="flex gap-4 mb-4">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={food.image}
                                    alt={food.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium line-clamp-2">{food.title}</h3>
                                <p className="text-sm text-muted-foreground">{food.cook.name}</p>
                            </div>
                        </div>

                        <div className="space-y-2 py-4 border-t border-border text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Ara Toplam</span>
                                <span>₺{food.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Teslimat Ücreti</span>
                                <span className="text-success">Ücretsiz</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex justify-between items-center font-bold text-lg">
                            <span>Toplam</span>
                            <span className="text-primary">₺{food.price}</span>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                        <h2 className="font-semibold text-xl mb-6">Teslimat Bilgileri</h2>
                        <CheckoutForm food={food} />
                    </div>
                </div>
            </div>
        </div>
    );
}
