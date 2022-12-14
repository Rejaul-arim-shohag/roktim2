import PageAbout from '../../../../styles/About.module.scss';
// import { ImFilePdf } from 'react-icons/im';

const LeaderShip = ({ sendLeaderData }) => {
	return (
		<>
			<section>
				<div className="container">
					<h1 className=" fw-bold text-center display-4 mt-5 mb-5 align-middle text-warning">Board of Directors</h1>

					<div className="row">
						{sendLeaderData.map((curElem) => {
							return (
								<>
									<div className="col-lg-4">
										<div className="leader d-flex justify-content-between text-center pt-5 pb-5">
											<div className="first">
												<img src={curElem.image} alt="" className="img-fluid w-50" />
												<h3 className='font-Coorda'>{curElem.title}</h3>
												<p className={PageAbout.titledesign}>{curElem.position}</p>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default LeaderShip;
