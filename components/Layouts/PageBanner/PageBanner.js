import Carousel from 'react-bootstrap/Carousel';
import Bannerstyle from '../../../styles/Banner.module.scss';


const PageBanner = () => {
	return (
		<>
			<Carousel fade  className="">
				<Carousel.Item className={Bannerstyle.height}>
					<img className={Bannerstyle.img} src="../slider/sliderone.jpg" alt="First slide" />
					{/* <Carousel.Caption>
						<h3 >First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item className={Bannerstyle.height}>
					<img className={Bannerstyle.img} src="../slider/slidertwo.jpg" alt="Second slide" />
					{/* <Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item className={Bannerstyle.height}>
					<img className={Bannerstyle.img} src="../slider/sliderthree.jpg" alt="Third slide" />
					{/* <Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>

			{/* first slide */}
			{/* <Carousel fade>
				<Carousel.Item>
					<Image className="d-block w-100" src={Slideone} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel> */}

			{/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="../bannerone.jpg" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="../bannertwo.jpg" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="../bannerthree.jpg" class="d-block w-100" alt="..." />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div> */}
		</>
	);
};

export default PageBanner;
