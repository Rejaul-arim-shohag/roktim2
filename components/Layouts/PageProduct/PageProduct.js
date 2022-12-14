import Productstyle from '../../../styles/Product.module.scss';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const PageProduct = ({ sendData }) => {
	return (
		<>
			<div className="col-lg-4 col-md-4 col-sm-6">
				<div className="product product_text p-3">
					<h2 className="font-Corda display-1 text-light text-start mgn-top align-baseline">Who we are?</h2>
					<p className={Productstyle.content}>
						We are an integrated multi-product business group that is highly competitive in the fast-moving FMCG sector to bring high
						quality, unadulterated, authentic food and beverage products.
					</p>
				</div>
			</div>
			{sendData.map((curElem) => {
				return (
					<>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="product mt-4">
								<img src={curElem.image} className="img-fluid" alt="Responsive image" />
							</div>
						</div>
					</>
				);
			})}

			
			<div className="col-lg-12">
				<div className="mt-4">
				<Link href="/product/Product">
					<Button className={Productstyle.button}>All Products</Button>
				</Link>
				</div>
				
			</div>
		</>
	);
};

export default PageProduct;
