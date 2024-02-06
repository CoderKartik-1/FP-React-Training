import React from "react";
import ReactDOM  from "react-dom";
import FirstComponent, {FirstComponentEquivalent as MyJSXComponent} from "./components/WorkingWithJSX.js";
// import ReactComponent from "./components/InterpolationComponent.js";
// import ReactComponent from "./components/UpdatingProps";
import WorkingWithStyles from "./components/WorkingWithStyles.js";
// import ReactComponent from "./components/ParentChildComponent.js";
import ReactComponent from "./components/Condition&Iteration.js";
import IterationComponent from "./components/Iteration.jsx";
import DisplayTimeComponent from "./hooks/DisplayTimeComponent.jsx";
import UpdateClockComponent from "./classes/UpdatedClassComponent.jsx";
import UpdateCounterComponent from "./classes/UpdateCounterComponent.jsx";
import ArrowFunctionComponent from "./classes/ArrowFunctionComponent.jsx";
import UpdateCounter from "./hooks/UpdateCounter.jsx";

var userName = "Sample"
var userDesignation = "VP";

var employeeDetails = {
    salary: 2000,
    bonus: 1000

}

var arr = [10, 20, 30]

// ReactDOM.createRoot(document.getElementById("root")).render(
//     // <div>
//     //     <FirstComponent></FirstComponent> <hr/>
//     //     <MyJSXComponent></MyJSXComponent>
//     // </div>  
//     <>
//         {/* <h1 id="header" className="heading" data-info="some_data"></h1>
//         <ReactComponent userName="Mayank" userDesignation="Trainer"></ReactComponent> */}
//         {/* <ReactComponent userName={userName} userDesignation={userDesignation} employeeDetails={employeeDetails} arr={arr}></ReactComponent> */}
//         {/* <WorkingWithStyles></WorkingWithStyles> */}
//         <ParentComponent></ParentComponent>
//     </>
// );

// var userInfo = {
//     name: "Mayank",
//     designation: "Trainer",
//     salary: 20,
//     address: "A-8",
//     street: "Rohini",
//     city: "Banglore",
//     country: "India"
// }


ReactDOM.createRoot(document.getElementById("root")).render((
    <section>
        {/* <ReactComponent {...userInfo}></ReactComponent> */}
        {/* <IterationComponent></IterationComponent> */}
        {/* <UpdateClockComponent userName = "Kartik Gupta"></UpdateClockComponent> */}
        {/* <UpdateCounterComponent></UpdateCounterComponent> */}
        {/* <ArrowFunctionComponent></ArrowFunctionComponent> */}
        {/* <UpdateCounter></UpdateCounter> */}
        <DisplayTimeComponent></DisplayTimeComponent>
    </section>
))
