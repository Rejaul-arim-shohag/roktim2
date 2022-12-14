import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Ifad from '../../../assets/images/ifad-logo.png';
// import "./ManuItem.scss";
import { BsChevronDown } from 'react-icons/bs';
// import { Link } from "react-router-dom";
import Link from 'next/link';
// import Image from 'next/image';
import Navstyle from '../../../styles/Navbar.module.scss';

const PageNav = () => {

	return (
		<>
			<Navbar expand="lg" className="p-0" bg="" >
				<Container fluid>
					<Navbar.Brand href="#" className="ms-2 logo" legacyBehavior>
						<Link href="/">
							<img src="../IFADlogo.png" className='img-fluid' width={220} height={82} />
						</Link>
					</Navbar.Brand>
					<Link  href="/product" shallow >Products</Link>
					<Navbar.Toggle aria-controls="navbarScroll" />

					<Navbar.Collapse id="navbarScroll">
						<Nav className={Navstyle.nav}>
							<Nav.Link id="3" className="manu-item">
								<Link href="/">
									<span className={Navstyle.border}>Home</span>
								</Link>
							</Nav.Link>

							<NavDropdown
								className="p-0"
								title={
									<span className="left-line pe-0">
										About Us
										<BsChevronDown className="ps-1" />
									</span>
								}
								id="navbarScrollingDropdown"
							>
								<NavDropdown.Item className="text-capitalize">
									<Link href="/about/Milestone">Company review</Link>
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize">
									<Link href="/about/BoardOfDirectors">
										<a>leadership</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="#" className="text-capitalize">
									<Link href="/about/AwardAndRecognition">Awards & Recognition</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="#" className="text-capitalize">
									<Link href="/about/SocialResponsibility">CSR</Link>
								</NavDropdown.Item>
							</NavDropdown>

							{/* categories */}
							<NavDropdown className="p-0"
								title={<span className={Navstyle.product}>our products<BsChevronDown className="ps-1" /></span>}
								id="navbarScrollingDropdown"
							>
								<NavDropdown.Item href="product/" className="text-capitalize">Cat01</NavDropdown.Item>
								<NavDropdown.Item href="product/" className="text-capitalize">Cat01</NavDropdown.Item>
								<NavDropdown.Item href="product/" className="text-capitalize">Cat01</NavDropdown.Item>
								<NavDropdown.Item href="product/" className="text-capitalize">Cat01</NavDropdown.Item>

							</NavDropdown>
							{/* ./categories */}

							<Nav.Link id="3" className="manu-item">
								<Link href="/">
									<span className={Navstyle.border}>global reach</span>
								</Link>
							</Nav.Link>

							<NavDropdown
								className="p-0"
								title={
									<span className="left-line pe-0">
										media
										<BsChevronDown className="ps-1" />
									</span>
								}
								id="navbarScrollingDropdown"
							>
								<NavDropdown.Item className="text-capitalize">
									<Link href="/about/Milestone">news & events</Link>
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize">
									<Link href="/about/BoardOfDirectors">
										<a>career</a>
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link id="3" className="manu-item">
								<Link href="#contact">
									<span className="contact-button">contact us</span>
								</Link>
							</Nav.Link>

						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default PageNav;
