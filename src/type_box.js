
import "./Widgets.css";
import {Thought_consumer} from './context/thoughs'
const Type=() => {
  return (
    <Thought_consumer>
      {(context) => {
        return (
          <div className='widgets__input'>
            <input placeholder='search Twitter' type='text' value = {context.thought} onChange={(e)=>context.setthought(e.target.value)} />
          </div>
        )
      }}
    </Thought_consumer>
  );
}
export default Type;


