import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import * as Yup from 'yup';
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import axios from 'axios';
import { base_url } from "@/util/baseUrl";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Head from "next/head";

import Navbar from '@/component/navbar';
import Script from 'next/script';

const Signup = () => {

    const router = useRouter()
    const { dispatch } = useContext(AuthContext);
    let schema = Yup.object().shape({



        email: Yup.string().email("Email should be valid").required("Email is required"),
        password: Yup.string().required("Password is required").min(6, 'Password must be at least 6 characters long'),
        
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        mobile: Yup.string().required("Mobile number is required").matches(/^\d{10}$/, "Mobile number must be 10 digits"),
        firstname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),

    });
    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',
            username: '',
            firstname: '',
            lastname: '',
            mobile: '',
        },
        validationSchema: schema,
        onSubmit: async (values) => {

           
            async function checkEmailExists(email) {
                try {
                  
                  const existingMethods = await auth.fetchSignInMethodsForEmail(email);
              
                  return existingMethods.length > 0; // True if email exists, false otherwise
                } catch (error) {
                  console.error("Error checking email existence:", error);
                  throw error; // Re-throw the error for proper handling in calling code
                }
              }
              
              

            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(async (userCredential) => {
                    // Signed in
                    // updateProfile(auth.currentUser, {
                    //     displayName: values.password,
                    //     phoneNumber: values.password
                    // });

                    const user = userCredential.user;

                    const docRef = await addDoc(collection(db, "users"), {
                        firstname: values.firstname,
                        lastname: values.lastname,
                        email: values.email,
                        mobile: values.mobile,
                        uid: user.uid




                    });
                    toast("User created ")
                    router.push("/login")

                })
                .catch((error) => {
                    // setError(true);
                   console.log(error);
               
                   toast('Email is already exsit ')
                   
                });


        },
    });






    return (
        <>
         <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Secure Dns" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />



        <title>Cyberpeace Secure Dns</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header className="header-area header-sticky ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                        <img src="/assets/images/logo/logo.png" alt="" />
                    </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                {/* <h2 style={{ color: '#7453fc', paddingTop: '7px', fontSize:'10px' }}>CyberPeace Secure DNS</h2> */}
                <ul className="nav">
                  <li><a href="/" >Home</a></li>
                  <li><a  href="/login " className="active" >Sign Up</a></li>
                  {/* <li><a href="#download">Download</a></li>
                  <li><a href="#about">About</a></li> */}
                  <li><a  href="/login" >Login</a></li>

                  {/* <li><a href="#">Author</a></li> */}
                  {/* <li><a href="#"><button type="button" className="btn btn-danger btn-sm"></button></a></li> */}
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      
            {/* <div className="row bg"> */}
           
            {/* <h2 className="login-title header1 padding-50">CyberPeace Secure Dns</h2> */}
            <div className="main-banner" style={{ paddingTop: "148px"}}>
        <div className="container">
          <div className="row">

                {/* <div className="col-lg-12 col-sm-12 padding-50"> */}
                <div className="col-lg-12 col-sm-12 ">
                    <div >
                        <form onSubmit={formik.handleSubmit} style={{width: "505px"}}>
                            <div className="login-title ">
                                <h2 className="login-title ">Sign Up</h2>
                            </div>
                            <div className="error " style={{ textAlign: "right",color:'#ff0000',fontWeight:'bolder',fontSize: '10px' }}>
                            {formik.touched.firstname && formik.errors.firstname}
                            </div>
                            <div className="form-field">
                                <input
                                    type="text"
                                    placeholder="First Name"

                                    onChange={formik.handleChange("firstname")}
                                   style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}
                                />
                               
                            </div>
                            <div className="error " style={{ textAlign: "right",color:'#ff0000',fontWeight:'bolder',fontSize: '10px' }}>
                            {formik.touched.lastname && formik.errors.lastname}
                            </div>
                            <div className="form-field">
                                <input
                                    type="text"
                                    placeholder="Last Name"

                                    onChange={formik.handleChange("lastname")}
                                   style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}
                                />
                            </div>
                            <div className="error " style={{ textAlign: "right",color:'#ff0000',fontWeight:'bolder',fontSize: '10px' }}>
                            {formik.touched.email && formik.errors.email}
                            </div>
                            <div className="form-field">
                                <input
                                    type="email"
                                    placeholder="Email / Username"

                                    onChange={formik.handleChange("email")}
                                   style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}
                                />
                            </div>
                            <div className="error " style={{ textAlign: "right",color:'#ff0000',fontWeight:'bolder',fontSize: '10px' }}>
                            {formik.touched.mobile && formik.errors.mobile}
                            </div>
                            <div className="form-field">
                                <input
                                    type="text"
                                    placeholder="Mobile Number"

                                    onChange={formik.handleChange("mobile")}
                                   style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}
                                />
                                 
                            </div>

                            

                            <div className="error " style={{ textAlign: "right",color:'#ff0000',fontWeight:'bolder',fontSize: '10px' }}>
                            {formik.touched.password && formik.errors.password}
                            </div>
                            <div className="form-field">
                                <input
                                    type="password"
                                    placeholder="Password"

                                    onChange={formik.handleChange("password")}
                                   style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}

                                />
                            </div>
                            <div className="error " style={{ textAlign: "right",color:'#ff0000',fontWeight:'bolder',fontSize: '10px' }}>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword}
                            </div>
                            <div className="form-field">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"

                                    onChange={formik.handleChange("confirmPassword")}
                                    style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}

                                />
                            </div>



                            <div className="form-field mt-3 mb-3">
                                <a href="/login" style={{ color: '#03feff' }}>Already have account ?</a>
                            </div>
                            {/* <div className="form-field">
                                <button className="btn" type="submit">Sign Up</button>
                            </div> */}
                         
                            <button className="themebutton1" type="submit">Sign Up</button>
                           
                            
                            

                        </form>

                    </div>
                </div>
                </div></div></div>

            {/* </div > */}
            <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
      
      <Script src="/assets/js/isotope.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/owl-carousel.js" strategy="beforeInteractive" />

      <Script src="/assets/js/tabs.js" strategy="beforeInteractive" />
      <Script src="/assets/js/popup.js" strategy="beforeInteractive" />
      <Script src="/assets/js/custom.js" strategy="beforeInteractive" />




        </>
    )

}


export default Signup;