
import { useEffect, useRef } from 'react';
import { Scale, Briefcase, ShieldCheck, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Scale className="w-10 h-10 text-law-accent" />,
    title: "Direito Civil",
    description: "Assessoria completa em contratos, responsabilidade civil, direito de família e sucessões."
  },
  {
    id: 2,
    icon: <Briefcase className="w-10 h-10 text-law-accent" />,
    title: "Direito Empresarial",
    description: "Consultoria jurídica para empresas, elaboração de contratos comerciais e resolução de disputas."
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-10 h-10 text-law-accent" />,
    title: "Direito do Consumidor",
    description: "Defesa dos seus direitos nas relações de consumo e reparação de danos."
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10 text-law-accent" />,
    title: "Direito Trabalhista",
    description: "Atuação em processos trabalhistas, orientação empresarial e negociações coletivas."
  }
];

const CompanyInfo = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="py-20 px-4 md:px-0 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl text-law-DEFAULT font-bold mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-law-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções jurídicas personalizadas com excelência e comprometimento para proteger seus direitos e interesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="fade-in-section scale-on-hover bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-law-DEFAULT mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 fade-in-section">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-law-DEFAULT">Por que escolher nossa equipe?</h3>
                <p className="text-gray-700 mb-6">
                  Com mais de 15 anos de experiência, nossa equipe de advogados altamente qualificados está comprometida em oferecer serviços jurídicos excepcionais, combinando conhecimento técnico com uma abordagem personalizada para cada cliente.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-3 text-law-accent">✓</div>
                    <span className="text-gray-700">Atendimento personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 text-law-accent">✓</div>
                    <span className="text-gray-700">Profissionais especializados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 text-law-accent">✓</div>
                    <span className="text-gray-700">Compromisso com resultados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 text-law-accent">✓</div>
                    <span className="text-gray-700">Ética e transparência</span>
                  </li>
                </ul>
              </div>
              <div 
                className="md:w-1/2 bg-cover bg-center h-64 md:h-auto"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
