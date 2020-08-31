import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { Form, Select,InputNumber,Switch,Radio,Slider,Button,Upload,Rate,Checkbox,Row, Col, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const Admin= (props) => {
 const fileInput = useRef();
 const uploadImage = () => {
 const uploadedFile = fileInput.current;
 
    axios.post("http://localhost:8000/upload", uploadedFile.files[0], {
      params: { filename: uploadedFile.files[0].name },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    });
  };
 

    const idTodelete = useRef();
    function DeleteProduct() {
        axios
            .delete(`http://127.0.0.1:8000/products/${idTodelete.current.value}`)
            .then((res) => {
                console.log(`product with id ${idTodelete.current.value} deleted`);
            });
    }

    return (
        <div className="admin">
             <div className="App">
              <input type="file" ref={fileInput} />
             <br />
              <br />
     		<button onClick={uploadImage}>לוגו</button>
             </div>

            <input type="text" ref={idTodelete} placeholder=" בחר את מספר המוצר שברצונך למחוק" />
            <button className="send id" onClick={DeleteProduct}>לחץ כדי למחוק</button>
       
                
     </div>
    );

}
export default Admin;

// const { Option } = Select;

// let index = 0;

// const  state = {
//     items: ['jack', 'lucy'],
//     name: '',
//   };

//   onNameChange = event => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   addItem = () => {
//     console.log('addItem');
//     const { items, name } = this.state;
//     this.setState({
//       items: [...items, name || `New item ${index++}`],
//       name: '',
//     });
//   };
//     const { items, name } = this.state

//   const { Option } = Select;
//   const formItemLayout = {
//     labelCol: {
//       span: 6,
//     },
//     wrapperCol: {
//       span: 14,
//     },
//   };
  
//   const normFile = e => {
//     console.log('Upload event:', e);
  
//     if (Array.isArray(e)) {
//       return e;
//     }
  
//     return e && e.fileList;
//   };
  
//       const Admin = (props) => {
//         const onFinish = values => {
//       console.log('Received values of form: ', values);
//     };
  
//     return (
//         <div className="admimmange">
//       <Form
//         name="validate_other"
//         {...formItemLayout}
//         onFinish={onFinish}
     
//       >

//         <Form.Item
//           name="upload"
//           valuePropName="fileList"
//           getValueFromEvent={normFile}
//           extra="העלה את הלוגו לאתר"
//         >
//           <Upload name="image" action="/upload.do" listType="picture">
//             <Button>
//               <UploadOutlined /> העלה לוגו
//             </Button>
//           </Upload>
//         </Form.Item>
  
  
//         <Form.Item
//           wrapperCol={{
//             span: 12,
//             offset: 6,
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             שלח
//           </Button>
//           </Form.Item>
//           </Form>
//           <Select
//           style={{ width: 240 }}
//           placeholder="custom dropdown render"
//            dropdownRender={menu => (
//        <div>
//            {menu}
//     <Divider style={{ margin: '4px 0' }} />
//     <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
//       <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
//       <a
//         style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
//         onClick={this.addItem}
//       >
//         <PlusOutlined /> הוסף מוצר
//       </a>
//     </div>
//   </div>
// )}
// >
// {items.map(item => (
//   <Option key={item}>{item}</Option>
// ))}
// </Select>

// </div>
//     );








//   };
 
//   export default Admin;