import { useState } from "react";

const Footer =()=> {
    const [name, setName] = useState({
        email: '',
        number: '',
        text: ''
    });
const {email, number, text} = name
    const handleSubmit = (event) => {
        setName({
            email: '',
            number: '',
            text: ''
        })
    }
    const handleInput = (e) => {
        setName({...name, [e.target.name]: e.target.value})
        console.log(name)
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
                        type="email"
                        name="email"
                        placeholder="E.g simple-soul@mymail.com"
                        value={email}
                        onChange={handleInput}
                        required
                        />
                        <label htmlFor="" className="text-textcolor">Phone Number</label>
                        <input className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full h-10 mb-4 bg-transparent border-textcolor border px-2"
                        type="text"
                        name='number'
                        placeholder="E.g 08122321123"
                        value={number}
                        onChange={handleInput}
                        />
                        <label htmlFor="" className="text-textcolor">Your Message</label>
                        <textarea className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full mb-4 bg-transparent border-textcolor border px-2"
                        rows='4'
                        placeholder="write us your message"
                        value={text}
                        name='text'
                        onChange={handleInput}
                        ></textarea>
                        <input type="submit" value='Subscribe' onClick={handleSubmit} className="cursor-pointer rounded border border-primary text-textcolor px-3 py-1 rounded-sm" />
                    </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer

