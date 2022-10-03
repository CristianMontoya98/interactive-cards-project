import styles from './interactiveCardsStyles.module.scss';
import { Cards } from './Cards/cards';
import { FormData } from './FormData/formData';
function InteractiveCards() {

  return (
    <>
      <Cards />
      <FormData/>
    </>
  )
}

export { InteractiveCards }