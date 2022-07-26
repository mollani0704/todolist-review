package com.jongseong.content.web.dto.todo;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TodoListRespDto {
	private int todocode;
	private String todocontent;
	private int todo_complete;
	private boolean importance;
	private int totalCount;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
