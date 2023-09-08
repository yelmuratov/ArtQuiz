import Logo from '../../components/logo/logo';
import Categorories from '../categories/categorories';
import Styles from './pictures.module.scss';

const Pictures = () => {
  return (
    <div className={Styles.wrapper}>
      <Logo />
      <Categorories Category='PicturesQuiz' />
    </div>
  )
}

export default Pictures