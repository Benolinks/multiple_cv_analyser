import { PiToolboxFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Header = () => {

  const [displayAuth, setDisplayAuth] = useState(false)
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-lg shadow-slate-200/60 backdrop-blur">
        <NavLink to="/" className="flex items-center gap-2 text-slate-900">
          <span className="grid size-11 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
            <PiToolboxFill className="size-7" />
          </span>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            CV <span className="text-blue-700">Analyzer</span>
          </h1>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/Records" className={navClass}>Records</NavLink>
        </nav>

        <div
        onClick={()=>{
          setDisplayAuth(prev => !prev)
          
        }}

        onMouseEnter={()=>{
          if (displayAuth) {
            setDisplayAuth(prev => !prev)
          }
        }}
         className="flex items-center
         gap-2 md:border-blue-700 xl:border-blue-700 md:border xl:border xl:px-2 md:px-2
          shadow-sm shadow-blue-500 bg-blue-50 rounded-2xl  text-blue-700 cursor-pointer " >
          <div className="flex items-center gap-2">
            <CgProfile  
            className="text-3xl xl:text-2xl md:text-xl "
            />
            <h5 className="hidden xl:block md:block">Benjamin Eze </h5>
          </div>
        </div>

        {/* login and logout section   */}
          
          {
            displayAuth && (
             
                <div className="flex flex-col border-2 px-6 gap-4 bg-white  shadow-white shadow-sm p-2 rounded-xl border-blue-700 absolute right-3 top-15 ">
          <button className="border-b-2 rounded-xl p-1 shadow-2xl bg-white cursor-pointer
         hover:border-b-7 hover:border-blue-700">Login</button>
         <button className="border-b-2 rounded-xl p-1 shadow-2xl bg-white cursor-pointer
           hover:border-b-7 hover:border-red-700">Logout</button>
        <button className="border-b-2 rounded-xl p-1 shadow-2xl bg-white cursor-pointer
        hover:border-b-7 hover:border-blue-700 ">Signin</button>
          </div>

            )
          }

        

      </div>
    </header>
  )
}

export default Header
