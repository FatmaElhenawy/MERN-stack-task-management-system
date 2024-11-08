import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/register';
import Layout from '../components/layout';
import useAuth from '../hooks/useAuth';
import classes from './auth.module.scss';

function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <Layout>
      <div className={classes.form_container}>
        <Login />
        <Register />
      </div>
    </Layout>
  );
}

export default Auth;