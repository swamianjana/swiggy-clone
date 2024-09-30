// import React from 'react'
import { RxCaretDown } from "react-icons/rx";
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";


export default function Header() {
  const [toggle, setToggle] = useState(false);      
// toggle false hoga to kuch nhi dekhega, or true hoga to side mese kuch dekhega

// we call the arrow function of showSideMenu
  const showSideMenu = () => {
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }

  const links = [

    {
      icon: <IoIosSearch />,
      name: "Search"
    },

    {
      icon: <CiDiscount1 />,
      name:"Offers",
      sup:"New"
    },

    {
      icon: "",
      name: "Help"
    },

    {
      icon: "",
      name: "Sign In"
    },

    {
      icon: "",
      name: "Cart"
    },
  ]

  return (
    // <> meaans react fragment it mean everythings must be wrapt in single parent
       <>   
       <div className='black-overlay w-full h-full fixed duration-500'onClick={hideSideMenu} style={{
         opacity: toggle ? 1: 0,  
          // above line means toggle true h to opaccity 1 otherwise opacity 0  
          visibility: toggle ? "visible" : "hidden"
       }}>
         <div onClick={(e) => {                                     
           e.stopPropagation();
         }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
         style={{
           left: toggle ? '0%' : '-100%'
         }}>

         </div>
         </div>           
    <header className='p-[15px] shadow-xl text-[#686b78]'>                             {/* p means padding */}
    <div className='max-w-[1200px] max-auto flex items-center max-h-[42px]'>

        <div className='w-[100px] h-[72px] p-4'>
            <img src="images/logo.png" className='w-full' alt=""/>
        </div>

        <div className=''>
           <span className='font-bold border-b-[3px] border-[black]'> Chirawa </span> 
           Rajasthan, India <RxCaretDown fontSize={25} className='inline  text-[#fc8019]
           cursor-pointer' onClick={showSideMenu} />

        </div>

        <nav className='flex list-none gap-10 ml-auto text-[18px] font-semibold'>

            {
              links.map(
                (link, index) => {

                 return <li key={index} className=' cursor-pointer flex hover:text-[#fc8019] item-centergap-2' >
                   {/* key={index} taki hm hr element ko uniquely identify kr pae */}
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                </li>

                }
              )
            }

              
        </nav>

    </div>

     </header>  
     </>
  )
}



