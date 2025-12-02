import React, { useState, useEffect } from "react";
import { 
  Search, 
  ShoppingCart, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  Star,
  Truck,
  ThumbsUp,
  ThumbsDown,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Menu,
  CreditCard,
  ShieldCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useEmblaCarousel from "embla-carousel-react";

// Assets
import mainFlying from "@assets/image_1764648075673.png";
import cleanBlue from "@assets/image_1764647991480.png";
import handHolding from "@assets/image_1764648065141.png";
import setShot from "@assets/image_1764648091411.png";
import blackDrone from "@assets/image_1764648083567.png";

import donald from "@assets/image_1764648103423.png";
import pluto from "@assets/image_1764648111870.png";

import reviewBox from "@assets/image_1764648048319.png";
import reviewCables from "@assets/image_1764648021762.png";
import reviewGranite from "@assets/image_1764648038116.png";
import reviewFloor from "@assets/image_1764648031374.png";
import reviewBubble from "@assets/image_1764648056961.png";

import riLogoImg from "@assets/logo-rihappy___cfa7eb65acd65ba6a052635ca6a8851b_1764648351800.png";
import confiBadge from "@assets/image_1764648004224.png";
import mascot from "@assets/stock_images/toy_robot_mascot_edd80559.jpg"; // Keeping mascot for now, or should I remove? The user didn't provide a mascot image in this batch, but they did in the previous one or I generated it. The previous prompts had a "Solzinho" mascot. The user provided images in this turn don't include the mascot, but they said "pegue essas imagens e estude um pouco dessa pagina". Wait, the last batch includes `logo-rihappy...` but no mascot. I will keep the stock mascot or try to find if I missed it. Ah, looking at the file list again. No mascot image in this batch. I'll keep the stock one or use the logo if appropriate. The footer has the mascot. I will keep the current mascot placeholder or stock image if I don't have a better one, but I will use the new Logo.

// --- Components ---

const RiLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <img src={riLogoImg} alt="Ri Happy" className={className} />
);

const RiHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-ri-yellow px-4 py-3 flex items-center justify-between gap-4 shadow-sm">
        {/* Mobile Menu / Logo Area */}
        <div className="flex items-center gap-2">
          <RiLogo className="h-10 w-auto" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block relative">
          <Input 
            placeholder="Encontre aqui um mundo de diversão..." 
            className="w-full bg-white rounded-full border-none pl-10 pr-4 h-10 text-sm placeholder:text-gray-400 shadow-inner"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        
        {/* Mobile Search (simplified) */}
        <div className="flex-1 md:hidden relative">
           <div className="bg-white rounded-full flex items-center px-3 h-9 w-full shadow-sm">
             <Search className="w-4 h-4 text-gray-400 mr-2" />
             <input 
               type="text" 
               placeholder="Encontre aqui um mundo de diversão..." 
               className="bg-transparent border-none outline-none text-xs w-full placeholder:text-gray-400"
             />
           </div>
        </div>

        {/* Cart */}
        <div className="bg-ri-purple text-white rounded-full p-2 w-9 h-9 flex items-center justify-center shrink-0 shadow-md">
          <ShoppingCart className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

const Breadcrumbs = () => (
  <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-500 px-4 py-3 bg-white whitespace-nowrap overflow-hidden text-ellipsis border-b border-gray-50">
    <RiLogo className="h-4 w-auto mr-1" />
    <ChevronRight className="w-3 h-3 text-gray-400" />
    <span className="uppercase tracking-wide font-medium">BRINQUEDOS</span>
    <ChevronRight className="w-3 h-3 text-gray-400" />
    <span className="uppercase truncate font-medium">DRONE PARA CRIANÇAS</span>
  </div>
);

