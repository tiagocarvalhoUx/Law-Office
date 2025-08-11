import React, { useEffect, useState } from "react";

// Enhanced Reza Vela Landing Page with Modern UI/UX
// TypeScript + Tailwind CSS with glassmorphism, animations, and premium feel

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
  { id: 1, src: "/images/candle-1.jpg", alt: "Vela aromática - lavanda" },
  { id: 2, src: "/images/candle-2.jpg", alt: "Vela ritualística com ervas" },
  { id: 3, src: "/images/candle-3.jpg", alt: "Coleção Reza Vela" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Lavanda • Calm",
    description: "Acalma o ambiente com lavanda pura e camomila selvagem",
    price: "49,90",
    image: "/images/prod-1.jpg",
    category: "aromática",
    features: ["Cera de soja", "Pavio de algodão", "8h de queima"]
  },
  {
    id: 2,
    name: "Ritual • Purificação",
    description: "Blend sagrado de ervas e especiarias para proteção",
    price: "69,90",
    image: "/images/prod-2.jpg",
    category: "ritual",
    features: ["Cera de coco", "Pavio de madeira", "12h de queima"]
  },
  {
    id: 3,
    name: "Especiarias • Aconchego",
    description: "Notas quentes de canela, cravo e baunilha bourbon",
    price: "59,90",
    image: "/images/prod-3.jpg",
    category: "especial",
    features: ["Mistura vegetal", "Pavio de algodão", "10h de queima"]
  }
];

