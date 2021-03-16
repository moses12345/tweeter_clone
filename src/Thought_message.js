import "./Widgets.css";
import {Thought_consumer} from './context/thoughs'


function Thought_message() {
  return (
    <Thought_consumer>
      {(context) => {
        return (
          <div className='widgets__widgetContainer'>
            <h1>{context.though}</h1>
          </div>
        );
      }}
    </Thought_consumer>
  );
}

export default Thought_message;
