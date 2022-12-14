import SingleProduct from '../../../styles/SingleProduct.module.scss'

const OurPageProduct = ({bgImg}) => {
	const bannerImg = bgImg[0];
	return (
		<>
		<section className={SingleProduct.productbg}
		style={{
			background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bannerImg}) no-repeat center`
		  }}
		>

		</section>
		</>
	);
};

export default OurPageProduct;
