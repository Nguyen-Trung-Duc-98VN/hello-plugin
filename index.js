function helloPlugin(params) {
    console.log("helloPlugin")
	let div = document.createElement('div');
	div.className += 'hello';
    div.id = 'hello'
	let tag = document.createElement('p');
	let text = document.createTextNode('Hello my plugin');
	tag.appendChild(text);
	div.appendChild(tag);
}

module.exports.helloPlugin = helloPlugin;
