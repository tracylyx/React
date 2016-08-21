
var Hello = React.createClass({displayName: "Hello",
	render: function () {
		return (
			React.createElement("div", null, "Hello ", this.props.name, "World")
		);
	}
});

ReactDOM.render(React.createElement(Hello, {name: "Miss."}), document.getElementById('container'));

var ButtonClick = React.createClass({displayName: "ButtonClick",
	render: function () {
		return (
			React.createElement("input", {type: ""})
		);
	}
});