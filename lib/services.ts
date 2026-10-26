import type { StaticImageData } from 'next/image';

import hmImg from '@/app/assets/hmImg.png'
import starterImg from '@/app/assets/startedImg.png'
import growthImg from '@/app/assets/growthImg.png'
import businessImg from '@/app/assets/businessImg.png'

export type Service = { title: string; highlight: string; bold: string; description: string; description2: string; image: StaticImageData; orderUrl: string };

export const services: Service[] = [

  { title: 'Hosting & Maintenance', highlight: 'Keep your website online, secure, maintained and up to date without having to manage the technical side yourself.', bold: 'Cancel anytime. No long-term contract.',
    description: 'Hosting & Maintenance is a fully managed service for businesses that want their website taken care of after development.',
    description2: 'We handle the technical infrastructure, monitoring, backups, maintenance and small content changes so you can focus on running your business instead of worrying about servers, databases and website updates.',
    image: hmImg,
    orderUrl: 'https://www.freelancer.com/service/web_services/hosting-and-maintenance?sb=t'
  },

  { title: 'Starter Website',
    highlight: 'A professional one-page website designed to get your business online quickly.',
    bold: '',
    description: 'Starter Website is ideal for small businesses, restaurants, cafés, barbers, hair stylists, tradespeople, local services, freelancers, and anyone who needs a professional online presence without the cost and complexity of a large website.',
    description2: 'Your website will be designed around your business, work smoothly on phones and computers, and give potential customers an easy way to contact or book with you.',
    image: starterImg,
    orderUrl: 'https://www.freelancer.com/service/web_development/starter-website?sb=t'
  },

  { title: 'Growth Website',
    highlight: 'A complete multi-page website built to give your growing business a stronger online presence.',
    bold: '',
    description: 'Growth Website is designed for businesses that need more than a simple landing page. With up to three pages, advanced SEO, analytics, a sitemap and a modern development framework, this package gives your business a more established and professional presence online.',
    description2: 'It’s a strong choice for businesses that want customers to discover their services, understand what they offer and easily get in touch or make a booking.',
    image: growthImg,
    orderUrl: 'https://www.freelancer.com/service/website_design/growth-website?sb=t'
  },

  { title: 'Business Website',
    highlight: 'A complete multi-page business website built around your brand, tailored to your customers, and designed to help you achieve your goals.',
    bold: '',
    description: 'Business Website is our most comprehensive standard website package. It’s designed for businesses that need multiple pages, advanced optimisation and custom functionality rather than a basic online presence.',
    description2: 'With up to ten pages, full SEO optimisation, Google Maps integration, analytics, advanced performance work and custom functionality, the Business Website gives you the flexibility to build a serious online platform around your business.',
    image: businessImg,
    orderUrl: 'https://www.freelancer.com/service/web_development/business-website?sb=t'
  }


  // { title: 'Service title',
  //   highlight: '',
  //   bold: '',
  //   description: '',
  //   description2: '',
  //   image: hmImg,
  //   orderUrl: '#'
  // },

];
