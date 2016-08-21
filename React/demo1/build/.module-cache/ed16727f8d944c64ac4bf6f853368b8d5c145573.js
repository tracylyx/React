
var Hello = React.createClass({displayName: "Hello",
	render: function () {
		return (
			React.createElement("div", null, "Hello ", this.props.name, "World")
		);
	}
});

ReactDOM.render(React.createElement(Hello, {name: "Miss."}), document.getElementById('container'));

var ButtonClick = React.createClass({displayName: "ButtonClick",
	// e 经过react封装过，但是包含原生js的e的属性
	handleClick: function (e) {
		alert(111);
	},

	render: function () {
		return (
			React.createElement("input", {type: "button", value: "click me", onClick: this.handleClick})
		);
	}
});