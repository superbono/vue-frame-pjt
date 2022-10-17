/* 
    Id validation

    1. 6~16 글자수 제한.
    2. 숫자가 먼저 나오면 안되고, 소문자로 시작한다.
    3. 대문자가 포함되지 않는다.
*/
export function validateUsername(value) {
	const re = /^[a-z][a-z\d]{5,15}$/;
	return re.test(value);
}

/*
    Password validation

    1. 최소 6자, 최대 16자
    2. 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자 정규식
*/
export function validatePassword(value) {
	const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$/;
	return re.test(value);
}

/*
    phone number validation

    1. 최소 6자, 최대 16자
    2. (2, 3) - (3, 4) - (4) 자리에 숫자를 그룹
*/
export function validatePhone(value) {
	// const re = /^\d{4}\d{3,4}\d{4}$/;
	const re = /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/;
	return re.test(value);
}

/*
    Email validation

    1. 이메일주소가 4글자 이상
    2. @뒤에 2글자이상
    3. .뒤에 1~3글자
*/
export function validateEmail(value) {
	//   const re = /\S+@\S+\.\S+/;
	const re = /^[\w]{4,}@[\w]+(\.[\w-]+){1,3}$/;
	return re.test(value);
}

/* 
    Nickname validation

    1. 4~12 글자수 제한.
    2. 숫자가 먼저 나오면 안되고, 소문자로 시작한다.
    3. 대문자가 포함되지 않는다.
*/
export function validateNickname(value) {
	const re = /^[a-z][a-z\d]{3,11}$/;
	return re.test(value);
}
