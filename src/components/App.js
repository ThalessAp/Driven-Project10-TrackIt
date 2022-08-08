import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import SingUp from "./SingUp";
import SingIn from "./SingIn";
import Habits from "./Habits";
import History from "./History";
import Today from "./Today";

export default function App() {
	const [Token, setToken] = useState("");

	return (
		<>
			<UserContext.Provider value={{ Token, setToken }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SingIn />} />
						<Route path="/cadastro" element={<SingUp />} />
						<Route path="/habitos" element={<Habits />} />
						<Route path="/hoje" element={<Today />} />
						<Route path="/historico" element={<History />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
