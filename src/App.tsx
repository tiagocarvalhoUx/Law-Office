import { useEffect, useState } from "react";
import logo from "../public/images/reza-vela 1.png"

// Importação das imagens do carrossel
import image1 from "../src/assets/images/vela1.png"
import image2 from "../src/assets/images/vela2.png"
import image3 from "../src/assets/images/vela3.png"
import image4 from "../src/assets/images/vela4.png"
import image5 from "../src/assets/images/vela5.png"
import image6 from "../src/assets/images/vela6.png"
import image7 from "../src/assets/images/vela7.png"

type Image = {
  id: number;
  src: string;
  alt: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'aromática' | 'ritual' | 'especial';
  features: string[];
};

const images: Image[] = [
  { id: 1, src: image1, alt: "Reza Vela - Flor de Laranjeira (Vela de Soja)" },
  { id: 2, src: image2, alt: "Reza Vela - Lichia (Vela de Soja Pavio de Madeira)" },
  { id: 3, src: image4, alt: "Reza Vela - Arruda com Cristais de Sal" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Lavanda • Calm",
    description: "Acalma o ambiente com lavanda pura e camomila selvagem",
    price: "49,90",
    image: '',
    category: "aromática",
    features: ["Cera de soja", "Pavio de algodão", "8h de queima"]
  },
  {
    id: 2,
    name: "Ritual • Purificação",
    description: "Blend sagrado de ervas e especiarias para proteção",
    price: "69,90",
    image: '',
    category: "ritual",
    features: ["Cera de coco", "Pavio de madeira", "12h de queima"]
  },
  {
    id: 3,
    name: "Especiarias • Aconchego",
    description: "Notas quentes de canela, cravo e baunilha bourbon",
    price: "59,90",
    image: '',
    category: "especial",
    features: ["Mistura vegetal", "Pavio de algodão", "10h de queima"]
  }
];

