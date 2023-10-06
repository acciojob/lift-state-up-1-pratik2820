
import React from "react";


const ChildComponent = ({showModal,handleClick}) =>{


    return(
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={handleClick}>Show Modal</button>
            {
                showModal && (
                    <div>
                        <h3>Modal Content</h3>
                        <p>This is the modal content.</p>
                    </div>
                )
            }



        </div>
    )
}

export default ChildComponent;