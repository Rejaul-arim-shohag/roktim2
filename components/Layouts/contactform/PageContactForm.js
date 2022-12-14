import FormStyle from '../../../styles/ContactForm.module.scss';

const PageContactForm = () => {
	return (
		<>
			{/* <img src="../contactline.png" alt="" /> */}
			<div className="text-center">
				<h2 className=" font-Corda fs-2 pt-5 text-light contactline">
					Contact
					<br />
					<span className="font-Corda display-3 round" style={{ color: '#ffa500' }}>
						US
					</span>
				</h2>
			</div>


			<div className="col-lg-12"></div>
			<div className="col-lg-12 pt-5 pb-5">
				<div className="row px-5">
				{/* d-flex justify-content-center */}
					<div class="selectOption d-flex justify-content-center">
						<label for="inputPassword6" class="font-corda fs-4 pe-3 text-light">
							Purpuse:
						</label>
						<select class="form-select contac_select name rounded-0 shadow" aria-label="Default select example">
							<option selected>Select Purpuse</option>
							<option value="1">General</option>
							<option value="2">About Dealership</option>
							<option value="3">About Export</option>
						</select>
					</div>
					<p className="contact_title text-center text-light font-corda pb-5 pt-4 fs-5">
						Please take a few moments to fill this application form and we will contact you at the earliest.
					</p>
					<div className="col-md-6">
						<div className="form-group">
							<label htmlFor className="form-label text-yellow color font-Corda">
								Full Name:
							</label>
							<input type="text" className="form-control mb-3 rounded-0 name bg-transparent shadow" placeholder="Enter your full name"/>
						</div>
						<div className="form-group">
							<label htmlFor className="form-label text-yellow font-Corda color">
								Subject:
							</label>
							<input type="text" className="form-control mb-3 rounded-0 name bg-transparent shadow" placeholder="Enter your subject" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label htmlFor className="form-label text-yellow font-Corda color">
								Email Address:
							</label>
							<input type="text" className="form-control mb-3 rounded-0 name bg-transparent shadow" placeholder="Enter your email" />
						</div>
						<div className="form-group">
							<label htmlFor className="form-label text-yellow font-Corda color">
								Contact Number:
							</label>
							<input type="text" className="form-control mb-3 rounded-0 name bg-transparent shadow" placeholder="Enter your number" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" className="form-label text-yellow font-corda color font-Corda">
								Message:
							</label>
							<div className="form-group">
								<textarea type="text" className="form-control mb-3 rounded-0 name bg-transparent shadow" placeholder="Write your message" rows="4"></textarea>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<button type="submit" className={FormStyle.button}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageContactForm;
