// import { domain_url } from "../../../network/url"
import typeOfAction from "../constants"


export function GetProductData(data){
    console.log(data, 'GetData Action');
    return dispatch => {
        dispatch({
            type : typeOfAction.Data,
            payload: data
        })
        //   Axios.get(`${domain_url}/userById/${data.uid}`).then((response) => {
        //       console.log(response.data ,"user by id")
        //   }).catch((err) =>{
        //       console.error(err.toString())
        //   })
    }
}