export default function RezaVelaModern() {
  const [current, setCurrent] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animations and scroll effects
  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Enhanced carousel
  useEffect(() => {
    const id = setInterval(() =>
      setCurrent((c) => (c + 1) % images.length),
    4000);
    return () => clearInterval(id);
  }, []);

  const whatsappNumber = "+5518998152347";
  const whatsappMessage = encodeURIComponent("Olá! 🕯️ Gostaria de conhecer as velas artesanais Reza Vela");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white antialiased overflow-x-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-500/30 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-rose-500/20 to-pink-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-indigo-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Interactive mouse follower */}
        <div 
          className="absolute w-32 h-32 bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `translate(${Math.sin(scrollY * 0.01) * 20}px, ${Math.cos(scrollY * 0.01) * 20}px)`,
          }}
        ></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
      </div>

      {/* Glassmorphism Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:shadow-amber-500/25 transition-all duration-500 group-hover:scale-105 border border-white/20">
                <img 
                  src={logo} 
                  alt="Reza Vela Logo" 
                  className="w-12 h-12 object-contain drop-shadow-lg filter brightness-110"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/30 to-orange-500/20 animate-pulse opacity-50"></div>
              </div>
              <div>
                <h1 className="font-black text-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-shimmer">
                  Reza Vela
                </h1>
                <p className="text-xs text-amber-300/80 font-medium tracking-wide">VELAS ARTESANAIS PREMIUM</p>
              </div>
            </div>

            <nav className="hidden md:flex gap-8 items-center">
              {['Produtos', 'Processo', 'Sobre'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/80 hover:text-amber-400 transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                </a>
              ))}
              <a
                href="#contato"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 border border-amber-400/30"
              >
                <span className="relative z-10">Comprar Agora</span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 border border-white/20"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>
            </button>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-t border-white/10 md:hidden z-50">
                <nav className="px-6 py-6 space-y-4">
                  {['Produtos', 'Processo', 'Sobre'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-medium text-white/80 hover:text-amber-400 transition-all duration-300 py-3 border-b border-white/10 last:border-b-0"
                    >
                      {item}
                    </a>
                  ))}
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-2xl text-center mt-6"
                  >
                    Comprar Agora
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section with Modern Design */}
      <main className="pt-24 relative">
        <section className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className={`space-y-10 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="space-y-8">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 backdrop-blur-sm">
                    <span className="text-amber-300 text-sm font-semibold tracking-wide">✨ EXPERIÊNCIA SENSORIAL ÚNICA</span>
                  </div>
                  
                  <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent bg-300% animate-shimmer">
                      Velas
                    </span>
                    <br />
                    <span className="text-white drop-shadow-2xl">artesanais</span>
                    <br />
                    <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-shimmer">
                      premium
                    </span>
                  </h2>
                  
                  <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-light">
                    Transforme seu espaço em um <span className="text-amber-400 font-semibold">santuário de bem-estar</span>. 
                    Nossas velas artesanais combinam ceras vegetais premium, 
                    <span className="text-rose-400 font-semibold"> aromas exclusivos</span> e design contemporâneo.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="#produtos"
                    className="group bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:via-orange-400 hover:to-rose-400 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    <span className="relative z-10">Explorar Coleção</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-colors duration-300">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>

                {/* Modern Features Grid */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {[
                    { icon: "✨", title: "Ceras Premium", desc: "Coco • Soja • Vegetal", color: "from-amber-500/20 to-orange-500/20" },
                    { icon: "🌿", title: "Aromas Exclusivos", desc: "Blends autorais únicos", color: "from-emerald-500/20 to-green-500/20" },
                    { icon: "🕯️", title: "Pavios Ecológicos", desc: "Algodão e madeira natural", color: "from-rose-500/20 to-pink-500/20" },
                    { icon: "♻️", title: "100% Sustentável", desc: "Produção consciente", color: "from-purple-500/20 to-indigo-500/20" }
                  ].map((feature, idx) => (
                    <div key={idx} className={`group p-6 rounded-2xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                      <h4 className="font-bold text-white text-base mb-2">{feature.title}</h4>
                      <p className="text-sm text-white/60">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3D Carousel with Glass Effects */}
              <div className={`relative ${isLoaded ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 group border border-white/20">
                  <div 
                    className="relative h-[500px] sm:h-[700px] bg-gradient-to-br from-slate-800 to-slate-900"
                    style={{ 
                      transform: `translateY(${scrollY * 0.05}px) rotateX(${Math.sin(scrollY * 0.001) * 2}deg)`,
                      perspective: '1000px'
                    }}
                  >
                    {images.map((img, idx) => (
                      <img
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          idx === current ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
                        }`}
                      />
                    ))}
                    
                    {/* Advanced overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-purple-900/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-500/5 to-pink-500/10"></div>
                  </div>

                  {/* Glassmorphism Navigation */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
                      className="bg-white/10 backdrop-blur-lg hover:bg-white/20 p-4 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-110 border border-white/20"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrent((c) => (c + 1) % images.length)}
                      className="bg-white/10 backdrop-blur-lg hover:bg-white/20 p-4 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-110 border border-white/20"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Modern Progress Dots */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          i === current
                            ? "w-8 bg-white shadow-lg shadow-white/50"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-500/20 rounded-full blur-2xl animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-pink-500/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Products Section */}
        <section id="produtos" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 backdrop-blur-sm mb-8">
                <span className="text-amber-300 text-sm font-semibold tracking-wide">🕯️ NOSSA COLEÇÃO EXCLUSIVA</span>
              </div>
              <h3 className="text-5xl sm:text-7xl font-black mb-8">
                <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  Experiências
                </span>
                <br />
                <span className="text-white">Sensoriais</span>
              </h3>
              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
                Cada vela é uma jornada aromática única, criada com ingredientes premium e 
                técnicas artesanais que honram a tradição do bem-estar contemporâneo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product, idx) => (
                <article
                  key={product.id}
                  className={`group bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 border border-white/10 hover:border-white/30 ${
                    isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  onMouseLeave={() => setActiveProduct(null)}
                >
                  <div className="relative mb-8 rounded-2xl overflow-hidden border border-white/20">
                    <img
                      src={idx % 3 === 0 ? image3 : idx % 3 === 1 ? image5 : image6}
                      alt={product.name}
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category badge with glow */}
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border transition-all duration-300 ${
                        product.category === 'ritual'
                          ? 'bg-purple-500/80 text-white border-purple-400/50 shadow-lg shadow-purple-500/50'
                          : product.category === 'especial'
                          ? 'bg-rose-500/80 text-white border-rose-400/50 shadow-lg shadow-rose-500/50'
                          : 'bg-amber-500/80 text-white border-amber-400/50 shadow-lg shadow-amber-500/50'
                      }`}>
                        {product.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors duration-300">
                      {product.name}
                    </h4>
                    <p className="text-white/70 leading-relaxed">{product.description}</p>

                    {/* Modern features list */}
                    <div className="space-y-3">
                      {product.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-3 text-sm text-white/60">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div>
                        <span className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                          R$ {product.price}
                        </span>
                        <div className="text-xs text-white/40 mt-1 font-medium">À vista no PIX</div>
                      </div>
                      
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                          activeProduct === product.id
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl shadow-amber-500/50 border border-amber-400/50'
                            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                        }`}
                      >
                        <span className="relative z-10">Pedir Agora</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with 3D Elements */}
        <section id="processo" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid gap-20 lg:grid-cols-2 items-center">
              <div className="space-y-12">
                <div>
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 backdrop-blur-sm mb-8">
                    <span className="text-purple-300 text-sm font-semibold tracking-wide">🔮 PROCESSO ARTESANAL</span>
                  </div>
                  <h3 className="text-5xl sm:text-7xl font-black">
                    <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Como Criamos
                    </span>
                    <br />
                    <span className="text-white">Cada Vela</span>
                  </h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Seleção dos Ingredientes",
                      description: "Escolhemos cuidadosamente ceras vegetais premium, óleos essenciais puros e ervas selecionadas de fornecedores sustentáveis.",
                      color: "from-amber-500 to-orange-500"
                    },
                    {
                      step: "02", 
                      title: "Processo Artesanal",
                      description: "Derretimento controlado em baixa temperatura, mistura precisa dos aromas e posicionamento perfeito do pavio ecológico.",
                      color: "from-emerald-500 to-teal-500"
                    },
                    {
                      step: "03",
                      title: "Testes de Qualidade", 
                      description: "Cada lote passa por rigorosos testes de queima, duração e intensidade aromática para garantir performance excepcional.",
                      color: "from-rose-500 to-pink-500"
                    },
                    {
                      step: "04",
                      title: "Embalagem Cuidadosa",
                      description: "Empacotamento artesanal com materiais 100% sustentáveis e atenção especial aos detalhes de apresentação.",
                      color: "from-purple-500 to-indigo-500"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group hover:scale-105 transition-all duration-500">
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 border border-white/20`}>
                          {item.step}
                        </div>
                      </div>
                      <div className="space-y-3 pt-3">
                        <h4 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-white/70 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={image7}
                    alt="Processo artesanal"
                    className="w-full h-[700px] object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-purple-900/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10"></div>
                </div>
                
                {/* Floating stats with glassmorphism */}
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-white/60 font-semibold tracking-wide">ARTESANAL</div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="text-4xl font-black bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">8-12h</div>
                  <div className="text-sm text-white/60 font-semibold tracking-wide">DURAÇÃO</div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -z-10 top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Contact Section with Modern Cards */}
        <section id="sobre" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid gap-20 lg:grid-cols-2">
              <div className="space-y-10">
                <div>
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-400/30 backdrop-blur-sm mb-8">
                    <span className="text-rose-300 text-sm font-semibold tracking-wide">💫 NOSSA HISTÓRIA</span>
                  </div>
                  <h3 className="text-5xl sm:text-7xl font-black mb-8">
                    <span className="bg-gradient-to-r from-rose-300 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                      Nossa Paixão
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-8 text-lg text-white/70 leading-relaxed">
                  <p className="text-xl">
                    <strong className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-black">Reza Vela</strong> nasce da paixão pelo artesanal e pelas 
                    tradições ancestrais de autocuidado. Cada vela que criamos carrega uma intenção: 
                    <span className="text-amber-400 font-semibold"> transformar ambientes em santuários de bem-estar</span>.
                  </p>
                  <p>
                    Nosso compromisso vai além da qualidade dos ingredientes. Buscamos criar 
                    <span className="text-rose-400 font-semibold"> experiências que conectem você</span> com momentos de presença, reflexão e renovação interior através dos aromas e da luz suave das nossas velas.
                  </p>
                  <p>
                    Cada produto é uma obra de arte funcional, criada com amor, dedicação e o compromisso de trazer 
                    <span className="text-purple-400 font-semibold"> mais beleza e harmonia</span> para o seu cotidiano.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 hover:scale-105 transition-all duration-300">
                    <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">500+</div>
                    <div className="text-sm text-white/60 font-semibold tracking-wide">VELAS CRIADAS</div>
                  </div>
                  <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-sm border border-rose-400/30 hover:scale-105 transition-all duration-300">
                    <div className="text-5xl font-black bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-3">98%</div>
                    <div className="text-sm text-white/60 font-semibold tracking-wide">SATISFAÇÃO</div>
                  </div>
                </div>
              </div>

              <div id="contato" className="space-y-10">
                <div>
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 backdrop-blur-sm mb-8">
                    <span className="text-emerald-300 text-sm font-semibold tracking-wide">💬 VAMOS CONVERSAR</span>
                  </div>
                  <h3 className="text-5xl font-black">
                    <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Entre em Contato
                    </span>
                  </h3>
                </div>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 space-y-8 border border-white/20 shadow-2xl">
                  <p className="text-xl text-white/80 leading-relaxed">
                    Peça pelo WhatsApp, tire dúvidas sobre nossas fórmulas ou solicite 
                    <span className="text-emerald-400 font-semibold"> encomendas personalizadas</span> para ocasiões especiais.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-105 border border-emerald-400/30 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="relative z-10">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="relative z-10">Conversar no WhatsApp</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

                  <div className="pt-8 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-6 text-sm text-white/60">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📱</span>
                        <span className="font-medium">Pedidos via WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚚</span>
                        <span className="font-medium">Entrega em toda cidade</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">💳</span>
                        <span className="font-medium">PIX, cartão e dinheiro</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🎁</span>
                        <span className="font-medium">Embalagem para presente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 group">
              <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-500/30 to-orange-600/30 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:shadow-amber-500/25 transition-all duration-500 border border-white/20">
                <img 
                  src={logo} 
                  alt="Reza Vela Logo" 
                  className="w-12 h-12 object-contain drop-shadow-lg filter brightness-110"
                />
              </div>
              <div>
                <div className="font-black text-2xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Reza Vela</div>
                <div className="text-white/40 text-sm font-medium tracking-wide">VELAS ARTESANAIS PREMIUM</div>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-white/60">
              <span>© {new Date().getFullYear()} Reza Vela</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span>Produção 100% artesanal</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span>Feito com ❤️</span>
            </div>
            
            <div className="flex items-center gap-4">
              {['instagram', 'facebook', 'pinterest'].map((social, idx) => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80">
                    {social === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    )}
                    {social === 'facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                    {social === 'pinterest' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.786-1.378l-.665 2.572c-.24.921-.89 2.077-1.332 2.794.999.308 2.058.485 3.169.485 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017 0z"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button with Advanced Effects */}
      <div className="fixed right-8 bottom-8 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-block"
        >
          {/* Multiple pulse rings */}
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20 scale-150"></div>
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-pulse opacity-30 scale-125"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-ping opacity-40"></div>
          
          {/* Main button */}
          <div className="relative w-18 h-18 bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 group-hover:rotate-12 border-2 border-emerald-400/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white group-hover:scale-110 transition-transform duration-300">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Modern tooltip */}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-slate-900/95 backdrop-blur-xl text-white px-6 py-4 rounded-2xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-white/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Fale conosco no WhatsApp
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-slate-900 rotate-45 border-r border-t border-white/20"></div>
          </div>
        </a>
      </div>

      {/* Custom Animations and Styles */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-shimmer {
          background-size: 300% 300%;
          animation: shimmer 4s ease infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }

        .bg-300% {
          background-size: 300% 300%;
        }

        /* Glassmorphism utilities */
        .backdrop-blur-3xl {
          backdrop-filter: blur(64px);
        }

        /* Custom gradient utilities */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        .shadow-4xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.25);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar but allow scrolling */
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}