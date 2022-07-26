package com.jongseong.content.web.dto.todo;

import com.jongseong.content.domain.todo.Todo;

import lombok.Data;

@Data
public class CreateTodoReqDto {
	private boolean importance;
	private String todo;
	
	public Todo toEntity() {
		return Todo.builder()
				.importance_flag(importance ? 1 : 0)
				.todocontent(todo)
				.build();
	}
}
