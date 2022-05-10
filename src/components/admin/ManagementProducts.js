 import React from "react";
import { jwtContext } from "../../utils/context";
import CountrySelect from "../../inputCountry/inputCountry";
import { Auth } from "./Auth";
import './ManagementProducts.scss';
import {FormAddProd} from './formAddProd/formAddProd.js'
import 'antd/dist/antd.less';

export const ManagementProducts =()=>{


// console.log(auth);

return(

  
<FormAddProd/>
   

)

}




// const {auth,setAuth,keyStorage} =React.useContext(jwtContext)
// const logout= ()=>{
// localStorage.removeItem(keyStorage);
//  setAuth(localStorage.getItem(keyStorage))
// }

// <label htmlFor="basic-url" className="form-label">Назва</label>
// <div className="input-group mb-3">
//   {/* <span className="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
//   <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
// </div>
// <label htmlFor="description" className="form-label">Опис</label>
// <div className="input-group">
//   {/* <span className="input-group-text">With textarea</span> */}
//   <textarea id="description" className="form-control" aria-label="With textarea"></textarea>
// </div>

//   <div> <button onClick={logout}>logout</button></div>
//     <CountrySelect/>
//     {/* <div class="input-group mb-3">
//   <label class="input-group-text" for="inputGroupFile01">Upload  <input type="file"  class="form-control" id="inputGroupFile01"/></label>

// </div> */}


// <label for="file-upload" class="custom-file-upload">
//     <i class="fa fa-cloud-upload"></i> Custom Upload
// </label>
// <input id="file-upload" type="file"/>
