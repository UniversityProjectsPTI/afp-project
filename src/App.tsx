import React, {useState} from 'react';
import HomeScreen from "./Screens/HomeScreen";
import GamesScreen from "./Screens/GamesScreen";
import QuizScreen from "./Screens/QuizScreen";

function App() {

   const [activeScreen, setActiveScreen]: any = useState("homeScreen");

   const screens: any = {
       homeScreen: <HomeScreen setActiveScreen={setActiveScreen}/>,
       games: <GamesScreen setActiveScreen={setActiveScreen}/>,
       quizGame: <QuizScreen/>
   };

  return (
    <div className="bg-[#333333] h-[100vh]">
      <div>
        {screens[activeScreen]}
      </div>
    </div>
  );
}

export default App;
