var j = 0;
var y = j - 1;
if (y === -1){
    y="-"+0;
}

function clear(){
    document.getElementById("input-task").value = "";
}

function concluida(taskname){
    // var taskname = "task".concat(y);
    // console.log(taskname);
    var li = document.getElementById(taskname);
    li.setAttribute("style", "text-decoration: line-through;");
}

function addTask(){
    var app = document.querySelector("#app");
    var addTaskCont = document.querySelector("#add-task-container");
    var listContainer = document.querySelector("#list-container");
    var inputTask = document.querySelector("#input-task").value;
    var listTask = document.querySelector("#list-tasks");

    if (inputTask === ""){
        alert("You can't add a blank task!")
    }
    else{
        var elementText = document.createTextNode(inputTask);
        var elementTask = document.createElement("li");
        elementTask.setAttribute("id", "task-"+j);
        
            
        var elementButton = document.createElement("button");
        elementButton.setAttribute("class", "button-list");
        // elementButton.setAttribute("onclick", "concluida()")

        var elementText2 = document.createTextNode("Marcar como concluída");
        elementButton.appendChild(elementText2);
        
        elementTask.appendChild(elementText);
        elementTask.appendChild(elementButton);

        listTask.appendChild(elementTask);

        nameLi = listTask;

        elementTask.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'BUTTON') {
                concluida(ev.target.parentElement.id)
            }
          }, false);

        clear();
        j+=1;
    }

}

function clearAll(){
    var app = document.querySelector("#app");
    var listContainer = document.querySelector("#list-container");
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
    j = 0;
}

function listener(){
    key = event.keyCode;
    if (key === 13){
        addTask();
    }
}