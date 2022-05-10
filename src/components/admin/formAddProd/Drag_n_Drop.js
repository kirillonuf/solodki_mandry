import React from 'react';
import 'antd/dist/antd.min.css';
import { Upload, Button } from 'antd';

import './Drag_n_Drop.scss';


export const DragNDrop = () => {
  const fileList = [
 
];
// const [file,setFile]=React.useState(null);
React.useEffect(()=>{

console.log(fileList);

},[])
// https://www.mocky.io/v2/5cc8019d300000980a055e76
  return(
  
    <Upload
     
    // fileList={fileList}
    accept="*"
       action={()=>true}
      listType="picture"
      defaultFileList={[...fileList]}
      // customRequest={(file)=>console.log(file)}
      multiple={true}
      maxCount={8}
    >
      <Button >Upload</Button>
    </Upload>
   
  
);}