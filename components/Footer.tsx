import Link from 'next/link';
import { FaReddit, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const title = 'mb-3 text-lg font-semibold text-accent';
const item = 'mb-1.5 text-muted transition hover:text-accent';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pb-6 pt-14">
      <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <h3 className={title}>YourName</h3>
          <p className="text-muted">Short tagline placeholder.</p>
          <div className="mt-4 flex gap-4 text-2xl text-accent">
            <a href="#" aria-label="Reddit" className="hover:text-accent2"><FaReddit /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent2"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-accent2"><FaGithub /></a>
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
            <li className={item}><a href="tel:+40000000000" className="inline-flex items-center gap-2"><FaPhone /> +40 000 000 000</a></li>
            <li className={item}><a href="mailto:you@example.com" className="inline-flex items-center gap-2"><FaEnvelope /> you@example.com</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-muted">© {new Date().getFullYear()} YourName. All rights reserved.</p>
    </footer>
  );
}
