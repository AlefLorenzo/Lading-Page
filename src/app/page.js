// Importamos cada componente usando o caminho relativo
// '../components/Header' significa: "sobe uma pasta (de app para src), depois entra em components"
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Footer from '../components/Footer';

// Esta é a página principal (Home) do nosso site
// No Next.js App Router, o arquivo page.js representa uma rota/página
export default function Home() {
  return (
    // <main> é a tag semântica que representa o conteúdo principal da página
    <main>
      {/* Aqui "chamamos" cada componente que criamos
          A ordem aqui define a ordem que aparece na tela */}
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
