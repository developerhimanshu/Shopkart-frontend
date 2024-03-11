import { Link } from "react-router-dom"


const SignIn = () => {

  let inputClass = "border-[2px] outline-none w-[80%] py-2 rounded-full  px-[12px] bg-gray-200"
  let inputHeadingClass = "w-full flex flex-col items-center"
  return (
    <div className="px-[6px] flex justify-center w-full h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-[20px] w-[50vw] ">
        <p className="text-[30px]">Sign In</p>
        <div className={inputHeadingClass}>
          <p className="w-[80%] font-semibold">Username or email</p>      
        <input className={inputClass} placeholder="Enter your username"/>
        </div>
        <div className={inputHeadingClass}>
          <p className="w-[80%] font-semibold">Password</p> 
        <input type="password" className={inputClass} placeholder="Enter your password"/>
        </div>
        <button className="bg-black text-white rounded-md py-2 px-8 text-[14px]">Sign In</button>
        <p>Already have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
  )
}

export default SignIn