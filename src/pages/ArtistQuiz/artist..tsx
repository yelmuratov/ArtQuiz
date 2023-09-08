import Logo from '../../components/logo/logo';
import Categorories from '../categories/categorories';
import Styles from './artist.module.scss';

const ArtistQuiz = () => {
  return (
    <div className={Styles.wrapper}>
      <Logo />
      <Categorories Category = 'ArtistQuiz'/>
    </div>
  )
}

export default ArtistQuiz