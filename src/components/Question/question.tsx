import { useEffect,useState,MouseEvent} from 'react';
import {useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../../helpers/redux';
import { setCorrectAnswer,setIsFind, setModal} from '../../reducer/QuestionSlice';
import { SetAnswersId, shuffle } from '../../Functions/functions';
import { addArtistScore, addPicturesScore, setArtistScoresArr, setCategoryId, setPicturesScoresArr} from '../../reducer/CategorySlice';

// Style
import Styles from './question.module.scss';

const Question = () => {
  const CategoryState = useAppSelector(state => state.Categories);
  const QuestionState = useAppSelector(state => state.Questions);
  const dispatch = useAppDispatch();
  const Variant = QuestionState.variant;
  const CategoryId = CategoryState.CategoryId;
  const currentQuestion = QuestionState.currentQuestion;
  const data = QuestionState.data;
  const AnswersId: number[] = [currentQuestion];
  const [shufflearr, setShufflearr] = useState<number[]>([]);
  let i = 0;
  const [questions, setQuestions] = useState<{ id: number, isFind: boolean }[]>([]);

  for (i; i < 3; i++) {
    SetAnswersId(AnswersId, AnswersId[0],data);
  }
  
  useEffect(() => {
    dispatch(setCorrectAnswer(currentQuestion));
  }, [CategoryId]);

  useEffect(() => {
    setShufflearr(shuffle(AnswersId));
    setQuestions(prev => [...prev, { id: currentQuestion, isFind: false }]);
  }, [currentQuestion]);
   
  const mixedIds = shufflearr;

  const checkAnswer = (CorrectAnswer: string,event:MouseEvent,imageNumber:string) => {
    let target = event.target as HTMLLIElement|HTMLDivElement
    target.classList.remove(Styles.correct);
    target.classList.remove(Styles.wrong);

    if (Variant === 'ArtistQuiz') {
      if (target.textContent === CorrectAnswer) {
        //checkAnswer
        target.classList.add(Styles.correct)
        setTimeout(() => {
          dispatch(setIsFind(true));
        }, 300)

        // setScoresArr
        questions && questions.map(item => {
          if (item.id == currentQuestion) {
            item && (item.isFind = true);
          }
        })
      } else {
        setTimeout(() => {
          dispatch(setIsFind(false))
        }, 300)
        target.classList.add(Styles.wrong)
      }

      setTimeout(() => {
        dispatch(setModal(true))
      }, 300)
    } else {
      if (currentQuestion === +imageNumber) {
        dispatch(setIsFind(true));

        // setScoresArr
       questions && questions.map(item => {
         if (item?.id == currentQuestion) {
            console.log(item.isFind);
           item && (item.isFind = true);
          }
        })
      } else {
        dispatch(setIsFind(false));
      }
      dispatch(setModal(true));
    }
 
  }

  if (Variant == 'ArtistQuiz') {
    const currentid = CategoryId < 10 ? CategoryId : CategoryId / 10;
    const done = CategoryState.categories[currentid].ArtistQuizDone;

    if (done) {
      setTimeout(() => {
        dispatch(
          setArtistScoresArr({ categoryNum: currentid, data: questions })
        )
      }, 2000);
      dispatch(addArtistScore({ id: currentid, score: questions.filter(c => c.isFind).length }));
    }
  } else {
    const currentid = CategoryId < 13 ? CategoryId : CategoryId / 10 - 12;
    const done = CategoryState.categories[currentid].PicturesQuizDone;

    if (done) {
      setTimeout(() => {
        dispatch(
          setPicturesScoresArr({ categoryNum: currentid, data: questions })
        )
        dispatch(addPicturesScore({ id: currentid, score: questions.filter(c => c.isFind).length }));
      }, 2000);
    }
  }
  
  const navigate = useNavigate();
  const onNavigate = (elem: MouseEvent) => {
    const target = elem.target as HTMLButtonElement;
    if (target.textContent == 'home') {
      navigate('/');
    } else {
      navigate(-1);
    }
    dispatch(setCategoryId(0));
  }

  return (
    <>
      {Variant === 'ArtistQuiz' ? (
        <div className={Styles.wrapper}>
          <header>
            <button onClick={(e) => onNavigate(e)}>
              <img src='images/Group.svg' alt='HOME' />
              home
            </button>
            <h1 className='heading'>КТО АВТОР ДАННОЙ КАРТИНЫ?</h1>
            <button onClick={(e) => onNavigate(e)}>Categories</button>
          </header>
          <div className='questionBody'>
            <div className={Styles.questionImg}>
              <img
                src={`GameImages/${currentQuestion}.jpg`}
                alt='QuestionImg'
              />
            </div>
            <ul className={Styles.answers}>
              {mixedIds.map((id) => (
                <li
                  key={uuidv4()}
                  onClick={(e) => checkAnswer(data[currentQuestion].author, e,String(id))}
                >
                  {data[id].author}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={Styles.wrapper}>
          <header>
            <button onClick={(e) => onNavigate(e)}>
              <img src='images/Group.svg' alt='HOME' />
              home
            </button>
            <h1 className='heading'>
              КАКУЮ КАРТИНУ НАПИСАЛ {data[currentQuestion].author}?
            </h1>
            <button onClick={(e) => onNavigate(e)}>Categories</button>
          </header>
          <div className='PicturesQuestions'>
              <div className={Styles.answerImages}>
              {mixedIds.map((id) => (
                <div
                  key={uuidv4()}
                  onClick={(e) =>
                    checkAnswer(
                      data[currentQuestion].author,
                      e,
                      String(id)
                    )
                  }
                >
                  <img
                    src={`GameImages/${data[id].imageNum}.jpg`}
                    alt='QuestionImg'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Question