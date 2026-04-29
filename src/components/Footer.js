import Image from 'next/image';
import styles from './Footer.module.css';

// Componente Footer (Rodapé da página)
export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>FALE CONOSCO</h2>
        <p className={styles.description}>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
        </p>

        <div className={styles.infoBox}>
          {/* Informações de Contato */}
          <div className={styles.contact}>
            <h3>Contato</h3>
            <div className={styles.item}>
              <Image src="/local.png" alt="Endereço" width={20} height={20} />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div className={styles.item}>
              <Image src="/telefone.png" alt="Telefone" width={20} height={20} />
              <span>(21) 9999-9999</span>
            </div>
            <div className={styles.item}>
              <Image src="/email.png" alt="Email" width={20} height={20} />
              <span>contato@oticavida.com</span>
            </div>
          </div>

          {/* Informações de Redes Sociais */}
          <div className={styles.social}>
            <h3>Nossas Redes Sociais</h3>
            <div className={styles.item}>
              <Image src="/fb.png" alt="Facebook" width={20} height={20} />
              <span>/OticaVida</span>
            </div>
            <div className={styles.item}>
              <Image src="/ig.png" alt="Instagram" width={20} height={20} />
              <span>@oticavidarj</span>
            </div>
            <div className={styles.item}>
              <Image src="/tt.png" alt="Twitter" width={20} height={20} />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais na parte final */}
      <div className={styles.copyright}>
        <p>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
