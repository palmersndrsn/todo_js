var form = document.getElementById('to_do_form');
var input = document.getElementById('to_do_input');
var list = document.getElementById('list');
var remove = document.getElementsByTagName('button')


form.onsubmit = function () {
	
	event.preventDefault();

var ulList = document.createElement('li');
var newTextNode = document.createTextNode(input.value + ' ');
var rmButton = document.createElement('button') 

	rmButton.innerHTML = 'X'
	list.appendChild(ulList)
	ulList.appendChild(newTextNode)
	ulList.appendChild(rmButton)
	form.reset();

	rmButton.onclick = function () {

		list.removeChild(ulList,newTextNode,rmButton);

	}
}


