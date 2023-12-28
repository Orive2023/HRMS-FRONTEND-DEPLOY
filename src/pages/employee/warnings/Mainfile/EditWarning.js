import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditWarning = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [warning, setwarning] = useState({
		warningToEmployee: "",
		warningByEmployee: "",
		
	});

	useEffect(() => {
		loadwarning();
	}, []);

	const loadwarning = async () => {
		const result = await axios.get(
			`http://13.200.246.216:5000/warnings/get/${id}`
		);
		setwarning(result.data);
	};

	const handleInputChange = (e) => {
		setwarning({
			...warning,
			[e.target.name]: e.target.value,
		});
	};
	const updatewarning = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://13.200.246.216:5000/warnings/update/${id}`,
			warning
		);
		navigate("/employee/warning");
	};
	const [menu, setMenu] = useState(false);

	return (
		<div>
     <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
      <div className="head-foot-part" style={{ padding: "0" }}>
			<h2 className="mt-5"> Edit warning</h2>
			<form onSubmit={(e) => updatewarning(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="warningToEmployee">
						warning To Employee
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="warningToEmployee"
						id="warningToEmployee"
						required
						value={warning.warningToEmployee}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="warningByEmployee">
						Warning By Employee
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="warningByEmployee"
						id="warningByEmployee"
						required
						value={warning.warningByEmployee}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/employee/warning"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
		</div>
		</div>

	);
};

export default EditWarning;
