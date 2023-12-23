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
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

const EditAward = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [award, setAward] = useState({
		employeeName: "",
		awardBy: "",
		
	});
	

	useEffect(() => {
		loadAward();
	}, []);

	const loadAward = async () => {
		const result = await axios.get(
			`http://localhost:8082/awards/get/${id}`
		);
		setAward(result.data);
	};

	const handleInputChange = (e) => {
		setAward({
			...award,
			[e.target.name]: e.target.value,
		});
	};
	const updateAward = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8082/awards/update/${id}`,
			award
		);
		navigate("/employee/awards");
	};

	return (
		<div>
		<Header />
		<div className="dashboard-container">
		  <SideBar />
		  <div className="head-foot-part" style={{ padding: "0" }}>
		  <div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Award</h2>
			<form onSubmit={(e) => updateAward(e)}>
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
						value={award.employeeName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="awardBy">
						Award By
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="awardBy"
						id="awardBy"
						required
						value={award.awardBy}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Update
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/employee/awards"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Back
						</Link>
					</div>
				</div>
			</form>
		</div>
		</div>
		</div>
	  </div>
	
	);
};

export default EditAward;
