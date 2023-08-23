"use client"

import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext";

export default function UseContextExample() {
    const {state, dispatch} = useContext(ThemeContext);

    console.log(state);
    
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <button className="w-[250px] py-2 rounded-lg bg-blue-500 text-white" onClick={() => dispatch({ type: "CHANGE_THEME" })}>Change Theme</button>
        <button className="w-[250px] py-2 rounded-lg bg-green-500 text-white" onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 20 })}>Change Font Size</button>
    </div>
  )
}
