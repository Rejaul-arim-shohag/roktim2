import { TiLocationOutline } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactIcon = () => {
  return (
    <>
    
        <div className="container text-light py-4">
          <div className="address d-flex justify-content-between">
            <div className="location px-2">
              <TiLocationOutline size={"30px"} color={"#ffa500"} className="" />
              <span className="ps-2 align-middle">Address here</span>{" "}
            </div>
            <div className="phone px-2">
              <FiPhoneCall size={"30px"} color={"#ffa500"} className="pt-2" />
              <sapn className="ms-2 align-middle">+0000 000 000</sapn>
            </div>
            <div className="email px-2">
              <AiOutlineMail size={"27px"} color={"#ffa500"} className="pt-0" />
              <sapn className="ms-2 align-middle">info@ifadgroup.com</sapn>
            </div>
          </div>
        </div> 
    </>
  )
}

export default ContactIcon