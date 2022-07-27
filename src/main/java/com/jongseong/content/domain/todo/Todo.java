package com.jongseong.content.domain.todo;

import java.time.LocalDateTime;

import com.jongseong.content.web.dto.todo.TodoListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Todo {
	private int todoCode;
	private String todocontent;
	private int todo_complete;
	private int importance_flag;
	private int total_count;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public TodoListRespDto toListDto() {
		return TodoListRespDto.builder()
					.todocode(todoCode)
					.todocontent(todocontent)
					.todo_complete(todo_complete)
					.importance(importance_flag == 1)
					.totalCount(total_count)
					.create_date(create_date)
					.update_date(update_date)
					.build();
	}
}
