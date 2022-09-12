import styles from './cardsStyles.module.scss'
import backgroundImg from './../../../../assets/bg-main-mobile.png';
import cardImg from './../../../../assets/bg-card-back.png';
import cardImg2 from './../../../../assets/bg-card-front.png';
function Cards() {

  return (
    <section className={styles.cards}>
      <div className={styles.contentCards}>
      <div className={styles.cards_cardBack}>
        <div className={styles.cards_cardBackText}>
          <p>000</p>
        </div>
      </div>
      <div className={styles.cards_cardFront}>
        <div className={styles.cards_cardFrontCircles}>
          <div className={styles.circle}></div>
          <div className={styles.circleBorder}></div>
        </div>
        <div className={styles.cards_cardFrontText}>
          <h4>0000 0000 0000 0000</h4>
        </div>
        <div className={styles.cards_cardFrontLitteText}>
          <p>JANE APPLESEED</p>
          <p>00/00</p>
        </div>
      </div>
      
      </div>
    </section>
  )
}

export { Cards }