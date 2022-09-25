import React from "react";

function PassWordView() {
   return (
      <div className="PasswordDiv">
         <h1>Strong password generator</h1>
         <p>
            This is a simple program to help you generate a random and strong
            password.
         </p>

         <div className="Password-settings">
            <p>Please select options to help generate strong password:</p>
            <form action="/" className="password-form ">
               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Password length:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        name="password-length"
                        type="number"
                        max="10"
                        min={8}
                        placeholder="8"
                        className="password-length-input"
                     ></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Lowercase characters:</label>
                  </div>
                  <div className="col-lg-3">
                     <input name="password-lowercase" type="checkbox"></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Uppercase characters</label>
                  </div>
                  <div className="col-lg-3">
                     <input name="password-uppercase" type="checkbox"></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Numbers:</label>
                  </div>
                  <div className="col-lg-3">
                     <input name="password-numbers" type="checkbox"></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Special Characters:</label>
                  </div>
                  <div className="col-lg-3">
                     <input name="password-special" type="checkbox"></input>
                  </div>
               </div>

               <button type="submit" class="btn btn-primary">
                  Get Password
               </button>
            </form>
         </div>
         <div className="new-password">
            <div className="row">
               <h3 className="col-lg-3">You can use: </h3>
               <input
                  className="col-lg-3"
                  readOnly="readOnly"
                  id="new_password"
               />
            </div>
         </div>
      </div>
   );
}

export default PassWordView;
