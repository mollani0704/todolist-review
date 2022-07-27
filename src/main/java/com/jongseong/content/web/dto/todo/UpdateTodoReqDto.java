package com.jongseong.content.web.dto.todo;

import com.jongseong.content.domain.todo.Todo;

import lombok.Data;

@Data
public class UpdateTodoReqDto {
	private int todoCode;
	private String todo;
	
	public Todo toEntity() {
		return Todo.builder()
				.todoCode(todoCode)
				.todocontent(todo)
				.build();
	}
}
