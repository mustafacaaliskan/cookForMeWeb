'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface OrderButtonProps {
    foodId: string;
    price: number;
}

export default function OrderButton({ foodId, price }: OrderButtonProps) {
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleOrder = async () => {
        setIsProcessing(true);

        try {
            // Save to Supabase
            const { error } = await supabase
                .from('order_clicks')
                .insert([
                    {
                        food_id: foodId,
                        price: price,
                    }
                ]);

            if (error) {
                console.error('Error saving to database:', error);
            }

            // Simulate processing delay for realism
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Redirect to success page
            router.push('/success');
        } catch (error) {
            console.error('Error tracking click:', error);
            // Even if tracking fails, redirect to success to not break user flow
            router.push('/success');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <button
            onClick={handleOrder}
            disabled={isProcessing}
            className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isProcessing ? 'İşleniyor...' : 'Sipariş Ver'}
        </button>
    );
}
