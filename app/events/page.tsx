"use client"
export default function Events() {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('ta funcionando');
        
    }
 
    return (
        <div className="flex flex-col gap-10 ml-12">
            <form className="mt-10 w-[450px] flex gap-5">
                <input className="border rounded-lg px-4 py-2" type="text" placeholder="Search" onChange={handleChange}/>
                <button className="bg-green-400 w-[100px] py-2 rounded-lg text-white" onClick={handleClick}>Search!</button>
            </form>
            <form className="my-4 w-[450px] flex flex-col gap-4">
                <h2 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatibus?</p>
                <button className="w-[100px] bg-red-500 text-white py-2 rounded-md">Delete</button>
            </form>
            <form className="my-4 w-[450px] flex flex-col gap-4">
                <h2 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatibus?</p>
                <button className="w-[100px] bg-red-500 text-white py-2 rounded-md">Delete</button>
            </form>
        </div>
  )
}
