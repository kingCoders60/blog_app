"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AppleCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Read our latest Blogs.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              For the release of her twelfth album, “The Life of a Showgirl,” Taylor Swift sent fans on an online scavenger hunt this weekend, which began by searching for “Taylor Swift” on Google. But as fans unveiled secret videos as part of the campaign, some fretted that the clips looked like they were AI-generated — and they were not pleased.
A Google search for the singer’s name yields a cryptic message: “12 cities, 12 doors, 1 video to unlock.”
Fans had to figure out the location of the doors, then physically find them and scan a QR code, which surfaced 12 unique videos that contained the clues needed to solve the puzzle. When fans Googled the correct phrase, another orange door appeared, which fans had to collectively “knock” on by clicking 12 million times. Finally, the door “opened,” revealing a lyric video for “The Fate of Ophelia,” which has its own orange door progress bar on YouTube.
YouTube had scored the video exclusive for the track, as well as the lyric videos from the remaining songs on the new album.
Google initially announced the scavenger hunt in a video on Instagram. The video begins with an aerial view of Earth, then quickly zooms in on a hilly, bejeweled landscape, until we see an orange door, overlayed with a Google search bar.
While Swifties love a puzzle, some were rubbed the wrong way by the 12 clue-containing videos, which looked to be AI-generated.
Instead of searching for clues to unveil Swift’s new lyric video, as Swift intended, some fans began to scour the video clips like detectives, looking for signs that the scenes were synthetic. However, while there are clips that look computer-generated, it’s unclear if they were made using AI, and if so, to what extent.
It would make sense if these videos were generated using Google’s AI products. As OpenAI shows off its new Sora 2 video generator, this Taylor Swift collaboration would be a serendipitous opportunity for Google to show millions of Swifties what its Veo 3 model can do.
Google did not respond to TechCrunch’s request for comment on how these videos were generated or if Swift and Google worked together on this activation by using Google’s own AI technology. But Swift’s team and Google have teamed up for similar promotional activities in the past, we should note.
The use of AI in creative works is a sensitive subject. Some artists think these tools can help them, while others have protested the manner in which large language models are trained on their work without consent, effectively using artists’ own work to create the technology that could threaten their livelihoods.
Even Swift herself spoke out about the dangers of AI after President Donald Trump shared an AI-generated image of her showing support for his campaign last year; the incident spurred her to post an endorsement for former Vice President Kamala Harris, who ran against Trump in 2024.
“Recently I was made aware that AI of ‘me’ falsely endorsing Donald Trump’s presidential run was posted to his site. It really conjured up my fears around AI, and the dangers of spreading misinformation. It brought me to the conclusion that I need to be very transparent about my actual plans for this election as a voter,” she wrote on Instagram at the time.
The controversy around Swift’s possible use of AI is amplified given her own stature in the music industry.
While AI may appeal to some artists as a way to cut costs, the billionaire musician has every possible resource at her disposal to bring the fantastical scenes from her promotional videos to life.
            </p>
            <img
              src="https://techcrunch.com/wp-content/uploads/2024/09/taylor-swift-2024.jpg?resize=900,587"
              alt="Taylor swift"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              OpenAI is launching a new way for developers to build applications inside of ChatGPT. Starting Monday, users in ChatGPT will be able to access interactive applications from companies like Booking.com, Expedia, Spotify, Figma, Coursera, Zillow, and Canva. OpenAI is also launching a preview of the Apps SDK, the developer-facing toolkit to build these apps.
OpenAI made the announcement at its annual developer conference, DevDay 2025.
“We want ChatGPT to be a great way for people to make progress, to be more productive, more inventive, to learn faster, to do whatever they’re trying to do in their lives better,” said CEO Sam Altman. “[Apps inside of ChatGPT] will enable a new generation of apps that are interactive, adaptive, and personalized, that you can chat with.”
The new system is OpenAI’s latest attempt to build an ecosystem of apps around its flagship AI product, ChatGPT. The launch follows OpenAI’s previous attempts to let developers build interactive applications, such as through its GPT Store. Unlike that product, which was a separate app store, Monday’s launch puts apps directly in ChatGPT’s responses and lets users call up third-party tools in their everyday conversations. This gives developers better distribution for the apps they build and aims to make a richer experience for users in ChatGPT.
By typing the names of different apps in ChatGPT, users can draw in content from a variety of services. For example, users can say, “Figma, turn this sketch into a workable diagram” to call up the Figma app. Users can also call up the Coursera app by asking, “Coursera, can you teach me something about machine learning?”
In a demo of Zillow’s application, users could prompt ChatGPT in natural language to search for apartments in their area within a specific price range. ChatGPT then pulled up an interactive map showing options, and users could talk with ChatGPT to learn more about each one.
OpenAI says the new system is built using the Model Context Protocol (MCP), which allows developers to connect their data sources to an AI system. ChatGPT apps can also trigger actions and render a fully interactive UI in the chatbot’s responses. Certain apps are able to display videos in ChatGPT, which will be pinned to the top of the web page and can be altered based on user requests.
If users are already subscribed to a product, they’ll be able to log in to their account directly in ChatGPT to access certain features. Altman also says OpenAI will support ways to monetize apps inside of ChatGPT in the future, including through the company’s recently launched Instant Checkout feature in ChatGPT.
Key questions around apps in ChatGPT will be privacy, and how much data third-party developers will have access to. OpenAI says developers must “collect only the minimum data they need, and be transparent about permissions.” However, it’s unclear whether developers would have access to a user’s entire conversation with ChatGPT, the past few messages, or just the prompt that summoned up the app.
It’s also unclear how ChatGPT will choose a service between competing companies, such as DoorDash and Instacart. One could imagine how companies could pay to be surfaced in ChatGPT responses, but OpenAI says it plans to prioritize the user experience above all else.
            </p>
            <img
              src="https://techcrunch.com/wp-content/uploads/2024/05/openAI-spiral-rose.jpg?resize=1536,864"
              alt="Open AI logo"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};
