// import React, { useState, useEffect } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";

// const DICalculator = () => {
//   const [steelType, setSteelType] = useState("non-boron");
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//   };

//   const calculateNonBoronDI = () => {
//     let di = 1;
//     Object.entries(concentrations).forEach(([element, value]) => {
//       const factorTable = multiplyingFactors[element];
//       if (factorTable && factorTable[value]) {
//         di *= factorTable[value];
//       }
//     });
//     console.log("DI Value:", di);
//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       <h1>DI Calculator</h1>
//       <div className="radio-group">
//         <label>
//           <input
//             type="radio"
//             name="steelType"
//             value="non-boron"
//             checked={steelType === "non-boron"}
//             onChange={() => setSteelType("non-boron")}
//           />
//           Non-Boron Steel
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="steelType"
//             value="boron"
//             checked={steelType === "boron"}
//             onChange={() => setSteelType("boron")}
//           />
//           Boron Steel
//         </label>
//       </div>

//       <div className="input-group">
//         {elements.map((element) => {
//           if (steelType === "boron" && element === "Boron") {
//             return (
//               <div key={element} className="input-field">
//                 <label>{element} Concentration:</label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   min="0"
//                   onChange={(e) => handleInputChange(element, e.target.value)}
//                 />
//               </div>
//             );
//           } else if (steelType === "non-boron" && element !== "Boron") {
//             return (
//               <div key={element} className="input-field">
//                 <label>{element} Concentration:</label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   min="0"
//                   onChange={(e) => handleInputChange(element, e.target.value)}
//                 />
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>

//       <button onClick={steelType === "non-boron" ? calculateNonBoronDI : null}>
//         Calculate DI
//       </button>
//       {diValue && <h2>DI Value: {diValue}</h2>}
//     </div>
//   );
// };

// export default DICalculator;


// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg"; // Importing the logo

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;

//     Object.entries(concentrations).forEach(([element, value]) => {
//       const factorTable = multiplyingFactors[element];

//       if (!factorTable || factorTable[value] === null) {
//         hasInvalidValue = true;
//       } else {
//         di *= factorTable[value];
//       }
//     });

//     if (hasInvalidValue) {
//       alert("Incorrect values added, please check again.");
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       {/* Logo at the top */}
//       <img src={frontierLogo} alt="Frontier Logo" className="logo" />

//       <h1>DI Calculator (Non-Boron Steel)</h1>

//       <div className="input-group">
//         {elements.map((element) => (
//           <div key={element} className="input-field">
//             <label>{element} Concentration:</label>
//             <input
//               type="number"
//               step="0.01"
//               min="0"
//               onChange={(e) => handleInputChange(element, e.target.value)}
//             />
//           </div>
//         ))}
//       </div>

//       <button onClick={calculateDI}>Calculate DI</button>
      
//       {diValue !== null && <h2>DI Value: {diValue}</h2>}
//     </div>
//   );
// };

// export default DICalculator;



// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg"; // Importing the logo

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;

//     Object.entries(concentrations).forEach(([element, value]) => {
//       const factorTable = multiplyingFactors[element];

//       // Check if value is missing in the JSON
//       if (!factorTable || factorTable[value] === null || factorTable[value] === undefined) {
//         hasInvalidValue = true;
//       } else {
//         di *= factorTable[value];
//       }
//     });

//     if (hasInvalidValue) {
//       alert("Incorrect values added, please check again.");
//       setConcentrations({}); // Reset all input fields
//       setDiValue(null); // Reset DI value
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       {/* Logo at the top */}
//       <img src={frontierLogo} alt="Frontier Logo" className="logo" />

//       <h1>DI Calculator (Non-Boron Steel)</h1>

//       <div className="input-group">
//         {elements.map((element) => (
//           <div key={element} className="input-field">
//             <label>{element} Concentration:</label>
//             <input
//               type="number"
//               step="0.01"
//               min="0"
//               value={concentrations[element] || ""} // Reset input fields if needed
//               onChange={(e) => handleInputChange(element, e.target.value)}
//             />
//           </div>
//         ))}
//       </div>

//       <button onClick={calculateDI}>Calculate DI</button>

//       {diValue !== null && <h2>DI Value: {diValue}</h2>}
//     </div>
//   );
// };

// export default DICalculator;


// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg";

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showDialog, setShowDialog] = useState(false);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//     setErrors({ ...errors, [element]: "" }); // Clear error when user types
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;
//     let hasEmptyFields = false;
//     let newErrors = {};

//     Object.entries(multiplyingFactors).forEach(([element]) => {
//       const value = concentrations[element];

