'use client';
import { FiMessageSquare, FiPhone, FiSend } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

import { btnFill, field, h1, paragraph, p, subTitle } from '@/lib/ui';

export default function Contact() {
  return (
    <section className="container-x min-h-[70vh] py-16 justify-center">
      <div className="text-center">
        <h1 className={h1}>Get in Touch</h1>
         <p className={paragraph}>Have questions about my services or need assistance with an existing project? Feel free to get in touch. Send me a message, and I’ll get back to you as soon as possible.</p>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-stretch justify-center gap-6 px-0 md:flex-row md:gap-1">
        <div className="mt-8 shrink-0 flex flex-col md:flex-row justify-center items-stretch gap-10">

          <div className="w-full md:flex-[1.2] min-w-0  bg-surface rounded-2xl border border-line outline-none p-6">
              <div className="flex gap-2 mb-3">
                <FiMessageSquare className="text-2xl text-accent size-8" />
                <h2 className={subTitle}>Send Me a Message</h2>
              </div>
              <p className={p}>Fill out the form below, and I’ll get back to you within 24 hours.</p>
            <form className="flex flex-col items-start gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className='w-full'>
                <label className='text-black ' htmlFor="#">Name</label>
                <input className={field} placeholder="Your name" required />
              </div>
              <div className='w-full'>
                <label className='text-black ' htmlFor="#">Mail</label>
                <input className={field} type="email" placeholder="Your email" required />
              </div>
              <div className='w-full'>
                <label className='text-black ' htmlFor="#">Message</label>
                <textarea className={field} rows={5} placeholder="Your message" required />
              </div>
              <button className="w-full h-12 bg-accent text-white rounded-xl font-bold" type="submit">Send</button>

            </form>
          </div>
          
          <div className="w-full md:flex-[0.8] min-w-0">
            <h2 className="shrink-0 text-2xl font-bold">Other Ways to Reach Me</h2>
            <div>
              <div className='mt-8 flex gap-5'>
                <MdOutlineMailOutline className="shrink-0 bg-blue-200 text-accent rounded-xl p-2 text-5xl size-12" />
                <div className=''>
                  <h2 className='font-bold text-black text-xl'>Email Me</h2>
                  <p>Have a question about my services or a potential project?</p>
                    <h4 className='bg-gray-200 outline-accent outline-1 p-1 rounded mt-2 align-middle'>
                      <a className='flex justify-center text-accent' href="mailto:gabriel.joian15@gmail.com">gabriel.joian15@gmail.com</a>
                    </h4>
                </div>
              </div>

              <div className='mt-8 flex gap-5'>
                <FiPhone className="shrink-0 bg-blue-200 text-accent rounded-xl p-2 text-5xl size-12" />
                <div className=''>
                  <h2 className='font-bold text-black text-xl'>Let&apos;s Talk</h2>
                  <p>Have an idea for a website or need a developer for your next project?</p>
                    <h4 className='bg-gray-200 outline-accent outline-1 p-1 rounded mt-2 align-middle'>
                      <a className='flex justify-center text-accent' href="tel:+40752857960">+40752857960</a>
                    </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}