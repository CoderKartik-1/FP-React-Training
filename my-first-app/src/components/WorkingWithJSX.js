import React from "react";
import ReactDOM  from "react-dom";

// var root = ReactDOM.createRoot(document.getElementById("root"));
// var root = ReactDOM.createRoot(document.getElementsByTagName("div")[0]);
// root.render(<h2>This is first react component </h2>);

// alert("Hello all, welcome to this session");

//for rendering multiple jsx components inside render(), they should be inside a parent element.
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <div>
//         <FirstComponent></FirstComponent> <hr/>
//         <FirstComponentEquivalent></FirstComponentEquivalent>
//     </div>  

// );

export default function FirstComponent(){
    // return <h1 className="sample"> This is my first component</h1>
    // return React.createElement("h1", {className:"sample", id:"sample"}, "hello all, welcome to the session!");
    // React.createElement("p", {}, "Hello All"),
    // React.createElement("b", {}, "Hi All...."), 
    return React.createElement("div", {}, [
        React.createElement("div", {}, [
            React.createElement("h1", {}, "This is Main Content without JSX")
        ]),
        
        React.createElement("div", {}, [
            React.createElement("p", {}, [
                React.createElement("h2", {}, "Welcome Back....")
            ])
        ])
    ])
}

export function FirstComponentEquivalent(){
    return (
        <div>
            <div>
                <h1>This is Main Content 2</h1>
            </div>

            <div>
                <p>
                    <h2>Welcome Back... 2</h2>
                </p>
            </div>
        </div>
    )
}