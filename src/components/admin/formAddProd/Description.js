import { Input } from 'antd';
import React from 'react';


import 'antd/dist/antd.min.css';
const { TextArea } = Input;
class Description extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      
       
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      
    );
  }
}

export default Description;