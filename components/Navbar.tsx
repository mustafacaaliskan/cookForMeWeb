'use client';

import Link from 'next/link';

export default function Navbar() {
    const scrollToFoods = (e: React.MouseEvent) => {
        e.preventDefault();
        const foodsSection = document.getElementById('foods-section');
        if (foodsSection) {
            foodsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
            <div className="container-custom flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">CookForMe</span>
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Anasayfa
                    </Link>
                    <a href="#foods-section" onClick={scrollToFoods} className="hover:text-primary transition-colors cursor-pointer">
                        Yemekler
                    </a>
                </div>
            </div>
        </nav>
    );
}
