import PageProduct from '../../../components/Layouts/PageProduct/PageProduct';
import Productstyle from '../../../styles/Product.module.scss'
import ProductData from '../../../components/Layouts/PageProduct/PageProductData'
import { useState } from 'react';

const Product = () => {
	const [productImage, setproductImage] = useState(ProductData);
	
	return (
		<>
			<section className={Productstyle.background}>
				<div className="container">
					<div className="row text-center">
						<PageProduct sendData={productImage}/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Product;
