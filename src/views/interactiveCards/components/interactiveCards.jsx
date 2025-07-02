import styles from './interactiveCardsStyles.module.scss';
import { Cards } from './Cards/cards';
import { FormData } from './FormData/formData';
import { useState } from 'react';

function InteractiveCards() {
  const [cardName, setCardName] = useState('JANE APPLESEED');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [expMonth, setExpMonth] = useState('00');
  const [expYear, setExpYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  return (
    <section className={styles.container}>
      <Cards cardName={cardName} cardNumber={cardNumber} expMonth={expMonth} expYear={expYear} cvc={cvc} />
      <FormData cardName={cardName} setCardName={setCardName} cardNumber={cardNumber} setCardNumber={setCardNumber} expMonth={expMonth} setExpMonth={setExpMonth} expYear={expYear} setExpYear={setExpYear} cvc={cvc} setCvc={setCvc} />
    </section>
  )
}

export { InteractiveCards }