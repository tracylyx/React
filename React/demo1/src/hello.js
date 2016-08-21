
var Hello = React.createClass({
	render: function () {
		return (
			<div>Hello {this.props.name}World</div>
		);
	}
});

ReactDOM.render(<Hello name="Miss."/>, document.getElementById('container'));

var ButtonClick = React.createClass({
	// 状态初始化
	getInitialState: function () {
		return {
			inputValue: ''
		};
	},

	// e 经过react封装过，但是包含原生js的e的属性
	handleClick: function (e) {
		alert(111);
	},

	render: function () {
		return (
			<div>
				<input type="button" value="click me" onClick={this.handleClick} />
				<p>{this.}</p>
			</div>
		);
	}
});

ReactDOM.render(<ButtonClick/>, document.getElementById('container'));