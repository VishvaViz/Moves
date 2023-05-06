import React from "react";

function Message(){
    let [value,setValue]=React.useState()
    let getUserHandler=()=>{
        Axios.get('http://test.api.boxigo.in/sample-data/')
        .then((response)=>{
            console.log(response)
            setValue(response.data.Customer_Estimate_Flow)
        })
        .catch(()=>{})
    
      }
      useEffect(()=>{
        getUserHandler()
      },[])
    return value
}
export{Message} 