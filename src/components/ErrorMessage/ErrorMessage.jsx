import styles from './ErrorMessage.module.css';

const ErrorMessage = ({error}) => {
  return (
    <div className={styles.ErrorMessage}><p>{error}</p></div>
  )
}

export default ErrorMessage
