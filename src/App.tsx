import React, {useState} from 'react';
import HomeScreen from "./Screens/HomeScreen";

function App() {

   const [activeScreen, setActiveScreen]: any = useState("homeScreen");

   const screens: any = {
     homeScreen: <HomeScreen/>,
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
