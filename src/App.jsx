import React, { useState, Component } from "react";
import "./App.css";

// using function component
function App(props) {
  let [count, setCount] = useState(0);
  let [tempColor, setTempColor] = useState("cold");
  let [tempTxtColor, setTxtTempColor] = useState("txtCold");

  const increment = () => {
    if (count === 30) return;
    if (count >= 15) {
      setTempColor("hot");
      setTxtTempColor("txtHot");
    }

    setCount((count = count + 1));
  };

  const decrement = () => {
    if (count === 0) return;

    if (count < 16) {
      setTempColor("cold");
      setTxtTempColor("txtCold");
    }

    setCount((count = count - 1));
  };

  return (
    <div className="App">
      <h1 className={`${tempColor}`}>TEMPERATURE COUNTER</h1>
      <div className="counterCard">
        <button className={`counterBtn ${tempColor}`} onClick={decrement}>
          -
        </button>
        <span className={`${tempTxtColor}`}>{count}°C</span>
        <button className={`counterBtn ${tempColor}`} onClick={increment}>
          +
        </button>
      </div>
      <div className="info">
        <div className="infobars">
          <div className="infobox coldbox"></div>COLD
        </div>
        <div className="infobars">
          <div className="infobox hotbox"></div>HOT
        </div>
      </div>
    </div>
  );
}

// using class component
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       bgColor: "cold",
//       textColor: "txtCold",
//     };
//   }

//   increment = () => {
//     if (this.state.count === 30) { return }
//     else if (this.state.count >= 15) {
//       this.setState({
//         bgColor: "hot",
//         textColor: "txtHot",
//       });
//     };
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   decrement = () => {
//     if (this.state.count === 0) {
//       return;
//     } else if (this.state.count < 16) {
//       this.setState({
//         bgColor: "cold",
//         textColor: "txtCold",
//       });
//     }
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1 className={`${this.state.bgColor}`}>TEMPERATURE COUNTER</h1>
//         <div className={`counterCard `}>
//           <button
//             className={`counterBtn ${this.state.bgColor}`}
//             onClick={this.decrement}
//           >
//             -
//           </button>
//           <span className={`${this.state.textColor}`}>
//             {this.state.count}°C
//           </span>
//           <button
//             className={`counterBtn ${this.state.bgColor}`}
//             onClick={this.increment}
//           >
//             +
//           </button>
//         </div>
//         <div className="info">
//             <div className="infobars"><div className="infobox coldbox"></div>COLD</div>
//             <div className="infobars"><div className="infobox hotbox"></div>HOT</div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
