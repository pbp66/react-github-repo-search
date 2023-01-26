/* eslint-disable jsx-a11y/anchor-is-valid */
const navbar = ({ view, setView }) => {
	return (
		<nav className="navbar navbar-expand-lg bg-danger">
			<div className="container-fluid">
				<a
					className="navbar-brand text-light"
					href="/"
				>
					Github Repo Search
				</a>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a
							onClick={() => {
								setView("search");
							}}
							className={`nav-link text-light ${
								view === "search" ? "active fw-bold" : ""
							}`}
							aria-current="page"
							href="#"
						>
							<i className="bi bi-search-heart"></i> Search
						</a>
					</li>
					<li className="nav-item">
						<a
							onClick={() => {
								setView("saved");
							}}
							className={`nav-link text-light ${
								view === "saved" ? "active fw-bold" : ""
							}`}
							href="#"
						>
							<i className="bi bi-bookmark-heart"></i> Saved
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default navbar;
