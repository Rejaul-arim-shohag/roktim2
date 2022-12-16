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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '18' } }, 
      { params: { id: '19' } },
      { params: { id: '20' } }, 
      { params: { id: '21' } },
      { params: { id: '22' } }, 
      { params: { id: '23' } },
      { params: { id: '24' } }, 
      { params: { id: '25' } },
      { params: { id: '26' } }, 
      { params: { id: '27' } },
      { params: { id: '28' } }, 
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const productDetails = await getProductDetails(context.params.id);
  return {
    props: {
      productDetails
    } 
  }
}
export default singlePrd;



// export async function getServerSideProps(context) {
//   const productDetails = await getProductDetails(context.params.id);
//   return {
//     props: {
//       productDetails
//     } 
//   }
// }
// export default singlePrd;




