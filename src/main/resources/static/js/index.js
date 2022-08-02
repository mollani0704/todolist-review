const selectedTypeButton = document.querySelector(".selected-type-button");
const typeSelectBoxList = document.querySelector(".type-select-box-list");
const typeSelectBoxListLis = typeSelectBoxList.querySelectorAll("li");
const todoContentList = document.querySelector('.todo-content-list');
const sectionBody = document.querySelector('.section-body')

let page = 1;
let totalPage = 0

sectionBody.onscroll = () => {
	console.log(todoContentList.clientHeight - sectionBody.offsetHeight - sectionBody.scrollTop);
	
	let checkNum = todoContentList.clientHeight - sectionBody.offsetHeight - sectionBody.scrollTop;
	
	if(checkNum < 1 && checkNum > -1 && page < totalPage) {
		console.log(page);
		page++;
		load();
	}
	
}

let listType = "all";

load();

selectedTypeButton.onclick = () => {
    typeSelectBoxList.classList.toggle("visible");
}

/*
selectedTypeButton.onblur = () => {
    typeSelectBoxList.classList.toggle('visible');
}
*/

for(let i = 0; i < typeSelectBoxListLis.length; i++) {
	
	typeSelectBoxListLis[i].onclick = () => {
		
		page = 1;
		
		for(let i = 0; i < typeSelectBoxListLis.length; i++) {
			typeSelectBoxListLis[i].classList.remove("type-selected");
		}
		
		const selectedType = document.querySelector(".selected-type");
		
		typeSelectBoxListLis[i].classList.add("type-selected");
		
		listType = typeSelectBoxListLis[i].textContent.toLowerCase();
		
		selectedType.textContent = typeSelectBoxListLis[i].textContent;
		
		todoContentList.innerHTML = '';
		
		load();
		
		typeSelectBoxList.classList.toggle('visible');
	}
}

function load() {
	$.ajax({
		type: "get",
		url: `/api/v1/todolist/list/${listType}`,
		data: {
			"page": page,
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

function setTotalCount(totalCount) {
	totalPage = totalCount % 20 == 0 ? totalCount / 20 : Math.floor(totalCount / 20) + 1;
}

function getList(data) {
	const incompleteCountNumber = document.querySelector(".incomplete-count-number");
	incompleteCountNumber.textContent = data[0].incompleteCount;
	setTotalCount(data[0].totalCount);
	
	for(let content of data) {
		const listContent = `
		 <li class="todo-content">
             <input type="checkbox" id="complete-check-${content.todocode}" class="complete-check" ${content.todo_complete ? 'checked' : ''}>
             <label for="complete-check-${content.todocode}" ></label>
             <div class="todo-content-text">${content.todocontent}</div>
             <input type="text" class="todo-content-input visible" value="${content.todocontent}">
             <input type="checkbox" id="importance-check-${content.todocode}" class="importance-check" ${content.importance ? 'checked' : ''}>
             <label for="importance-check-${content.todocode}"></label>
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