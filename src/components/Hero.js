import Image from 'next/image';
import styles from './Hero.module.css';

// Componente Hero (Apresentação principal da página)
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Container principal para alinhar os textos */}
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>Preços baixos em</p>
          <h1 className={styles.title}>ÓCULOS DE<br/>GRAU E DE SOL</h1>
          <p className={styles.description}>VOCÊ SÓ ENCONTRA AQUI</p>
        </div>
      </div>
    </section>
  );
}
