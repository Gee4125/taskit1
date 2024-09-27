



// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import Textbox from '../components/Textbox';
// import Button from '../components/Button';
// import logo from '../assets/logo.png'; // Importing the logo

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);

//   const submitHandler = async (data) => {
//     console.log("Form Submitted:", data);

//     try {
//       const response = await fetch('http://localhost:5000/api/signup', { 
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json(); // Parsing the response
//       console.log("Signed up successfully:", result);
//       alert("Signed up successfully!");
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("An error occurred during signup. Please try again.");
//     }
//   };

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#fbf4ec]">
//       <div className="w-full md:w-auto gap-0 md:gap-40 flex col md:flex-row items-center justify-center">
//         <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
//           <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
//             <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
//               Manage all your tasks in one place!
//             </span>
//             <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-[#e25647]">
//               <span>Taskit</span>
//               <span>Project Manager</span>
//             </p>
//             <img
//               src={logo}
//               alt="Logo"
//               className="rotate-in-up-left w-[100px] h-[100px]"
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
//           <form
//             onSubmit={handleSubmit(submitHandler)}
//             className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
//           >
//             <div>
//               <p className="text-[#e25647] text-3xl font-bold text-center">
//                 {isLogin ? "Welcome back!" : "Create an Account"}
//               </p>
//               <p className="text-center text-base text-gray-700 ">
//                 {isLogin
//                   ? "Keep all your credentials safe."
//                   : "Sign up to start managing your tasks."}
//               </p>
//             </div>
//             <div className="flex flex-col gap-y-5">
//               {!isLogin && (
//                 <Textbox
//                   placeholder="Your name"
//                   type="text"
//                   name="name"
//                   label="Name"
//                   className="w-full rounded-full"
//                   register={register("name", { required: "Name is required!" })}
//                   error={errors.name ? errors.name.message : ""}
//                 />
//               )}
//               {!isLogin && (
//                 <Textbox
//                   placeholder="Your mobile number"
//                   type="text"
//                   name="mobile"
//                   label="Mobile Number"
//                   className="w-full rounded-full"
//                   register={register("mobile", {
//                     required: "Mobile number is required!",
//                     pattern: {
//                       value: /^[0-9]{10}$/,
//                       message: "Invalid mobile number format",
//                     },
//                   })}
//                   error={errors.mobile ? errors.mobile.message : ""}
//                 />
//               )}
//               {!isLogin && (
//                 <Textbox
//                   placeholder="Your organization"
//                   type="text"
//                   name="organization"
//                   label="Organization"
//                   className="w-full rounded-full"
//                   register={register("organization", { required: "Organization is required!" })}
//                   error={errors.organization ? errors.organization.message : ""}
//                 />
//               )}
//               <Textbox
//                 placeholder="email@example.com"
//                 type="email"
//                 name="email"
//                 label="Email Address"
//                 className="w-full rounded-full"
//                 register={register("email", { required: "Email Address is required!" })}
//                 error={errors.email ? errors.email.message : ""}
//               />
//               <Textbox
//                 placeholder="your password"
//                 type="password"
//                 name="password"
//                 label="Password"
//                 className="w-full rounded-full"
//                 register={register("password", { required: "Password is required!" })}
//                 error={errors.password ? errors.password.message : ""}
//               />
//               {isLogin && (
//                 <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
//                   Forgot Password?
//                 </span>
//               )}
//               <Button
//                 type="submit"
//                 label={isLogin ? "Login" : "Sign Up"}
//                 className="w-full h-10 bg-[#e25647] text-white rounded-full"
//               />

//               {/* Conditional Text */}
//               {isLogin ? (
//                 <p className="text-center text-gray-700 text-sm">
//                   Don't have an account? Sign up below.
//                 </p>
//               ) : (
//                 <p className="text-center text-gray-700 text-sm">
//                   Already have an account? Login below.
//                 </p>
//               )}

//               <Button
//                 type="button"
//                 label={isLogin ? "Sign Up" : "Back to Login"}
//                 onClick={toggleForm}
//                 className="w-full h-10 bg-blue-600 text-white rounded-full"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import logo from '../assets/logo.png'; // Importing the logo

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = async (data) => {
    console.log("Form Submitted:", data);

    try {
      const response = await fetch(
        `http://localhost:5000/api/${isLogin ? 'login' : 'signup'}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parsing the response
      console.log(`${isLogin ? "Logged in" : "Signed up"} successfully:`, result);

      if (!isLogin) {
        alert("Signed up successfully!");
        setIsLogin(true); // Switch to login form after signup
        navigate("/login"); // Redirect to the login page
      } else {
        alert("Logged in successfully!");
        navigate("/dashboard"); // Redirect to dashboard after login
      }
    } catch (error) {
      console.error(`Error during ${isLogin ? 'login' : 'signup'}:`, error);
      alert(`An error occurred during ${isLogin ? 'login' : 'signup'}. Please try again.`);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#fbf4ec]">
      <div className="w-full md:w-auto gap-0 md:gap-40 flex col md:flex-row items-center justify-center">
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Manage all your tasks in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-[#e25647]">
              <span>Taskit</span>
              <span>Project Manager</span>
            </p>
            <img
              src={logo}
              alt="Logo"
              className="rotate-in-up-left w-[100px] h-[100px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            <div>
              <p className="text-[#e25647] text-3xl font-bold text-center">
                {isLogin ? "Welcome back!" : "Create an Account"}
              </p>
              <p className="text-center text-base text-gray-700 ">
                {isLogin
                  ? "Keep all your credentials safe."
                  : "Sign up to start managing your tasks."}
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              {!isLogin && (
                <Textbox
                  placeholder="Your name"
                  type="text"
                  name="name"
                  label="Name"
                  className="w-full rounded-full"
                  register={register("name", { required: "Name is required!" })}
                  error={errors.name ? errors.name.message : ""}
                />
              )}
              {!isLogin && (
                <Textbox
                  placeholder="Your mobile number"
                  type="text"
                  name="mobile"
                  label="Mobile Number"
                  className="w-full rounded-full"
                  register={register("mobile", {
                    required: "Mobile number is required!",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid mobile number format",
                    },
                  })}
                  error={errors.mobile ? errors.mobile.message : ""}
                />
              )}
              {!isLogin && (
                <Textbox
                  placeholder="Your organization"
                  type="text"
                  name="organization"
                  label="Organization"
                  className="w-full rounded-full"
                  register={register("organization", { required: "Organization is required!" })}
                  error={errors.organization ? errors.organization.message : ""}
                />
              )}
              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", { required: "Email Address is required!" })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", { required: "Password is required!" })}
                error={errors.password ? errors.password.message : ""}
              />
              {isLogin && (
                <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                  Forgot Password?
                </span>
              )}
              <Button
                type="submit"
                label={isLogin ? "Login" : "Sign Up"}
                className="w-full h-10 bg-[#e25647] text-white rounded-full"
              />

              {/* Conditional Text */}
              {isLogin ? (
                <p className="text-center text-gray-700 text-sm">
                  Don't have an account? Sign up below.
                </p>
              ) : (
                <p className="text-center text-gray-700 text-sm">
                  Already have an account? Login below.
                </p>
              )}

              <Button
                type="button"
                label={isLogin ? "Sign Up" : "Back to Login"}
                onClick={toggleForm}
                className="w-full h-10 bg-blue-600 text-white rounded-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