const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              Top YouTube creator MrBeast is worried about AI’s impact on creators’ livelihoods, despite having dabbled with using the technology himself. On Monday, the creator posted his concerns on social media, where he openly wondered how AI-generated videos could affect the “millions of creators currently making content for a living.”
“Scary times,” he added.
MrBeast, whose real name is Jimmy Donaldson, is No. 1 on Forbes’ 2025 list of top creators, with $85 million in earnings and 634 million followers. What he says and does, as a result of his position, has an outsized influence across the industry. So if MrBeast is openly questioning whether AI is an existential threat to his business and others like it, then it’s fair to say that smaller creators are likely even more worried.
His comments follow the recent launch of OpenAI’s Sora 2, a new version of its audio and video generator, alongside a mobile app that lets users create AI, including videos of themselves, which are shared in a TikTok-style vertical feed. The app has been an early hit, quickly hitting No. 1 on the U.S. App Store after a surge of downloads.
YouTube has also embraced AI, launching things like AI editing tools, including those that let creators generate AI videos using its video model Veo to animate still photos or apply different styles to their videos. The company has infused AI into its product as well, for things like making clips or highlights from Live videos or podcasts. An AI chatbot can answer creators’ questions inside YouTube’s channel management software, YouTube Studio.
MrBeast has also involved himself with AI, as commenters were quick to point out. The creator this summer faced a fair bit of backlash from fans and creators alike after releasing a tool that used AI to create video thumbnails. He quickly removed the tool from his analytics platform, Viewstats, and said he’d replace it with links to human artists available for commission.
His company’s philanthropy arm has also made AI investments at times.
There is still debate as to whether the novelty of AI video creation will turn everyone into a creator, or if the best videos will still need a human’s creative mind to think them up and then prompt the tool correctly. At the same time, there are those who view AI videos as low-quality content, often dubbed “slop,” and dislike seeing it in their feeds.
Even if the AI becomes undetectable at some point in the future, it’s possible that creators revealed to be using it without disclosure could lose their fans’ trust and harm their reputation.
            </p>
            <img
              src="https://techcrunch.com/wp-content/uploads/2025/09/Beast-Games-Suit-Arms-Crossed.jpg"
              alt="MR Beast"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};
