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

const EditCandidate = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [candidate, setCandidate] = useState({
        candidateName: "",
        address: "",
        email: "",
        mobileNo: "",
        ctc: "",
        ectc: "",
        location: "",
        notice:"",
        resumeUrl:"",
	});
	const {
        formVisible,setFormVisible,toggle,setToggle,resumeUrl,location,setLocationsetResumeUrl,notice,setNotice,ectc,setEctc,ctc,setCtc,email,setEmail,mobileNo,setMobileNo,updateCandidate,setUpdateCandidate,candidateName,setCandidateName,address,setAddress,recDelete,setRecDelete,dateError,setDateError,open,setOpen,search,setSearch,formControl,setFormControl,formErrors,setFormerrors,formData,setFormData
    } = candidate;

	useEffect(() => {
		loadCandidate();
	}, []);

	const loadCandidate = async () => {
		const result = await axios.get(
            `http://localhost:8089/candidates/download/${id}`
		);
		setCandidate(result.data);
	};

	const handleInputChange = (e) => {
		setCandidate({
			...candidate,
			[e.target.name]: e.target.value,
		});
	};
	// const updateCandidate = async (e) => {
	// 	e.preventDefault();
	// 	await axios.put(
	// 		`http://localhost:8089/candidates/update/${id}`,
	// 		candidate
	// 	);
	// 	navigate("/view-candidate");
	// };

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Candidate</h2>
			<form onSubmit={(e) => updateCandidate(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="candidateName">
						candidate Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="candidateName"
						id="candidateName"
						required
						value={candidateName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="terminationType">
						Address 
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="address"
						id="address"
						required
						value={address}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
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
						htmlFor="mobileNo">
						Mobile No 
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="mobileNo"
						id="mobileNo"
						required
						value={mobileNo}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="ctc">
						CTC
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="ctc"
						id="ctc"
						required
						value={ctc}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="ectc">
						ECTC
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="ectc"
						id="ectc"
						required
						value={ectc}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="location">
						Location
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="location"
						id="location"
						required
						value={location}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="notice">
						Notice
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="notice"
						id="notice"
						required
						value={notice}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="resumeUrl">
						Resume Url
					</label>
					<input
						className="form-control col-sm-6"
						type="file"
						name="resumeUrl"
						id="resumeUrl"
						required
						value={resumeUrl}
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
							to={"/view-candidate"}
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

export default EditCandidate;