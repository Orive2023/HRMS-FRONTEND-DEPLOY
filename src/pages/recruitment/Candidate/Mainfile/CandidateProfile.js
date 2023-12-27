import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CandidateProfile = () => {
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

	useEffect(() => {
		loadCandidate();
	}, []);

	const loadCandidate = async () => {
		const result = await axios.get(
			`http://localhost:8089/candidates/download/${id}`
		);
		setCandidate(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${candidate.candidateName} ${candidate.address}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Candidate Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.candidateName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Address
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.address}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Mobile No
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.mobileNo}
										</p>
									</div>
                                    <hr/>

                                    <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.email}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        CTC
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.ctc}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        ECTC
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.ectc}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Location
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.location}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        Notice
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.notice}
										</p>
									</div>
                                    <hr/>

                                    <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                      Upload Resume
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{candidate.resumeUrl}
										</p>
									</div>
								    </div> 
								   </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CandidateProfile;
