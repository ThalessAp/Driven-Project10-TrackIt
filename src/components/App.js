import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./services/UserContext";
import SingUp from "./SingUp";
import SingIn from "./SingIn";
import Habits from "./Habits";
import History from "./History";
import Today from "./Today";

export default function App() {
	const [Token, setToken] = useState(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUxMywiaWF0IjoxNjYwMDU2NzI4fQ.OpDlPh-yDdT5LDkqAXnpetpQ9F7Vng4Q99fhCN6QCp0"
	);

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
