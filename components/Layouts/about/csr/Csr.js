// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'next/link';
import Image from 'next/image';

const Csr = ({ sendCsr }) => {
	return (
		<>
			<section>
				<p className="display-1 mt-5 mb-5 text-center fw-bold text-warning">CSR</p>
				<div className="container">
					<div className="row">
						{sendCsr.map((curElem) => {
							return (
								<>
									<div className="col-lg-3">
										<div className="">
											<div class="card mb-5 rounded-0 shadow-lg p-3 bg-body border-0">
												<img src={curElem.image} class="card-img-top rounded-0 card-height img-fluid" alt="..." />

												<div class="card-body" style={{ height: '112px' }}>
													<h5 class="card-title">{curElem.title} </h5>
													<p class="card-text">{curElem.date} </p>
												</div>
											</div>
											{/* <Card className="rounded-0 mb-5  ">
													<Card.Img variant="top" href="#" className="rounded-0 card-height" src={curElem.image} />
													
													<Card.Body style={{ height: '112px' }}>
														<Card.Title>{curElem.title}</Card.Title>
														<Card.Text>{curElem.date} </Card.Text>
													</Card.Body>
												</Card> */}
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

export default Csr;
