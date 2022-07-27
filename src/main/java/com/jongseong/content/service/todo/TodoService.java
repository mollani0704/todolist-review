package com.jongseong.content.service.todo;

import java.util.List;

import com.jongseong.content.web.dto.todo.CreateTodoReqDto;
import com.jongseong.content.web.dto.todo.TodoListRespDto;
import com.jongseong.content.web.dto.todo.UpdateTodoReqDto;

public interface TodoService {
	//추가
	public boolean createTodo(CreateTodoReqDto createTodoReqDto) throws Exception;
	
	
	//수정
	public boolean updateTodoComplete(int todo_Code) throws Exception;
	public boolean updateTodoImportance(int todo_Code) throws Exception;
	public boolean updateTodo(UpdateTodoReqDto updateTodoReqDto) throws Exception;
	
	//조회
	public List<TodoListRespDto> getTodoList(int page, int contentCount) throws Exception;
	public List<TodoListRespDto> getImportanceTodoList(int page, int contentCount) throws Exception;
	
	//삭제
	public boolean removeTodo(int todoCode) throws Exception;
}
