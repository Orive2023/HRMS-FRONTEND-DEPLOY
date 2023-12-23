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

const EditTravel = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [travel, settravel] = useState({
		employeeName: "",
		startDate: "",
		endDate: "",
		placeOfVisit: "",
	});


	useEffect(() => {
		loadtravel();
	}, []);

	const loadtravel = async () => {
		const result = await axios.get(
			`http://localhost:8082/travels/get/${id}`
		);
		settravel(result.data);
	};

	const handleInputChange = (e) => {
		settravel({
			...travel,
			[e.target.name]: e.target.value,
		});
	};
	const updatetravel = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8082/travels/update/${id}`,
			travel
		);
		navigate("/view-travel");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit travel</h2>
			<form onSubmit={(e) => updatetravel(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="employeeName">
						Employee Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="employeeName"
						id="employeeName"
						required
						value={travel.employeeName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="startDate">
						Start Date
					</label>
					<input
						className="form-control col-sm-6"
						type="data"
						name="startDate"
						id="startDate"
						required
						value={travel.startDate}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="endDate">
						End Date
					</label>
					<input
						className="form-control col-sm-6"
						type="endDate"
						name="endDate"
						id="endDate"
						required
						value={travel.endDate}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="placeOfVisit">
						Place Of Visit
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="placeOfVisit"
						id="placeOfVisit"
						required
						value={travel.placeOfVisit}
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
							to={"/employee/travel"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditTravel;
