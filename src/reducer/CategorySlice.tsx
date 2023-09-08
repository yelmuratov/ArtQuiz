import { createSlice } from '@reduxjs/toolkit'


const getInitialValue = () => {
  if (window.localStorage.getItem('categorySlice')) {
    return JSON.parse(window.localStorage.getItem('categorySlice') as string)
  };

  return {
    categories: [
      {
        categoryName: 'Landscape',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Still Life',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Graphic',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Antique',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Avant-Garde',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Renaissance',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Surrealism',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Kitsch',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Minimalism',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Avangard',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'portrait',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
      {
        categoryName: 'Industrial',
        ArtistQuizDone: false,
        PicturesQuizDone: false,
        artistScore: 0,
        picturesScore: 0,
        scoresArist: [{ id: 0, isFind: false }],
        scoresPictures: [{ id: 0, isFind: false }],
      },
    ],
    CategoryId: 0,
  }
}

const initialValue = getInitialValue();

const CategorySlice = createSlice({
  name: 'Category',
  initialState: initialValue,
  reducers: {
    setCategoryId: (state, action: { payload: number }) => {
      state.CategoryId = action.payload
    },
    setDone: (state, action: { payload: { id: number; variant: string } }) => {
      if (action.payload.variant == 'ArtistQuiz') {
        state.categories[action.payload.id].ArtistQuizDone = true
      } else {
        state.categories[action.payload.id].PicturesQuizDone = true
      }
    },
    addArtistScore: (state, action: { payload: {id:number,score:number} }) => {
      state.categories[action.payload.id].artistScore = action.payload.score;
    },
    addPicturesScore: (state, action: { payload: {id:number,score:number} }) => {
      state.categories[action.payload.id].picturesScore = action.payload.score;
      console.log(action.payload.score);
    },
    setScore: (state, action: { payload: number }) => {
      state.categories[action.payload].artistScore = 0
      state.categories[action.payload].picturesScore = 0
    },
    setArtistScoresArr: (
      state,
      action: { payload: { categoryNum: number; data: {id:number,isFind:boolean}[] } }
    ) => {
      state.categories[action.payload.categoryNum].scoresArist = action.payload.data;
    },
    setPicturesScoresArr: (
      state,
      action: {
        payload: { categoryNum: number; data: { id: number; isFind: boolean }[] }
      }
    ) => {
      state.categories[action.payload.categoryNum].scoresPictures = action.payload.data;
    },
  },
})

export const { setCategoryId,addArtistScore,addPicturesScore,setDone,setScore,setArtistScoresArr,setPicturesScoresArr } = CategorySlice.actions;
export default CategorySlice.reducer;