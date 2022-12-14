import { useState } from "react"
import Csr from "../../components/Layouts/about/csr/Csr"
import CsrBg from "../../components/Layouts/about/csr/CsrBg"
import CsrCard from '../../components/Layouts/about/csr/CsrData'


const SocialResponsibility = () => {
    const [csrData, setcsrData] = useState(CsrCard);
    
  return (
    <>
    <CsrBg/>
        <Csr sendCsr={csrData}/>
    </>
  )
}

export default SocialResponsibility