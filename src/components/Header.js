import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

// Componente Header (Cabeçalho da página)
export default function Header() {
  return (
    // Tag semântica para o cabeçalho
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Renderiza a logo da ótica */}
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo Óticas Vida" width={150} height={50} />
        </div>
        {/* Navegação principal do site */}
        <nav className={styles.nav}>
          <Link href="#produtos">PRODUTOS</Link>
          <Link href="#sobre">SOBRE</Link>
          <Link href="#contato">CONTATO</Link>
        </nav>
      </div>
    </header>
  );
}