//       if (!value) {
//         newErrors[element] = "Please enter this field before submitting.";
//         hasEmptyFields = true;
//       } else {
//         const factorTable = multiplyingFactors[element];
//         if (!factorTable || factorTable[value] === null || factorTable[value] === undefined) {
//           hasInvalidValue = true;
//         } else {
//           di *= factorTable[value];
//         }
//       }
//     });

//     if (hasEmptyFields) {
//       setErrors(newErrors);
//       return;
//     }

//     if (hasInvalidValue) {
//       setShowDialog(true);
//       setConcentrations({}); // Reset fields after showing dialog
//       setDiValue(null);
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       <img src={frontierLogo} alt="Frontier Logo" className="logo" />
//       <h1>DI Calculator (Non-Boron Steel)</h1>

//       <div className="input-group">
//         {elements.map((element) => (
//           <div key={element} className="input-field">
//             <label>{element} Concentration:</label>
//             <input
//               type="number"
//               step="0.01"
//               min="0"
//               value={concentrations[element] || ""}
//               onChange={(e) => handleInputChange(element, e.target.value)}
//             />
//             {errors[element] && <span className="error-text">{errors[element]}</span>}
//           </div>
//         ))}
//       </div>

//       <button onClick={calculateDI}>Calculate DI</button>

//       {diValue !== null && <h2>DI Value: {diValue}</h2>}

//       {/* Custom Dialog Box */}
//       {showDialog && (
//         <div className="dialog-overlay">
//           <div className="dialog-box">
//             <h2>Error</h2>
//             <p>Incorrect values added, please check again.</p>
//             <button onClick={() => setShowDialog(false)}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DICalculator;


// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg";

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showDialog, setShowDialog] = useState(false);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//     setErrors({ ...errors, [element]: "" });
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;
//     let hasEmptyFields = false;
//     let newErrors = {};

//     Object.entries(multiplyingFactors).forEach(([element]) => {
//       const value = concentrations[element];

//       if (!value) {
//         newErrors[element] = "Please enter this field before submitting.";
//         hasEmptyFields = true;
//       } else {
//         const factorTable = multiplyingFactors[element];
//         const factor = factorTable[value] ?? null;

//         if (factor === null) {
//           hasInvalidValue = true;
//         } else {
//           di *= parseFloat(factor); // Fix for rounding issue
//         }
//       }
//     });

//     if (hasEmptyFields) {
//       setErrors(newErrors);
//       return;
//     }

//     if (hasInvalidValue) {
//       setShowDialog(true);
//       setConcentrations({});
//       setDiValue(null);
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <img src={frontierLogo} alt="Frontier Logo" className="logo" />
//         <h1>DI Calculator (Non-Boron Steel)</h1>
//       </div>

//       <div className="card">
//         <div className="input-group">
//           {elements.map((element) => (
//             <div key={element} className="input-field">
//               <label>{element} Concentration:</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 value={concentrations[element] || ""}
//                 onChange={(e) => handleInputChange(element, e.target.value)}
//               />
//               {errors[element] && <span className="error-text">{errors[element]}</span>}
//             </div>
//           ))}
//         </div>

//         <button className="calculate-btn" onClick={calculateDI}>
//           Calculate DI
//         </button>

//         {diValue !== null && <h2 className="result">DI Value: {diValue}</h2>}
//       </div>

//       {showDialog && (
//         <div className="dialog-overlay">
//           <div className="dialog-box">
//             <h2>Error</h2>
//             <p>Incorrect values added, please check again.</p>
//             <button onClick={() => setShowDialog(false)}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DICalculator;


// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg";

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showDialog, setShowDialog] = useState(false);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//     setErrors({ ...errors, [element]: "" });
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;
//     let hasEmptyFields = false;
//     let newErrors = {};

//     Object.entries(multiplyingFactors).forEach(([element]) => {
//       const value = parseFloat(concentrations[element]);

//       if (!value && value !== 0) {
//         newErrors[element] = "Please enter this field before submitting.";
//         hasEmptyFields = true;
//       } else {
//         const factorTable = multiplyingFactors[element];
//         const factor = factorTable[value.toFixed(2)] ?? null; // Fix rounding issue

//         if (factor === null) {
//           hasInvalidValue = true;
//         } else {
//           di *= parseFloat(factor);
//         }
//       }
//     });

//     if (hasEmptyFields) {
//       setErrors(newErrors);
//       return;
//     }

//     if (hasInvalidValue) {
//       setShowDialog(true);
//       setConcentrations({});
//       setDiValue(null);
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       <div className="background-animation"></div>
//       <div className="header">
//         <img src={frontierLogo} alt="Frontier Logo" className="logo" />
//         <h1>DI Calculator (Non-Boron Steel)</h1>
//       </div>

