import React from 'react'
import search from "../../Components/Assets/search-icon.svg";


const Home = () => {
  return (
     <>
    <div className="mt-24 p-16">
     <section>
          <h1 className="w-[650px] font-bold tracking-wide leading-loose text-3xl lg:text-6xl  text-[#01013D] ">Safer and Convenient way to order <span className="text-[#FD671E]">gas</span></h1>

          <p className="w-[498px] pt-11 text-xl text-gray-600 leading-relaxed tracking-wide">Leeta makes it easy for customers to purchase gas from any where at anytime from the convenience of home or offices</p>
     </section>
     <div className="flex gap-4 grow   items-stretch w-full " >
                <input type="text" placeholder="Search products, brands and categories" className="border-gray-300 border-y border-l w-full px-2" /> 
                <div className="bg-[#FA7400] border flex items-center w-8 justify-center">
                    <img className="w-4" src={search} alt="search"/> 
                    </div>
                </div>
    </div>
    </>
  )
}

export default Home