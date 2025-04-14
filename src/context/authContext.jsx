// context/UserContext.jsx
import { createContext, useState } from "react";
export const authContext = createContext();

export const AuthProvider = ({ children }) => {
   // 
   const [user, setUser] = useState(null);
   const [count, setCount] = useState(0);

   function increase() {
      setCount(count + 1)
   }

   function setTheUser(nextState) {
      setUser({ ...user, ...nextState });
   }

   function setTheError(usedProvider) {
      let errMsg =
         "The email been used for a " +
         JSON.stringify(usedProvider) +
         " sign-up-account. Click corresponding button";
      errMsg = errMsg.replace(/"|"|.com/gi, "");
      setError(errMsg);
      // setTimeout(() => {
      //   setToast("");
      // }, 2000);
   }

   function login() {

   }

   function logout() {
      // signOut(auth)
      //    .then(() => {
      //       setTheUser({ account_email: "" });
      //    })
      //    .catch((error) => {
      //       setError("error in loggingout");
      //    });
   }


   return (
      <authContext.Provider value={{ user, setUser, count, increase }}>
         {children}
      </authContext.Provider>
   );
};
