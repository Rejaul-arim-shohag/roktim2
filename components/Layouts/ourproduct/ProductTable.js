import SingleProduct from '../../../styles/SingleProduct.module.scss';
import { youtube_parser,isYoutubeUrl} from '../../../utils/common.js';

import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';

const ProductTable = ({productTableData}) => {
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
	} = productTableData;

	const youtube_vid = `https://www.youtube.com/embed/${youtube_parser(video_link)}`;

	return (
		<>
			<section className="mt-5 mb-5">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div className="detail-table">
								<table class="table table-bordered border-dark">
									<thead>
										<tr>
											<th scope="col">1</th>
											<th scope="col">Name</th>
											<th scope="col" className="fw-normal">
												{product_name}
											</th>
										</tr>
									</thead>
									
									<thead>
										<tr>
											<th scope="col">2</th>
											<th scope="col">BCN</th>
											<th scope="col" className="fw-normal">
												{product_bncn}
											</th>
										</tr>
									</thead>
									<thead>
										<tr>
											<th scope="col">3</th>
											<th scope="col">Catagory</th>
											<th scope="col" className="fw-normal">
												{category.name}
											</th>
										</tr>
									</thead>
									<thead>
										<tr>
											<th scope="col">4</th>
											<th scope="col">Sub Catagory</th>
											<th scope="col" className="fw-normal">
												{!subcategory?"":subcategory}
											</th>
										</tr>
									</thead>
								</table>
							</div>
						</div>
						<div class="col-md-6">
							<div className="bachground text-center">
								<div class="embed-responsive embed-responsive-16by9 w-100">
									{/* {videoPlayer()} */}
									<iframe
										width="560"
										height="315"
										src={youtube_vid}
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductTable;
