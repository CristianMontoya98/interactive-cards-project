import { useState } from 'react';
import styles from './formDataStyles.module.scss';
function FormData({ cardName, setCardName, cardNumber, setCardNumber, expMonth, setExpMonth, expYear, setExpYear, cvc, setCvc }) {

  const defaultName = 'JANE APPLESEED';
  const defaultNumber = '0000 0000 0000 0000';
  const defaultMonth = '00';
  const defaultYear = '00';
  const defaultCvc = '000';

  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [cvcError, setCvcError] = useState('');

  const validateName = (value) => {
    if (!value) return "Can't be blank";
    if (/[^a-zA-Z\s]/.test(value)) return 'Wrong format, letters only';
    return '';
  }; 

  const validateOnlyNumbers = (value) => {
    if (!value) return "Can't be blank";
    if (/[^0-9]/.test(value)) return 'Wrong format, numbers only';
    return '';
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setCardName(value);
    setNameError(validateName(value));
  };
  const handleNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    setCardNumber(value);
    setNumberError(validateOnlyNumbers(value));
  };
  const handleMonthChange = (e) => {
    const value = e.target.value;
    setExpMonth(value);
    setMonthError(validateOnlyNumbers(value));
  };
  const handleYearChange = (e) => {
    const value = e.target.value;
    setExpYear(value);
    setYearError(validateOnlyNumbers(value));
  };
  const handleCvcChange = (e) => {
    const value = e.target.value;
    setCvc(value);
    setCvcError(validateOnlyNumbers(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(validateName(cardName === defaultName ? '' : cardName));
    setNumberError(validateOnlyNumbers(cardNumber === defaultNumber ? '' : cardNumber));
    setMonthError(validateOnlyNumbers(expMonth === defaultMonth ? '' : expMonth));
    setYearError(validateOnlyNumbers(expYear === defaultYear ? '' : expYear));
    setCvcError(validateOnlyNumbers(cvc === defaultCvc ? '' : cvc));
  };

  return (
    <section className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer_control}>
          <h2>CARDHOLDER NAME</h2>
          <input
            name='nameInput'
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardName === defaultName ? '' : cardName}
            onChange={handleNameChange}
            className={nameError ? styles.inputError : ''}
          />
          {nameError && <div className={styles.formContainer_error}>{nameError}</div>}
        </div>
        <div className={styles.formContainer_control}>
          <h2>CARD NUMBER</h2>
          <input
            name='numberInput'
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber === defaultNumber ? '' : cardNumber}
            onChange={handleNumberChange}
            className={numberError ? styles.inputError : ''}
            maxLength={16}
          />
          {numberError && <div className={styles.formContainer_error}>{numberError}</div>}
        </div>
        <div className={styles.formContainer_dateGroup}>
          <div className={styles.formContainer_dateGroup_shortControl}>
            <h2>EXP. DATE (MM / YY)</h2>
            <div className={styles.formContainer_dateGroup_shortControlGroup}>
              <input
                type="text"
                placeholder="MM"
                value={expMonth === defaultMonth ? '' : expMonth}
                onChange={handleMonthChange}
                className={monthError ? styles.inputError : ''}
              />
              <input
                type="text"
                placeholder="YY"
                value={expYear === defaultYear ? '' : expYear}
                onChange={handleYearChange}
                className={yearError ? styles.inputError : ''}
              />
            </div>
            {(monthError || yearError) && (
              <div className={styles.formContainer_error}>
                {monthError || yearError}
              </div>
            )}
          </div>
          <div className={styles.formContainer_dateGroup_CVC}>
            <h2>CVC</h2>
            <input
              type="text"
              placeholder="e.g. 123"
              value={cvc === defaultCvc ? '' : cvc}
              onChange={handleCvcChange}
              className={cvcError ? styles.inputError : ''}
            />
            {cvcError && <div className={styles.formContainer_error}>{cvcError}</div>}
          </div>
        </div>
        <button className={styles.formContainer_button}>Confirm</button>
      </form>
    </section>
  )
}

export { FormData }