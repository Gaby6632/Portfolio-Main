import Link from 'next/link';
import { FaReddit, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const title = 'mb-3 text-lg font-semibold text-accent';
const item = 'mb-1.5 text-muted transition hover:text-[#5277B8] hover:underline';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-6 pt-14">
      <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <h3 className={title}>Gabriel I. Joian</h3>
          <p className="text-muted">Placeholder.</p>
          <div className="mt-4 flex gap-4 text-2xl text-accent">
            <a href="https://www.reddit.com/user/gaby6632/" target='_black' aria-label="Reddit" className="hover:text-orange-500"><FaReddit /></a>
            <a href="https://www.linkedin.com/in/gabi-j-5b4199355/"  target="_blank" aria-label="LinkedIn" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="https://github.com/Gaby6632" aria-label="GitHub"  target="_blank" className="hover:text-black"><FaGithub /></a>
          </div>
        </div>
        <div>
          <h4 className={title}>Pages</h4>
          <ul>
            <li className={item}><Link href="/">Main page</Link></li>
            <li className={item}><Link href="/tutorials">Tutorials</Link></li>
            <li className={item}><Link href="/services">Services</Link></li>
            <li className={item}><Link href="/about">About me</Link></li>
            <li className={item}><Link href="/contact">Contact Me</Link></li>
            <li className={item}><Link href="/hire-me">Hire Me</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={title}>Links</h4>
          <ul>
            <li className={item}><a href="#">Link 1</a></li>
            <li className={item}><a href="#">Link 2</a></li>
            <li className={item}><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div>
          <h4 className={title}>Contact</h4>
          <ul>
            <li className={item}><a href="tel:+40752857960" className="inline-flex items-center gap-2"><FaPhone />+40752857960</a></li>
            <li className={item}><a href="mailto:gabriel.joian15@gmail.com" className="inline-flex items-center gap-2"><FaEnvelope />gabriel.joian15@gmail.com</a></li>
          </ul>
        </div>
      </div>
      {/* <p className="mt-10 text-center text-sm text-muted">© {new Date().getFullYear()} YourName. All rights reserved.</p> */}
      <p className="mt-10 text-center text-sm text-muted">© 2026 Your Name. All rights reserved.</p>
    </footer>
  );
}
