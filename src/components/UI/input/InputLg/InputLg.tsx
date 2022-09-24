import styles from "./InputLg.module.scss";

interface InputLgProps {
  value: string,
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  keyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function InputLg({ value, onChangeHandler, keyDownHandler }: InputLgProps) {
  return (
    <input type="text" value={value} className={styles.input_lg} onChange={onChangeHandler} onKeyDown={keyDownHandler} />
  )
}

export default InputLg
