export default function Info(props) {
  return (
    <div className="w-full md:w-[48%] bg-[#FFC244] rounded-[30px] p-8 flex flex-col items-center text-center shadow-sm border border-amber-950">
      
      <div className="mb-6">
        <img 
          src={props.icona} 
          alt={props.titolo} 
          className="w-14 h-14 object-contain opacity-70"
        />
      </div>

      <h3 className="text-white text-lg font-bold mb-3">
        {props.titolo}
      </h3>

      <p className="text-sm leading-relaxed max-w-xs text-white font-bold">
        {props.descrizione}
      </p>
    </div>
  );
}