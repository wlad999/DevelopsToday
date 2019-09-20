import React from "react";
import { useState } from "react";
const FormComment = props => {
  const [onMode, setMode] = useState(false);
  const { setComenst, value, onSubmit } = props;
  let onSetMode = () => setMode(!onMode);
  return (
    <div>
      {!onMode ? (
        <button onClick={onSetMode}>Add comment</button>
      ) : (
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <textarea
                onChange={setComenst}
                value={value}
                placeholder="enter your comment"
                cols="30"
                rows="3"
              />
            </div>
            <button type="submit">SUBMIT</button>
            <button onClick={onSetMode}>close form comment</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default FormComment;
