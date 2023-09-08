import { useAppDispatch } from '../../helpers/redux'
import { setVariant } from '../../reducer/QuestionSlice';
import Styles from './gameVariants.module.scss'

import {NavLink} from 'react-router-dom'

const GameVariants = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={Styles.variants}>
      <NavLink to='/artistQuiz' style={{ textDecoration: 'none' }}>
        <div
          className={Styles.artistQuiz}
          onClick={() => dispatch(setVariant('ArtistQuiz'))}
        >
          <img
            src='https://s3-alpha-sig.figma.com/img/f95a/30ff/cb47167e1fabaa7208dc273c3800d854?Expires=1694390400&Signature=ErzqpMSZJCB7w0sb~gIzZuMnLwjvZeY2rwdz0WE6u9mioRkRqUnIRp2kggd~kEyiYcJCDCgNE2uJ8yGyNAJe~zUl~Ygs8J4~51Ni5ahwF3VEzaZ8DvMmsjP2vxCm5GcHJUs-6g2hB60DL6L-uy23-bUdm2nwai87-juXZpzdcMYEpKbND9Fm4yGfQXfHnbwwomXVTjhCZnpDxVvpHYn4R1qD3EhzGT~6xH-bddly01HydhJ1ELI-63TOv2oSR-IBJws676FL3Nqa~Cw-ZijZLb0sr2NKBH0KN0MbrFE2j1LN-LgDgAXFOo6NaGWbuAE73U0iLPEgq4xCRtF3loqrZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            alt='Artists-Quiz'
          />
          <p className={Styles.title}>
            <span>Artists</span> Quiz
          </p>
        </div>
      </NavLink>
      <NavLink to='/picturesQuiz' style={{ textDecoration: 'none' }}>
        <div
          className={Styles.picturesQuiz}
          onClick={() => dispatch(setVariant('PicturesQuiz'))}
        >
          <img
            src='https://s3-alpha-sig.figma.com/img/d875/91f7/7ea8425c7d2e10ff1f49f62e28212f62?Expires=1694390400&Signature=poRYV1vD3lHhB40rw4f9SOW5W2lRH2Kie3DSNz-U6OozrEUQe8l8g3ST9sOCYUunf6Cuxngmuajc1LNDDIoOyntvRatla9YYueI2aJ62kVuHyIYU~eNrXm3jdhWTgVEFC0fCXVoyYbsjCPGr1sUn0kbyozE80b~LDuwqLl8CGxw4BXJjurcQEeowOf29BSKuLzyQXpPwW9N29i-ziM~GcUlVZ80ZcoomBQ6VDyBvd-R3MAhB2RvIVdniAJZHQc3ttOaejAI-DbAvhsKRN9gjlvGNPkyXbXSqmncSRx45ZyPnotrljNJznCDdBTczNJ5GlQm~96EN8MnGxHYuHBT~OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            alt='Pictures-Quiz'
          />
          <p className={Styles.title}>
            <span>Pictures</span> Quiz
          </p>
        </div>
      </NavLink>
    </div>
  )
}

export default GameVariants