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

// We create the new component "Square" and import it into the "Board" component
// As next step, we will update the "Square" component to accept a prop and display it
function Square({ value }: { value: number }) { 
  // A major difference between jsx and tsx is that props are "typed" in tsx. 
  //This means that the type of the prop is defined in the function signature
  return <button className="square">{value}</button>;
}

export default function Board(){
  /* 
  
  return <button className="square">X</button><button className="square">X</button>; 

   This will cause an error saying elements must be wrapped in an enclosing tag.
   React components must return a single root element and not multiple adjacent elements. 
   
   */

   
  // Button elements were replaced by : <Square /> components by github copilot
  // The value prop was added to the Square component using github copilot. Automatically added values from 1 to 9
  return (
    <>
      <div className='board-row'>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className='board-row'>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className='board-row'>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>          
    </>
  )
}
