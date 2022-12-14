import React from 'react';
import Link from 'next/link';
import Cataloguebg from '../../../styles/Catalogue.module.scss';

const Catalogue = () => {
	return (
		<>
			<section id="catalogue" className={Cataloguebg.bg}>
				<div className=" text-center">
					<Link href="#">
						<a className={Cataloguebg.button}>download catalogue</a>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Catalogue;
