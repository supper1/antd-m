/*
 * @Author: river
 * @Date: 2020-01-14 11:32:30
 * @LastEditors  : river
 * @LastEditTime : 2020-01-14 11:42:11
 * @Description: picker组件问题复现
 * @FilePath: \demo\src\App.js
 */
import React ,{useState} from 'react';
import { Picker, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '20141',
    },
    {
      label: '2014',
      value: '20142',
    },
    {
      label: '2014',
      value: '20143',
    },
    {
      label: '2014',
      value: '20144',
    },
    {
      label: '2014',
      value: '20145',
    },
    {
      label: '2014',
      value: '20146',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];
function App() {
  const [value,setValue] = useState('')
  const [value2,setValue2] = useState(0)
  setInterval(()=>{ // 存在持续渲染数据的时候picker组件会有回弹
    setValue2(value2+1)
  },500)
  return (
    <div className="App">
             <Picker
          data={seasons}
          title="选择季节"
          cascade={false}
          extra="请选择(可选)"
          value={value}
          onChange={v => setValue(v )}
          onOk={v => setValue( v )}
        >
          <List.Item arrow="horizontal">Multiple</List.Item>
        </Picker>
    </div>
  );
}

export default App;
