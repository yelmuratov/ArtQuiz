import { NavLink } from 'react-router-dom';
import Styles from './settingBtn.module.scss';

const SettingBtn = () => {
  return (
    <NavLink to='/settings' style={{textDecoration:'none'}}>
      <button className={Styles.settingBtn}>
        <img src='images/Group.png' alt='SettingIcon' />
        Settings
      </button>
    </NavLink>
  )
}

export default SettingBtn