const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              Professional services and consultant firm Deloitte announced a landmark AI enterprise deal with Anthropic the same day it was revealed the company would issue a refund for a government-contracted report that contained inaccurate AI-produced slop.  
The upshot: Deloitte’s deal with Anthropic is a referendum on its commitment to AI, even as it grapples with the technology. And Deloitte is not alone in this challenge.
The timing of this announcement is interesting — comical even. On the same day Deloitte touted its increased use of AI, the Australia Department of Employment and Workplace Relations said the consulting company would have to issue a refund for a report it did for the department that included AI hallucinations, the Financial Times reported.  
The department had commissioned a A$439,000 “independent assurance review” from Deloitte, which was published earlier this year. The Australian Financial Review reported in August the review had a number of errors, including multiple citations to non-existent academic reports. A corrected version of the review was uploaded to the department’s website last week. Deloitte will repay the final installment of its government contract, the FT reported.
TechCrunch reached out to Deloitte for comment and will update the article if the company responds.
Deloitte announced Monday plans roll out Anthropic’s chatbot Claude to its nearly 500,000 global employees on Monday. Deloitte and Anthropic, which formed a partnership last year, plan to create compliance products and features for regulated industries including financial services, healthcare and public services, according to an Anthropic blog post. Deloitte also plans to create different AI agent “personas” to represent the different departments within the company including accountants and software developers, according to reporting from CNBC.  
“Deloitte is making this significant investment in Anthropic’s AI platform because our approach to responsible AI is very aligned, and together we can reshape how enterprises operate over the next decade. Claude continues to be a leading choice for many clients and our own AI transformation,” Ranjit Bawa, global technology and ecosystems and alliances leader, at Deloitte wrote in the blog post.  
The financial terms of the deal — which Anthropic referred to as an alliance — were not disclosed.  
The deal is not only Anthropic’s largest enterprise deployment yet, it also illustrates how AI is embedding itself in every aspect of modern life from tools used at work to casual queries made at home.
Deloitte is not the only company, or individual, getting caught using inaccurate AI-produced information in recent months either. 
In May, the Chicago Sun-Times newspaper had to admit that it ran an AI-generated list of books for its annual summer reading list after readers discovered some of the book titles were hallucinated even if the authors were real. An internal document viewed by Business Insider showed Amazon’s AI productivity tool, Q Business, struggled with accuracy in its first year.
Anthropic itself has also been knocked for using AI-hallucinated information from its own chatbot Claude. The AI research lab’s lawyer apologized after the company used an AI-generated citation in a legal dispute with music publishers earlier this year. 
            </p>
            <img
              src="https://techcrunch.com/wp-content/uploads/2025/10/GettyImages-2169550517.jpg?resize=900,599"
              alt="Deloitte office"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};
const DummyContent5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              As part of Apple Liquid Glass redesign, announced at WWDC 2025, the new iOS 26 will rework some native Apple features and apps.
The Lock Screen and Home Screen are getting updates that align with the overall aesthetic of Liquid Glass. On the Lock Screen, Apple is using a custom font called San Francisco to display the date and time. Then, depending on what image is chosen for the Lock Screen, the font will stretch to take up the space that’s available. For example, if you have a photo of your dog with the sky in the background, the time will stretch to fill up the sky without obscuring the photo of your dog.
Lock Screen images can also now appear more animated with an AI-powered 3D effect, which Apple SVP of Software Engineering Craig Federighi described as “bringing favorite memories to life.” As you move your iPhone around in your hand, the subject of your background will appear to pop out from the rest of the image.
On the Home Screen, Apple will continue offering users ways to customize the appearances of app icons. As part of the Liquid Glass redesign, Apple will redesign many native app icons, intentionally designing them so that they look good in dark mode or in a new all-clear look.
When you are listening to music with your screen locked, you may be able to see animated representations of the music, which is similar to a feature Spotify already has. For example, an artist might upload a short clip from a music video that loops seamlessly, which would then display on the Lock Screen.
Native iOS apps like Camera, Photos, Safari, FaceTime, Phone, and CarPlay will also get a bit of a makeover in iOS 26.
The Camera app will be more streamlined toward helping people navigate among often-used settings, like adjusting the brightness or aperture of a photo, or toggling between photo mode and video mode.
Apple is also updating the Photos app to bring back tabs to toggle between the library and collections, which Federighi said many users missed when it was removed in a recent update.
In the Safari redesign, web pages will flow edge to edge on the screen.
FaceTime will get a new landing page that shows personalized contact posters for people you frequently talk to, which includes video messages from those contacts that autoplay as you scroll.
The Phone app updates are similar to FaceTime updates in that they emphasize putting the people you talk to most front and center. Instead of having favorites on a separate tab from the contacts list, the new design combines the two tabs while bringing favorites to the front.
These updates also extend to Apple CarPlay. Now users can display widgets, tap back on messages, and pin conversations. These widgets might include flight status, for example, which would allow a driver to easily see a friend’s flight status as they drive to the airport.
            </p>
            <img
              src="https://techcrunch.com/wp-content/uploads/2025/06/Screenshot-2025-06-09-at-1.21.55PM.png?resize=900,481"
              alt="Apple iphone IOS 16"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const DummyContent6 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              Context windows of AI models, which indicate the ability of a model to “remember” information, have increased over time. However, researchers have suggested new ways to increase long-term memory of AI models, as they often cannot hold context over several sessions.
