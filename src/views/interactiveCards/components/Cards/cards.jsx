import styles from './cardsStyles.module.scss'
import backgroundImg from './../../../../assets/bg-main-mobile.png';
import cardImg from './../../../../assets/bg-card-back.png';
import cardImg2 from './../../../../assets/bg-card-front.png';
function Cards() {

  return (
    <section className={styles.cards}>
      <div className={styles.cards_cardBack}>
      </div>
      <div className={styles.cards_cardFront}>
        <div className={styles.cards_cardFrontCircles}>
        
        </div>
      </div>
    </section>
  )
}

export { Cards }