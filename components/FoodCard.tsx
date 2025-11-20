
import Image from 'next/image';
import Link from 'next/link';
import { Food } from '@/lib/data';

interface FoodCardProps {
    food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
    return (
        <Link href={`/food/${food.id}`} className="group block h-full">
            <div className="h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm card-hover flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={food.image}
                        alt={food.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                        {food.prepTime}
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                            {food.title}
                        </h3>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                            <span>★</span>
                            <span>{food.cook.rating}</span>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                        {food.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                <Image
                                    src={food.cook.avatar}
                                    alt={food.cook.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">
                                {food.cook.name}
                            </span>
                        </div>

                        <span className="font-bold text-lg text-primary">
                            ₺{food.price}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
