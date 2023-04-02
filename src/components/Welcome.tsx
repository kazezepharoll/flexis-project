import { useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { useState } from "react";
import LoggedInPage from "./LoggedInPrage";
import { useNavigate } from "react-router-dom";



export default function Welcome(){

    const Schema = yup.object().shape({
        email: yup.string().email().required("Email field is required!")
    });
    
    const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(Schema)
  });

  const [Email, setEmail] = useState(false)
const navigate = useNavigate();

const handleSub=(data)=>{
    (data)?setEmail(true):setEmail(false)
    console.log(Email)
}

    return (
    <>
    {Email?navigate("/LoggedInPage"):(
        <div className="welcome">
         <div className="container-fluid  text-light">
            <h1 className="header">Watch Unlimited movies, TV shows and Series for free</h1>
            <p className="fs-4">All you have to do is to enter your email below. Enjoy!!</p>
            <div className="container-fluid" >
                <form onSubmit={handleSubmit(handleSub)}>
                <input type="email" {...register("email")} className="input nav-item text-dark fs-3 me-2 " placeholder="Enter email address"/>
                
                <button className="nav-item button fs-3" type="submit">Get Started</button>

                </form>
                <p className="text-danger">{errors.email?.message}</p>
                <p className="text-danger fs-1">{Email}</p>
            </div>
            </div>  

    
        </div>
        )}
    
    </>
        
    )
}