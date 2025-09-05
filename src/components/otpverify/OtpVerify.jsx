import React, { useState } from 'react';
import { } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { authServices } from '../../services/api';

function OtpVerify() {
    const params = useParams().email;
    const [otp, setOtp] = useState(Array(4).fill(""));
    const navigate = useNavigate();

    const handelVerify = async (e) => {
        e.preventDefault();
        try {
            const res = await authServices.verifyOtp(params, otp.join(""));
            toast.success(res.success);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.error);
        }
    }
    const handelInputs = (item, i) => {
        let newOtp = [...otp];
        newOtp[i] = item;
        setOtp(newOtp);
    };

    const handelBack = () => {
        navigate("/register");
    }

    return (
        <>
            <section className="flex justify-center items-center h-screen m-auto w-full bg-[#212121]" >

                <div className="container w-fit">
                    <form className="w-[290px] pt-[40px] pb-[80px] flex flex-col border-1 border-[#fff] rounded-[15px] bg-[#333333] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition ease-in-out 
                     " onSubmit={handelVerify} >
                        <p className=" text-2xl text-center text-white font-bold ">Email Verify</p>

                        <div className='m-auto'>
                            <IoCheckmarkCircleOutline className="relative self-center text-green-500 text-5xl mt-6" />
                        </div>

                        <div className="flex justify-center mt-8">
                            {
                                otp.map((item, i) => (
                                    <input
                                        key={i}
                                        onChange={(e) => handelInputs(e.target.value, i)}
                                        required
                                        type="text"
                                        maxLength="1"
                                        className="w-10 h-10 mx-2 text-[#fff] border-1 border-[#fff] rounded bg-transparent shadow-inner outline-none text-center transition duration-300 "
                                    />
                                ))
                            }


                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <button
                                type="submit"
                                className="relative top-14  w-[17em] h-[3em] text-white rounded border-none outline-none transition duration-300 shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] active:scale-95"
                            >
                                Submit
                            </button>
                            <button onClick={handelBack}
                                type="button"
                                className="relative top-16  w-[17em] h-[3em] text-white rounded border-none outline-none transition duration-300 shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] active:scale-95"
                            >
                                Back
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default OtpVerify;