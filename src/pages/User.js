/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../services/api";
import { setUser } from "../redux/AdminSlice";
import { Box, Container } from "@mui/system";
import Header from "./Header";
import Userform from "../components/Userform";

const User = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
      async function fetchUser() {
        await axios.get(`/admin/users`).then((res) => {
          setCurrentUser(res.data.user);
          dispatch(setUser(res.data.user));
        });
      }
      fetchUser();
    }, [id, dispatch]);
  
    if(!currentUser) {
      return
    }
    return <Box>
      <Header />
      <Container>
          <Userform user={currentUser} />
      </Container>
    </Box>;
  };
  export default User;
