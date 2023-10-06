
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {

  const [showModal,setShowModal] = useState(false);


  function handleClick(){
    setShowModal(true);
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">

          <h1>Parent Component</h1>
          <ChildComponent showModal={showModal} handleClick={handleClick}/>


        </div>
    </div>
  )
}

export default App
