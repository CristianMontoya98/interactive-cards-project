import { CardBack } from './CardBack/cardBack'
import { CardFront } from './CardFront/cardFront'
import styles from './cardsStyles.module.scss'
function Cards() {

  return (
    <section className={styles.cards}>
      <div className={styles.contentCards}>
      <CardBack/>
      <CardFront/>
      </div>
    </section>
  )
}

export { Cards }