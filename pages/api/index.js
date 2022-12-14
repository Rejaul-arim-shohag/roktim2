import axios from "axios";
// const BASE_URL ="https://dummyjson.com";
const BASE_URL ="https://cms.demo.api.net.bd";

// export const getProductListUsingAuth = async ()=> {
    // Using Authorization Header
    //     let EndPoint=`${BASE_URL}/products`;
    //     return axios({
    //         method: "get",
    //         url: EndPoint,
    //         headers: {
    //           Authorization: `Bearer ${process.env.TOKEN}`,
    //         },
    //       }).then((res)=>{
    //         if(res.status===200){
    //             return res.data;
    //         }
    //         else{
    //             return false;
    //         }
    //         }).catch((err)=>{
    //             console.log(err);
    //             return false;
    //     });
    // }


export const getProductList = async ()=> {
    let EndPoint=`${BASE_URL}/products`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getProductDetails = async (id)=> {
    let EndPoint=`${BASE_URL}/products/${id}`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getCatagoryList = async ()=> {
    let EndPoint=`${BASE_URL}/categories_with_subcategory`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

