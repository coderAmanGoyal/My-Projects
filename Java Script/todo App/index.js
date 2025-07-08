let todoList = JSON.parse(localStorage.getItem('todoList'));

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let timeElement = document.querySelector('#todo-time');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  let todoTime = timeElement.value;
  todoList.push({item: todoItem, dueDate: todoDate, dueTime: todoTime});
  inputElement.value = '';
  dateElement.value = '';
  timeElement.value = '';

  displayItems();
  refreshLocalStorage();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  let i = "";
  for (i= 0; i < todoList.length; i++) { 
    let {item, dueDate, dueTime} = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <span>${dueTime}</span>
    <button class="btn-delete" onclick="todoList.splice(${i}, 1);displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
  refreshLocalStorage();
};

function refreshLocalStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}