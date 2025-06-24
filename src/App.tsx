import  { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Scale,
  Users,
  Award,
  Clock,
} from "lucide-react";

const LawFirmLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  // Configuração de imagens - fácil para trocar
  const images = {
    hero: "../images/hero/estatua.png",
    portfolio: [
      "/images/services/Container-1.png",
       "../images/services/Container-2.png", 
      "/images/services/Container-3.png",
      "/images/services/Container-4.png",
      "/images/services/Container-5.png",
      "/images/services/Container-6.png",
      "/images/services/Container-7.png",
      "/images/services/Container-8.png",
      "/images/services/Container-9.png",
      "/images/services/Container-10.png",
      "/images/services/Container-11.png",
      "/images/services/Container-12.png",
      "/images/services/Container.png",
      "/images/services/SalarioMaternidade.png",
    ],
    team: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0101ba87806?w=200&h=200&fit=crop",
    ],
    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.nome &&
      formData.email &&
      formData.telefone &&
      formData.mensagem
    ) {
      console.log("Form submitted:", formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">
                Cristine Andraus Filardi{" "}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#trabalhos"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Trabalhos
              </a>
              <a
                href="#equipe"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Equipe
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Contato

              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a
                  href="#inicio"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Serviços
                </a>
                <a
                  href="#trabalhos"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Trabalhos
                </a>
                <a
                  href="#equipe"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Equipe
                </a>
                <a
                  href="#contato"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Contato
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

     {/* Hero Section */}
<section
  id="inicio"
  className="relative h-screen flex items-center justify-center"
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images.hero})`,
    }}
  ></div>
  
  {/* Logo no canto superior esquerdo */}
  <div className="absolute top-6 left-6 z-30">
    <img 
      src="/images/hero/logo-header.png" 
      alt="Cristine e Associados Logo" 
      className="h-25 w-[120px] md:h-30 mt-12"
    />
  </div>
  
  <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <div className="mb-8">
      <Scale className="h-20 w-20 text-amber-400 mx-auto mb-4" />
    </div>
    <h1 className="text-2xl md:text-2xl font-bold mb-6 leading-tight">
      Seja bem-vindo a Cristine e Associados, estamos aqui para te ajudar
      com Aposentadorias!
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-200">
      Especialistas em Direito Previdenciário com mais de 20 anos de
      experiência
    </p>
    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
      Agende sua Consulta
    </button>
  </div>
</section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quem somos
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Escritório "Cristine e Associados Sociedade Individual de
                Advocacia" está registrado na Ordem dos Advogados do Brasil,
                sob o nº 12.549.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nos casos de ações previdenciárias, desenvolvemos um trabalho
                árduo, que nos proporciona experiências em situações
                administrativas e contenciosas, bem como em instâncias
                superiores, sempre com maior dedicação para Tribunais e
                Instâncias superiores.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Em diversas questões jurídicas, nossa expertise tem se mostrado
                complexa e ampla para as mais variadas situações de direito,
                como o Direito do Trabalho e especialmente nossa área de
                especialização: o
                <strong className="text-amber-600">
                  {" "}
                  DIREITO PREVIDENCIÁRIO
                </strong>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  20+ Anos
                </h3>
                <p className="text-gray-600">de Experiência</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Scale className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">Taxa de Sucesso</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">24h</h3>
                <p className="text-gray-600">Atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços especializados em Direito Previdenciário com
              foco total no cliente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aposentadorias",
                description:
                  "Aposentadoria por idade, tempo de contribuição, especial e por invalidez",
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: "Benefícios Previdenciários",
                description:
                  "Auxílio-doença, auxílio-acidente, pensão por morte e salário-maternidade",
                icon: <Award className="h-8 w-8" />,
              },
              {
                title: "Revisões de Benefícios",
                description:
                  "Revisão de aposentadorias e benefícios já concedidos pelo INSS",
                icon: <Scale className="h-8 w-8" />,
              },
              {
                title: "Recursos Administrativos",
                description:
                  "Recursos contra decisões do INSS em todas as instâncias",
                icon: <Clock className="h-8 w-8" />,
              },
              {
                title: "Planejamento Previdenciário",
                description:
                  "Orientação para otimizar sua aposentadoria futura",
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: "Consultoria Jurídica",
                description:
                  "Orientação especializada em questões previdenciárias",
                icon: <Award className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section   id="trabalhos" 
  className="py-20 text-white relative"
  style={{
    backgroundImage: ' url("/images/products/Section-1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Trabalhos</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Alguns dos nossos casos de sucesso e trabalhos realizados
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.portfolio.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={image}
                  alt={`Trabalho ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    Caso {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosso Time
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src={images.team[0]}
                alt="Ruy Vasconcelos de Paula"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Cristine Andraus Filardi
              </h3>
              <p className="text-amber-600 font-semibold mb-4">
                Advogado Principal
              </p>
              <p className="text-gray-600 leading-relaxed">
                Advogado registrado na Ordem dos Advogados do Brasil, Seção
                Minas Gerais, sob o número 50.801. Pós-graduado em Direito Civil
                e Processual Civil pela Universidade de Franca. Especialista em
                Direito Previdenciário com mais de 20 anos de experiência,
                atuando em casos complexos de aposentadorias e benefícios
                previdenciários.
              </p>
            </div>

            <div className="text-center">
              <img
                src={images.team[1]}
                alt="Maria Beatriz Barbosa"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                MARIA BEATRIZ BARBOSA
              </h3>
              <p className="text-amber-600 font-semibold mb-4">
                Advogada Associada
              </p>
              <p className="text-gray-600 leading-relaxed">
                Graduada em Direito pela Universidade de São Paulo (USP),
                especialista em Direito Previdenciário. Bacharela universitária
                pelo Centro Universitário do Triângulo (UNITRI) - UBERLÂNDIA/MG.
                Atua com foco em benefícios previdenciários e assessoria
                jurídica especializada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section  id="contato" 
  className="py-20 text-white relative"
  style={{
    backgroundImage: ' url("/images/products/Section-1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Estamos prontos para ajudar você. Entre em contato conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">
                        Av. 
                        <br />
                        Bairro Centro - Araçatuba/SP
                        <br />
                        CEP: 16018-200
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(18) 9181-4948</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">cristine@uol.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Envie uma Mensagem
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="(34) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Descreva seu caso ou dúvida..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          {/* Logo no footer */}
          <img 
            src="/images/hero/andraus-footer.png" 
            alt="Cristine Andraus Filardi Logo" 
            className="h-[80px] w-[80px]"
          />
          <span className="text-xl font-bold">
            Cristine Andraus Filardi
          </span>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Especialistas em Direito Previdenciário com mais de 20 anos de
          experiência, oferecendo soluções jurídicas eficazes para seus
          clientes.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
        <div className="space-y-2">
          <a
            href="#inicio"
            className="block text-gray-400 hover:text-amber-600 transition-colors"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="block text-gray-400 hover:text-amber-600 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="block text-gray-400 hover:text-amber-600 transition-colors"
          >
            Serviços
          </a>
          <a
            href="#equipe"
            className="block text-gray-400 hover:text-amber-600 transition-colors"
          >
            Equipe
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contato</h3>
        <div className="space-y-2 text-gray-400">
          <p>Av. Paulista, 693</p>
          <p>Araçatuba/SP - CEP: 16018-200</p>
          <p>(18) 3621-00-74</p>
          <p>ruyvasconcelos@uol.com.br</p>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>
        &copy; 2025 Cristine Andraus Filardi - Todos os direitos
        reservados.
      </p>
    </div>
  </div>
</footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5534999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default LawFirmLanding;