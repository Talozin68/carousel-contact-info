
import { useEffect, useRef } from 'react';

const AboutUs = () => {
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
    <section id="sobre" ref={sectionRef} className="py-20 px-4 md:px-0 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 fade-in-section">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Nossa equipe" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-law-accent rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 fade-in-section">
            <h2 className="text-3xl md:text-5xl text-law-DEFAULT font-bold mb-4">Sobre Nós</h2>
            <div className="w-24 h-1 bg-law-accent mb-6"></div>
            
            <p className="text-gray-700 mb-6 text-lg">
              Fundada em 2005, a JurisConsult nasceu com a missão de oferecer serviços jurídicos de excelência, combinando conhecimento técnico, experiência prática e uma abordagem personalizada para cada cliente.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              Nossa equipe é formada por advogados especializados em diversas áreas do direito, comprometidos com a defesa incansável dos interesses de nossos clientes, sempre pautados pela ética, transparência e responsabilidade profissional.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              Acreditamos que o acesso à justiça é um direito fundamental, e trabalhamos diariamente para tornar o universo jurídico mais acessível e compreensível para todos os nossos clientes.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-law-accent">15+</span>
                <span className="text-gray-600">Anos de experiência</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-law-accent">500+</span>
                <span className="text-gray-600">Casos de sucesso</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-law-accent">20+</span>
                <span className="text-gray-600">Advogados especializados</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 fade-in-section bg-gray-200 py-16 px-8 rounded-lg">
          <h3 className="text-2xl md:text-3xl text-law-DEFAULT font-bold mb-10 text-center">Nossa Equipe</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dra. Ana Silva",
                role: "Advogada Sênior - Direito Civil",
                image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                name: "Dr. Carlos Mendes",
                role: "Advogado Sênior - Direito Empresarial",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              },
              {
                name: "Dra. Juliana Costa",
                role: "Advogada Sênior - Direito do Consumidor",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="scale-on-hover bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-law-DEFAULT mb-1">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
