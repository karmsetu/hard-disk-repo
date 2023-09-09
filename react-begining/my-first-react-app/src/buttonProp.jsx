/* eslint-disable react/prop-types */
import HandleClick from "./functionAsProp";
function Button({text, color, fontSize}) {
    console.log()
    const buttonStyle = {
      color: color,
      fontSize: fontSize + 'px'
    };
  
    return (
      <button onClick={HandleClick} style={buttonStyle}>{text}</button>
    )
  }

Button.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12
  };
  

export default Button
//   export default function App() {
//     return (
      
//     );
//   }