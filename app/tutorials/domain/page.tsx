// videoId="https://www.youtube.com/watch?v=yWTfrZc_j0s"

// app/tutorials/domain/page.tsx
import type { Metadata } from "next";
import { TutorialLayout, Step, P, List, Note, Warning, Code, Example } from "../_components/tutorial-ui";

export const metadata: Metadata = {
  title: "Connect your domain name to your website",
  description: "Buy a domain on Namecheap, Porkbun or any platform and connect it to your website.",
};

export default function DomainTutorialPage() {
  return (
    <TutorialLayout
      title="Connect your domain name to your website"
      intro="This guide shows you how to buy a domain name and connect it to your new website. We use Namecheap and Porkbun as examples because they are simple and cheap, but you can use any platform (GoDaddy, IONOS, etc.). If you have my hosting package, you only buy the domain and I take care of the rest. If you host the website yourself, this guide also shows you how to connect your domain on your own. The steps are very similar everywhere: buy the domain, open its DNS settings, and either add the records I send you or give me access so I can do it for you."
      videoId="https://www.youtube.com/watch?v=yWTfrZc_j0s"
    >
      <Step title="Step 1 — Choose a domain platform">
        <P>
          A domain platform (a “registrar”) is the company where you buy and manage your domain name, like
          yourbusiness.co.uk. I recommend one of these two:
        </P>
        <List
          items={[
            "Namecheap (namecheap.com): very popular, clear dashboard, free privacy protection.",
            "Porkbun (porkbun.com): usually the cheapest, simple interface, free privacy protection.",
            "Already have a domain somewhere else (GoDaddy, IONOS, etc.)? Keep it there. You do not need to move it.",
          ]}
        />
        <Note>
          The menu names change slightly between platforms, but every one of them has a “DNS” or “DNS records”
          area. That is the only place we need.
        </Note>
        <Warning>
          Buy only the domain. If you have my hosting package, hosting is already included, so do not buy hosting, website
          builders or email packages from the domain platform, even if they offer them at checkout.
        </Warning>
      </Step>

      <Step title="Step 2 — Create your account">
        <P>
          Create an account with an email you use every day, because the platform will send you important emails
          about the domain. Pick a strong password and turn on two-factor authentication (2FA) to protect the
          domain.
        </P>
        <Example
          platform="Namecheap"
          steps={[
            "Go to namecheap.com and click “Sign Up”.",
            "Enter your username, email and password, then confirm your email.",
            "Later, open Profile > Security to turn on two-factor authentication.",
          ]}
        />
        <Example
          platform="Porkbun"
          steps={[
            "Go to porkbun.com and click “Sign Up”.",
            "Enter your email, username and password, then confirm your email.",
            "Open Account > Security to turn on two-factor authentication.",
          ]}
        />
      </Step>

      <Step title="Step 3 — Search and buy your domain">
        <P>
          Type the name you want in the search bar. If it is taken, try another ending (.co.uk, .com, .uk) or a
          small variation. Short, easy to spell and easy to remember is best.
        </P>
        <Example
          platform="Namecheap"
          steps={[
            "Type your name in the search box on the homepage and press Search.",
            "Click “Add to cart” next to the domain you want.",
            "Open the cart and keep the registration at 1 year (or more if you prefer).",
            "Make sure domain privacy is on (it is free) and skip extra paid products you do not need.",
            "Click “Confirm Order” and pay.",
          ]}
        />
        <Example
          platform="Porkbun"
          steps={[
            "Type your name in the search box and press Search.",
            "Click the “Add” button next to the domain you want.",
            "Open the cart, keep 1 year or more, and leave “WHOIS Privacy” on (it is free).",
            "Skip any extra paid products you do not need.",
            "Click “Checkout” and pay.",
          ]}
        />
        <Note>
          Prices shown for the first year are often promotional. Check the renewal price too, so there are no
          surprises next year.
        </Note>
      </Step>

      <Step title="Step 4 — Verify your email address">
        <P>
          After buying, the platform sends you a verification email (this is a rule for all domains). Open it and
          click the link.
        </P>
        <Warning>
          If you do not verify your email, the domain can be suspended after a few days and your website will
          stop working. Check your spam folder if you cannot find the email.
        </Warning>
      </Step>

      <Step title="Step 5 — Find your DNS settings">
        <P>
          DNS settings tell the internet which website belongs to your domain. This is the page where the
          connection is made.
        </P>
        <Example
          platform="Namecheap"
          steps={[
            "Log in and open “Domain List” from the left menu.",
            "Click “Manage” next to your domain.",
            "Open the “Advanced DNS” tab. This is where the records live.",
            "On the Domain tab, keep “Namecheap BasicDNS” selected under Nameservers.",
          ]}
        />
        <Example
          platform="Porkbun"
          steps={[
            "Log in and open the “Domain Management” page.",
            "Find your domain and click the “DNS” button (or “Details” and then “DNS Records”).",
            "You will see a list of DNS records and a form to add new ones.",
          ]}
        />
      </Step>

      <Step title="Step 6 — Do you have my hosting package?">
        <P>How you connect your domain depends on this. Tell me which one is your case:</P>
        <List
          items={[
            "Case A, you have my hosting package: I host and maintain your website. You send me your domain details (or give me access) and I connect the domain for you. Go to Step 7.",
            "Case B, you do not have my hosting package: I send you the project folder and you host the website yourself. You connect your domain on your own. Go to Step 8.",
          ]}
        />
      </Step>

      <Step title="Step 7 — Case A: send me your domain details">
        <P>
          I upload your website to my hosting platform and add your domain to it. For that I need your domain
          details. You can give them to me in one of two ways. Pick the one you prefer and tell me which one you
          chose.
        </P>
        <P>
          Option 1 (easiest for you): you give me access to your domain platform and I do everything: I add your
          domain to the hosting and set up the DNS records myself. If your platform lets you invite another user
          or share access to the domain, use that. If not, we agree on a time, I log in while you are available
          for the confirmation code, and you change your password right after we finish.
        </P>
        <P>
          Option 2 (most secure): you keep full control. I add your domain to the hosting first, then I send you
          the exact DNS records and you copy them into your DNS settings (Step 9 shows how). You never share any
          password.
        </P>
        <P>Send me these details so I can start:</P>
        <List
          items={[
            "Your domain name (for example: yourbusiness.co.uk).",
            "The platform where you bought it (Namecheap, Porkbun or other).",
            "The option you chose: 1 (I connect it for you) or 2 (you add the records).",
            "For option 1 only: the access to your domain platform, sent through our private channel, and a time when you are available for the confirmation code.",
            "Confirmation that you verified the email from Step 4.",
            "Nothing else: you do not need to send me hosting details or website files, I take care of that.",
          ]}
        />
        <Warning>
          Never send your password in a public place or in a message with other personal data. Send it only
          through the private channel we agreed on, and change it as soon as I tell you the domain is connected.
        </Warning>
      </Step>

      <Step title="Step 8 — Case B: connect your domain yourself">
        <P>
          You host the project I sent you on your own hosting platform (for example Vercel or Netlify). Once the
          website is online there, connect your domain like this:
        </P>
        <List
          items={[
            "Open the domain settings of your hosting platform and add your domain name.",
            "The platform shows you the DNS records you need (usually an A record for the main domain and a CNAME record for www).",
            "Copy those records into your domain platform, exactly as shown in Step 9.",
          ]}
        />
        <Example
          platform="Vercel"
          steps={[
            "Open your project and go to Settings > Domains.",
            "Type your domain (for example yourbusiness.co.uk) and click “Add”.",
            "Vercel shows the DNS records to create. Copy them and follow Step 9.",
            "Come back to this page: the domain turns to “Valid Configuration” when everything is correct.",
          ]}
        />
        <Note>
          Other hosting platforms work the same way: add the domain, copy the records, paste them in your domain
          platform. If you get stuck, send me a screenshot and I will help you.
        </Note>
      </Step>

      <Step title="Step 9 — The DNS records">
        <P>
          To show your website on your domain, two DNS records are needed: an A record for the main domain and a
          CNAME record for the www version. In Case A with option 1, I add them for you and you can go straight
          to Step 10. In Case A with option 2, use the values I send you. In Case B, use the values your hosting
          platform shows. The values below are only an example.
        </P>
        <Code>{`Type    Host / Name    Value / Answer
A       @ (or empty)   76.76.21.21
CNAME   www            cname.vercel-dns.com`}</Code>
        <P>
          First delete the default “parking” records the platform created, otherwise they will conflict with the
          new ones. Then add the new records.
        </P>
        <Example
          platform="Namecheap"
          steps={[
            "In the “Advanced DNS” tab, delete the default parking records (for example the CNAME for www pointing to parkingpage.namecheap.com and the URL Redirect record).",
            "Click “Add New Record”, choose “A Record”, set Host to @ and paste the IP address you were given. Keep TTL on Automatic.",
            "Click “Add New Record” again, choose “CNAME Record”, set Host to www and paste the value you were given.",
            "Click the green check mark to save each record.",
          ]}
        />
        <Example
          platform="Porkbun"
          steps={[
            "In the DNS records list, delete the default records (the ALIAS/CNAME entries pointing to pixie.porkbun.com).",
            "In the form, choose Type “A”, leave Host empty (this means the main domain) and paste the IP address you were given in “Answer”. Click Add.",
            "Choose Type “CNAME”, type www in Host and paste the value you were given in “Answer”. Click Add.",
          ]}
        />
      </Step>

      <Step title="Step 10 — Wait and check your website">
        <P>
          DNS changes usually work in 5 to 30 minutes, but can take up to 24 to 48 hours in rare cases. Open your
          domain in the browser to check it. The secure padlock (HTTPS) is set up automatically.
        </P>
        <Note>
          If you still see the old parking page, clear your browser cache or try your phone on mobile data. Then
          contact me and I will check the records.
        </Note>
      </Step>

      <Step title="Step 11 — Keep your domain safe">
        <List
          items={[
            "If you gave me access to your account, change your password as soon as I confirm the domain is connected, and remove my access if you invited me as a user.",
            "Turn on auto-renew so you never lose your domain by accident.",
            "Do not delete or edit the DNS records after they are set up. Your website would go offline.",
            "Keep your email address up to date on the platform.",
            "Keep two-factor authentication on.",
          ]}
        />
      </Step>
    </TutorialLayout>
  );
}