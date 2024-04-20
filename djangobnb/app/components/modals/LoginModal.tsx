'use client';

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }
    }
    const content = (
        <>
        <form 
            action={submitLogin}
            className="space-y-4"
        >
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

            <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        

            <div 
                className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            Error Message
           </div>
          
                {/* return ( */}
                    {/* <div 
                        
                        className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                    >
                        
                    </div> */}
                {/* ) */}
            

            <CustomButton
                label="Submit"
                onClick={submitLogin}
            />
        </form>
    </>
    )
  return (
    <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Login"
        content={content}
        
    />
  )
}

export default LoginModal;