Nineteen-year-old founder Dhravya Shah is attempting to solve problems in this area by building a memory solution, called Supermemory, for AI apps.
Originally from Mumbai in India, Shah started building consumer-facing bots and apps a few years ago. He even sold his bot that formatted tweets into good-looking screenshots to the social media tool Hypefury.
The founder, who was preparing for an entrance exam to get into IIT (Indian Institute of Technology), earned good money from this sale and decided to move to the U.S. to attend Arizona State University instead.
After relocating, he challenged himself to build something new each week for 40 weeks. During one of those weeks, he built Supermemory (which was initially called Any Context) and put it on GitHub. At that time, the tool allowed you to chat with your Twitter bookmarks.
The current version of the tool extracts “memories” or insights from unstructured data and helps the applications understand the context better.
A memory map extracted by Supermemory
Shah secured an internship at Cloudflare in 2024, where he worked on AI and infrastructure. He later worked as a developer relations lead at the company. During this time, advisors, including Cloudflare CTO Dane Knecht, asked him to turn Supermemory into a product.
This year, he decided to build Supermemory full-time.
Supermemory, now described as a universal memory API for AI apps, builds a knowledge graph based on the data it processes, and personalizes the context for the users. For instance, it can support querying across month-old entries for a writing or a journaling app, or searching for an email app. As the solution allows for multimodal inputs, it could also allow a video editor to fetch relevant assets from a library for a particular prompt.
The startup can ingest any type of data, the company says, including files, docs, chats, projects, emails, PDFs, and app data streams. Its chatbot and notetaker feature lets users add memories in text, add files or links, and connect to apps like Google Drive, OneDrive, or Notion. There also a Chrome extension that lets you easily add notes from a website.
“Our core strength is to extract insights from any kind of unstructured data and give the apps more context about users. As we work across multimodal data, our solution is suitable for all kinds of AI apps ranging from email clients to video editors,” Shah said.
Supermemory has secured seed funding of $2.6 million led by Susa Ventures, Browder Capital, and SF1.vc. The round also includes individual investors like Cloudflare Knecht, Google AI chief Jeff Dean, DeepMind product manager Logan Kilpatrick, Sentry founder David Cramer, and executives from OpenAI, Meta, and Google.
Shah said at one point Y Combinator also approached him to join one of its batches, but he already had investors on board, so the timing didn work out.
Joshua Browder, founder and CEO of “Robot lawyer” startup DoNotPay, who runs Browder Capital as a solo GP, was impressed by Shah tenacity.
“I connected with Dhravya over X, and what struck me was how quickly he moves and builds things, and that prompted me to invest in him,” he said.
The company has multiple existing customers, including a16z-backed desktop assistant Cluely, AI video editor Montra, AI search Scira, Composio multi-MCP tool Rube, and real estate startup Rets. Plus, its working with a robotics company to retain visual memories captured by a robot.
While this is a slant toward consumers, the app feels more like a playground for developers to understand more about the tool and potentially use it in their workflows or their own apps.
Supermemory has substantial competitors in the memory space. Startups like Felicis Ventures-backed Letta and Mem0 (where Shah worked for a short while) are building a memory layer for agents. Supermemorys own backer, Susa Ventures, has invested in Memories.ai along with Samsung, which can tap into thousands of hours of footage to get insights. Shah says that while these startups might serve different industries and use cases, Supermemory will stand out because it offers lower latency.
“More and more AI companies will need a memory layer. Supermemory solution provides high performance while allowing you to surface relevant context quickly,” Browder said.
            </p>
            <img
              src="https://techcrunch.com/wp-content/uploads/2025/10/Dhravya-Shah-Supermemory.jpeg?resize=900,600"
              alt="Dhravya shah's image"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "Taylor Swift fans accuse singer of using AI in her Google scavenger hunt videos",
    src: "https://techcrunch.com/wp-content/uploads/2024/09/taylor-swift-2024.jpg?resize=1536,1002",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "OpenAI launches apps inside of ChatGPT",
    src: "https://techcrunch.com/wp-content/uploads/2024/05/openAI-spiral-rose.jpg?resize=1536,864",
    content: <DummyContent2 />,
  },
  {
    category: "Media & Entertainment",
    title: "MrBeast says AI could threaten creators’ livelihoods, calling it ‘scary times’ for the industry",
    src: "https://techcrunch.com/wp-content/uploads/2025/09/Beast-Games-Suit-Arms-Crossed.jpg",
    content: <DummyContent3 />,
  },

  {
    category: "Product",
    title: "Deloitte goes all in on AI — despite having to issue a hefty refund for use of AI",
    src: "https://techcrunch.com/wp-content/uploads/2025/10/GettyImages-2169550517.jpg?resize=900,599",
    content: <DummyContent4 />,
  },
  {
    category: "iOS",
    title: "Apple’s iOS 26 will redesign Lock Screen, Home Screen, and native iOS apps",
    src: "https://techcrunch.com/wp-content/uploads/2025/06/Screenshot-2025-06-09-at-1.21.55PM.png?resize=900,481",
    content: <DummyContent5 />,
  },
  {
    category: "Artifical Intelligence",
    title: "A 19-year-old nabs backing from Google execs for his AI memory startup, Supermemory",
    src: "https://techcrunch.com/wp-content/uploads/2025/10/Dhravya-Shah-Supermemory.jpeg?resize=900,600",
    content: <DummyContent6 />,
  },
];
