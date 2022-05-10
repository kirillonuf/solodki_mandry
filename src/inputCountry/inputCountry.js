import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../utils/listCountry';
import './inputCountry.scss'
import { codeCountry } from '../utils/context';

export default function CountrySelect() {

  const {code,setCode} = React.useContext(codeCountry)

  const dropDownShow =()=> {
    document.getElementById("myDropdown").classList.toggle("show");
  
    filterFunction()
  }
  
  const filterFunction =()=> {

    let input, ul, li, i,txtValue;
    input = document.getElementById("myInput");
    let filter='';
    filter = input.value.toUpperCase();
    ul = document.getElementById("myDropdown");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++){

      txtValue = li[i].textContent || li[i].innerText;
      
      if (txtValue.toUpperCase().indexOf(filter) > -1){
        console.log(txtValue);
        li[i].style.display = "";
      } 
      else {
        li[i].style.display = "none";
      }

      li[i].addEventListener('click',function (e) {
        // e.preventDefault()
      console.log(e);
        input.value = this.innerText;
        setCode(this.dataset.value);
       ul.classList.remove("show");
      }, false)
    }
  }

  return (
    <div className="dropdown">
    <div>Choose Country:</div>
    <input  onKeyUp={dropDownShow} className="dropbtn" type="text" autocomplete="off" placeholder="Search.." id="myInput" /> 
   
    <ul id="myDropdown" className="dropdown-content">
      
     {countries.map((el,index)=>{
return <li data-value={el.code}>{el.label}</li>


     })}
    </ul>
  </div>
    )
 }

