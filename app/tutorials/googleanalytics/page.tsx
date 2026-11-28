// app/tutorials/googleanalytics/page.tsx
import type { Metadata } from "next";
import { TutorialLayout, Step, P, List, Note, Warning, Code, Example } from "../_components/tutorial-ui";

export const metadata: Metadata = {
  title: "Set up Google Analytics for your website",
  description: "Create a Google Analytics account and connect it to your website.",
};

export default function GoogleAnalyticsTutorialPage() {
  return (
    <TutorialLayout
      title="Set up Google Analytics for your website"
      intro="Google Analytics is a free tool from Google that shows you how many people visit your website, where they come from and which pages they look at. This guide shows you how to create your account, and what to send me so I can connect it to your website. It takes about 10 minutes."
      videoId="https://www.youtube.com/watch?v=UuE37-MM1ws&t=2s" // TODO: paste your YouTube video ID here, e.g. "dQw4w9WgXcQ"
    >
      <Step title="Step 1 — What you need before starting">
        <List
          items={[
            "A Google account (a Gmail address works). If you do not have one, create it at accounts.google.com.",
            "Your website address (for example: https://yourbusiness.co.uk).",
            "5 to 10 minutes.",
          ]}
        />
        <Note>
          Create the account yourself with your own Google account. This way you are always the owner of your
          data, and I only get the access you give me.
        </Note>
      </Step>

      <Step title="Step 2 — Create your Analytics account">
        <Example
          platform="Google Analytics"
          steps={[
            "Go to analytics.google.com and sign in with your Google account.",
            "Click “Start measuring”.",
            "Account name: type your business name. Leave the data sharing options as they are, then click “Next”.",
          ]}
        />
      </Step>

      <Step title="Step 3 — Create your property">
        <P>
          A “property” is your website inside Analytics. Fill in the form with these details and click “Next”
          after each page:
        </P>
        <List
          items={[
            "Property name: your business name or website name.",
            "Reporting time zone: your country (for example United Kingdom).",
            "Currency: your currency (for example British Pound).",
            "Business details: choose your industry and the size of your business.",
            "Business objectives: choose “Get baseline reports” if you are not sure.",
          ]}
        />
        <P>Then click “Create” and accept the terms of service.</P>
      </Step>

      <Step title="Step 4 — Create your web data stream">
        <P>The data stream is what links Analytics to your website.</P>
        <Example
          platform="Google Analytics"
          steps={[
            "When asked to choose a platform, click “Web”.",
            "Website URL: type your website address without https:// (for example yourbusiness.co.uk).",
            "Stream name: type something like “My website”.",
            "Keep “Enhanced measurement” turned on, then click “Create stream”.",
          ]}
        />
        <Note>
          If you have not bought your domain yet, do the domain tutorial first. You can also use the temporary
          address of your website and I will update it later.
        </Note>
      </Step>

      <Step title="Step 5 — Find your Measurement ID">
        <P>
          After creating the stream, a window opens with your stream details. In the top right you will see your
          Measurement ID. It starts with G- followed by letters and numbers:
        </P>
        <Code>G-XXXXXXXXXX</Code>
        <P>
          Copy it. If you closed the window, click the gear icon “Admin” (bottom left), then “Data streams”,
          then click your website stream. The ID is shown there.
        </P>
        <Note>The Measurement ID is not secret. It is safe to send me by message or email.</Note>
      </Step>

      <Step title="Step 6 — Give me access to your account">
        <P>
          Besides the Measurement ID, I recommend adding me as a user. This way I can check that the data is
          arriving and set up extra things for you, like tracking button clicks or contact forms.
        </P>
        <Example
          platform="Google Analytics"
          steps={[
            "Click the gear icon “Admin” (bottom left).",
            "In the Account column, click “Account access management”.",
            "Click the blue “+” button (top right), then “Add users”.",
            "In the email address box, type my email: your-email@example.com",
            "Choose the role “Editor” (or “Viewer” if you only want me to see the reports).",
            "Click “Add”.",
          ]}
        />
        <Warning>
          Never share your Google password with me or anyone. Adding me as a user is safer and you can remove my
          access at any time from the same page.
        </Warning>
      </Step>

      <Step title="Step 7 — What you need to send me">
        <List
          items={[
            "Your Measurement ID (it starts with G-).",
            "Confirmation that you added me as a user (and the role you gave me).",
            "The website address you used when creating the stream.",
          ]}
        />
        <P>
          With the Measurement ID I add the tracking code to your website. You do not need to touch any code.
        </P>
      </Step>

      <Step title="Step 8 — Cookie notice">
        <P>
          Google Analytics uses cookies. If your visitors are in the UK or Europe, your website should ask for
          their consent before tracking them. I can add a simple cookie banner to your website. Tell me if you
          want it.
        </P>
      </Step>

      <Step title="Step 9 — Check that it works">
        <Example
          platform="Google Analytics"
          steps={[
            "Open your website in a new tab (or on your phone with mobile data).",
            "In Analytics, click “Reports” (left menu) and then “Realtime”.",
            "You should see at least 1 active user. That is you.",
          ]}
        />
        <Note>
          The Realtime report works in a few minutes. The other reports (visitors, pages, countries) can take 24
          to 48 hours to fill with data.
        </Note>
      </Step>

      <Step title="Step 10 — How to read your reports">
        <List
          items={[
            "Reports > Realtime: who is on your website right now.",
            "Reports > Acquisition: how people found you (Google, social media, direct).",
            "Reports > Engagement > Pages and screens: your most visited pages.",
            "Reports > Demographics: the countries and cities of your visitors.",
          ]}
        />
        <P>If you want a monthly summary of your numbers or need help understanding them, just ask me.</P>
      </Step>
    </TutorialLayout>
  );
}