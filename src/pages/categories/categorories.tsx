import Styles from './categories.module.scss'
import {  useAppSelector } from '../../helpers/redux'
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom'
import Category from '../../components/Category/category'

const Categorories = (props: { Category: string }) => {
  const Variants = props.Category
  const state = useAppSelector((state) => state.Categories);
  const categories = state.categories;

  return (
    <div className={Styles.wrapper}>
      <header>
        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
          <button>
            <img src='images/Group.svg' alt='HOME' />
            home
          </button>
        </NavLink>
        <h1>Categories</h1>
      </header>
      <div className={Styles.categories}>
        {categories.map((category, indx) => (
          <Category
            category={category.categoryName}
            indx={indx}
            Variants={Variants}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  )
}

export default Categorories
