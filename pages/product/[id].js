import { useRouter } from 'next/router';
import OurPageProduct from '../../components/Layouts/ourproduct/OurPageProduct';
import { getProductDetails} from '../api/';

import React from 'react'

function singlePrd({productDetails}) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
			<OurPageProduct productDetails={productDetails.data[0]} />
    </>
  )
  
}

export async function getServerSideProps(context) {
  const productDetails = await getProductDetails(context.params.id);
  return {
    props: {
      productDetails
    } 
  }
}
export default singlePrd;




