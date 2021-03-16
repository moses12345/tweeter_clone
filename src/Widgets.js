import "./Widgets.css";
import {useState} from 'react'
import Type from "./type_box";
import Thought_message from "./Thought_message"
import {Thought_provider} from './context/thoughs'

const Widgets = () => {
  const [thought, setthought] = useState("")
  return (
    <Thought_provider value={{thought,setthought}}>
      <div className='widgets'>
        <Type />
        <Thought_message />
      </div>
    </Thought_provider>
    
  );
};
export default Widgets;
