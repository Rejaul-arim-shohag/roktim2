import SingleProduct from '../../../styles/SingleProduct.module.scss';
import ProductTable from './ProductTable';
import OurPageProductBg from './OurPageProductBg';

import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';


const OurPageProduct = ({productDetails}) => {
	const {
		id,
		product_name,
		proudct_video,
		product_long_desc,
		video_link,
		product_bncn,
		category,
		subcategory,
		productvariant,
		productVariantOption,
		product_multi_images,
		product_lifesytle_images
	} = productDetails;

	const slideImg = product_multi_images.map((img)=>{
		return (
			<Carousel.Item interval={1000}>
				<img width={900} height={500} className="mx-auto d-block" src={img} alt="First slide" />
			</Carousel.Item>
		)
	})
	return (
		<>
		    <OurPageProductBg bgImg={product_lifesytle_images} />
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mt-5">
							{slideImg.length === 0 ?
							<img width={400} height={400} className="mx-auto d-block" src="../no-products.jpg" alt="noprd" />
							:
							<Carousel>
								{slideImg}
							</Carousel>
							}
						</div>
						<div className="col-lg-6">
							<h3 className="mt-5 display-4 color font-poppins-bold  fw-bolder">{product_name}</h3>
							<p className="font-poppins text-dark pt-3 pb-4">
								{product_long_desc}
							</p>
						</div>
					</div>
				</div>
			</section>
			<ProductTable productTableData={productDetails}/>
		</>
	);
};

export default OurPageProduct;
