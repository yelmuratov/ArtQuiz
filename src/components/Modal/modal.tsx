import { useAppSelector,useAppDispatch } from "../../helpers/redux";
import {  setDone } from "../../reducer/CategorySlice";
import { setCurrentQuestion, setModal, setResultModal } from "../../reducer/QuestionSlice";
import Styles from './modal.module.scss';

const Modal = () => {
  const questionState = useAppSelector(state => state.Questions);
  const CategoryState = useAppSelector(state => state.Categories);
  const dispatch = useAppDispatch();
  const data = questionState.data;
  const variant = questionState.variant;
  const categoryId = CategoryState.CategoryId;
  const currentQuestion = questionState.currentQuestion;
  let CurrentId = 0;

  if (variant == 'ArtistQuiz') {
    CurrentId = categoryId < 10 ? categoryId : categoryId / 10;
  } else {
    CurrentId = categoryId < 13 ? categoryId : categoryId / 10 - 12;
  }


  const setNextQuestion = () => {
    if (currentQuestion < CategoryState.CategoryId + 9) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    } else {
      dispatch(setModal(false));
      dispatch(setResultModal(true));
      dispatch(setDone({ id: CurrentId, variant }));
    }
    dispatch(setModal(false));
  }
  
  return (
    <div  
      className={`${Styles.modalBackground} ${
        questionState.modal ? Styles.show : Styles.hidden
      }`}
    >
      <div className={Styles.modal}>
        <div className={Styles.checkImg}>
          {questionState.isFind?<img src='images/Frame.svg' alt='Correct' />:`X`}
        </div>
        <div className={Styles.mainImg}>
          <img src={`GameImages/${currentQuestion}.jpg`} alt='MainImg' />
        </div>
        <div className={Styles.imgDescription}>
          <p>{data[currentQuestion].name}</p>
          <p>{data[currentQuestion].author}</p>
          <p>{data[currentQuestion].year}</p>
        </div>
        <button className={Styles.nextBtn} onClick={setNextQuestion}>Next</button>
      </div>
    </div>
  )
}

export default Modal;