//       <div className="card glassmorphism">
//         <div className="input-group">
//           {elements.map((element) => (
//             <div key={element} className="input-field">
//               <label>{element} Concentration:</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 value={concentrations[element] || ""}
//                 onChange={(e) => handleInputChange(element, e.target.value)}
//               />
//               {errors[element] && <span className="error-text">{errors[element]}</span>}
//             </div>
//           ))}
//         </div>

//         <button className="calculate-btn" onClick={calculateDI}>
//           Calculate DI
//         </button>

//         {diValue !== null && <h2 className="result">DI Value: {diValue}</h2>}
//       </div>

//       {showDialog && (
//         <div className="dialog-overlay">
//           <div className="dialog-box">
//             <h2>⚠ Incorrect Values</h2>
//             <p>Some entered values are invalid. Please check and try again.</p>
//             <button onClick={() => setShowDialog(false)}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DICalculator;


// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg";

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showDialog, setShowDialog] = useState(false);

//   const elements = Object.keys(multiplyingFactors);

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//     setErrors({ ...errors, [element]: "" });
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;
//     let hasEmptyFields = false;
//     let newErrors = {};

//     Object.entries(multiplyingFactors).forEach(([element]) => {
//       const value = parseFloat(concentrations[element]);

//       if (!value && value !== 0) {
//         newErrors[element] = "Please enter this field before submitting.";
//         hasEmptyFields = true;
//       } else {
//         const roundedValue = value.toFixed(2); // Ensure proper lookup
//         const factorTable = multiplyingFactors[element];
//         const factor = factorTable[roundedValue] ?? null;

//         if (factor === null) {
//           hasInvalidValue = true;
//         } else {
//           di *= parseFloat(factor);
//         }
//       }
//     });

//     if (hasEmptyFields) {
//       setErrors(newErrors);
//       return;
//     }

//     if (hasInvalidValue) {
//       setShowDialog(true);
//       setConcentrations({});
//       setDiValue(null);
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       <div className="background-animation"></div>
//       <div className="header">
//         <img src={frontierLogo} alt="Frontier Logo" className="logo" />
//         <h1>DI Calculator (Non-Boron Steel)</h1>
//       </div>

//       <div className="card glassmorphism">
//         <div className="input-group">
//           {elements.map((element) => (
//             <div key={element} className="input-field">
//               <label>{element} Concentration:</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 value={concentrations[element] || ""}
//                 onChange={(e) => handleInputChange(element, e.target.value)}
//                 onWheel={(e) => e.preventDefault()} // Prevents scrolling from changing values
//               />
//               {errors[element] && <span className="error-text">{errors[element]}</span>}
//             </div>
//           ))}
//         </div>

//         <button className="calculate-btn" onClick={calculateDI}>
//           Calculate DI
//         </button>

//         {diValue !== null && <h2 className="result">DI Value: {diValue}</h2>}
//       </div>

//       {showDialog && (
//         <div className="dialog-overlay">
//           <div className="dialog-box">
//             <h2>⚠ Incorrect Values</h2>
//             <p>Some entered values are invalid. Please check and try again.</p>
//             <button onClick={() => setShowDialog(false)}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DICalculator;


// import React, { useState } from "react";
// import "./App.css";
// import multiplyingFactors from "./multiplyingFactor.json";
// import frontierLogo from "./frontierLogo.jpg";

// const DICalculator = () => {
//   const [concentrations, setConcentrations] = useState({});
//   const [diValue, setDiValue] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showDialog, setShowDialog] = useState(false);

//   const elements = Object.keys(multiplyingFactors);

//   // Function to disable scrolling when an input is focused
//   const disableScroll = (e) => {
//     e.target.addEventListener("wheel", (event) => event.preventDefault(), { passive: false });
//   };

//   // Function to enable scrolling when an input loses focus
//   const enableScroll = (e) => {
//     e.target.removeEventListener("wheel", (event) => event.preventDefault());
//   };

//   const handleInputChange = (element, value) => {
//     setConcentrations({ ...concentrations, [element]: value });
//     setErrors({ ...errors, [element]: "" });
//   };

//   const calculateDI = () => {
//     let di = 1;
//     let hasInvalidValue = false;
//     let hasEmptyFields = false;
//     let newErrors = {};

//     Object.entries(multiplyingFactors).forEach(([element]) => {
//       const value = parseFloat(concentrations[element]);

//       if (!value && value !== 0) {
//         newErrors[element] = "Please enter this field before submitting.";
//         hasEmptyFields = true;
//       } else {
//         const roundedValue = value.toFixed(2); // Ensure proper lookup
//         const factorTable = multiplyingFactors[element];
//         const factor = factorTable[roundedValue] ?? null;

//         if (factor === null) {
//           hasInvalidValue = true;
//         } else {
//           di *= parseFloat(factor);
//         }
//       }
//     });

//     if (hasEmptyFields) {
//       setErrors(newErrors);
//       return;
//     }

