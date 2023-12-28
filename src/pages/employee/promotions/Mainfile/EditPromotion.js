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

const EditPromotion = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [promotion, setpromotion] = useState({
		promotionDate: "",
		employeeName: "",
		promotionTitle: "",
	});

	useEffect(() => {
		loadpromotion();
	}, []);

	const loadpromotion = async () => {
		const result = await axios.get(
			`http://13.200.246.216:5000/promotions/get/${id}`
		);
		setpromotion(result.data);
	};

	const handleInputChange = (e) => {
		setpromotion({
			...promotion,
			[e.target.name]: e.target.value,
		});
	};
	const updatepromotion = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://13.200.246.216:5000/promotions/update/${id}`,
			promotion
		);
		navigate("/employee/promotion");
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
		<div className="col-sm-8 py-2 px-5 shadow">
			<h2 className="mt-5"> Edit promotion</h2>
			<form onSubmit={(e) => updatepromotion(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="employeeName">
						promotion For
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="employeeName"
						id="employeeName"
						required
						value={promotion.employeeName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="promotionDate">
						promotion Date
					</label>
					<input
						className="form-control col-sm-6"
						type="date"
						name="promotionDate"
						id="promotionDate"
						required
						value={promotion.promotionDate}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="promotionTitle">
					Promotion Title
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="promotionTitle"
						id="promotionTitle"
						required
						value={promotion.promotionTitle}
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
							to={"employee/promotion"}
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
  </div>
	);
};

export default EditPromotion;
