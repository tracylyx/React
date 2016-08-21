// var Hello = React.createClass({
// 	render: function () {
// 		return <div>hello {this.props.name}world!</div>;
// 	}
// });

// ReactDOM.render(
// 	<Hello name="Miss."/>, 
// 	document.getElementById('container')
// );

var HelloMessage = React.createClass({displayName: "HelloMessage",
			// 所有组件都必须要有自己的render方法，从而可以用于输出组件
			render: function () {
				return React.createElement("h1", null, "Hello ", this.props.name);

				// 什么是顶层标签，如下：有两个顶层标签h1 和 p
				// return <h1>Hello {this.props.name}</h1><p>some others</p>;
			}
		});

ReactDOM.render(
	// 模板插入<HelloMessage />时，会自动生成HelloMessage的一个实例
	// 组件用法同html标签的用法，可以加入任意属性，且组件属性可以通过this.props 对象上获取，这个对象的属性与组件的属性一一对应，除this.props.children外
	// 添加组件属性时，有两个点需要注意：class -> className，for -> htmlFor，因为箭头左边的是js的保留字，所以要用箭头右边作为React中的属性
	React.createElement(HelloMessage, {name: "tracy"}),
	document.getElementById('test')
);