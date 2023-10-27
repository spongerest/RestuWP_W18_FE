/* eslint-disable no-unused-vars */
import {
    Card,
    Box,
    CardContent,
    CardActionArea,
    Typography,
    Button,
  } from "@mui/material";
  const User = ({ user }) => {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography sx={{ p: 0 }}>Role : {user.role}</Typography>
              <Typography sx={{ p: 0 }}>Status : {user.status}</Typography>
              <Typography sx={{ p: 0 }}>Email : {user.email}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
  };
  export default User;