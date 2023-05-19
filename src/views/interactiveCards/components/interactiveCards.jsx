import styles from './interactiveCardsStyles.module.scss';
import { Cards } from './Cards/cards';
import { FormData } from './FormData/formData';
function InteractiveCards() {

  return (
    <section className={styles.container}>
      <Cards />
      <FormData/>
    </section>
  )
}

export { InteractiveCards }