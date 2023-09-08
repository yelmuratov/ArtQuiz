import { useAppSelector } from "../../helpers/redux";
import {MouseEvent}from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Logo from "../logo/logo";
import Styles from './scores.module.scss';
import { useAppDispatch } from "../../store";
import { setCategoryId } from "../../reducer/CategorySlice";

const Scores = () => {
  const categoryState = useAppSelector(state => state.Categories);
  const questionState = useAppSelector(state => state.Questions);
  const dispatch = useAppDispatch();
  const categories = categoryState.categories;
  const variant = questionState.variant;
  let CategoryId = 0;

  const id = categoryState.CategoryId;
  if (variant == 'ArtistQuiz') {
    CategoryId = id < 10 ? id : id / 10;
  } else {
    CategoryId = id < 12 ? id : id / 10 - 12;
  }

  const navigate = useNavigate()
  const onNavigate = (elem: MouseEvent) => {
    const target = elem.target as HTMLButtonElement
    if (target.textContent == 'home') {
      navigate('/');
      dispatch(setCategoryId(0));
    } else if (target.textContent == 'Categories') {
      navigate(-1)
      dispatch(setCategoryId(0));
    }  }

  return (
    <>
      <div className={Styles.wrapper}>
        <header>
          <button onClick={(e) => onNavigate(e)}>
            <img src='images/Group.svg' alt='HOME' />
            home
          </button>
          <div className='logo'>
            <Logo />
          </div>
          <button onClick={(e) => onNavigate(e)}>Categories</button>
        </header>
        <div className={Styles.images}>
          {variant == 'ArtistQuiz'
            ? categoryState.categories[CategoryId]?.scoresArist.map((item) => (
                <div key={uuidv4()} className={Styles.question}>
                  <h1>{categories[CategoryId].categoryName}</h1>
                  <img
                    src={`GameImages/${item.id}.jpg`}
                    alt='QuestionImg'
                    style={{ filter: `grayscale(${item.isFind ? 0 : 100}%)` }}
                  />
                </div>
              ))
            : categoryState.categories[CategoryId]?.scoresPictures.map(
                (item) => (
                  <div key={uuidv4()} className={Styles.question}>
                    <h1>{categories[CategoryId].categoryName}</h1>
                    <img
                      src={`GameImages/${item.id}.jpg`}
                      alt='QuestionImg'
                      style={{ filter: `grayscale(${item.isFind ? 0 : 100}%)` }}
                    />
                  </div>
                )
              )}
        </div>
      </div>
    </>
  )
}

export default Scores;