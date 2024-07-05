import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import * as Yup from 'yup';
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import axios from 'axios';
import { base_url } from "@/util/baseUrl";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const router = useRouter()
    const { dispatch } = useContext(AuthContext);
    let schema = Yup.object().shape({

        email: Yup.string().email("Email should be valid").required("Email is required"),
        password: Yup.string().required("Password is required"),


    });
    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',

        },
        validationSchema: schema,
        onSubmit: async (values) => {

            try {
                const response = await axios.post(base_url + 'user/login', values);
                const user = response.data;

                dispatch({ type: "LOGIN", payload: user })
                router.push('/dashboard')
                // console.log(response);
            } catch (error) {
                console.error(error);
                toast('Username or password not matched')
            }

        },
    });


    //  check user present or not 
    let user;
    if (typeof window !== 'undefined') {
        user = JSON.parse(localStorage.getItem("user"));

    }

    useEffect(() => {

        if (user) {
            console.log("user present")
            router.push("/dashboard")

        } else {
            console.log("No present")
        }

    }, [])



    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="author" content="Secure Dns" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Cyberpeace Secure Dns</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
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
            <div className="row bg">
                {/* <div className="col-lg-4 col-sm-12"></div> */}
                {/* <h2 className="login-title header1 padding-50">CyberPeace Secure Dns</h2> */}

                <div className="col-lg-12 col-sm-12 padding-50">
                    <div >
                        <form className="formbackground" onSubmit={formik.handleSubmit}>
                            <div className="login-title ">
                                {/* <h2 className="login-title ">Login</h2> */}
                                <img src="/assets/images/logo/logo-dark.png" alt="logo" style={{ width: '100%' }}></img>

                            </div>
                            <div className="form-field">
                                <input
                                    type="email"
                                    placeholder="Email / Username"
                                    required
                                    onChange={formik.handleChange("email")}
                                    style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={formik.handleChange("password")}
                                    style={{margin: "6px",borderRadius: "15px", padding: "0.7rem 0.7rem"}}
                                />
                            </div>
                            <div className="form-field mt-2">
                                <a href="/signup" style={{ color: '#03feff' }}>Don't have account ?</a >

                            </div>
                            <div className="form-field mb-4">
                        <a href="/forgot-password"  style={{ color: '#03feff' }}>Forgot Password</a >
                        </div>
                            <div className="form-field">
                                {/* <button className="btn" type="submit">Log in</button> */}

                            </div>
                            <button className="themebutton1" type="submit">Log in</button>

                        </form>
                      

                    </div>
                </div>
            </div>

        </>
    )

}


export default Login;