import Styles from './settings.module.scss';
import Logo from '../../components/logo/logo';
import { useState } from 'react';

const Settings = () => {
  const [volume, setVolume] = useState<number>(0);
  return (
    <div className={Styles.settings}>
      <div className={Styles.logo}>
        <Logo />
        <p className={Styles.settingTitle}>Settings</p>
      </div>
      <div className={Styles.setting}>
        <div className={Styles.volumeSetting}>
          <img src='images/volume-on.svg' alt='VolumeLogo' />
          <div className={Styles.volume}>
            <div className={Styles.sound}>
              <img src='images/volume-off.svg' alt='VolumeOff' />
              <input type='range' value={volume} onChange={(e)=>setVolume(+e.target.value)}/>
            </div>
            <p className={Styles.volumeTitle}>Volume</p>
          </div>
        </div>
        <div className={Styles.timeSetting}>
          <img src='images/timer-picture.svg' alt='TimerLogo' />
          <div className={Styles.rectangle}>
            <img src='images/Vector.svg' alt='Vector' />
          </div>
          <p className={Styles.switch}>on/off</p>
          <p className={Styles.timeTitle}>Time Game</p>
        </div>
      </div>
      <div>
        <button className={Styles.btn}>Save</button>
        <button className={Styles.btn}>Defaults</button>
      </div>
    </div>
  )
}

export default Settings;