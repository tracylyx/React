// var Hello = React.createClass({
// 	render: function () {
// 		return <div>hello {this.props.name}world!</div>;
// 	}
// });

// ReactDOM.render(
// 	<Hello name="Miss."/>, 
// 	document.getElementById('container')
// );

var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

ReactDOM.render(
  React.createElement(Hello, {name: "World"}),
  document.getElementById('container')
);