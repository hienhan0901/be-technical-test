import React, { useRef } from "react";
import moment from "moment";

export default function Row({ user, sendInputs }) {
  const usernameInput = useRef();
  const emailInput = useRef();
  const birthdayInput = useRef();

  const onChangeHandler = (e) => {
    e.preventDefault();

    const tempUser = {
      ...user,
      username: usernameInput.current.value,
      email: emailInput.current.value,
      birthday: birthdayInput.current.value,
    };

    sendInputs(tempUser);
  };

  return (
    <tr>
      <td className="block">
        <input
          type="text"
          defaultValue={user.username}
          ref={usernameInput}
          onChange={onChangeHandler}
        />
      </td>
      <td className="block">
        <input
          type="text"
          defaultValue={user.email}
          ref={emailInput}
          onChange={onChangeHandler}
        />
      </td>
      <td className="block">
        <input
          type="text"
          defaultValue={moment(user.birthday).format("YYYY-MM-DD")}
          ref={birthdayInput}
          onChange={onChangeHandler}
        />
      </td>
    </tr>
  );
}
