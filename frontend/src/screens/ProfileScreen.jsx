import { useState, useEffect } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useProfileMutuation } from "../slices/ordersApiSlice";
import { setCredentials } from "../slices/authSlice";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  //   useffect(() => {
  //     if (userInfo) {
  //       setName(userInfo.name);
  //       setEmail(userInfo.email);
  //     }
  //   }, [userInfo.name, userInfo.email]);
  //   });

  return <div>ProfileScreen</div>;
};

export default ProfileScreen;
