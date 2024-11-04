"use client"
import React from 'react';
import { Button, Typography, Container } from '@mui/material'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import { useRouter } from 'next/navigation'; 

const Page = () => {
  const router = useRouter(); 


  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
    
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        Oops! You are not logged in.
      </Typography>

     
      <Typography variant="body1" gutterBottom>
        Login to see all the available workshops.
      </Typography>

      
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIcon />} 
        onClick={handleLogin}
        sx={{
          marginTop: '20px',
          backgroundColor: '#1976d2',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#115293',
          },
        }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Page;
