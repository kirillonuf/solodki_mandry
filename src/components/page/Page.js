import React, {  useContext } from 'react'
import { Routes, Route,} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainPage } from '../mainPage/mainPage'
import { Products } from '../products/products'
import { AboutUs } from '../about_Us/aboutUs';
import { Contacts } from '../contacts/contacts';
import { ProductById } from '../productById/productById';
import { Auth } from '../admin/Auth';

import './page.scss';
import { ManagementProducts } from '../admin/ManagementProducts';
  import {jwtContext,codeCountry} from '../../utils/context'

export const Page = () => {
    const keyStorage ='userKey'
    console.log(localStorage.getItem(keyStorage));
const [auth,setAuth] =React.useState(!!localStorage.getItem(keyStorage));
const [code,setCode] =React.useState('');


//  React.useEffect(()=>{console.log("auth",auth);},[localStorage.getItem(keyStorage)])


    return (<div className="container">

        <div className='content'>
        <jwtContext.Provider value={{auth,setAuth,keyStorage}} >
            <codeCountry.Provider value={{code,setCode}}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="admin" element={auth?<ManagementProducts/>:<Auth/>} />
                    <Route path="products" element={<Products />} />
                    <Route ex path='products/:productId' element={<ProductById />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="contacts" element={<Contacts />} />

                    <Route path="*" element={<div>NOT FOUND</div>} />
                </Routes>
            </codeCountry.Provider>
            </jwtContext.Provider>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

         
        </div>

    </div>)


}