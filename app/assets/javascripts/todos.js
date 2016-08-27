import Hello from "hello_world";
let hello = new Hello();
console.log( "GREET: " + hello.greet() );

// Adding the lines below breaks the working code above and outputs:
// application.self Uncaught SyntaxError: Unexpected token import
// application.self Uncaught SyntaxError: Unexpected token export

// ReactDOM.render(
//     <h1>Hello, world!</h1>h1>,
//     document.getElementById('example')
// );
