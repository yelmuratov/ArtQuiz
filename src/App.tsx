// Components
import Logo from "./components/logo/logo";
import GameVariants from "./components/gameVariants/gameVariants";
import SettingBtn from "./components/settingsBtn/settingBtn";
import { useEffect } from "react";
import { useAppSelector } from "./helpers/redux";

function App() {
  const categoryState = useAppSelector(state => state.Categories);
  const questionState = useAppSelector(state => state.Questions);

  useEffect(() => {
    window.localStorage.setItem('categorySlice', JSON.stringify(categoryState))
  }, [categoryState])

  useEffect(() => {
    window.localStorage.setItem('questionSlice', JSON.stringify(questionState));
  }, [questionState]);
  
  return (
    <div className="App">
      <div className="wrapper">
        <Logo />
        <GameVariants /> 
        <SettingBtn />
      </div>
    </div>
  )
}

export default App
