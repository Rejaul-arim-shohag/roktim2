import PageAbout from '../../../styles/About.module.scss';

const PageFactory = () => {
	return (
		<>
			<section className="">
				<div className="container">
					<h1 className="display-4 fw-bold text-center align-item-center mt-5 mb-5 align-middle">Factory</h1>

					<div className="row">
						<div className="col-lg-6 col-md-6 mb-5">
							{/* <h2 className="font-calibri fw-bold p-2">Our Company</h2> */}
							<p className="font-poppins justify p-2 pt-0">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
								type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
								essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
								passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
								literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
								in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source.
							</p>
						</div>
						<div className="col-lg-6 col-md-6">
							<img src="../factoryone.png" alt="" className="img-fluid w-100 mb-5" />
						</div>

						<div className="col-lg-6 col-md-6">
							<img src="../factorytwo.png" alt="" className="img-fluid w-100 mb-5" />
						</div>
						<div className="col-lg-6 col-md-6 mb-5">
							{/* <h2 className="font-calibri fw-bold p-2">MileStone</h2> */}
							<p className="font-poppins justify p-2 pt-0">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
								type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
								essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
								passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
								literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
								in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PageFactory;
