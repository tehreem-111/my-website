
import React from "react";
import { Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat } from "next/font/google"
const Playfair= Playfair_Display({subsets:["latin"]});
const Cinze=Cinzel({subsets:["latin"]});
const Bodoni=Bodoni_Moda({subsets:["latin"]});
const Prat= Prata({subsets:["latin"],weight:"400"});
const Montserra= Montserrat({subsets:["latin"]});

const Text= () =>{

    return (
        <div className="bg-black w-full h-[122px] flex justify-center space-x-4 md:justify-between items-center px-12 flex-wrap text-white">
            <h1 className={`${Playfair.className}text-white text-2xl md:text-4xl`}>VERCASE</h1>
           <h1 className={`${Cinze.className}text-white text-2xl md:text-4xl`}>ZARA</h1>
           <h1 className={`${Bodoni.className}text-white text-2xl md:text-4xl`}>GUCCI</h1>
           <h1 className={`${Prat.className}text-white text-2xl md:text-4xl`}>PRADA</h1>
          <h1 className={`${Montserra.className}text-white text-2xl md:text-4xl`}>CALVIN KLEIN</h1>
        </div>
   )

}
export default Text;