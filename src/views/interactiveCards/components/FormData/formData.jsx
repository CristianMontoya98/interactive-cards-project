import styles from './formDataStyles.module.scss';
function FormData() {

  return (
    <section className={styles.formContainer}>
      <form onSubmit={console.log("something")}>
        <div className={styles.formContainer_control}>
          <h2>CARDHOLDER NAME</h2>
          <input type="text" placeholder="e.g. Jane Appleseed"/>
        </div>
        <div className={styles.formContainer_control}>
          <h2>CARD NUMBER</h2>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000"/>
        </div>
        <div className={styles.formContainer_dateGroup}>
          <div className={styles.formContainer_dateGroup_shortControl}>
            <h2>EXP. DATE (MM / YY)</h2>
            <div className={styles.formContainer_dateGroup_shortControlGroup}>
              <input type="text" placeholder="MM"/>
              <input type="text" placeholder="YY"/>
            </div>
          </div>
          <div className={styles.formContainer_dateGroup_CVC}>
            <h2>CVC</h2>
            <input type="text" placeholder="e.g. 123"/>
          </div>
        </div>
        <button className={styles.formContainer_button}>Confirm</button>
      </form>
    </section>
  )
}

export { FormData }