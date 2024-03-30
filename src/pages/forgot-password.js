import { resetPassword } from '@/firebase/firebase';
import React, { useState } from 'react';
// import { resetPassword } from './firebase';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setResetMessage('Password reset email sent. Please check your inbox.');
      setErrorMessage('');
      setIsFormVisible(false);
    } catch (error) {
      setResetMessage('');
      setErrorMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="main-banner" style={{ paddingTop: "148px"}}>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Reset Password</h2>
      
        <div className="row justify-content-center">
          <div className="col-md-6">
          {isFormVisible && (
            <form onSubmit={handleResetPassword}>
              <div className="form-group mt-5 mb-4">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{ margin: "6px", borderRadius: "15px", padding: "0.7rem 0.7rem" }}
                />
              </div>
              <div className="form-group resetpage"  >
                  <button type="submit" className="themebutton1" >Reset Password</button> <a href='/login' type="submit" className="themebutton1" style={{overflow:' visible'}}>Login</a>
              
              
              </div>
            </form>
            )}
            {resetMessage &&<>  <p className="alert alert-success">{resetMessage}</p>  <br/><a href='/' className="themebutton1">Home</a></>}
            {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
          </div>
        </div>
      
    </div>
    </div>
  );
};

export default ResetPassword;
