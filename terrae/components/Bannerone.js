import Link from 'next/link';

export default function Bannerone(props) {
  return (
    <div className="relative w-full bg-white overflow-hidden ">
      <div className="w-full h-auto">
        <img 
          src="images/banner.png" 
          alt="" 
          className="w-500 h-auto block object-cover min-h-[400px] md:min-h-0" 
        />
      </div>
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container px-6 md:px-12 w-1/2 ">
          <div className="max-w-3xl flex flex-col items-start text-left text-[#FFC244]">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-4 md:mb-6">
              {props.titolo}
            </h1>
            
            <p className="hidden md:block text-base lg:text-xl font-medium mb-8 max-w-xl">
              {props.descrizione}
            </p>

            <div className="flex justify-start w-full">
            </div>
          </div>
      
      </div>
        </div>
          <img 
          src="images/effetto.png" 
          alt="" 
          className="w-500 h-auto block object-cover min-h-[400px] md:min-h-0" 
        />
    </div>
  );
}