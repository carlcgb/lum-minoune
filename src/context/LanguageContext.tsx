import { createContext, useContext, useState, ReactNode, FC } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.shop': 'Shop',
    'nav.skincare': 'Skincare',
    'nav.body': 'Body',
    'nav.fragrance': 'Fragrance',
    'nav.about': 'About',
    'nav.cart': 'Cart',
    
    // Home
    'home.hero.title': 'Curated Essentials',
    'home.hero.subtitle': 'Thoughtfully selected pieces for modern living',
    'home.hero.cta': 'Explore Collection',
    'home.featured': 'Featured',
    'home.viewAll': 'View All Products',
    
    // Shop
    'shop.title': 'Shop',
    'shop.subtitle': 'Discover our complete collection',
    'shop.all': 'All',
    'shop.product': 'product',
    'shop.products': 'products',
    'shop.in': 'in',
    'shop.noProducts': 'No products found in this category.',
    'shop.viewAll': 'View All Products',
    'category.Skincare': 'Skincare',
    'category.Body Care': 'Body Care',
    'category.Fragrance': 'Fragrance',
    'category.Home': 'Home',
    'category.Accessories': 'Accessories',
    
    // About
    'about.title': 'About LÜM',
    'about.tagline': 'Curated essentials for modern living',
    'about.story.title': 'Our Story',
    'about.story.p1': 'LÜM was born from a simple belief: that everyday essentials should be thoughtfully crafted, beautifully designed, and made with care. We curate a collection of premium skincare, fragrance, and lifestyle products that elevate your daily routine.',
    'about.story.p2': 'Each product in our collection is carefully selected for its quality, ingredients, and commitment to excellence. We believe in transparency, sustainability, and the power of small, intentional choices.',
    'about.values.title': 'Our Values',
    'about.values.quality.title': 'Quality First',
    'about.values.quality.desc': 'We source only the finest ingredients and work with trusted artisans and manufacturers who share our commitment to excellence.',
    'about.values.curation.title': 'Thoughtful Curation',
    'about.values.curation.desc': 'Every product in our collection has been carefully selected. We believe in quality over quantity, and each item serves a purpose in your daily routine.',
    'about.values.sustainability.title': 'Sustainability',
    'about.values.sustainability.desc': 'We\'re committed to responsible sourcing, eco-friendly packaging, and supporting brands that prioritize environmental consciousness.',
    'about.values.transparency.title': 'Transparency',
    'about.values.transparency.desc': 'We believe you should know exactly what you\'re putting on your skin. Full ingredient lists and sourcing information are always available.',
    'about.contact.title': 'Contact',
    'about.contact.p1': 'Have questions? We\'d love to hear from you.',
    'about.contact.email': 'Email:',
    'about.contact.follow': 'Follow us:',
    'about.cta': 'Explore Our Collection',
    
    // Product
    'product.back': '← Back',
    'product.quantity': 'Quantity',
    'product.addToCart': 'Add to Cart',
    
    // Cart
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.continueShopping': 'Continue Shopping',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.shippingNote': 'Calculated at checkout',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.clear': 'Clear Cart',
    
    // Footer
    'footer.description': 'Curated essentials for modern living.',
    'footer.shop': 'Shop',
    'footer.info': 'Info',
    'footer.shipping': 'Shipping',
    'footer.returns': 'Returns',
    'footer.contact': 'Contact',
    'footer.connect': 'Connect',
    'footer.newsletter': 'Newsletter',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.shop': 'Boutique',
    'nav.skincare': 'Soins visage',
    'nav.body': 'Corps',
    'nav.fragrance': 'Parfum',
    'nav.about': 'À propos',
    'nav.cart': 'Panier',
    
    // Home
    'home.hero.title': 'Essentiels Sélectionnés',
    'home.hero.subtitle': 'Pièces soigneusement choisies pour une vie moderne',
    'home.hero.cta': 'Découvrir la Collection',
    'home.featured': 'En vedette',
    'home.viewAll': 'Voir tous les produits',
    
    // Shop
    'shop.title': 'Boutique',
    'shop.subtitle': 'Découvrez notre collection complète',
    'shop.all': 'Tout',
    'shop.product': 'produit',
    'shop.products': 'produits',
    'shop.in': 'dans',
    'shop.noProducts': 'Aucun produit trouvé dans cette catégorie.',
    'shop.viewAll': 'Voir tous les produits',
    'category.Skincare': 'Soins visage',
    'category.Body Care': 'Soins corps',
    'category.Fragrance': 'Parfum',
    'category.Home': 'Maison',
    'category.Accessories': 'Accessoires',
    
    // About
    'about.title': 'À propos de LÜM',
    'about.tagline': 'Essentiels sélectionnés pour une vie moderne',
    'about.story.title': 'Notre Histoire',
    'about.story.p1': 'LÜM est né d\'une conviction simple : les essentiels du quotidien doivent être conçus avec soin, magnifiquement conçus et fabriqués avec attention. Nous sélectionnons une collection de produits premium pour les soins de la peau, le parfum et le mode de vie qui élèvent votre routine quotidienne.',
    'about.story.p2': 'Chaque produit de notre collection est soigneusement sélectionné pour sa qualité, ses ingrédients et son engagement envers l\'excellence. Nous croyons en la transparence, la durabilité et le pouvoir des petits choix intentionnels.',
    'about.values.title': 'Nos Valeurs',
    'about.values.quality.title': 'Qualité d\'abord',
    'about.values.quality.desc': 'Nous nous approvisionnons uniquement en ingrédients de la plus haute qualité et travaillons avec des artisans et fabricants de confiance qui partagent notre engagement envers l\'excellence.',
    'about.values.curation.title': 'Sélection Réfléchie',
    'about.values.curation.desc': 'Chaque produit de notre collection a été soigneusement sélectionné. Nous croyons en la qualité plutôt qu\'en la quantité, et chaque article a un but dans votre routine quotidienne.',
    'about.values.sustainability.title': 'Durabilité',
    'about.values.sustainability.desc': 'Nous nous engageons à un approvisionnement responsable, des emballages écologiques et à soutenir les marques qui privilégient la conscience environnementale.',
    'about.values.transparency.title': 'Transparence',
    'about.values.transparency.desc': 'Nous pensons que vous devriez savoir exactement ce que vous mettez sur votre peau. Les listes complètes d\'ingrédients et les informations sur l\'approvisionnement sont toujours disponibles.',
    'about.contact.title': 'Contact',
    'about.contact.p1': 'Des questions ? Nous serions ravis de vous entendre.',
    'about.contact.email': 'Courriel :',
    'about.contact.follow': 'Suivez-nous :',
    'about.cta': 'Découvrir la Collection',
    
    // Product
    'product.back': '← Retour',
    'product.quantity': 'Quantité',
    'product.addToCart': 'Ajouter au panier',
    
    // Cart
    'cart.title': 'Votre panier',
    'cart.empty': 'Votre panier est vide',
    'cart.continueShopping': 'Continuer les achats',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Expédition',
    'cart.shippingNote': 'Calculé à la caisse',
    'cart.total': 'Total',
    'cart.checkout': 'Passer à la caisse',
    'cart.clear': 'Vider le panier',
    
    // Footer
    'footer.description': 'Essentiels sélectionnés pour une vie moderne.',
    'footer.shop': 'Boutique',
    'footer.info': 'Info',
    'footer.shipping': 'Expédition',
    'footer.returns': 'Retours',
    'footer.contact': 'Contact',
    'footer.connect': 'Connexion',
    'footer.newsletter': 'Infolettre',
    'footer.rights': 'Tous droits réservés.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Detect browser language or use stored preference
    const stored = localStorage.getItem('language') as Language;
    if (stored && (stored === 'en' || stored === 'fr')) {
      return stored;
    }
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
