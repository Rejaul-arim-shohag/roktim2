import Slider from 'react-slick';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';

const PageBlog = ({ sendBlogData }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2 ,
		slidesToScroll: 1,
	};
	return (
		<>
			<div className="row">
				<Slider {...settings}>
					<div className="text-center  mb-5 d-flex justify-content-center">
						<Card  className=" rounded-0 ms-2 me-2">
							<Card.Img variant="top" className=" rounded-0" src="../award/Award.png" />
							
						</Card>
					</div>
					<div className="text-center  mb-5 d-flex justify-content-center">
						<Card className=" rounded-0 ms-2 me-2">
							<Card.Img variant="top" className=" rounded-0" src="../award/Award.png" />
							
						</Card>
					</div>

					<div className="text-center  mb-5 d-flex justify-content-center">
						<Card  className=" rounded-0 ms-2 me-2">
							<Card.Img variant="top" className=" rounded-0" src="../award/Award.png" />
							
						</Card>
					</div>

					<div className="text-center  mb-5 d-flex justify-content-center">
						<Card  className=" rounded-0 ms-2 me-2">
							<Card.Img variant="top" className=" rounded-0 w-100" src="../award/Award.png" />
							
						</Card>
					</div>

				
				</Slider>
			</div>
		</>
	);
};

export default PageBlog;