export default function RezaVelaEnhanced(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  // Animations and scroll effects
  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced carousel with smoother transitions
  useEffect(() => {
    const id = setInterval(() =>
      setCurrent((c) => (c + 1) % images.length),
    5000);
    return () => clearInterval(id);
  }, []);

  const whatsappNumber = "+55YOURNUMBER";
  const whatsappMessage = encodeURIComponent("Olá! 🕯️ Gostaria de conhecer as velas artesanais Reza Vela");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-gray-900 antialiased overflow-x-hidden">
      {/* Enhanced Navigation with Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-amber-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                {/* Enhanced logo with flame animation */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
                  <path d="M12 2L12 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse"/>
                  <circle cx="12" cy="7" r="3.5" fill="rgba(255,255,255,0.9)" className="animate-bounce" style={{animationDuration: '3s'}}/>
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent animate-ping"></div>
              </div>
              <div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Reza Vela
                </h1>
                <p className="text-xs text-gray-600 font-medium">Velas artesanais premium</p>
              </div>
            </div>

            <nav className="hidden md:flex gap-8 items-center">
              {['Produtos', 'Processo', 'Sobre'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="#contato"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Comprar Agora
              </a>
            </nav>

            <button className="md:hidden p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax and Enhanced Animations */}
      <main className="pt-24">
        <section className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className={`space-y-8 ${isLoaded ? 'animate-in slide-in-from-left duration-1000' : 'opacity-0'}`}>
                <div className="space-y-6">
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent animate-gradient">
                      Velas artesanais
                    </span>
                    <br />
                    <span className="text-gray-800">para o seu</span>
                    <br />
                    <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                      ritual de bem-estar
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                    Criamos experiências sensoriais únicas com velas aromáticas e ritualísticas. 
                    Feitas à mão com <span className="font-semibold text-amber-600">ceras vegetais premium</span>, 
                    blends exclusivos de especiarias e o carinho do processo artesanal.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#produtos"
                    className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Explorar Coleção
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21.7 17.3a9.7 9.7 0 1 0-2.3 2.3l1.6 1.6 1.7-0.5-1-3.4z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>

                {/* Enhanced Features Grid */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  {[
                    { icon: "✨", title: "Ceras Premium", desc: "Coco • Soja • Palma • Arroz" },
                    { icon: "🌿", title: "Blends Exclusivos", desc: "Ervas e especiarias selecionadas" },
                    { icon: "🕯️", title: "Pavios Ecológicos", desc: "Algodão orgânico ou madeira" },
                    { icon: "♻️", title: "Sustentável", desc: "Produção consciente e artesanal" }
                  ].map((feature, idx) => (
                    <div key={idx} className="group p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Carousel with 3D effects */}
              <div className={`relative ${isLoaded ? 'animate-in slide-in-from-right duration-1000 delay-300' : 'opacity-0'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <div 
                    className="relative h-[500px] sm:h-[600px] bg-gradient-to-br from-gray-100 to-gray-200"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                  >
                    {images.map((img, idx) => (
                      <img
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          idx === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
                        }`}
                      />
                    ))}
                    
                    {/* Gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10"></div>
                  </div>

                  {/* Enhanced Navigation */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
                      className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrent((c) => (c + 1) % images.length)}
                      className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Enhanced Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i === current
                            ? "bg-white shadow-lg scale-125"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating elements for depth */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-xl opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Products Section */}
        <section id="produtos" className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Nossa Coleção
                </span>
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Cada vela é uma experiência sensorial única, criada com ingredientes premium e 
                técnicas artesanais que honram a tradição do bem-estar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <article
                  key={product.id}
                  className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                    isLoaded ? 'animate-in slide-in-from-bottom duration-700' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  onMouseLeave={() => setActiveProduct(null)}
                >
                  <div className="relative mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        product.category === 'ritual'
                          ? 'bg-purple-500/80 text-white'
                          : product.category === 'especial'
                          ? 'bg-rose-500/80 text-white'
                          : 'bg-amber-500/80 text-white'
                      }`}>
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {product.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">R$ {product.price}</span>
                        <div className="text-xs text-gray-500 mt-1">À vista no PIX</div>
                      </div>
                      
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                          activeProduct === product.id
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                            : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                        }`}
                      >
                        Pedir Agora
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section id="processo" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl sm:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Como Criamos
                  </span>
                  <br />
                  <span className="text-gray-800">Cada Vela</span>
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Seleção dos Ingredientes",
                      description: "Escolhemos cuidadosamente ceras vegetais premium, óleos essenciais puros e ervas selecionadas."
                    },
                    {
                      step: "02",
                      title: "Processo Artesanal",
                      description: "Derretimento controlado, mistura precisa dos aromas e posicionamento perfeito do pavio."
                    },
                    {
                      step: "03",
                      title: "Testes de Qualidade",
                      description: "Cada lote passa por rigorosos testes de queima para garantir performance e segurança."
                    },
                    {
                      step: "04",
                      title: "Embalagem Cuidadosa",
                      description: "Empacotamento artesanal com materiais sustentáveis e atenção aos detalhes."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {item.step}
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/process.jpg"
                    alt="Processo artesanal"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Artesanal</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">8-12h</div>
                  <div className="text-sm text-gray-600">Queima</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About & Contact Section */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Nossa História
                  </span>
                </h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-amber-600">Reza Vela</strong> nasce da paixão pelo artesanal e pelas 
                    tradições ancestrais de autocuidado. Cada vela que criamos carrega uma intenção: 
                    transformar ambientes em santuários de bem-estar.
                  </p>
                  <p>
                    Nosso compromisso vai além da qualidade dos ingredientes. Buscamos criar experiências 
                    que conectem você com momentos de presença, reflexão e renovação interior.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-amber-50">
                    <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Velas criadas</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-orange-50">
                    <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                </div>
              </div>

              <div id="contato" className="space-y-8">
                <h3 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                    Vamos Conversar
                  </span>
                </h3>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 space-y-6">
                  <p className="text-lg text-gray-700">
                    Peça pelo WhatsApp, tire dúvidas sobre nossas fórmulas ou solicite 
                    encomendas personalizadas para ocasiões especiais.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21.7 17.3a9.7 9.7 0 1 0-2.3 2.3l1.6 1.6 1.7-0.5-1-3.4z" stroke="white" strokeWidth="1.5"/>
                    </svg>
                    Conversar no WhatsApp
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

                  <div className="pt-6 border-t border-amber-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>📱 Pedidos via WhatsApp</div>
                      <div>🚚 Entrega em toda cidade</div>
                      <div>💳 Aceitamos PIX e cartão</div>
                      <div>🎁 Embalagem para presente</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L12 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="3" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">Reza Vela</div>
                <div className="text-gray-400 text-sm">Velas artesanais premium</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} Reza Vela</span>
              <span>•</span>
              <span>Produção artesanal</span>
              <span>•</span>
              <span>Feito com ❤️</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.786-1.378l-.665 2.572c-.24.921-.89 2.077-1.332 2.794.999.308 2.058.485 3.169.485 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017 0z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-block"
        >
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
          
          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group-hover:rotate-12">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M21.7 17.3a9.7 9.7 0 1 0-2.3 2.3l1.6 1.6 1.7-0.5-1-3.4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 14.9c-.3-.1-1.9-.9-2.2-1s-.4-.1-.6.1c-.2.2-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.3-1.7-1.4-2-.1-.3 0-.5.1-.6.1-.1.2-.3.3-.5.1-.2.1-.3.2-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.6-.7-.6-.2 0-.4 0-.6 0-.3 0-.7.1-1 .5-.3.4-1.1 1.1-1.1 2.7 0 1.6 1.1 3.1 1.3 3.3.2.2 2.3 3.6 5.7 4.9 3.4 1.3 3.4.9 4 0 .6-.9.9-1.9 1-2.1.1-.2.1-.3.1-.5 0-.2 0-.4-.1-.5-.1-.1-.4-.2-.7-.3z" fill="currentColor"/>
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            Fale conosco no WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </a>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.6s ease-out forwards;
        }
        
        .slide-in-from-left {
          animation: slide-in-from-left 0.8s ease-out forwards;
        }
        
        .slide-in-from-right {
          animation: slide-in-from-right 0.8s ease-out forwards;
        }
        
        .slide-in-from-bottom {
          animation: slide-in-from-bottom 0.6s ease-out forwards;
        }
        
        @keyframes slide-in-from-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-from-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-from-bottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}