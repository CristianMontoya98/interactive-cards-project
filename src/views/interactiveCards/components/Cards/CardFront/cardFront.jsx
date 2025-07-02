import styles from './cardFrontStyles.module.scss';

function CardFront({ cardName = 'JANE APPLESEED', cardNumber = '0000 0000 0000 0000', expMonth = '00', expYear = '00' }) {
  const formattedNumber = cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim() || '0000 0000 0000 0000';
  return (
    <div className={styles.cards_cardFront}>
        <div className={styles.cards_cardFrontCircles}>
          <div className={styles.circle}></div>
          <div className={styles.circleBorder}></div>
        </div>
        <div className={styles.cards_cardFrontText}>
          <h4>{formattedNumber}</h4>
        </div>
        <div className={styles.cards_cardFrontLitteText}>
          <p>{cardName}</p>
          <p>{expMonth}/{expYear}</p>
        </div>
    </div>
  )
}

export { CardFront }