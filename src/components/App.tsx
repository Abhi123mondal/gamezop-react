import React from "react";
import "../styles/app.css";
import Header from "./Header";
export interface AppProps {
	message?: string;
}
const App = (props: AppProps) => {
	return (
		<div>
			<h1 className='heading'>DASHBOARD</h1>
			<Header />
		</div>
	);
};
export default App;
