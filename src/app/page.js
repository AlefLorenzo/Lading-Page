import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Footer from '@/components/Footer';

// Arquivo principal da nossa página (Home)
export default function Home() {
  return (
    <main>
      {/* 
        Aqui estamos "chamando" cada componente que criamos na pasta src/components.
        Isso deixa o código organizado e fácil de dar manutenção. 
      */}
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
