import { createSlice } from "@reduxjs/toolkit";
import images from "../data/dataOfImages";

const getInitialValue = () => { 
  if (window.localStorage.getItem('questionSlice')) {
    return JSON.parse(window.localStorage.getItem('questionSlice') as string)
  }

  return {  
    currentQuestion: 0,
    data: images,
    CorrectAnswer: {},
    AnswerSeries: [],
    modal: false, 
    resultModal:false,
    isFind:false,
    variant:'',
  }
}

const initialValue = getInitialValue();

const QuestionSlice = createSlice({
  name: 'Questions',
  initialState: initialValue,
  reducers: {
    setCurrentQuestion: (state,action:{payload:number}) => {
      state.currentQuestion = action.payload;
    },
    setCorrectAnswer: (state, action: { payload: number }) => {
      state.CorrectAnswer = state.data[action.payload];
    },
    setModal: (state, action: { payload: boolean }) => {
      state.modal = action.payload;
    },
    setResultModal: (state, action: { payload: boolean }) => {
      state.resultModal = action.payload;
    },
    setIsFind: (state, action:{payload:boolean}) => {
      state.isFind = action.payload;
    },
    setVariant: (state, action: { payload: string }) => {
      state.variant = action.payload;
    }
  },
})


export const {setCorrectAnswer,setCurrentQuestion,setModal,setIsFind,setResultModal,setVariant} = QuestionSlice.actions;
export default QuestionSlice.reducer;