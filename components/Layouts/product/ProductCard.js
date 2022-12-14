import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from "next/router";
import { useState } from 'react';
import {limitTxt} from '../../../utils/common.js'
import ReactPaginate from 'react-paginate';
import ProductB from '../../../styles/Product.module.scss';
// import ProductCardData from './ProductData';

const ProductCard = ({ products,catagorys}) => {
	const perPage = 6;
	const [productData, setproductData] = useState(products.slice(0, perPage));
	const [productsLength, setProductLength]=useState(products.length)

	const router = useRouter();

	const catagoryList = catagorys.map((item)=>{

		const subCatName = item.sub_categories.map((subCat)=>{
			return subCat.name;
		})

		const listOfCats = subCatName.map((el)=>{
			return (
				<li>
					<button 
					className="border-0  text-secondary bg-transparent fs-5 color text-uppercase fw-bold" 
					onClick={() => filterItem(el)}>
						{el}
					</button>
				</li>
			)
		})



		return (
			<li>
				<button 
				className="border-0  text-secondary bg-transparent fs-5 color text-uppercase fw-bold"
				onClick={() => filterItem(item.name)}
				>
				{item.name}
				</button>
				{subCatName.length > 0 ?
				<ul className='subCatagor'>
					{listOfCats}
				</ul> 
				:""
				}
			</li>
		)

	})

	const filterItem = (filterItem) => {
		const result = products.filter((curData) => {
			return curData.category.name === filterItem;
		});
		setproductData(result);	
		setProductLength(result.length)
	};

	const handleShowAllProduct=()=>{
		setproductData(products.slice(0, perPage))
		setProductLength(products.length)
	}
	const handlePageClick = (e) => {
		// window.scrollTo(0, 300);
		const selectedPage = e?.selected;
		setproductData(products.slice(selectedPage * perPage, selectedPage * perPage + perPage))
	}

	if (router.isFallback) {
		return <p>Loading....</p>;
	}else {
		return (
			<>
				<section>
					<div className="container">
						<h1 className="display-3 fw-bold text-center mt-5">Our Products</h1>
						<p className="font-poppins text-center p-font mt-3 mb-5">
							We Are Restocking as Quickly as Possible. Come Back 7/30 to OrderMore of These Flavors
							<br /> Inspired by the Places You Call Home!
						</p>
						<div className="row">
							<div className="col-lg-3 text-center mt-4">
								<ul className="list-unstyled text-start">
								<li>
										<button
											className="color text-secondary border-0 fs-5 bg-transparent text-uppercase fw-bold"
											onClick={handleShowAllProduct}
										>
											All
										</button>
									</li>
									{catagoryList}
								</ul>
							</div>
							<div className="col-lg-9">
								{productData.length === 0 ? 
									<h1 className="text-center">
										<img width={400} height={400} className="mx-auto d-block" src="../no-products.jpg" alt="noprd" />
									</h1> :
									<div className="row">
										{productData.map((curElem) => {
											const {id,product_name,Product_image,product_short_desc} = curElem;
												return (
													<>
														<div className="col-lg-4 text-center">
															<Link href="/product/[id]" as={`/product/${id}`}>
																<a className="text-dark">
																	<div className="border border-warning mt-4">
																		<div>
																			<img src={Product_image} alt="" className={ProductB.product_img} />
																			{/* <Image
																				src={Product_image}
																				className={ProductB.product_img}
																				alt="thumbnail"
																				width="100%" 
																				height="100%" 
																				layout="responsive"
																				// objectFit='contain'
																				blurDataURL="data:..." 
																				placeholder="blur" 
																			/> */}
																		</div>
																		<h4 className="text-uppercase font-poppins producttitle mt-2">{product_name}</h4>
																		<p className="text-capitalize font-poppins pb-2 m-0 text-secondary">
																		{limitTxt(product_short_desc,50)}
																		</p>
																	</div>
																</a>
															</Link>
														</div>
													</>
												);
										})}
									</div>
								}
								{
									productData.length !== 0 ? 
									<div className="col-lg-12 mx-auto">
										<nav className='text-center'>
											<ReactPaginate
												previousLabel="<Previous"
												nextLabel="Next>"
												pageClassName="page-item"
												pageLinkClassName="page-link"
												previousClassName="page-item"
												previousLinkClassName="page-link"
												nextClassName="page-item"
												nextLinkClassName="page-link"
												breakLabel="..."
												breakClassName="page-item"
												breakLinkClassName="page-link"
												pageCount={productsLength / perPage}
												marginPagesDisplayed={2}
												pageRangeDisplayed={5}
												onPageChange={handlePageClick}
												containerClassName="pagination"
												activeClassName="active"
											/>
										</nav>
									</div> : ""
								}
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
};

export default ProductCard;
