import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";


export const PaginationList = ({countPages,currentPage,setCurrentPage})=>
//  <StyledEngineProvider injectFirst>
   <>
    {!!countPages && 
     <Pagination 
    count={countPages} 
    color='primary' 
    page={currentPage}
    onChange={(_,num)=>setCurrentPage(num)}
    />}
   </>
  // </StyledEngineProvider>
