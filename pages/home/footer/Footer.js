import PageFooter from '../../../components/Layouts/footer/PageFooter';
import SocialCard from '../../../components/Layouts/footer/SocialCard';
import Footerstyle from '../../../styles/Footer.module.scss';
import SocialCardData from '../../../components/Layouts/footer/SocialData';
import { useState } from 'react';
import ContactIcon from '../../../components/Layouts/footer/ContactIcon';
import Copyright from '../../../components/Layouts/footer/Copyright';

const Footer = () => {
	const [socialData, setsocialData] = useState(SocialCardData);
	return (
		<>
			<section id="footer" className={Footerstyle.background}>
				<div className="container-fluid">
					<div className="row">
						<PageFooter />
						<SocialCard sendSocialDta={socialData} />
					</div>
				</div>
				<div className=" border-top border-bottom">
					<ContactIcon />
				</div>
				<div className="position-relative">
					<Copyright />
				</div>
			</section>
		</>
	);
};

export default Footer;
