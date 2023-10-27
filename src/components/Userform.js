import { Formik } from "formik";
import * as Yup from "yup";

import {
  MenuItem,
  Typography,
  useMediaQuery,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Button, Select } from "@mui/material";
import axiosInstance from "../services/api";
import { useNavigate } from "react-router-dom";

const initialEditSchema = Yup.object().shape({
    status: Yup.string().required("Required"),
});
const initialDeleteSchema = Yup.object().shape({
    status: Yup.string().required("Required"),
});

let initialValues = {
    status:""
};

const UserForm = ({ mode = "edit", user }) => {
    const navigate = useNavigate();
    const statuses = ["active", "inactive"];
    const handleFormSubmit = (values, onSubmitProps) => {
        if (mode === "edit") {
        axiosInstance.put(`/admin/${values._id}`, values).then((res) => {
            navigate("/homeadmin");
        });
        } 
    };
    const isNotMobile = useMediaQuery("(min-width: 768px)");
    return (
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={mode === "delete" ? initialValues : user}
        validationSchema={mode === "delete" ? initialDeleteSchema : initialEditSchema}
        >
        {({
            handleSubmit,
            handleBlur,
            touched,
            resetForm,
            values,
            handleChange,
            errors,
        }) => (
            <Box p="2rem 0" m="2rem auto" width={isNotMobile ? "50%" : "90%"}>
            <Typography textAlign="center" mb="2rem">
                Update a User
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap="30px">
                <FormControl>
                    <InputLabel>Select Status</InputLabel>
                    <Select
                    label="Status User"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="status"
                    error={Boolean(touched.status) && Boolean(errors.status)}
                    >
                    {statuses.map((status, idx) => (
                        <MenuItem value={status} key={`${idx}-${status}`}>
                        {status}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <Button
                variant="outlined"
                type="submit"
                m="2rem 0"
                p="1rem 0"
                background="#00D5FA"
                >
                {mode === "edit" ? 'Edit User' : 'Delete User' }
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Formik>
    );
  };
  
  export default UserForm;