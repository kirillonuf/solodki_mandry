import { Input } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';


import 'antd/dist/antd.css';
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