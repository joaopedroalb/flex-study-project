import type { NextPage } from 'next'
import Navbar from '../Components/Navbar';
import styles from './Home.module.scss';

const Home: NextPage = () => {
  return (
    <section className={styles.containerBg}>
      <Navbar/>

      <section className={styles.aboutContainer}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h1>SOBRE NÓS</h1>
            <p>
              Somos uma marca feita exclusivamente para a alma infantil, 
              porque dentro de cada um de nós mora uma alma de criança capaz de trazer fantasias, 
              criatividade, alegria e leveza para a vida.
            </p>
          </div>
          <img src="fini_about_img.webp" alt="tubes"/>
        </div>
      </section>

      <section className={styles.produtosContainer}>
        <h1>Aqui vai ser os produtos</h1>
      </section>

      <section className={styles.qualidadeContainer}>
        <h1>Aqui vai ser sobre a qualidade</h1>
      </section>
    </section>
  )
}

export default Home
