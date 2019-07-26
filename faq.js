function createExpandFunction(questionNode) {
    let node = questionNode;
    let returnFunc = function() {
        node.children[0].classList.add('hidden');
        node.children[1].classList.remove('hidden');
    }
    return returnFunc;
}

function createContractFunction(questionNode) {
    let node = questionNode;
    let returnFunc = function() {
        node.children[0].classList.remove('hidden');
        node.children[1].classList.add('hidden');
    }
    return returnFunc;
}

for (let i = 1; i <= 14; i++) {
    let elem = document.getElementById('q'+i);
    let expandFunc = createExpandFunction(elem);
    let contractFunc = createContractFunction(elem);
    elem.children[0].children[1].addEventListener('click', expandFunc);
    elem.children[1].children[1].addEventListener('click', contractFunc);
}
