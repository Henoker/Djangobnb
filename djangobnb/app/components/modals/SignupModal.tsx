'use client';

import Modal from "./Modal";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

 
    const content = (
        <>
            <form className="space-y-4"
            >
        <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

        <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        

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
                onClick={()=> console.log("clicked")}
            />
            
        </form>
    </>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;