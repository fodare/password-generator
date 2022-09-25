import React, { useState } from "react";
import {
   lowerCaseLetters,
   upperCaseLetters,
   numbersZeroToNine,
   selectedSpecialCharacters,
} from "./passwordOptions";

function PassWordView() {
   const [currentPassword, setPassword] = useState("");
   const [passwordlength, setPasswordLength] = useState(8);
   const [passwordlowercase, setPasswordLowercase] = useState("on");
   const [passworduppercase, setPasswordUppercase] = useState("on");
   const [passwordnumbers, setPassWordNumbers] = useState("on");
   const [passwordspecial, setPasswordSpecialCharacters] = useState("on");

   function handleSubmit(event) {
      console.log(
         passwordlength,
         passwordlowercase,
         passworduppercase,
         passwordnumbers,
         passwordspecial
      );
      event.preventDefault();
   }

   return (
      <div className="PasswordDiv">
         <h1>Strong password generator</h1>
         <p>
            This is a simple program to help you generate a random and strong
            password.
         </p>

         <div className="Password-settings">
            <p>Please select options to help generate strong password:</p>
            <form action="" className="password-form">
               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Password length:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPasswordLength(event.target.value)
                        }
                        name="password-length"
                        type="number"
                        vlaue={passwordlength}
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
                     <input
                        onChange={(event) =>
                           setPasswordLowercase(event.target.value)
                        }
                        value={passwordlowercase}
                        name="password-lowercase"
                        type="checkbox"
                     ></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Uppercase characters</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPasswordUppercase(event.target.value)
                        }
                        value={passworduppercase}
                        name="password-uppercase"
                        type="checkbox"
                     ></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Numbers:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPassWordNumbers(event.target.value)
                        }
                        vlaue={passwordnumbers}
                        name="password-numbers"
                        type="checkbox"
                     ></input>
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Special Characters:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPasswordSpecialCharacters(event.target.value)
                        }
                        vlaue={passwordspecial}
                        name="password-special"
                        type="checkbox"
                     ></input>
                  </div>
               </div>

               <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary"
               >
                  Get Password
               </button>
            </form>
         </div>
         <div className="new-password">
            <div className="row">
               <h3 className="col-lg-3">You can use: </h3>
               <input
                  value={currentPassword}
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
