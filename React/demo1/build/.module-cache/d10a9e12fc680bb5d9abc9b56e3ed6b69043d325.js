// 
var Hello = React.createClass({displayName: "Hello",
	render: function () {
		return (
			React.createElement("div", null, "Hello ", this.props.name, "World.")
		);
	}
});

ReactDOM.render(React.createElement(Hello, {name: "Miss."}), document.getElementById('container'));