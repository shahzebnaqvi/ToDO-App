var btnadd = document.getElementById('btnadd')
var list = document.getElementById('todolist');
var inputtext = document.getElementById('todoinput');
var btnaupdated = document.getElementById('btnaupdate')
var btnremoved = document.getElementById('btnremove')



var currentinputvalue = ""
inputtext.addEventListener('input', function(e) {
    currentinputvalue = e.target.value;
})


inputtext.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addlistitem();
    }

});

function createnewnode() {
    var newlistelement = document.createElement('li');
    var textnode = document.createTextNode(currentinputvalue);
    newlistelement.appendChild(textnode);
    newlistelement.id = "item" + (list.childElementCount + 1);
    return newlistelement;
}


function addlistitem() {
    if (currentinputvalue !== undefined && currentinputvalue !== null && currentinputvalue !== "") {
        var newlistelement = createnewnode();
        list.appendChild(newlistelement);
        inputtext.value = ""
        currentinputvalue = "";
    } else { alert("enter valid input") }
}
btnadd.addEventListener('click', addlistitem)


btnaupdated.addEventListener('click', function() {
    var firstelement = list.firstElementChild;
    var newlistelement = createnewnode();
    list.replaceChild(newlistelement, firstelement)
})

btnremoved.addEventListener('click', function() {

    var firstelement = list.firstElementChild;
    list.removeChild(firstelement);
})



function getTODOListFromBackend() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status) {
                console.log(JSON.parse(this.responseText));
            } else { console.log("Call Failed") }

        }
    }


    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();

}
getTODOListFromBackend();