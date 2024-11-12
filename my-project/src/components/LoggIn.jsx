import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebace";
import { useState } from "react";

const LoggIn = (e) => {
  const [errorMassage, setErrorMassage] = useState("");
  const [success,setSuccess]=useState(false)
  const[error,setError]=useState('')
  const[errors,setErrors]=useState('')
  const hendleLoggin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);

//     rest Message
setError('')
setErrorMassage('')
setSuccess(false)
setErrors('')

    if(password.length<6){
     setError('password should be 6 cracter or more')
     return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password)){
     setErrors('pleace input at least one uppercase,one lowercase,one Number and one speacal carater')
     return
    }

    //create users email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true)
      })
      .catch((error) => {
        console.log("Error", error.message);
        setErrorMassage(error.message);
        setSuccess(false)
      });
  };

  return (
    <div className="max-w-80 mx-auto mt-32">
      <p className="text-2xl font-semibold">Loggin page</p>
      <br />
      <form onSubmit={hendleLoggin} className="gap-3">
        <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="password"
            placeholder="password"
          />
        </label>
        {/* {
          errorMassages && <p className="text-red-600 font-semibold">{errorMassages}</p>
        } */}
        {errorMassage && (
          <p className="text-red-800 font-semibold text-center mt-5">
            {errorMassage}
          </p>
        )}
        {
          success && <p className="text-lime-500 font-semibold">Loggin success fully</p>
        }
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          errors && <p className="text-red-700 font-semibold">{errors}</p>
        }
        <button className="text-center font-bold text-2xl mt-10 btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoggIn;