//     if (hasInvalidValue) {
//       setShowDialog(true);
//       setConcentrations({});
//       setDiValue(null);
//       return;
//     }

//     setDiValue(di.toFixed(3));
//   };

//   return (
//     <div className="container">
//       <div className="background-animation"></div>
//       <div className="header">
//         <img src={frontierLogo} alt="Frontier Logo" className="logo" />
//         <h1>DI Calculator (Non-Boron Steel)</h1>
//       </div>

//       <div className="card glassmorphism">
//         <div className="input-group">
//           {elements.map((element) => (
//             <div key={element} className="input-field">
//               <label>{element} Concentration:</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 min="0"
//                 value={concentrations[element] || ""}
//                 onChange={(e) => handleInputChange(element, e.target.value)}
//                 onFocus={disableScroll} // Disable scrolling while input is focused
//                 onBlur={enableScroll} // Enable scrolling again when input loses focus
//               />
//               {errors[element] && <span className="error-text">{errors[element]}</span>}
//             </div>
//           ))}
//         </div>

//         <button className="calculate-btn" onClick={calculateDI}>
//           Calculate DI
//         </button>

//         {diValue !== null && <h2 className="result">DI Value: {diValue}</h2>}
//       </div>

//       {showDialog && (
//         <div className="dialog-overlay">
//           <div className="dialog-box">
//             <h2>⚠ Incorrect Values</h2>
//             <p>Some entered values are invalid. Please check and try again.</p>
//             <button onClick={() => setShowDialog(false)}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DICalculator;



import React, { useState } from "react";
import "./App.css";
import multiplyingFactors from "./multiplyingFactor.json";
import frontierLogo from "./frontierLogo.jpg";

const DICalculator = () => {
  const [concentrations, setConcentrations] = useState({});
  const [diValue, setDiValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [showDialog, setShowDialog] = useState(false);

  const elements = Object.keys(multiplyingFactors);

  // Function to disable scrolling when an input is focused
  const disableScroll = (e) => {
    e.target.addEventListener("wheel", (event) => event.preventDefault(), { passive: false });
  };

  // Function to enable scrolling when an input loses focus
  const enableScroll = (e) => {
    e.target.removeEventListener("wheel", (event) => event.preventDefault());
  };

  const handleInputChange = (element, value) => {
    setConcentrations({ ...concentrations, [element]: value });
    setErrors({ ...errors, [element]: "" });
  };

  const calculateDI = () => {
    let di = 1;
    let hasInvalidValue = false;
    let hasEmptyFields = false;
    let newErrors = {};

    Object.entries(multiplyingFactors).forEach(([element]) => {
      const value = parseFloat(concentrations[element]);

      if (!value && value !== 0) {
        newErrors[element] = "Please enter this field before submitting.";
        hasEmptyFields = true;
      } else {
        const roundedValue = value.toFixed(2); // Ensure proper lookup
        const factorTable = multiplyingFactors[element];
        const factor = factorTable[roundedValue] ?? null;

        if (factor === null) {
          hasInvalidValue = true;
        } else {
          di *= parseFloat(factor);
        }
      }
    });

    if (hasEmptyFields) {
      setErrors(newErrors);
      return;
    }

    if (hasInvalidValue) {
      setShowDialog(true);
      setConcentrations({});
      setDiValue(null);
      return;
    }

    setDiValue(di.toFixed(3));
  };

  return (
    <div className="container">
      <div className="background-animation"></div>
      <div className="header">
      <div className="logo-container">
    <img src={frontierLogo} alt="Frontier Alloy Steels Limited" />
</div>
        {/* <img src={frontierLogo} alt="Frontier Logo" className="logo" /> */}
        <h1>Di Calculator <span>(Non Boron Steel)</span></h1>

      </div>

      <div className="card glassmorphism">
        <div className="input-group">
          {elements.map((element) => (
            <div key={element} className="input-field">
              <label>{element} %:</label> {/* Changed label from "Concentration" to "%" */}
              <input
                type="number"
                step="0.01"
                min="0"
                value={concentrations[element] || ""}
                onChange={(e) => handleInputChange(element, e.target.value)}
                onFocus={disableScroll} // Disable scrolling while input is focused
                onBlur={enableScroll} // Enable scrolling again when input loses focus
              />
              {errors[element] && <span className="error-text">{errors[element]}</span>} {/* Error text now styled */}
            </div>
          ))}
        </div>

        <button className="calculate-btn" onClick={calculateDI}>
          Calculate DI
        </button>

        {diValue !== null && <h2 className="result">DI Value: {diValue}</h2>}
      </div>

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>⚠ Incorrect Values</h2>
            <p>Some entered values are invalid. Please check and try again.</p>
            <button onClick={() => setShowDialog(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DICalculator;




