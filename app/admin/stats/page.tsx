
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { FOODS } from '@/lib/data';

interface Order {
    id: string;
    foodId: string;
    price: number;
    timestamp: string;
    userAgent?: string;
}

export default function AdminStatsPage() {
    let orders: Order[] = [];

    // Read orders from the JSON file
    const logPath = path.join(process.cwd(), 'orders.json');

    if (fs.existsSync(logPath)) {
        try {
            const fileContent = fs.readFileSync(logPath, 'utf-8');
            orders = JSON.parse(fileContent);
        } catch (e) {
            console.error('Error reading orders:', e);
        }
    }

    // Calculate stats
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);

    // Count orders by food
    const ordersByFood = orders.reduce((acc, order) => {
        acc[order.foodId] = (acc[order.foodId] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="container-custom py-12">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <Link href="/" className="text-sm text-primary hover:underline">
                        ← Ana Sayfaya Dön
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-primary to-primary-hover text-white p-6 rounded-2xl shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Toplam Sipariş</div>
                        <div className="text-4xl font-bold">{totalOrders}</div>
                    </div>

                    <div className="bg-gradient-to-br from-success/90 to-success text-white p-6 rounded-2xl shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Potansiyel Gelir</div>
                        <div className="text-4xl font-bold">₺{totalRevenue}</div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-2xl shadow-lg">
                        <div className="text-sm opacity-90 mb-2">Ortalama Sipariş</div>
                        <div className="text-4xl font-bold">
                            ₺{totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0}
                        </div>
                    </div>
                </div>

                {/* Most Popular Foods */}
                <div className="bg-card border border-border rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-bold mb-6">Popüler Yemekler</h2>

                    {Object.keys(ordersByFood).length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                            Henüz sipariş bulunmuyor.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {Object.entries(ordersByFood)
                                .sort((a, b) => b[1] - a[1])
                                .map(([foodId, count]) => {
                                    const food = FOODS.find(f => f.id === foodId);
                                    if (!food) return null;

                                    const percentage = (count / totalOrders) * 100;

                                    return (
                                        <div key={foodId} className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-medium">{food.title}</span>
                                                    <span className="text-sm text-muted-foreground">
                                                        {count} sipariş ({percentage.toFixed(1)}%)
                                                    </span>
                                                </div>
                                                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                                    <div
                                                        className="bg-primary h-full rounded-full transition-all duration-500"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                </div>

                {/* Recent Orders */}
                <div className="bg-card border border-border rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-6">Son Siparişler</h2>

                    {orders.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                            Henüz sipariş bulunmuyor.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {[...orders].reverse().slice(0, 10).map((order) => {
                                const food = FOODS.find(f => f.id === order.foodId);
                                const date = new Date(order.timestamp);

                                return (
                                    <div
                                        key={order.id}
                                        className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <div className="font-medium">{food?.title || 'Bilinmeyen Ürün'}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {date.toLocaleString('tr-TR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </div>
                                        </div>
                                        <div className="font-bold text-primary">₺{order.price}</div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
