function Adder({n1, n2}){
  const sum = n1 + n2;
  const mult = n1 * n2;
  return (
    <h1>
    <ul>
    <li>{sum}</li>
    <li>{mult}</li>
    </ul>
    </h1>
  )
}


// ReactDOM.render(
//   React.createElement(Adder,{n1:4, n2:5}),
//     document.getElementById('app')
// );


ReactDOM.render(
  <Adder n1={4} n2={5}/>,
    document.getElementById('app')
);
