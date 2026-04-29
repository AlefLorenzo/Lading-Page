import Image from 'next/image';
import styles from './About.module.css';

// Componente About (Seção 'Quem somos nós?')
export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>QUEM SOMOS NÓS?</h2>
        <p className={styles.description}>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao público de
          renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
        </p>

        {/* Container do grid de 4 quadrantes */}
        <div className={styles.grid}>
          {/* Quadrante 1: Imagem da Loja */}
          <div className={styles.imageBox}>
            <Image src="/loja.png" alt="Interior da Ótica" layout="fill" objectFit="cover" />
          </div>

          {/* Quadrante 2: Texto Filiais */}
          <div className={styles.textBox}>
            <h3>NOSSAS FILIAIS</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          {/* Quadrante 3: Texto Atendimento */}
          <div className={styles.textBox}>
            <h3>ATENDIMENTO FLEXIVEL</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>

          {/* Quadrante 4: Imagem Atendimento */}
          <div className={styles.imageBox}>
            <Image src="/atendimento.png" alt="Atendimento ao cliente" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
