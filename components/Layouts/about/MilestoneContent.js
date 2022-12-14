import PageAbout from '../../../styles/About.module.scss';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const PageMilestone = () => {
	return (
		<>
			<section className="">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 mt-5 mb-5">
							<h2 className="font-calibri fw-bold p-2">Our Company</h2>
							<p className="font-poppins justify p-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
								type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
								essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
								passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
						<div className="col-lg-6 col-md-6">
							<img src="../company.png" alt="" className="img-fluid w-100 mb-5" />
						</div>

						<div className="col-lg-6 col-md-6">
							<img src="../milestonetwo.png" alt="" className="img-fluid w-100 mb-5" />
						</div>
						<div className="col-lg-6 col-md-6 mt-5 mb-5">
							<h2 className="font-calibri fw-bold p-2">MileStone</h2>
							<p className="font-poppins justify p-2">
								<ul className="list-unstyled">
									<li>
										<HiOutlineArrowCircleRight className="" />
										<span> Lorem Ipsum is simply dummy text of the printing.</span>
									</li>
									<li>
										<HiOutlineArrowCircleRight className="" />
										<span> Lorem Ipsum is simply dummy text of the printing.</span>
									</li>
									<li>
										<HiOutlineArrowCircleRight className="" />
										<span> Lorem Ipsum is simply dummy text of the printing.</span>
									</li>
									<li>
										<HiOutlineArrowCircleRight className="" />
										<span> Lorem Ipsum is simply dummy text of the printing.</span>
									</li>
									<li>
										<HiOutlineArrowCircleRight className="" />
										<span> Lorem Ipsum is simply dummy text of the printing.</span>
									</li>
									<li>
										<HiOutlineArrowCircleRight className="" />
										<span> Lorem Ipsum is simply dummy text of the printing.</span>
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PageMilestone;
