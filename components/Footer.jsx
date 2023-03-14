import { useState, useRef } from 'react';
import emailJs from '@emailjs/browser';
import Modal from '../components/Modal';

const Footer = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
          setShowModal(true)
          setEmail('');
          setMessage('');
          setSubject('');
        },
        (error) => {
          console.log(error.text);
          setShowModal(true);
          setLoading(false);
        }
      );
  };

  setTimeout(() => {
    setShowModal(false);
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="" className="text-textcolor">
                Your Message
              </label>
              <textarea
                className="placeholder:text-[12px] rounded mx-auto block mt-2 w-full mb-4 bg-transparent border-textcolor border px-2"
                rows="4"
                placeholder="write us your message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
        </div>
      </section>
      {showModal && success ? (
        <Modal
          success={success}
          email={email}
          showModal={showModal}
        />
      ) : (
        <Modal
          success={success}
          email={email}
          showModal={showModal}
        />
      )}
    </>
  );
};

export default Footer;
