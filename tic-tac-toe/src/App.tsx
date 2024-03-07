/* App.tsx creates a Square component that renders a button. 
In React, a component is a function or a class that optionally accepts input and returns a React element (JSX). 
A component is a piece of reusable code that represents a part of the user interface. 
Components are used to render, manage, and update the UI elements in the application
The Square component is a function component that takes no input and returns a button element.
*/

/* The first line defines a function called "Square"
The "export" keyword makes this function accessible outside of this file.
The "default" keyword tells other files accessing this code that "Square" is the main function of the "App.tsx" file */

/* The second line returns a button
The "return" means that whatever comes after will be returned as a value to the caller of the function
"<button>" is a javascript element. (A combination of typescript code and HTML tags that defines the UI to be displayed)
'className="square"' is a property (or prop) of the javascript element "<button>"
"<button />" marks the end of the javascript element */

import './App.css';

export default function Square(){
  /* 
  
  return <button className="square">X</button><button className="square">X</button>; 

   This will cause an error saying elements must be wrapped in an enclosing tag.
   React components must return a single root element and not multiple adjacent elements. 
   
   */
  return(
    <>
    //The numerical order from 1 to 9 was generated using github copilot
    <div className='board-row'>
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
    </div>
    <div className='board-row'>
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
    </div>
    <div className='board-row'>
      <button className="square">7</button>
      <button className="square">8</button>
      <button className="square">9</button>
    </div>          
    </>
  )
}
