import React from 'react'
import { Link } from 'react-router'

function Button({path,title}) {
  return (
    <>
    <Link to={path} className='py-[25px] px-[72px] bg-[#B88E2F] text-[16px] font-bold font-poppins text-[#fff]'>{title}</Link>
    </>
  )
}

export default Button