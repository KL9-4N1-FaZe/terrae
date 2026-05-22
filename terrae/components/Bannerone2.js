import Link from 'next/link';

export default function Bannerone2(props) {
  return (
    <div 
      className="relative w-full bg-white bg-cover bg-center bg-no-repeat overflow-hidden py-20 md:py-32"
      style={{ backgroundImage: "url('images/effetto2.png')" }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
        
        <div className="container px-6 md:px-12 w-full md:w-1/2">
          <div className="max-w-3xl flex flex-col items-start text-left text-green-400"> 
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-4 md:mb-6">
              {props.titolo1}
            </h1>
            
            <p className="hidden md:block text-base lg:text-xl font-medium mb-8 max-w-xl">
              {props.descrizione}
            </p>

            <div className="flex justify-start w-full">
              <Link 
                href="/Modelli" 
                className="bg-white hover:bg-green-400 hover:text-white text-black px-6 py-3 md:px-12 md:py-4 rounded-full font-black uppercase text-xs md:text-base transition-all duration-300 italic shadow-lg"
              >
                {props.bottone} ➝
              </Link>
            </div>
          </div>
        </div>

        <div className="container px-6 md:px-12 w-full md:w-1/2 mt-8 md:mt-0">
          <img 
            src="images/banner2.png" 
            alt="" 
            className="w-full h-auto block object-cover max-w-[1000px] min-h-[300px] md:min-h-0 mx-auto" 
          />
        </div>

      </div>
    </div>
  );
}