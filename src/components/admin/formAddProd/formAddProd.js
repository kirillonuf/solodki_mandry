import React from "react";

import InputName  from "./InputNameProd.js";
import Description from "./Description.js";
import { SelectCountry } from "./Select"
import { DragNDrop } from "./Drag_n_Drop.js";
import './formAddProd.scss'

export const FormAddProd = () => {


    return (

        <div className="admin_container">
            <div className={'input_name'}>
                <label>Name</label>
                <InputName />
            </div>

            <div className={'input_cescription'}>
                <label>Description</label>
                <Description />
            </div>

            <div className={'input_country'}>
                <label>Choosed Country</label>
                <SelectCountry />
            </div>

            <div className={'input_upload'}>
                <label>Add photo</label>
               <DragNDrop />
            </div>
            
        </div>

    )

}