import { useState, useRef } from "react";
import { checkSignInData, checkSignUpData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const formSubmit = (event) => {
        event.preventDefault();

        if (isSignInForm) {
            const message = checkSignInData(emailRef.current.value, passwordRef.current.value);
            setErrorMsg(message);
        } else {
            const message = checkSignUpData(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
            setErrorMsg(message);
        }
    }

    return (
        <>

            <div className=" relative min-h-screen">
                <div className="absolute inset-0 " >
                    <img className="w-full h-full object-cover"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
                        alt="bg-Image"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>

                </div>

                <header className="relative p-2">
                    <img className="mx-10 sm:mx-30 w-50 h-auto"
                        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                        alt="netflix-logo"
                    />
                </header>


                <div className="flex justify-center items-center mt-8">
                    <form onSubmit={formSubmit}
                        className="relative max-w-md bg-black/65 text-white  px-12 py-10">

                        <h2 className="text-3xl font-bold" > {isSignInForm ? "Sign In" : "Sign Up"} </h2>

                        {!isSignInForm &&

                            <div className="my-10" >
                                <input className="p-3 border-1 border-gray-600 w-full bg-transparent font-medium"
                                    type="text" ref={nameRef}
                                    placeholder="Name" id="name"
                                />
                            </div>
                        }

                        <div className="my-10" >
                            <input className="p-3 border-1 border-gray-600 w-full bg-transparent font-medium"
                                type="text" ref={emailRef}
                                placeholder="Email ID" id="email"
                            />
                        </div>
                        <div className="my-10">
                            <input className="p-3 border-1 border-gray-600 w-full bg-transparent font-medium"
                                type="password" ref={passwordRef}
                                placeholder="Password" id="password" />
                            <p className="text-red-500"> {errorMsg} </p>
                        </div>

                        <div>
                            <button className="bg-red-600 hover:bg-red-700 w-full p-3 font-medium cursor-pointer"
                                type="submit" > {isSignInForm ? "Sign In" : "Sign Up"} </button>
                        </div>

                        <div>
                            <p className="pt-4">
                                <span className="text-white/80 font-medium" > {isSignInForm ? "New to Netflix ?" : "Already a User ?"}   </span>
                                <span className="font-bold cursor-pointer animate-pulse" onClick={() => toggleSignInForm()}> {isSignInForm ? "Sign Up" : "Sign In"} </span>.</p>
                        </div>
                        <div className="mt-6">
                            <p className="font-light text-white/50 text-sm " >This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <span> <a href="" className="text-blue-500" >Learn more.</a> </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;