const ProductImages = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrent(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative bg-white mb-4 group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {[mainFlying, cleanBlue, handHolding, setShot].map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative aspect-square bg-white" key={index}>
              <img src={src} alt="Product" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md border border-gray-100 z-10"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md border border-gray-100 z-10"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      <button className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md z-10">
        <Heart className="w-5 h-5 text-gray-400" />
      </button>

      {/* Selo Encanto Placeholder - styled to match screenshot circular stamp */}
      <div className="absolute bottom-8 left-4 z-10">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg rotate-[-12deg] relative overflow-hidden">
          <div className="absolute inset-0 border-[3px] border-dashed border-yellow-400 rounded-full animate-spin-slow opacity-50"></div>
          <div className="text-center leading-none z-10">
             <span className="text-[6px] text-yellow-300 font-bold block">SELO</span>
             <span className="text-[9px] text-white font-black block uppercase tracking-widest">ENCANTO</span>
             <span className="text-[6px] text-yellow-300 font-bold block">RI HAPPY</span>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2.5 mt-4 mb-2">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${current === idx ? 'bg-ri-purple' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProductInfo = () => {
  return (
    <div className="px-4 pb-6 bg-white">
      <div className="flex gap-2 mb-4">
        <span className="bg-black text-ri-yellow text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center justify-center h-6">
          HAPPY FRIDAY
        </span>
        <span className="bg-[#1D5E2C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1 h-6">
          🎁 PARA O NATAL
        </span>
      </div>

      <h1 className="text-[19px] font-bold text-gray-900 leading-snug mb-3">
        Mini Drone Best-X para Crianças - Controle Remoto
      </h1>

      <div className="text-xs text-gray-600 mb-6 bg-gray-50 inline-flex px-3 py-1.5 rounded-md items-center">
        Vendido e entregue por <span className="font-bold text-gray-900 ml-1">Ri Happy</span>
      </div>

      <div className="mb-6">
        <p className="text-sm font-bold mb-3 text-gray-900">Escolha a cor:</p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 border-2 border-ri-purple rounded-lg px-4 py-2.5 bg-purple-50 transition-all shadow-sm">
            <div className="w-5 h-5 rounded-full bg-blue-500 shadow-sm border border-black/10"></div>
            <span className="text-sm font-bold text-ri-purple">Azul</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50 transition-all">
            <div className="w-5 h-5 rounded-full bg-black shadow-sm border border-white/20"></div>
            <span className="text-sm font-bold text-gray-700">Preto</span>
          </button>
        </div>
      </div>

      <div className="mb-1">
        <span className="text-gray-400 text-sm line-through decoration-gray-400">R$ 239,99</span>
      </div>
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[32px] font-black text-gray-900 tracking-tight">R$ 97,00</span>
        <span className="bg-ri-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">56% OFF</span>
      </div>
      <div className="text-sm text-gray-500 font-medium">
        ou 5x de R$ 38,80 c/ juros
      </div>
    </div>
  );
};

const Shipping = () => {
  return (
    <div className="bg-white px-4 py-8 border-t border-gray-100">
      <h3 className="font-bold text-base mb-3 text-gray-900">Digite seu CEP</h3>
      <div className="relative mb-3">
        <Input 
          placeholder="00000-000" 
          className="h-12 bg-white border-gray-200 text-base pl-4 pr-12 rounded-lg shadow-sm focus:ring-1 focus:ring-ri-purple focus:border-ri-purple transition-all" 
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <a href="#" className="text-ri-purple text-xs underline font-bold hover:text-ri-blue transition-colors">
        Não sei meu CEP
      </a>
    </div>
  );
};

const BuyTogether = () => {
  return (
    <div className="mx-4 my-2 p-4 border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] bg-white">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">🎁</span>
        <div>
           <p className="text-sm font-bold text-gray-900 leading-snug">
            Compre Junto: Leve dois enfeites de natal da Ri Happy por <span className="text-ri-red">14,99</span>
          </p>
        </div>
      </div>
      <p className="text-[10px] text-gray-500 text-center mb-5 px-2 font-medium">
        Válido para compras acima R$49,99 em produtos vendidos e entregues por Ri Happy. Desconto aplicado no carrinho
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <img src={donald} alt="Donald" className="w-24 h-24 object-contain mb-3" />
          <p className="text-[11px] font-bold leading-tight text-gray-800">Miniatura Pato Donald - Bola de Natal</p>
        </div>
        <div className="border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <img src={pluto} alt="Pluto" className="w-24 h-24 object-contain mb-3" />
          <p className="text-[11px] font-bold leading-tight text-gray-800">Miniatura Pluto - Bola de Natal</p>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="bg-white mx-4 mt-6 mb-4 p-5 border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h2 className="font-bold text-lg mb-4 text-gray-900">Descrição</h2>
      <div className="flex items-start gap-2 mb-3">
        <span className="text-yellow-400 text-lg">✨</span>
        <h3 className="font-bold text-sm text-gray-900 mt-0.5">Mini Drone Best X – Diversão Segura Para Pequenos Pilotos!</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        O Mini Drone Best X, o brinquedo perfeito para despertar a imaginação e a coordenação das crianças! Desenvolvido especialmente para pequenos pilotos, ele combina design compacto,...
      </p>
      <button className="text-ri-purple font-bold text-sm hover:underline">leia mais</button>
    </div>
  );
};

const Specs = () => {
  return (
    <div className="bg-white mx-4 mb-4 p-5 border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h2 className="font-bold text-lg mb-4 text-gray-900">Ficha técnica</h2>
      
      <div className="space-y-2.5">
        {[
          { label: "Posso Trocar Este Produto em uma Loja Física?", value: "Sim, exceto para produtos exclusivos do e-commerce." },
          { label: "Código de Barras", value: "7891234567890" },
          { label: "Restrição de Idade:", value: "Não recomendável para menores de 3 anos por conter peças pequenas que podem ser engolidas." },
          { label: "Código do Fabricante:", value: "19885932" },
          { label: "Aviso:", value: "As cores podem variar entre as imagens mostradas acima e o produto. Imagens meramente ilustrativas." },
          { label: "Peso:", value: "0.150 Kg" },
          { label: "Dimensões (AxLxC):", value: "Tamanho (LAP): 12 x 12 x 6 cm" },
          { label: "Produto Certificado:", value: "008456/2024" },
          { label: "Itens Inclusos:", value: "Inclui 1 Conjunto Mini Drone Best-X (Preto ou Azul)." },
        ].map((item, i) => (
          <div key={i} className="bg-[#F7F9FA] p-3.5 rounded-lg">
            <p className="font-bold text-xs mb-1.5 text-gray-900">{item.label}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewItem = ({ name, date, rating, text, image }: any) => (
  <div className="border-b border-gray-100 py-6 last:border-0 last:pb-0">
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 fill-yellow-400 text-yellow-400 ${i >= rating ? 'opacity-30' : ''}`} />
      ))}
    </div>
    <h4 className="font-bold text-sm text-gray-900 mb-0.5">{name}</h4>
    <p className="text-[10px] text-gray-500 mb-3">{date}</p>
    <p className="text-xs text-gray-700 leading-relaxed mb-3.5">
      {text}
    </p>
    {image && (
      <div className="mb-3.5">
        <img src={image} alt="Review attachment" className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm" />
      </div>
    )}
    <div className="flex items-center gap-5 text-[10px] text-gray-500">
      <span>esta avaliação foi útil?</span>
      <button className="flex items-center gap-1 hover:text-gray-700 font-medium"><ThumbsUp className="w-3.5 h-3.5" /> 0</button>
      <button className="flex items-center gap-1 hover:text-gray-700 font-medium"><ThumbsDown className="w-3.5 h-3.5" /> 0</button>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <div className="bg-white mx-4 mb-8 p-5 border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h2 className="font-bold text-lg mb-3 text-gray-900">Avaliações</h2>
      <div className="flex items-end gap-3 mb-3">
        <span className="text-5xl font-black text-ri-purple tracking-tight">4.8</span>
        <div className="mb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-[11px] text-gray-500 mt-1 font-medium">(112 avaliações)</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs text-gray-600">ordenar por</span>
        <select className="border border-gray-300 rounded px-2 py-1.5 text-xs bg-white font-medium text-gray-700">
          <option>maiores notas</option>
        </select>
      </div>

      <div className="">
        <ReviewItem 
          name="Mariana S."
          date="3 dias atrás"
          rating={5}
          text="Meu filho de 7 anos amou! O drone é super seguro, as hélices são protegidas e ele consegue controlar facilmente. Chegou rápido e muito bem embalado. Recomendo demais!"
          image={reviewBox}
        />
        <ReviewItem 
          name="Carlos Eduardo M."
          date="5 dias atrás"
          rating={5}
          text="Comprei para o aniversário do meu filho e foi o presente mais esperado! Ele brinca todos os dias e o drone é bem resistente. As proteções nas hélices garantem total segurança. Excelente custo-benefício!"
          image={reviewCables}
        />
        <ReviewItem 
          name="Juliana P."
          date="1 semana atrás"
          rating={5}
          text="Produto incrível! Minha filha de 9 anos adorou e já está craques nos comandos. O material é de qualidade e super seguro para os pequenos. A bateria dura bastante tempo também!"
          image={reviewGranite}
        />
         <ReviewItem 
          name="Roberto A."
          date="1 semana atrás"
          rating={5}
          text="Melhor compra que fiz! O drone é perfeito para crianças, muito fácil de controlar e super seguro. Meu filho de 6 anos consegue pilotar sem dificuldades. Chegou antes do prazo!"
          image={reviewFloor}
        />
        <ReviewItem 
          name="Fernanda L."
          date="2 semanas atrás"
          rating={5}
          text="Estou muito satisfeita com a compra! O brinquedo é resistente, seguro e meu filho se diverte muito. As proteções evitam acidentes e o controle é bem intuitivo. Vale cada centavo!"
          image={reviewBubble}
        />
      </div>
      
      <div className="bg-[#FFF9E6] p-4 rounded-lg mt-6 flex gap-4 items-center border border-yellow-100">
        <div className="flex-1">
           <p className="text-[11px] text-gray-600 leading-snug">
             <span className="text-yellow-500 text-sm mr-1">✨</span> 
             <span className="font-bold text-gray-800">Resumo gerado por I.A.</span> com base nas avaliações dos clientes
           </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-12 bg-white pb-32 border-t border-gray-100">
      <div className="flex flex-col items-center pt-10">
        <div className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center mb-6 overflow-hidden">
            <img src={mascot} alt="Solzinho" className="w-full h-full object-cover" />
        </div>
        
        <RiLogo className="h-16 w-auto mb-8" />

        <div className="flex gap-6 mb-10">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-sm">
            <Youtube className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-sm">
            <Facebook className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white shadow-sm">
            <Linkedin className="w-5 h-5" />
          </div>
        </div>

        <h3 className="font-bold text-sm mb-4 text-gray-900">Pagamentos disponíveis</h3>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="border border-gray-200 rounded-lg p-3 w-[100px] h-[60px] flex flex-col items-center justify-center gap-1 hover:border-gray-300 transition-colors">
            <CreditCard className="w-5 h-5 text-gray-700" />
            <span className="text-[8px] font-bold uppercase text-center leading-none text-gray-600">Cartão<br/>de Crédito</span>
          </div>
          <div className="border border-gray-200 rounded-lg p-3 w-[100px] h-[60px] flex flex-col items-center justify-center gap-1 hover:border-gray-300 transition-colors">
            <span className="text-ri-purple font-bold text-base leading-none">nuPay</span>
            <span className="text-[8px] font-bold uppercase text-center leading-none text-gray-600">Crédito<br/>ou Débito</span>
          </div>
           <div className="border border-gray-200 rounded-lg p-3 w-[100px] h-[60px] flex flex-col items-center justify-center gap-1 hover:border-gray-300 transition-colors">
             <div className="w-4 h-4 bg-[#32BCAD] rotate-45 rounded-sm flex items-center justify-center">
                 <div className="w-2 h-2 border-l border-b border-white rotate-[-45deg] mb-0.5"></div>
             </div>
            <span className="text-[8px] font-bold uppercase text-center leading-none mt-1 text-gray-600">PIX</span>
          </div>
           <div className="border border-gray-200 rounded-lg p-3 w-[100px] h-[60px] flex flex-col items-center justify-center gap-1 hover:border-gray-300 transition-colors">
            <div className="w-4 h-4 bg-pink-500 rotate-45 rounded-sm flex items-center justify-center relative">
                <div className="w-2 h-2 border-l border-b border-white rotate-[-45deg] mb-0.5"></div>
            </div>
            <span className="text-[8px] font-bold uppercase text-center leading-none mt-1 text-gray-600">PIX<br/>Parcelado</span>
          </div>
        </div>

        <h3 className="font-bold text-sm mb-4 text-gray-900">Segurança e certificações</h3>
        <div className="flex gap-3 mb-8">
           <div className="border border-gray-200 rounded px-2 py-1.5 flex items-center gap-1 bg-gray-50">
             <img src={confiBadge} alt="Confi" className="h-8 w-auto" />
           </div>
           <div className="border border-gray-200 rounded px-3 py-1.5 text-[10px] font-bold text-[#F71963] flex items-center gap-1 bg-gray-50">
             <span className="text-xs">▼</span> VTEX
           </div>
           <div className="border border-gray-200 rounded px-3 py-1.5 text-[10px] font-bold text-[#00A650] flex items-center gap-1 bg-gray-50">
             <span className="text-xs">🌵</span> TUNA
           </div>
        </div>
      </div>
    </div>
  );
};

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 flex items-center justify-between gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="hidden md:block">
         <span className="text-ri-purple font-bold text-xl">R$ 97,00</span>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <RiLogo className="h-8 w-auto" />
      </div>
      <Button className="flex-1 bg-ri-green hover:bg-green-600 text-white font-black text-[15px] h-12 rounded-lg uppercase tracking-wide shadow-md transition-all active:scale-[0.98]">
        Comprar Agora
      </Button>
    </div>
  );
};

export default function RiHappyProduct() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
      <RiHeader />
      <Breadcrumbs />
      
      <main className="max-w-3xl mx-auto bg-white">
        <ProductImages />
        <ProductInfo />
        <Shipping />
        <BuyTogether />
        <Description />
        <Specs />
        <Reviews />
        <Footer />
      </main>

      <StickyCTA />
    </div>
  );
}
