import { useState, useRef } from 'react';
import emailJs from '@emailjs/browser';

const Footer = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailJs
      .sendForm(
        'service_k98a6fk',
        'template_v9rl8bh',
        form.current,
        'l1SMwkup0_5uqyGfU'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          setVal({
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          setFailed(true);
        }
      );
  };

  setTimeout(() => {
    setSuccess(false);
    setFailed(false);
  }, 5000);

  return (
    <>
      <section
        className="text-white footer pb-4 pl-12 pr-4 relative"
        id="contact"
      >
        <div className="container mx-auto px-2 md:px-0 md:flex justify-between items-center">
          <div className="left">
            <h1 className="text-center text-2xl text-textcolor">CONTACT ME</h1>
            <p className="pt-3 text-[grey] w-80 md:w-96">
              Got a project on your mind, and you need a developer? Reach out to
              me by completing the form below
            </p>
          </div>
          <div className="right mt-8">
            <form onSubmit={handleSubmit} ref={form} className="">
              <label htmlFor="" className="text-textcolor">
                Email
              </label>
              <input
                className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full h-10 mb-4 bg-transparent border-textcolor border px-2"
                type="email"
                name="user_email"
                placeholder="E.g simple-soul@mymail.com"
                required
              />
              <label htmlFor="" className="text-textcolor">
                Subject
              </label>
              <input
                className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full h-10 mb-4 bg-transparent border-textcolor border px-2"
                type="text"
                name="subject"
                placeholder=""
              />
              <label htmlFor="" className="text-textcolor">
                Your Message
              </label>
              <textarea
                className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full mb-4 bg-transparent border-textcolor border px-2"
                rows="4"
                placeholder="write us your message"
                name="message"
              ></textarea>
              {loading ? (
                <div className="flex justify-center items-center cursor-pointer rounded border border-primary">
                  <div className="animate-spin h-4 w-4 bg-textcolor border-dotted border-2 border-primary"></div>
                  <input
                    type="submit"
                    value="Send"
                    className="text-textcolor px-3 py-1 rounded-sm"
                  />
                </div>
              ) : (
                <input
                  type="submit"
                  value="Send"
                  className="cursor-pointer w-full rounded border border-primary text-textcolor px-3 py-1 rounded-sm"
                />
              )}
            </form>
          </div>
          <div
            className={`text-black absolute ${
              success
                ? '-top-36 border-primary-400 text-primary-400'
                : failed
                ? 'border-[red] text-white bg-[red]'
                : 'opacity-0 -top-48'
            } transition-all ease-in-out duration-500 left-[17%] border-b px-8 py-1 bg-textcolor rounded-lg `}
          >
            <h1>
              {success
                ? 'Message sent successfully!!!'
                : 'Message sending error'}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
