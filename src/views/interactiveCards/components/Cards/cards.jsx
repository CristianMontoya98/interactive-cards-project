import { CardBack } from './CardBack/cardBack'
import { CardFront } from './CardFront/cardFront'
import styles from './cardsStyles.module.scss'

function Cards({ cardName, cardNumber, expMonth, expYear, cvc }) {
  return (
    <section className={styles.cards}>
      <div className={styles.contentCards}>
      <CardBack cvc={cvc}/>
      <CardFront cardName={cardName} cardNumber={cardNumber} expMonth={expMonth} expYear={expYear}/>
      </div>
    </section>
  )
}

export { Cards }