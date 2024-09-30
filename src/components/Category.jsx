import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import axios from 'axios';

export default function Category() {

    const [Categories, setCatecories] = useState([]);

    const containerRef = useRef(null);
    const scrollAmount = 1000; // Amount to scroll per arrow key press
    const swiggyBackendUrl = process.env.SWIGGY_BACKEND_URL || 'https://swiggy-backend-red.vercel.app' ||  'http://localhost:8080';
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
    
  

    const fetchCategories = () => {
            
        var config = {
            method: 'get',
            url: `${swiggyBackendUrl}/category/all`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setCatecories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchImages = (imageName) => {
        var config = {
            method: 'get',
            url: `${swiggyBackendUrl}/${imageName}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchCategories();

        // uncomment below code to scron on key press
        // window.addEventListener('keydown', handleKeyDown);
        // return () => {
        // window.removeEventListener('keydown', handleKeyDown);
        // };
    }, []);

    function renderCategories(category) {
        console.log("category", category);
        const imageUrl = `${swiggyBackendUrl}/images/${category.image}`;
        return (
            <div className="w-[144px] h-[188px] flex-shrink-0">

                {/* <div>{category.image}</div> */}
                <img src={imageUrl} className="w-full h-full" ></img>
                {/* <div>{category.path}</div> */}


            </div>
        )
    }


    return (
        <div>
            <div className='max-w-[1200px] max-auto'>
                <div className='flex items-center justify-between'>
                    <div className='text-[25px] font-bold'>What's on your mind?</div>
                    {/* flex is the parent */}
                    <div className='flex'>
                        <div onClick={scrollLeft} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                        <div onClick={scrollRight} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                    </div>

                </div>
            </div>

            <div>
                <div 
                ref={containerRef}
                 className="overflow-x-scroll overflow-y-hidden flex flex-nowrap custom-scrollbar">
                    {
                        // console.log("Categories", Categories)
                        Categories.map((categery) => {

                            return renderCategories(categery);

                        })
                        // renderCategories()
                    }

                </div>
            </div>
        </div>
    )
}
