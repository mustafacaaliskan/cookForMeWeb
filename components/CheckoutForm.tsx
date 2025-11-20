'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Food } from '@/lib/data';

interface CheckoutFormProps {
    food: Food;
}

export default function CheckoutForm({ food }: CheckoutFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Track the "Buy" click
            await fetch('/api/track-click', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    foodId: food.id,
                    price: food.price,
                    timestamp: new Date().toISOString(),
                }),
            });

            // Simulate processing delay for realism
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Redirect to success page
            router.push('/success');
        } catch (error) {
            console.error('Error tracking click:', error);
            // Even if tracking fails, redirect to success to not break user flow
            router.push('/success');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Ad</label>
                    <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Adınız"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Soyad</label>
                    <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Soyadınız"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">Teslimat Adresi</label>
                <textarea
                    id="address"
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Açık adresiniz..."
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Telefon Numarası</label>
                <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="05XX XXX XX XX"
                />
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-medium">Ödeme Yöntemi</h3>
                <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                        <input type="radio" name="payment" value="credit" defaultChecked className="text-primary focus:ring-primary" />
                        <span>Kredi / Banka Kartı</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
                        <input type="radio" name="payment" value="door" className="text-primary focus:ring-primary" />
                        <span>Kapıda Ödeme</span>
                    </label>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary py-4 text-lg shadow-lg mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'İşleniyor...' : `Siparişi Tamamla (₺${food.price})`}
            </button>

            <p className="text-xs text-center text-muted-foreground mt-4">
                Sipariş vererek <a href="#" className="underline">Kullanım Koşulları</a>'nı kabul etmiş olursunuz.
            </p>
        </form>
    );
}
