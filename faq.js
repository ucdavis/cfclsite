/*function createExpandFunction(questionNode) {
    let node = questionNode;
    let returnFunc = function() {
        node.children[0].classList.add('hidden');
        node.children[1].classList.remove('hidden');
    }
    return returnFunc;
}*/

function createExpandFunction(questionNode) {
    let node = questionNode;
    let returnFunc = function() {
        node.children[0].classList.add('blue_bold');
        node.children[0].children[1].classList.add('hidden');
        node.children[0].children[2].classList.remove('hidden');
        node.children[1].classList.add('long_form');
        node.children[1].classList.remove('short_form');
    }
    return returnFunc;
}

function createContractFunction(questionNode) {
    let node = questionNode;
    let returnFunc = function() {
        node.children[0].classList.remove('blue_bold');
        node.children[0].children[1].classList.remove('hidden');
        node.children[0].children[2].classList.add('hidden');
        node.children[1].classList.remove('long_form');
        node.children[1].classList.add('short_form');
    }
    return returnFunc;
}

/*function createContractFunction(questionNode) {
    let node = questionNode;
    let returnFunc = function() {
        node.children[0].classList.remove('hidden');
        node.children[1].classList.add('hidden');
    }
    return returnFunc;
}*/

for (let i = 1; i <= 14; i++) {
    let elem = document.getElementById('q'+i);
    let flag = true
    let expandFunc = createExpandFunction(elem);
    let contractFunc = createContractFunction(elem); 
    let func = function() {
	if (flag) {
	    expandFunc();
	    flag = false;
	} else {
	    contractFunc();
	    flag = true;
	}
    }
    elem.children[0].addEventListener('click', func);
}
