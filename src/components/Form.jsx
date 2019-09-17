import React from "react";
const Form = props => {
  const { setComenst, value, onSubmit } = props;
  return (
    <div>
      <form>
        <div>
          <textarea
            onChange={setComenst}
            value={value}
            placeholder="enter your comment"
            cols="30"
            rows="5"
          />
        </div>
        <button onClick={onSubmit}>SUBMIT</button>
      </form>
    </div>
  );
};
export default Form;
