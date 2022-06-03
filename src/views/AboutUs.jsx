import { Link } from 'react-router-dom';
import styles from './AboutUs.css';

export const AboutUs = () => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['carrey-card']}>
        <h2>Carolynn Fleming</h2>
        <img src="./doctor.jpeg" className={styles['about-img']}></img>
        <p>
          My name is Carolynn Fleming. I'm a Software Engineer ready to change
          up the tech community. Why not start with Youtube?
        </p>
        <p>You can contact me at...</p>
        <Link to="https://github.com/CarolynnFleming">Carolynns' GitHub</Link>
        <br></br>
        <Link to="https://www.linkedin.com/in/carolynnfeming/">
          Carolynns' LinkdIn
        </Link>
        <hr></hr>
      </div>
      <div className={styles['kyra-card']}>
        <h2>Kyra Christensen</h2>
        <img
          src="./kyra.jpg"
          width={'300px'}
          className={styles['about-img']}
        ></img>
        <p>
          Hi I'm Kyra Christensen, a full-stack software developer based out of
          Independence, OR. I come from a mostly retail and food service
          background, trying to make my breakthrough into the tech community.
          I've got a knack for writing clean code, collaborative problem-solving
          and great communication
        </p>
        <p>You can contact me at...</p>
        <Link to="https://github.com/Kyra-christensen">Kyras' GitHub</Link>
        <br></br>
        <Link to="https://www.linkedin.com/in/kyra-christensen/">
          Kyras' LinkdIn
        </Link>
        <hr></hr>
      </div>
      <div className={styles['jack-card']}>
        <h2>Cadillac Jack</h2>
        <section className={styles['intro-media']}>
          <img
            src="./jack.jpg"
            width={'300px'}
            className={styles['about-img']}
          ></img>
        </section>

        <p>
          Hello, my name is Cadillac Jack. I'm an aspiring software developer
          based out of Portland. I started coding with the hopes of making
          socially impactful web applications. My interests are music, physics,
          and film. Keep an eye out for upcoming projects
        </p>
        <p>You can contact me at...</p>
        <Link to="https://github.com/CadillacJack42">Jacks' GitHub</Link>
      </div>
    </div>
  );
};
