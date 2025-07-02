import styles from './cardBackStyles.module.scss';

function CardBack({ cvc = '000' }) {

  return (
    <div className={styles.cards_cardBack}>
        <div className={styles.cards_cardBackText}>
          <p>{cvc}</p>
        </div>
    </div>
  )
}

export { CardBack }