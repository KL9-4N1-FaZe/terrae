export default function Navbar(props) {
  return (
  <>
    <nav className="sticky top-0 z-50 bg-[#FFC244] text-black p-4 border-b border-gray-100 w-full shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2 lg:space-x-4 shrink-0">
          <img src="images/logo.png" alt="" className="w-30 md:w-34 lg:w-38" />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
          <div className="hidden md:block">
            <img src="https://flagcdn.com/w40/it.png" alt="Italia" className="w-5 h-auto border border-gray-100" />
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="text-lg hover:opacity-70">👤</button>
            <h1 className="text-white font-bold">LOGIN</h1>
          </div>
      </div>
      </div>
    </nav>
    </>
  )
}
