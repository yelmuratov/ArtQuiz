import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Settings from './pages/settings/settings.tsx'
import Categorories from './pages/categories/categorories.tsx'
import Pictures from './pages/PicturesQuiz/pictures.tsx'
import ArtistQuiz from './pages/ArtistQuiz/artist..tsx'
import { Provider } from 'react-redux'
import store from './store'
import Question from './components/Question/question.tsx';
import Modal from './components/Modal/modal.tsx';
import Result from './components/resultModal/result.tsx';
import Scores from './components/scores/scores.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Modal />
      <Result />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/category' element={<Categorories Category='' />} />
          <Route path='/picturesQuiz' element={<Pictures />} />
          <Route path='/artistQuiz' element={<ArtistQuiz />} />
          <Route path='/questions' element={<Question />} />
          <Route path='/scores' element = {<Scores />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
)
