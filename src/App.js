import { useState } from "react";
import Navbar from "./components/navbar";
import SavedPage from "./pages/saved";
import SearchPage from "./pages/search";

function App() {
	const [view, setView] = useState("search");

	// For three or more views to resolve
	const renderView = () => {
		if (view === "search") {
			return <SearchPage />;
		} else if (view === "saved") {
			return <SavedPage />;
		} else {
			return "No matching view found";
		}
	};

	return (
		<>
			<Navbar />
			{renderView()}
		</>
	);

	// Simple method to switch between only 2 views
	// return (
	// 	<>
	// 		<Navbar
	// 			view={view}
	// 			setView={setView}
	// 		/>
	// 		{view === "search" ? <SearchPage /> : <SavedPage />}
	// 	</>
	// );
}

export default App;
