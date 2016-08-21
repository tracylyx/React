var Hello = React.createClass({displayName: "Hello",
	render: function () {
		return React.createElement("div", null, "hello ", this.props.name, "world!");
	}
});

ReactDOM.render(
	React.createElement(Hello, null), 
	document.getElementById('container')
);