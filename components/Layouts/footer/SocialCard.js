import Link from 'next/link';
import { RiFacebookBoxFill } from 'react-icons/ri';
import Footerstyle from '../../../styles/Footer.module.scss';

const SocialCard = ({ sendSocialDta }) => {
	return (
		<>
			{sendSocialDta.map((curElem) => {
				return (
					<>
						{/* <div className="col-lg-3 bg-white ">
							<div className="multi-product d-flex justfy-content-center">
								<div className="image">
									<img src={curElem.image} className="img-fluid p-3" alt="" />
								</div>
								<div className="content">
									<h5 className="text-dark pt-3 display-5 text-start">{curElem.title}</h5>
									<button className="text-dark border font-calibri">
										<RiFacebookBoxFill size={'25px'} className="p-0 ps-0" />
										Like page
									</button>
								</div>
								<span className={Footerstyle.like}>{curElem.like}</span>
							</div>
						</div> */}
						<div className="col-lg-3 col-md-4 col-sm-6 mb-5 social_box">
							<div className="multi-product bg-light d-flex justfy-content-center">
								<div className="image">
									<Link href={curElem.link}>
										<a >
										<img src={curElem.image} className="img-fluid p-3" alt="" /></a>
									</Link>
								</div>
								<div className="content">
									<h5 className={Footerstyle.title}>{curElem.title}</h5>
									<button className="text-dark border font-calibri">
										<RiFacebookBoxFill size={'25px'} className="p-0 ps-0" />
										<span className={Footerstyle.fb_like}>Like page</span>
									</button>
									<span className={Footerstyle.like}>{curElem.like}</span>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

export default SocialCard;
