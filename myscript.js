function getTodo(){
    var todos = [];
    let todoStr = localStorage.getItem('todo');
    if(todoStr !== null){
        todos = JSON.parse(todoStr);
    }
    return todos
}

function add(){
    var task = document.getElementById('task').value;
    let todos = getTodo();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show()

    return false;
}
function clearDefault(a){
    if(a.defaultValue==a.value){a.value=""}
}
function remove(){
    var id = this.getAttribute('id');
    var todos = getTodo();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show()

    return false;
}


image.pngimage.png
function show(){
    var todos = getTodo();
    var html = "<ul>";
    for(var i = 0; i <todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id = "' + i + '">Delete </button></li>';
    };
    html += "</ul>";

    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName(remove);

    for(var i= 0; i<buttons.length; i++ ){
        buttons.addEventListener('click',remove);
    };
}
document.getElementById('add').addEventListener('click', add);
show()