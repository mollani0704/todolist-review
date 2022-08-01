const selectedTypeButton = document.querySelector(".selected-type-button");
const typeSelectBoxList = document.querySelector(".type-select-box-list");

let listType = "all";

load();

selectedTypeButton.onclick = () => {
    typeSelectBoxList.classList.toggle("visible");
}

selectedTypeButton.onblur = () => {
    typeSelectBoxList.classList.toggle('visible');
}



function load() {
	$.ajax({
		type: "get",
		url: `/api/v1/todolist/list/${listType}`,
		data: {
			page: 1,
			contentCount: 20
		},
		dataType: "json",
		success: (response) => {
			console.log(JSON.stringify(response));
			getList(response.data);
		}, 
		
		error: errorMessage
	})
}

function getList(data) {
	
	const todoContentList = document.querySelector('.todo-content-list');
	
	for(let content of data) {
		const listContent = `
		 <li class="todo-content">
                            <input type="checkbox" id="complete-check-${content.todocode}" class="complete-check" ${content.todo_complete ? 'checked' : ''}>
                            <label for="complete-check-${content.todocode}" ></label>
                            <div class="todo-content-text">${content.todocontent}</div>
                            <input type="text" class="todo-content-input visible" value="${content.todocontent}">
                            <input type="checkbox" id="importance-check-${content.todocode}"" class="importance-check" ${content.importance ? 'checked' : ''}>
                            <label for="importance-check"></label>
                            <div class="trash-button"><i class="fa-solid fa-trash"></i></div>
                        </li>
		`
		todoContentList.innerHTML += listContent;
	}
}

function errorMessage(request, status, error) {
	alert("요청 실패");
	console.log(request.status);
	console.log(request.responseText);
	console.log(error);
}