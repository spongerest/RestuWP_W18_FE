/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./Header";
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import { useState, useEffect } from "react";
  import axios from "../services/api";
  import { useDispatch, useSelector } from "react-redux";
  import { setUsers } from "../redux/AdminSlice";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import User from "../components/User";
  import Stack from "@mui/material/Stack";
const HomeAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [statusFilter, setStatusFilter] = useState("");
    const statuses = ["active", "inactive"];
    // useEffect(() => {
    //     axios.get(`/admin?status=${statusFilter}`).then((res) => {
    //       dispatch(setUsers(res.data.tasks));
    //     });
    //   }, [statusFilter]);
    const { users = [] } = useSelector((state) => state.user);
    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value)
    };
    return(
    <Box>
        <Header>
            <Container>
                <Box display="flex" justifyContent="space-between" mt="2rem">
                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel>Select Type</InputLabel>
                    <Select value={statusFilter} onChange={handleStatusChange}>
                    {statuses.map((status, idx) => (
                        <MenuItem key={`${idx}-${status}`} value={status}>
                        {status}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                    <Stack direction="row" spacing={2}>
                        {/* <Button
                            variant="contained"
                            size="small"
                            onClick={()=> {navigate(`/admin/${id}`)}}
                            >
                            Delete User
                        </Button> */}
                    </Stack>
                </Box>
                <Box mt="2rem">
          <Grid container spacing={2}>
            {users.map((user, idx) => (
              <Grid item xs={12} md={3} key={`${idx}-${user.id}`}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/admin/${user._id}`}
                >
                  <User task={user} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
            </Container>
        </Header>
    </Box>)
}

export default HomeAdmin