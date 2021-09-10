import React from 'react';

const Form = ({setInputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add..." />
          <button type="submit" className="todo-button">Submit</button>
        </form>
    );
}
export default Form;