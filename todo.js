var form = document.getElementById('to_do_form');
var input = document.getElementById('to_do_input');
var list = document.getElementById('list');
var remove = document.getElementsByTagName('button')
var clearAll = document.getElementById('clear')

form.onsubmit = function () {
	
	event.preventDefault();

var ulList = document.createElement('ul');
var newTextNode = document.createTextNode(input.value);
var rmButton = document.createElement('button') 

	rmButton.innerHTML = 'X'
	list.appendChild(ulList)
	list.appendChild(newTextNode)
	list.appendChild(rmButton)

	rmButton.onclick = function () {

		rmButton.remove()
		newTextNode.remove()
	}
}


