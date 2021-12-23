function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
      htmlCode += `<div class='flex mb-4 items-center'>
      <p class='w-full text-grey-darkest'>${list}</p>
      <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
      <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
   </div>`;
    });
    listBox.innerHTML = htmlCode;
   }