import styles from './cardFrontStyles.module.scss';

function CardFront() {

  return (
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
  )
}

export { CardFront }