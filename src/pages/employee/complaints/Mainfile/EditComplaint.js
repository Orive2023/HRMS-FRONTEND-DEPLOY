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

const EditComplaint = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [complaint, setcomplaint] = useState({
		complaintFrom: "",
        complaintTitle: "",
	});
	

	useEffect(() => {
		loadcomplaint();
	}, []);

	const loadcomplaint = async () => {
		const result = await axios.get(
			`http://13.200.246.216:5000/complaints/get/${id}`
		);
		setcomplaint(result.data);
	};

	const handleInputChange = (e) => {
		setcomplaint({
			...complaint,
			[e.target.name]: e.target.value,
		});
	};
	const updatecomplaint = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://13.200.246.216:5000/complaints/update/${id}`,
			complaint
		);
		navigate("/employee/complaints");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit complaint</h2>
			<form onSubmit={(e) => updatecomplaint(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="complaintFrom">
						Complaint From
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="complaintFrom"
						id="complaintFrom"
						required
						value={complaint.complaintFrom}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="complaintAgainst">
						Complaint Against
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="complaintAgainst"
						id="complaintAgainst"
						required
						value={complaint.complaintAgainst}	
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
							to={"/employee/complaints"}
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

export default EditComplaint;
