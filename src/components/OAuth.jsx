import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
const navigate=useNavigate()
  const handleGoogleSubmit = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      
      // Extract user information from the result
      const { displayName, email, photoURL } = result.user;

      // Send user data to the backend API
      const { data } = await axios.post('http://localhost:4500/api/v1/user/google', {
        name: displayName,
        email,
        photo: photoURL
      });

      
      dispatch(signInSuccess(data.user));
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Button
        onClick={handleGoogleSubmit}
        fullWidth
        color="primary"
        variant="contained"
        sx={{ mt: 3, mb: 2}}
      >
        Continue With Google Account
      </Button>
    </Box>
  );
};

export default OAuth;
