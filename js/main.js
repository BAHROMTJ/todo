let todos = [];
let addTodoForm = document.querySelector(".addTodoForm");
addTodoForm.onsubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    let todo = {
        id: new Date().getTime(),
        text: target["text"].value,
        complete: false,
    };
    todos.push(todo);
    render();
};
function render() {
    const viewTodos = document.querySelector(".todos");
    viewTodos.innerHTML = "";
    todos.forEach((elem) => {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let check = document.createElement("input");
        let i = document.createElement("i");
        check.type = "checkbox";
        check.checked = elem.complete;
        let span = document.createElement("span");
        
    
        span.innerText = elem.text;
        let delBtn = document.createElement("button");
        delBtn.onclick=()=>{
          return Dalet(elem.id)
        }
        check.onclick=()=>{
            return elem.complete=true
           
          }
    i.className='fa-solid fa-trash'
    i.style.color='#e71313'
        todo.appendChild(check);
        todo.appendChild(span);
        todo.appendChild(delBtn);
        viewTodos.appendChild(todo);
        delBtn.appendChild(i);
    });
}

function Dalet(id){
todos=todos.filter(elem=>elem.id!==id)
render()
}