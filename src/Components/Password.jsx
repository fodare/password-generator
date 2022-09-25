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
   const [passwordlowercase, setPasswordLowercase] = useState(Boolean);
   const [passworduppercase, setPasswordUppercase] = useState(Boolean);
   const [passwordnumbers, setPassWordNumbers] = useState(Boolean);
   const [passwordspecial, setPasswordSpecialCharacters] = useState(Boolean);

   function generatePassword(
      passwordlength,
      lowerCaseLetters,
      upperCaseLetters,
      numbersZeroToNine,
      selectedSpecialCharacters
   ) {
      var password = [];
      for (var i = 0; i < passwordlength; i++) {
         var x = Math.floor(Math.random() * passwordlength);
         password.push(lowerCaseLetters[x]);
      }
      var passwordToString = "";
      password.forEach((x) => (passwordToString += x));
      return passwordToString;
   }

   function handleSubmit(event) {
      event.preventDefault();
      let newPassword = generatePassword(
         passwordlength,
         lowerCaseLetters,
         upperCaseLetters,
         numbersZeroToNine,
         selectedSpecialCharacters
      );
      setPassword(newPassword);
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
            <form className="password-form">
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
                        value={passwordlength}
                        max="10"
                        min={8}
                        placeholder="8"
                        className="password-length-input"
                     />
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Lowercase characters:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPasswordLowercase(event.target.checked)
                        }
                        value={passwordlowercase}
                        name="password-lowercase"
                        type="checkbox"
                     />
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Uppercase characters</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPasswordUppercase(event.target.checked)
                        }
                        value={passworduppercase}
                        name="password-uppercase"
                        type="checkbox"
                     />
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Numbers:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPassWordNumbers(event.target.checked)
                        }
                        value={passwordnumbers}
                        name="password-numbers"
                        type="checkbox"
                     />
                  </div>
               </div>

               <div className="row password-inputs">
                  <div className="col-lg-3">
                     <label>Special Characters:</label>
                  </div>
                  <div className="col-lg-3">
                     <input
                        onChange={(event) =>
                           setPasswordSpecialCharacters(event.target.checked)
                        }
                        value={passwordspecial}
                        name="password-special"
                        type="checkbox"
                     />
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
               <h3 className="col-lg-3">You could use: </h3>
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
