import React, { useState } from 'react'
import Button from '../UI/button/Button'
import InputLg from '../UI/input/InputLg/InputLg'
import searchIcon from "../../assets/svg/search.svg"
import { v4 as uuidv4 } from 'uuid';
import styles from './SearchList.module.scss'
import { ICategoryTodo } from '../../redux/interfaces/interfaces'
import { categoryActions } from '../../redux/category-slice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { filterCategoryActions } from '../../redux/filterCategory-slice';


function SearchList() {
  const dispatch = useAppDispatch()
  const [newCategory, setNewCategory] = useState('')

  const getCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterCategoryActions.setFilterCategory(e.target.value))
    setNewCategory(e.target.value)
  }

  const addNewCategory = (event:React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const createdCategory: ICategoryTodo = {
      id: uuidv4(),
      name: newCategory
    }
    newCategory && dispatch(categoryActions.addCategory(createdCategory))
    setNewCategory('')
    dispatch(filterCategoryActions.setFilterCategory(''))
  }

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      addNewCategory(event)
      dispatch(filterCategoryActions.setFilterCategory(''))
    }
  };


  return (
    <form className={styles.container} onSubmit={addNewCategory}>
      <InputLg value={newCategory} onChangeHandler={getCategoryName} keyDownHandler={keyDownHandler} />
      <Button icon={searchIcon} text='Add' isDisabled={!newCategory} />
    </form>
  )
}

export default SearchList
