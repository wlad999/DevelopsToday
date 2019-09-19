import React from "react";
const Form = props => {
  const { setComenst, value, onSubmit } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            onChange={setComenst}
            value={value}
            placeholder="enter your comment"
            cols="30"
            rows="5"
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default Form;
