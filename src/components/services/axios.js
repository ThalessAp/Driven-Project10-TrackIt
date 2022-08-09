import axios from "axios";


const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";



function SignUp(user) {
	const promisse = axios.post(`${Api}/auth/sing-up`, user);
	return promisse;
}
function SingIn(user) {
	const promisse = axios.post(`${Api}/auth/login`, user);
	return promisse;
}
function NewHabit(habit, token) {
	const promisse = axios.post(`${Api}/auth/habits`, habit, token);
	return promisse;
}
function GetHabits(token) {
	const promisse = axios.get(`${Api}/habits`, token);
	return promisse;
}
function DeleteHabit(id, token) {
	const promisse = axios.delete(`${Api}/habits/${id}`, token);
	return promisse;
}
function TodayHabit(token) {
	const promisse = axios.get(`${Api}/habits/today`, token);
	return promisse;
}
function CheckHabit(id, habit, token) {
	const promisse = axios.post(`${Api}/habits/${id}/check`, habit, token);
	return promisse;
}
function UncheckHabit(id, habit, token) {
	const promisse = axios.post(`${Api}/habits/${id}/uncheck`, habit, token);
	return promisse;
}
function HistoryHabit(token) {
	const promisse = axios.get(`${Api}/habits/history/daily`, token);
	return promisse;
}

export {
	SignUp,
	SingIn,
	NewHabit,
	GetHabits,
	DeleteHabit,
	TodayHabit,
	CheckHabit,
	UncheckHabit,
	HistoryHabit,

};
