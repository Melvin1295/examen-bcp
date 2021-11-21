package examen.bcp.com.dto;

import java.io.Serializable;

import examen.bcp.com.enums.ErrorCode;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GlobalResponseDto<T> implements Serializable {

	private static final long serialVersionUID = 1L;

	private ErrorCode errorCode;
	private T data;

	public static GlobalResponseDto<?> successNoData() {
		return GlobalResponseDto.builder().build();
	}

	public static <T> GlobalResponseDto<T> successWithData(T data) {
		return GlobalResponseDto.<T>builder().data(data).build();
	}

	public static GlobalResponseDto<?> error(ErrorCode errorCode) {
		return GlobalResponseDto.builder().errorCode(errorCode).build();
	}
}
