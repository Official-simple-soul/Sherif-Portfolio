import { useState } from "react";

const Footer =()=> {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        name.indexOf('@') < 1?alert('Please input a valid email'):
        alert(`Hi ${name.slice(0, name.indexOf('@'))}, thank you for subscribing to my blog`);
        setName('')
    }

    return (
        <>
            <section className="text-white footer pb-4 pl-12 pr-4" id="contact">
                <div className="container mx-auto px-2 md:px-0 md:flex justify-between items-center">
                    <div className="left">
                        <h1 className="text-center text-2xl text-textcolor">CONTACT ME</h1>
                        <p className="pt-3 text-[grey] w-80 md:w-96">
                            Got a project on your mind, and you need a developer? Reach out to me by completing the form below
                        </p>
                    </div>
                    <div className="right mt-8">
                    <form onSubmit={handleSubmit} className=''>
                        <label htmlFor="" className="text-textcolor">Email</label>
                        <input className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full h-10 mb-4 bg-transparent border-textcolor border px-2"
                        type="text" 
                        placeholder="E.g simple-soul@mymail.com"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="" className="text-textcolor">Phone Number</label>
                        <input className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full h-10 mb-4 bg-transparent border-textcolor border px-2"
                        type="text" 
                        placeholder="E.g 08122321123"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="" className="text-textcolor">Your Message</label>
                        <textarea className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full mb-4 bg-transparent border-textcolor border px-2"
                        rows='4'
                        placeholder="write us your message"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ></textarea>
                        <input type="submit" value='Subscribe' className="rounded border border-primary text-textcolor px-3 py-1 rounded-sm" />
                    </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer

