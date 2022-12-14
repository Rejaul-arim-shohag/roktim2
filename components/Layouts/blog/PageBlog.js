import ImageCard from '../../../styles/Blog.module.scss';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const PageBlog = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	};
	return (
		<>

			<Slider {...settings}>
					<div className="text-center p-3 mb-5 d-flex justify-content-center">
						<Card className=" rounded-0">
							<Card.Img variant="top" className={ImageCard.imgheight} src="../blogone.png" />
							<Card.Body>
								<Card.Title className="font-Corda fs-3 card-font text-capitalize">Flour</Card.Title>
								<Card.Text className="font-calibri text-capitalize">
									These small but sophisticated blender cakes are not only eye- catching, but full of bright flavor.
								</Card.Text>

								<Link href="/blogproduct/BlogProduct" passHref>
									<Button variant="" className="text-warning font-Corda text-capitalize">
										Read More
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</div>
				
				<div className="text-center p-3 mb-5 d-flex justify-content-center">
					<Card className=" rounded-0">
						<Card.Img variant="top" className={ImageCard.imgheight} src="../blogtwo.png" />
						<Card.Body>
							<Card.Title className="font-Corda fs-3 card-font text-capitalize">Parota</Card.Title>
							<Card.Text className="font-calibri text-capitalize">
								These small but sophisticated blender cakes are not only eye- catching, but full of bright flavor.
							</Card.Text>
							<Link href="/blogproduct/BlogProduct" passHref>
								<Button variant="" className="text-warning font-Corda text-capitalize">
									Read More
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>

				<div className="text-center p-3 mb-5 d-flex justify-content-center">
					<Card className=" rounded-0">
						<Card.Img variant="top" className={ImageCard.imgheight} src="../blogthree.png" />
						<Card.Body>
							<Card.Title className="font-Corda fs-3 card-font text-capitalize">Golden Bread</Card.Title>
							<Card.Text className="font-calibri text-capitalize">
								These small but sophisticated blender cakes are not only eye- catching, but full of bright flavor.
							</Card.Text>
							<Link href="/blogproduct/BlogProduct" passHref>
								<Button variant="" className="text-warning font-Corda text-capitalize">
									Read More
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>

				<div className="text-center p-3 mb-5 d-flex justify-content-center">
					<Card className=" rounded-0">
						<Card.Img variant="top" className={ImageCard.imgheight} src="../blogtwo.png" />
						<Card.Body>
							<Card.Title className="font-Corda fs-3 card-font text-capitalize">Gloden Bread</Card.Title>
							<Card.Text className="font-calibri text-capitalize">
								These small but sophisticated
								blender cakes are not only eye-
								catching, but full of bright flavor.
							</Card.Text>
							<Link href="/blogproduct/BlogProduct" passHref>
								<Button variant="" className="text-warning font-Corda text-capitalize">
									Read More
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>
			</Slider>

		</>
	);
};

export default PageBlog;
