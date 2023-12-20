import React, {
	useEffect,
	useState,
} from "react";

import Header from "../../../../components/Header"
import SideBar from "../../../../components/SideBar"

import * as api from "../api";
import StateCompany from "../StateCompany";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditCompany = () => {
	let navigation = useNavigate();

	const { id } = useParams();


	const {
		company,setCompany
	} = StateCompany()
		

	const {
		companyName,
		contactNumber,
		email,
		cin,
		gst,
		uan,
	} = company;

	useEffect(() => {
		loadCompanyById();
	}, []);


	const loadCompanyById = async () => {
		const result = await api.loadCompanyById(id)
		setCompany(result);
		console.log("data",result);
	};

	const handleInputChange = (e) => {
		if(e.target.name != "file"){
			setCompany({
				...company,
				[e.target.name]: e.target.value,
			});
		}
	};
	const updateCompany = async (e) => {
		delete company["file"]
	
		await api.updateCompany(company,id)
			navigation("/organisation/company")
	};

	const handleSubmit = () => {
		loadCompanyById()
	}


	return (
		<div>
		<Header />
		<div className="dashboard-container">
		  <SideBar />
		  <div className="head-foot-part" style={{ padding: "0" }}>
		  <div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Company</h2>
			<form onSubmit={handleSubmit}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="companyName">
						Company Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="companyName"
						id="companyName"
						required
						value={companyName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="contactNumber">
						Contact Number
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="contactNumber"
						id="contactNumber"
						required
						value={contactNumber}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="cin">
						CIN
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="cin"
						id="cin"
						required
						value={cin}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="gst">
						GST
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="gst"
						id="gst"
						required
						value={gst}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="uan">
						UAN
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="uan"
						id="uan"
						required
						value={uan}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
						onClick={updateCompany}
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/organisation/company"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Back
						</Link>
					</div>
				</div>
			</form>
		</div>		  </div>
		</div>
	  </div>
		
	);
};

export default EditCompany;