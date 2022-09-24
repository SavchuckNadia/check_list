import styles from "./Button.module.scss"

interface ButtonProps {
  icon: string;
  text: string;
  isDisabled: boolean;
  onClickHandler?: () => void;
}

function Button({ icon, text, isDisabled, onClickHandler }: ButtonProps) {
  return (
    <button type='button' className={styles.btn} onClick={onClickHandler} disabled={isDisabled}>
      <img src={icon} alt="" className={styles.btn_icon} />
      {text}
    </button>
  )
}

export default Button