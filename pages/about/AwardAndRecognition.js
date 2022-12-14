import Award from '../../components/Layouts/about/award/Award';
import AwardBg from '../../components/Layouts/about/award/AwardBg';

const AwardAndRecognition = () => {
	return (
		<>
			<AwardBg />
			<section>
				<h2 className="text-center font-Corda fw-bolder text-warning mt-5 mb-5">Award and Recognition</h2>
				<div className="container">
					<Award />
				</div>
			</section>
		</>
	);
};

export default AwardAndRecognition;
