import Image from 'next/image';
import styles from './Products.module.css';

// Componente Products (Catálogo de produtos)
export default function Products() {
  return (
    <section id="produtos" className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>NOSSOS PRODUTOS</h2>
        <p className={styles.description}>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
          <br />
          Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
        </p>

        {/* Grid para alinhar os 4 produtos */}
        <div className={styles.grid}>
          {/* Card Produto 1 */}
          <div className={styles.card}>
            <h3>Óculos de grau</h3>
            <Image src="/oculos01.png" alt="Óculos de grau" width={250} height={150} />
            <p className={styles.price}>R$ 500,00</p>
          </div>

          {/* Card Produto 2 */}
          <div className={styles.card}>
            <h3>Óculos transition</h3>
            <Image src="/oculos02.png" alt="Óculos transition" width={250} height={150} />
            <p className={styles.price}>R$ 750,00</p>
          </div>

          {/* Card Produto 3 */}
          <div className={styles.card}>
            <h3>Óculos de sol</h3>
            <Image src="/oculos03.png" alt="Óculos de sol" width={250} height={150} />
            <p className={styles.price}>R$ 700,00</p>
          </div>

          {/* Card Produto 4 */}
          <div className={styles.card}>
            <h3>Óculos infantil</h3>
            <Image src="/oculos04.png" alt="Óculos infantil" width={250} height={150} />
            <p className={styles.price}>R$ 500,00</p>
          </div>
        </div>

        {/* Lista de benefícios abaixo dos produtos */}
        <div className={styles.benefits}>
          <p>Todos os nossos produtos incluem:</p>
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
