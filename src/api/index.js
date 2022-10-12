import axios from "axios";

// 초기에 axios를 실행하게 되면 환경설정을 설정할 수 있는 함수 => 초기에 함수가 제일 먼저 실행된다.
const instance = axios.create({
  baseURL: "http://localhost:3000/"
});

function registerUser(userData) {
  //   const url = "http://localhost:3000/signup";
  //   return axios.post(url, userData);
  return instance.post("signup", userData);
}

export { registerUser };
