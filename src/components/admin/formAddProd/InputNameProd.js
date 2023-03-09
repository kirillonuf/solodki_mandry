// import { Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css'
// export const InputName = () => <Input size='large' placeholder="Basic usage" />;



import { Input } from 'antd';

const { TextArea } = Input;

class InputName extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      
        <TextArea placeholder="Autosize height based on content lines" autoSize value={value}
          onChange={this.onChange}/>
      
    );
  }
}

export default InputName;