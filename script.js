var todos = [];
var marcada = [];
var marcadaIDs = [];
var j = 0;
var y = j - 1;
if (y === -1){
    y="-"+0;
}

function clear(){
    document.getElementById("input-task").value = "";
}

function concluida(taskname){
    var li = document.getElementById(taskname);
    li.setAttribute("style", "text-decoration: line-through;");
    if (marcada.indexOf(li.getAttribute("id")) > -1){
        
    }
    else{
        marcada.push(li.getAttribute("id"));
        console.log(marcada);
        localStorage.setItem('markeds', JSON.stringify(marcada));
    }
}

function addTask(){
    var inputTask = document.querySelector("#input-task").value;
    var listTask = document.querySelector("#list-tasks");

    if (inputTask === ""){
        alert("You can't add a blank task!")
    }
    else{
        var elementText = document.createTextNode(inputTask+" ");
        var elementTask = document.createElement("li");
        elementTask.setAttribute("id", "task-"+j);
        
            
        var elementButton = document.createElement("button");
        elementButton.setAttribute("class", "button-list")

        var elementText2 = document.createTextNode("Mark as done");
        elementButton.appendChild(elementText2);
        
        elementTask.appendChild(elementText);
        elementTask.appendChild(elementButton);

        listTask.appendChild(elementTask);

        todos.push(inputTask);

        nameLi = listTask;

        elementTask.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'BUTTON') {
                concluida(ev.target.parentElement.id);
            }
          }, false);

        save()
        clear();
        j+=1;
    }

}

function clearAll(){
    var listTask = document.querySelector("#list-tasks");

    var li = document.querySelectorAll("li");

    var vezes = li.length;
    for (var i = 0; vezes;){
        listTask.removeChild(li[i]);
        i++;
        if (i === vezes){
            break;
        }
        else{
            continue;
        }
    }
    localStorage.clear();
    todos = [];
    j = 0;
}

function listener(){
    key = event.keyCode;
    if (key === 13){
        addTask();
    }
}

function save(){
    localStorage.setItem('storage-todos', JSON.stringify(todos));
}

//load localstorage
var o = 0;

for (o; JSON.parse(localStorage.getItem("storage-todos")).length;){
    var inputTask = JSON.parse(localStorage.getItem("storage-todos"))[o];
    var listTask = document.querySelector("#list-tasks");
    
    var elementText = document.createTextNode(inputTask+" ");
    var elementTask = document.createElement("li");
    elementTask.setAttribute("id", "task-"+j);
    elementTask.setAttribute("class", "tracking-in-contract");
    
        
    var elementButton = document.createElement("button");
    elementButton.setAttribute("class", "button-list");
    
    var elementText2 = document.createTextNode("Mark as done");
    elementButton.appendChild(elementText2);
    
    elementTask.appendChild(elementText);
    elementTask.appendChild(elementButton);
    
    listTask.appendChild(elementTask);
    
    todos.push(inputTask);
    
    nameLi = listTask;

    elementTask.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'BUTTON') {
            concluida(ev.target.parentElement.id);
        }
        }, false);
    
    j+=1;
    o+=1;
    if (o >= JSON.parse(localStorage.getItem("storage-todos")).length){
        break;
        save();
    }
    else{
        continue;
    }
}

// load marked

var i = 0;

for (o; JSON.parse(localStorage.getItem('markeds')).length;){
    var storageMarked = JSON.parse(localStorage.getItem('markeds'))[i];

    var elementMarked = document.querySelector("#"+storageMarked);

    elementMarked.setAttribute("style", "text-decoration: line-through;");
    i++;
}
