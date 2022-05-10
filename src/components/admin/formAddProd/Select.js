import { Select } from 'antd';

import React from 'react';
import 'antd/dist/antd.css'
import { countries } from '../../../utils/listCountry';
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}

export const SelectCountry=  () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {countries.map((el,index)=>
    <Option key={index} value={el.code}>{el.label}</Option>
    )}
    
    
  </Select>
);