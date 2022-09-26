import styles from "./Button.module.scss"

interface ButtonProps {
  icon: string;
  text: string;
  isDisabled: boolean;
}

function Button({ icon, text, isDisabled }: ButtonProps) {
  return (
    <button type='submit' className={styles.btn} disabled={isDisabled}>
      <img src={icon} alt="" className={styles.btn_icon} />
      {text}
    </button>
  )
}

export default Button