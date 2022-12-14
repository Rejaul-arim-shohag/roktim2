import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Link from 'next/link';
import Footerstyle from '../../../styles/Footer.module.scss';

const Copyright = () => {
	return (
		<>
			<h3 className="font-noto m-0 py-4 display-5 fw-bold text-center text-light">
				© 2022 IFAD Multi-product. All Rights Reserved | Developed by API
			</h3>

			<Link  href="#">
				<a class={Footerstyle.back} role="button" data-slide="next">
					<AiOutlineArrowUp className={Footerstyle.backtotop}/>
				</a>
			</Link>
		</>
	);
};

export default Copyright;
