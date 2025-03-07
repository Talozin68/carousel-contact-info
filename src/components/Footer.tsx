
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">JurisConsult</h3>
            <p className="text-white/80 mb-6">
              Oferecemos serviços jurídicos de excelência com compromisso e dedicação para proteger seus direitos e interesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-law-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-law-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-law-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-law-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-law-accent transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-white/70 hover:text-law-accent transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-law-accent transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-law-accent transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>09:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} JurisConsult. Todos os direitos reservados.
          </p>
          <div className="text-white/60 text-sm">
            <a href="#" className="hover:text-law-accent transition-colors">Política de Privacidade</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-law-accent transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
