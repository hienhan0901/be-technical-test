import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./homepage.css";

import Row from "../components/row";

export default function Homepage(props) {
  const [userList, setUserList] = useState([]);
  const [change, setChange] = useState(0);

  const tempList = [];

  const tokenRef = useRef();
  const searchRef = useRef();

  const queryUsers = async (queryString, token) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/users`, {
        params: { search: queryString },
        headers: { access_token: token },
      });
      return data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const searchButtonHandler = async (e) => {
    e.preventDefault();

    const data = await queryUsers(
      searchRef.current.value,
      tokenRef.current.value
    );
    setUserList(data);
  };

  const sendInputs = (user) => {
    const i = tempList.findIndex((u) => u._id === user._id);
    if (i > -1) tempList[i] = user;
    else tempList.push(user);
  };

  const updateButtonHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/users`,
        tempList,
        {
          headers: { access_token: tokenRef.current.value },
        }
      );
      if (data.message === "success") setChange(change + 1);
    } catch (e) {
      console.log(e);
    }

    setChange(change + 1);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await queryUsers(
        searchRef.current.value,
        tokenRef.current.value
      );
      setUserList(data);
    };
    fetch();
  }, [change]);
  return (
    <>
      <div className="searchBar">
        <form>
          <input
            type="text"
            className="searchInput"
            ref={tokenRef}
            placeholder="Verify token here (token123)"
            defaultValue="token123"
          />
          <input
            type="text"
            className="searchInput"
            ref={searchRef}
            placeholder="Search"
          />
          <button className="searchButton" onClick={searchButtonHandler}>
            Search
          </button>
        </form>
      </div>
      <div className="content">
        <table>
          <tbody>
            <tr>
              <td className="block">Username</td>
              <td className="block">Email</td>
              <td className="block">Birthday</td>
              <td>
                <button onClick={updateButtonHandler}>Update</button>
              </td>
            </tr>
            {userList &&
              userList.map((u) => {
                return <Row key={u._id} user={u} sendInputs={sendInputs} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
