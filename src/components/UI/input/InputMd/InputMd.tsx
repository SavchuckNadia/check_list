import React from 'react'
import styles from "./InputMd.module.scss"

interface InputMdProps {
  value: string,
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  keyDownHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function InputMd({ value, onChangeHandler, keyDownHandler }: InputMdProps) {

  return (
    <input type="text" className={styles.input_md} value={value} onChange={ onChangeHandler} onKeyDown={keyDownHandler} />
  )
}

export default InputMd
