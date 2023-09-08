import { useAppDispatch, useAppSelector } from '../../helpers/redux';
import { useNavigate } from 'react-router-dom';
import Styles from './result.module.scss';
import { setResultModal } from '../../reducer/QuestionSlice';
import { setCategoryId } from '../../reducer/CategorySlice';

const Result = () => {
  const questionstate = useAppSelector(state => state.Questions);
  const CategoryState = useAppSelector(state => state.Categories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const resultModal = questionstate.resultModal;
  const categoryId = CategoryState.CategoryId;
  const variant = questionstate.variant;
  


  const navigateHome = () => {
    navigate('/');
    dispatch(setResultModal(false));
    dispatch(setCategoryId(0));
  }

  const navigateNextQuiz = () => {
    navigate(-1);
    dispatch(setResultModal(false));
    dispatch(setCategoryId(0))
  }

  return (
    <div
      className={`${Styles.ModalBackground} ${
        resultModal ? Styles.show : Styles.hidden
      }`}
    >
      <div className={Styles.modal}>
        <h1 className={Styles.header}>Congrutulation !</h1>
        <h1 className={Styles.score}>{variant == 'ArtistQuiz'?CategoryState.categories[categoryId < 10 ? categoryId : categoryId / 10]?.artistScore:CategoryState.categories[categoryId < 12 ? categoryId : categoryId / 10 - 12]?.picturesScore}/10</h1>
        <div className='GoodJob'>
          <img src='images/GoodJob.svg' alt='GoodJob' />
        </div>
        <div className={Styles.btns}>
          <button onClick={navigateHome}>
            <img src='images/Group.svg' alt='HOME' />
            home
          </button>
          <button onClick={navigateNextQuiz}>NextQuiz</button>
        </div>
      </div>
    </div>
  )
}

export default Result