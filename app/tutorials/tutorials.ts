// app/tutorials/tutorials.ts
// Card data only. The full content of each tutorial lives in its own folder:
//   app/tutorials/<slug>/page.tsx   (the folder name MUST match the slug)
// To add a tutorial: add a card here + create the folder with its page.tsx.

export type TutorialCard = {
  slug: string; // folder name inside app/tutorials/ and the URL: /tutorials/<slug>
  title: string;
  description: string;
};

export const tutorials: TutorialCard[] = [
  {
    slug: "domain",
    title: "Connect your domain name to your website",
    description:
      "Buy your domain on Namecheap, Porkbun or any other platform and let me connect it to your website. The steps are similar on every platform.",
  },
  {
    slug: "googleanalytics",
    title: "Set up Google Analytics for your website",
    description:
      "Create your free Google Analytics account, get your Measurement ID and give me access so I can connect it to your website and you can see your visitors.",
  },
];