import { NavLink, useNavigate} from 'react-router-dom'
import Styles from './category.module.scss'
import { useAppDispatch, useAppSelector } from '../../helpers/redux'
import { setCategoryId } from '../../reducer/CategorySlice'
import { setCurrentQuestion } from '../../reducer/QuestionSlice'

const Category = (props: {
  category: string
  indx: number
  Variants: string
}) => {
  const Variants = props.Variants
  const category = props.category
  const indx = props.indx;
  const categoryState = useAppSelector(state => state.Categories);
  const questionState = useAppSelector(state => state.Questions);
  const dispatch = useAppDispatch(); 
  const variant:string = questionState.variant;
  let done:boolean = false;
  let score:number = 0

  if (variant == 'ArtistQuiz') {
    score = categoryState.categories[indx].artistScore;
    done = categoryState.categories[indx].ArtistQuizDone;
  } else {
    score = categoryState.categories[indx].picturesScore
    done = categoryState.categories[indx].PicturesQuizDone;
  }

  const onSendHandler = () => {
    dispatch(
      setCategoryId(
        Variants === 'ArtistQuiz'
          ? (indx == 0 ? 0 : indx) * 10
          : (indx + 12) * 10
      )
    )
    dispatch(
      setCurrentQuestion(
        Variants === 'ArtistQuiz'
          ? (indx == 0 ? 0 : indx) * 10
          : (indx + 12) * 10
      )
    )
  }

  const navigate = useNavigate();
  const navigateToScores = () => {
    navigate('/scores');
    onSendHandler();
  }
  
  return (
    <div className={Styles.category} onClick={onSendHandler}>
      <h1>
        <span>{category}</span>
        <span className={Styles.score}>{done ? score : ''}</span>
      </h1>
      <NavLink to='/questions' style={{ textDecoration: 'none' }}>
        <div
          style={{
            background: `url(GameImages/${
              Variants === 'ArtistQuiz'? (indx == 0 ? 0: indx * 10): (indx + 12) * 10
            }.jpg)`,
            height: '280px',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            zIndex: '1',
            filter: `grayscale(${done ? '0' : '100%'})`,
          }}
        ></div>
      </NavLink>
      <div className={done ? Styles.show : Styles.hidden}>
        <button onClick={navigateToScores}>
          <img src='images/Star.svg' alt='ScoreImg' />
          Score
        </button>
      </div>
    </div>
  )
}

export default Category;
