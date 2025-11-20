
export interface Cook {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  verified: boolean;
  location: string;
}

export interface Food {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  cookId: string;
  cook: Cook;
  ingredients: string[];
  prepTime: string;
}

export const COOKS: Cook[] = [
  {
    id: 'c1',
    name: 'Ayşe Teyze',
    avatar: '/images/cooks/ayse.png',
    rating: 4.9,
    verified: true,
    location: 'Kadıköy, İstanbul'
  },
  {
    id: 'c2',
    name: 'Mehmet Usta',
    avatar: '/images/cooks/mehmet.png',
    rating: 4.7,
    verified: true,
    location: 'Beşiktaş, İstanbul'
  },
  {
    id: 'c3',
    name: 'Elif\'in Mutfağı',
    avatar: '/images/cooks/elif.png',
    rating: 4.8,
    verified: true,
    location: 'Üsküdar, İstanbul'
  }
];

export const FOODS: Food[] = [
  {
    id: 'f1',
    title: 'Ev Yapımı Mantı',
    description: 'El açması, bol kıymalı, tereyağlı soslu hakiki Kayseri mantısı. Yanında ev yoğurdu ile servis edilir.',
    price: 220,
    image: '/images/foods/manti.png',
    cookId: 'c1',
    cook: COOKS[0],
    ingredients: ['Un', 'Kıyma', 'Soğan', 'Baharatlar', 'Yoğurt', 'Tereyağı'],
    prepTime: '45 dk'
  },
  {
    id: 'f2',
    title: 'Zeytinyağlı Yaprak Sarma',
    description: 'İncecik sarılmış, bol limonlu ve kuş üzümlü zeytinyağlı yaprak sarma. Günlük taze olarak hazırlanır.',
    price: 190,
    image: '/images/foods/sarma.png',
    cookId: 'c1',
    cook: COOKS[0],
    ingredients: ['Asma Yaprağı', 'Pirinç', 'Soğan', 'Kuş Üzümü', 'Zeytinyağı', 'Limon'],
    prepTime: '60 dk'
  },
  {
    id: 'f3',
    title: 'Karnıyarık & Pilav',
    description: 'Kızarmış patlıcan, dana kıyma ve domates sosunun muhteşem uyumu. Yanında tane tane pirinç pilavı.',
    price: 230,
    image: '/images/foods/karniyarik.png',
    cookId: 'c2',
    cook: COOKS[1],
    ingredients: ['Patlıcan', 'Kıyma', 'Domates', 'Biber', 'Pirinç', 'Tereyağı'],
    prepTime: '40 dk'
  },
  {
    id: 'f4',
    title: 'Mercimek Köftesi',
    description: 'Bol yeşillikli, nar ekşili, tam kıvamında mercimek köftesi. 1 porsiyonda 8 adet bulunur.',
    price: 180,
    image: '/images/foods/mercimek.png',
    cookId: 'c3',
    cook: COOKS[2],
    ingredients: ['Kırmızı Mercimek', 'Bulgur', 'Soğan', 'Salça', 'Maydanoz', 'Taze Soğan'],
    prepTime: '30 dk'
  },
  {
    id: 'f5',
    title: 'Hünkar Beğendi',
    description: 'Közlenmiş patlıcanlı beğendi yatağında yumuşacık dana tas kebabı. Osmanlı mutfağının vazgeçilmezi.',
    price: 240,
    image: '/images/foods/hunkar.png',
    cookId: 'c2',
    cook: COOKS[1],
    ingredients: ['Dana Eti', 'Patlıcan', 'Süt', 'Un', 'Kaşar Peyniri', 'Tereyağı'],
    prepTime: '50 dk'
  },
  {
    id: 'f6',
    title: 'İçli Köfte (3 Adet)',
    description: 'Dışı çıtır bulgur, içi cevizli ve baharatlı kıyma harcı. Haşlama veya kızartma seçeneğiyle.',
    price: 200,
    image: '/images/foods/icli_kofte.png',
    cookId: 'c3',
    cook: COOKS[2],
    ingredients: ['Bulgur', 'Kıyma', 'Ceviz', 'Soğan', 'Baharatlar'],
    prepTime: '45 dk'
  }
];
