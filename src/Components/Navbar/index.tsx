import styles from "./index.module.scss";

export default function Navbar(){
  return (
    <section className={styles.navBg}>

        <a href="https://www.finistore.com.br/" target="_blank" rel="noreferrer">
          <img src="fini_logo2.png" alt="logo" className={styles.logoImg}/>
        </a>

        <nav className={styles.infoContainer}>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#qualidade">Qualidade</a></li>
          </ul>
        </nav>
        
    </section>
  );
}

