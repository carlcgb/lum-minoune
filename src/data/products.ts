import { Product } from '../types';

// Données produits boutique premium - structure correspondant au Square shop
export const products: Product[] = [
  // Soin de la peau
  {
    id: '1',
    name: 'Huile Démaquillante',
    description: 'Huile nettoyante profonde et douce qui illumine et raffermit la peau. Formulée avec de l\'huile de graines de cumin noir et de l\'huile de jojoba. 75% d\'huiles naturelles, sans allergènes.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop',
    category: 'Soin de la Peau',
    featured: true,
  },
  {
    id: '2',
    name: 'Gel Apaisant Équilibrant',
    description: 'Gel hydratant à l\'effet apaisant, idéal pour les peaux sensibles. Contient de l\'eau de rose de Damas, de l\'acide hyaluronique 8 couches et de l\'or pur 24k. Hydratation 72h avec effet rafraîchissant.',
    price: 58,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop',
    category: 'Soin de la Peau',
    featured: true,
  },
  {
    id: '3',
    name: 'Sérum Vitamine C',
    description: 'Sérum éclaircissant avec 20% de vitamine C et acide férulique. Réduit les taches brunes et unifie le teint. Convient à tous les types de peau.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=800&fit=crop',
    category: 'Soin de la Peau',
    featured: false,
  },
  {
    id: '4',
    name: 'Masque Hydratant Visage',
    description: 'Masque hydratant intensif à l\'acide hyaluronique et à l\'aloé vera. À utiliser hebdomadairement pour une peau rebondie et éclatante. 50ml.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&h=800&fit=crop',
    category: 'Soin de la Peau',
    featured: false,
  },
  {
    id: '5',
    name: 'Crème Nuit Rétinol',
    description: 'Crème de nuit anti-âge avancée au rétinol encapsulé. Lisse les rides et améliore la texture de la peau. 50ml.',
    price: 78,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop',
    category: 'Soin de la Peau',
    featured: false,
  },
  // Soin du Corps
  {
    id: '6',
    name: 'Huile pour le Corps',
    description: 'Huile corporelle nourrissante aux huiles de jojoba, d\'argan et de cynorrhodon. S\'absorbe rapidement, laisse la peau soyeuse. 200ml.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    category: 'Soin du Corps',
    featured: true,
  },
  {
    id: '7',
    name: 'Gommage Corporel',
    description: 'Gommage exfoliant au sel marin et aux huiles essentielles. Élimine les cellules mortes et révèle une peau lisse et radieuse. 300g.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop',
    category: 'Soin du Corps',
    featured: false,
  },
  {
    id: '8',
    name: 'Crème pour les Mains',
    description: 'Crème pour les mains riche au beurre de karité et à la vitamine E. Nourrit et protège les mains. 100ml.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop',
    category: 'Soin du Corps',
    featured: false,
  },
  // Parfum
  {
    id: '9',
    name: 'Essence No. 01',
    description: 'Une composition florale délicate aux notes de jasmin, musc blanc et bergamote. Artisanal, créé en petites séries. 50ml EDP.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop',
    category: 'Parfum',
    featured: true,
  },
  {
    id: '10',
    name: 'Essence No. 02',
    description: 'Boisé et chaleureux aux notes de santal, vanille et ambre. Parfum unisexe. 50ml EDP.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1595425970377-c9700293f5e4?w=800&h=800&fit=crop',
    category: 'Parfum',
    featured: false,
  },
  // Maison
  {
    id: '11',
    name: 'Bougie Soja - Bergamote',
    description: 'Bougie premium en cire de soja aux notes de bergamote et cèdre. Coulée à la main, brûle 40+ heures. 8oz.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1602874805491-3d7b5f2b8a73?w=800&h=800&fit=crop',
    category: 'Maison',
    featured: false,
  },
  {
    id: '12',
    name: 'Bougie Soja - Lavande',
    description: 'Bougie apaisante à la lavande et camomille. Cire de soja premium, durée de combustion 40+ heures. 8oz.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1602874805491-3d7b5f2b8a73?w=800&h=800&fit=crop',
    category: 'Maison',
    featured: false,
  },
  // Accessoires
  {
    id: '13',
    name: 'Foulard en Soie',
    description: 'Bords roulés à la main, 100% soie pure. Disponible en trois coloris élégants. 90cm x 90cm.',
    price: 165,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=800&fit=crop',
    category: 'Accessoires',
    featured: true,
  },
  {
    id: '14',
    name: 'Set Rouleau de Jade',
    description: 'Rouleau facial en jade authentique et outil gua sha. Aide à réduire les poches et améliorer la circulation. Inclut une pochette de rangement.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    category: 'Accessoires',
    featured: false,
  },
];

// Obtenir toutes les catégories uniques
export const categories = Array.from(new Set(products.map(p => p.category))).sort();
