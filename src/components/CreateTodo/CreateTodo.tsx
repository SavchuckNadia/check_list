import React, { useState } from 'react'
import Button from '../UI/button/Button'
import InputMd from '../UI/input/InputMd/InputMd'
import addIcon from "../../assets/svg/add.svg"
import { v4 as uuidv4 } from 'uuid';
import { IStore, ITodo } from '../../redux/interfaces/interfaces'
import { todoActions } from '../../redux/todo-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import styles from './CreateTodo.module.scss'

function CreateTodo() {
  const state = useAppSelector((state: IStore) => state)
  const dispatch = useAppDispatch()
  const [newTodo, setNewTodo] = useState('')
  const currentCategory = state.currentCategory.name

  const createNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const addNewTodo = (event:React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const createdTodo: ITodo = {
      id: uuidv4(),
      name: newTodo,
      category: currentCategory,
      completed: false,
    }
    newTodo && state.categories.length && dispatch(todoActions.addTodo(createdTodo))
    setNewTodo('')
  }

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      addNewTodo(event)
    }
  };

  return (
    <>
      <form className={styles.create_container} onSubmit={addNewTodo}>
        <InputMd value={newTodo} onChangeHandler={createNewTodo} keyDownHandler={keyDownHandler} />
        <Button icon={addIcon} text='Add' isDisabled={!newTodo} />
      </form>
      {
        !state.categories.length && <p className={styles.create_warning}>Create a category for tasks!</p>
      }
    </>
  )
}

export default CreateTodo
