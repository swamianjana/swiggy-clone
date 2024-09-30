import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import axios  from 'axios';

export default function Restaurent() {



    const [Restaurent, setRestaurent] = useState([]);


    const containerRef = useRef(null);
    const scrollAmount = 1000; // Amount to scroll per arrow key press
  
    const handleKeyDown = (event) => {
        console.log("called handelKeyDown", event.key , containerRef.current);



    if (!containerRef.current) return;

    if (event.key === 'ArrowRight') {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else if (event.key === 'ArrowLeft') {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };

    const scrollLeft = () => {
        console.log("pressed left", containerRef.current);
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      };
    
      const scrollRight = () => {
        console.log("pressed Right", containerRef.current);
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };
    

      const swiggyBackendUrl = process.env.SWIGGY_BACKEND_URL ||  'https://swiggy-backend-red.vercel.app' || 'http://localhost:8080';


    const fetchRestaurent = () => {

        var config = {
            method: 'get',
            url: `${swiggyBackendUrl}/restaurent/all`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setRestaurent(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchRestaurent();
    }, []);

    function renderRestaurent(restaurent) {
        console.log("restaurent", restaurent);
        const imageUrl = `${swiggyBackendUrl}/images/${restaurent.image}`;
        // const imageUrl = {"http://localhost:8080/images/"+props.image};
        
        return (
           

<div className="w-[273px] h-[182px] rounded-[15px] overflow-hidden relative flex-shrink-0">
{/* shrink use krte h slider k leye and relative use kiya h size ko manage krne k leye  */}

                {/* <div>{restaurent.image}</div> */}
                <img src={imageUrl} className="w-full h-full"></img>

                <div>{restaurent.offer}</div>
                <div>{restaurent.title}</div>
                <div>{restaurent.rating}</div>
                <div>{restaurent.minTime}</div>
                <div>{restaurent.maxTime}</div>
                <div>{restaurent.name}</div>
                <div>{restaurent.place}</div>

                {/* ye code h taki image pr little black color aa jae */}
                <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] 
            font-bold text-white tracking-tighter'>
                 {/* {props.offer} */}
                 Items at ₹179 
            </div>
            <div className='mt-3 text-xl font-bold'>
            {/* {props.title} */}
            </div>
                </div>

           
        )
    }





return (
<div>
    <div className='max-w-[1200px] max-auto'>
    <div className='flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Restaurants with online food delivery in Delhi</div>
        <div className='flex'>
        <div onClick={scrollLeft} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                        <div onClick={scrollRight} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                    </div>
                    </div>
                </div>
                
                   <div>
                <div 
                ref={containerRef}
                 className="overflow-x-scroll overflow-y-hidden flex flex-nowrap custom-scrollbar flex gap-6 overflow-hidden">


                {

// Restaurent.map(
//     (restaurent, i) => {
//         return <restaurent {...Restaurent} key={i}/>
//     }

// ),

                    // console.log("Restaurent", Restaurent)
                    Restaurent.map((restaurent) => {
                        return renderRestaurent(restaurent);
                    })
                    // renderRestaurent()

                }
        
            </div>

    </div>

    </div>


)

}