class Counter extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const change = parseInt(event.target.value);
    this.setState(() => ({count: this.state.count + change}));
  }



  render() {
    return (
      <h2>
      <button value={-1} onClick={this.handleClick}>
      -
      </button>
      <span>{this.state.count}</span>
      <button value={1} onClick={this.handleClick}>
      +
      </button>
      </h2>
    );
  }
}

ReactDOM.render(
  <Counter/>,
    document.getElementById('app')
);
