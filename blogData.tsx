import React from 'react';
import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'founders-guide',
    title: 'Founders Guide on Investor Alan Glennon',
    date: '16 June 2021',
    content: (
      <div className="space-y-10">
        <section>
          <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Biography</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-stone-300 text-[#44403C] font-light">
            <li>Name: Alan Glennon</li>
            <li>Lives in San Francisco, California</li>
            <li>Former technical co-founder and CEO of NSF-funded <a href="https://github.com/arogi">Arogi</a> (geospatial analytics)</li>
            <li>Former academic <a href="https://www.researchgate.net/profile/Alan_Glennon">researcher</a> from University of California, Santa Barbara (Ph.D. Geography 2013). Master’s in Geoscience, specializing in cave hydrology</li>
            <li>Former park ranger at Mammoth Cave, Jewel Cave, and Great Basin Nat’l Park</li>
            <li>Accredited angel investor in 31 technology startups since 2017, including <a href="https://angellist.com">Angellist</a> (startup funding), <a href="https://astercare.com">Aster</a> (women's health), Convex (acquired by <a href="https://servicetitan.com">ServiceTitan</a>), and <a href="https://onespotapps.com">Onespot</a> (no code apps)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Investing process</h3>
          <ul className="space-y-4 text-[#44403C] font-light">
            <li className="pl-4 border-l border-stone-200"><strong className="text-[#1A2F25] font-medium font-serif block mb-1">Step 1</strong> Send an email with a memo or short deck. I love playing with demos. Be aware that I evaluate a lot of pitches. I write approximately five checks per year, and I invest in about 1 out of every 500 pitches. I may not be able to answer every email (I will do my best), but I certainly will read it.</li>
            <li className="pl-4 border-l border-stone-200"><strong className="text-[#1A2F25] font-medium font-serif block mb-1">Step 2</strong> Discuss your company with me in a one-hour video meeting.</li>
            <li className="pl-4 border-l border-stone-200"><strong className="text-[#1A2F25] font-medium font-serif block mb-1">Step 3</strong> I will send you an email within 48 hours with an answer. A ‘no’ will come fast. Sometimes the response will be that I want to double check details or require additional diligence. The more money committed, the more likely I will need additional conversations.</li>
            <li className="pl-4 border-l border-stone-200"><strong className="text-[#1A2F25] font-medium font-serif block mb-1">Step 4</strong> We both sign a YC SAFE, and I write you a check.</li>
          </ul>
        </section>
        
        <section>
            <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Investment Focus</h3>
            <p className="text-[#44403C] font-light">I invest in super-early high-growth potential, technology-enabled startups. My investments tend to be in companies that: have discovered something unexpected in a market or are experimenting with new business methods. Any industry is fine, but as a former park ranger, natural resource mining companies are not interesting to me.</p>
        </section>

         <section>
            <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Who I invest in</h3>
            <p className="text-[#44403C] font-light">Anyone. If you are the type of person or people that Silicon Valley underestimates, I especially want to hear about what you are building. My last seven investments average 2.1 founders per company, and six of seven have a woman founder. They are all working full-time, exclusively on their startup.</p>
        </section>

        <section>
          <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Investment sizes</h3>
          <ul className="space-y-6 text-[#44403C] font-light">
             <li>
                <strong className="block text-[#1A2F25] font-serif mb-1">Micro</strong>
                Micro-angel checks: $5,000 on a $2,500,000 <a href="https://www.ycombinator.com/documents/">YC SAFE: Valuation Cap, No Discount</a>. Checks come from my personal funds. You do not have to be incorporated, but you must be willing to form a Delaware C Corporation fairly rapidly--like within six months of signing. I also consider startups from Canada, India, and Singapore. If you have never raised venture capital before, you should also consider <a href="https://FirstMoney.In">FirstMoney.In</a>—a program I helped create where underestimated startup founders can apply for a modest, standardized investment from vetted, experienced angel investors.
             </li>
             <li>
                <strong className="block text-[#1A2F25] font-serif mb-1">Small</strong>
                Angel checks from $10,000 to $50,000 with a strong preference for investments in Delaware C Corporations on the most-recent <a href="https://www.ycombinator.com/documents/">YC SAFE Valuation Cap, No Discount</a>. Depending on the deal, I may negotiate the addition of a <a href="https://www.ycombinator.com/documents/">pro-rata side letter</a>. Checks come from my personal funds.
             </li>
             <li>
                <strong className="block text-[#1A2F25] font-serif mb-1">Medium</strong>
                Checks up to $250,000 with me as an <a href="https://angel.co/syndicates">AngelList Syndicate Lead</a>. These are rare for me to do because I am bringing other investors into the deal. If this is the instrument I would like to use, it will be in close consultation with you the founder. With a syndicate, two investors are added to your cap table: me and an AngelList LLC that represents the syndicate investors.
             </li>
          </ul>
        </section>

        <section>
            <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">What you get from Alan</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-stone-300 text-[#44403C] font-light">
                <li>Other than the cash itself, much of my job is to get out of your way. You will not need to teach me how various investment documents work, and I understand that many startups are a mess at the beginning.</li>
                <li>Especially if I am the first money in, the check from an <a href="https://angel.co/p/glennon">experienced Silicon Valley investor</a> signals an initial minimum price for future investors.</li>
                <li>There are many more brilliant and famous investors. However, it still is prestigious to receive money from me. It is validation that an investor believes you will be successful, your idea is worth pursuing, and that the potential market could be spectacular. I am optimistic that someday your efforts will make us both a lot of money.</li>
                <li>When your company is ready, I will make introductions to the next stage of investors and help prepare you for what to expect. I am most able to assist at the earliest rounds.</li>
                <li>I will answer any questions you have, and point to potential resources when I am clueless.</li>
            </ul>
        </section>

        <section>
            <div className="p-6 bg-stone-50 border border-stone-100 rounded-sm">
                <p className="text-[#44403C] font-light mb-4">I ran a <a href="https://github.com/arogi">startup</a> too. As your company encounters problems, there is a reasonable chance I have experienced something similar. That being said, every startup and founder is different. Your company is yours, not mine. Even solutions that worked for me may be a terrible path for you. It is your job to weigh the options and make the decisions that work for your startup.</p>
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Your well-being</h3>
            <p className="text-[#44403C] font-light">Even for ambitious, capable, and smart people, running a startup can be overwhelmingly stressful. I expect you to work hard and fully commit to the company, but not at the cost of your emotional or physical safety. Your life and well-being are more important than any startup or my investment.</p>
        </section>

        <section>
          <h3 className="text-2xl font-medium mb-4 font-serif text-[#1A2F25] italic">Contact</h3>
          <p className="text-[#44403C] font-light mb-2">Founders usually communicate with me by email. Linkedin is a reasonable way to make initial contact, but I do not use its messaging. It is pretty common for my portfolio founders to text when something fast-paced is happening.</p>
          <ul className="list-disc pl-5 marker:text-stone-300 text-[#44403C] font-light">
            <li>email: <i>mylastname</i>@gmail.com. (Note: Replace <i>mylastname</i> with my last name. It is the same as my Twitter username)</li>
            <li>twitter: <a href="https://twitter.com/glennon">@glennon</a></li>
            <li>text: I'll send you my number post-investment</li>
          </ul>
        </section>
      </div>
    )
  },
  {
    slug: 'songwriting',
    title: 'Lockdown',
    date: '07 May 2020',
    content: (
      <div>
        <p className="text-[#44403C] font-light">During the pandemic lockdown, I have been practicing piano and writing a few songs--mostly electronic or piano instrumentals. As I progress, you can find the results at: <a href="https://soundcloud.com/alanglennon">soundcloud.com/alanglennon</a>.</p>
      </div>
    )
  },
  {
    slug: 'yc-w19-template',
    title: 'Template for Y Combinator W19 Notes',
    date: '15 Mar 2019',
    content: (
        <div className="space-y-6 text-[#44403C] font-light">
            <p>Notes Template: <a href="https://docs.google.com/spreadsheets/d/1QmJXrHvzH0OrPkLofKPuWAH4wUYc7ciCpCOCeZkk_vQ/edit?usp=sharing">(Google Sheet)</a></p>
            <hr className="border-stone-100"/>
            <p>Y Combinator's Demo Day for their winter 2019 batch is next week. This time around, the batch includes around 200 startups, and keeping all the pitches straight in my head requires a lot of homework. Before Demo Day, I like to know what the company does, check out founder Linkedin profiles, ponder the competitive landscape, and assess market size. There are so many companies!</p>
            <p>Fortunately, most of the YC batch reveal themselves online before Demo Day via blog posts, online interviews, Linkedin updates, or social media. For YC W19, 126 companies have made themselves known so far. As companies announce, I add them to a spreadsheet, investigate them, and take a few notes. I also assign them a score based on my impressions of their market size, growth, competitive landscape, and founder fit. This quantitative note-taking affords a ranking of the many companies--and the tails are where I think things get interesting. For the top ten companies, at Demo Day, I listen the most closely: is my description of the company and traction accurate, and are the founders up for the task? It is common for these companies to plummet dramatically in the rankings as I learn more about their plans. For example, during a Demo Day last year, one of my favorite companies was a farm equipment supplier of sorts; at least, that is what I thought. During the pitch, however, they pitched a consumer snack food. Companies in the top ten that move higher during Demo Day become my clear favorites, with a high chance I will request a meeting.</p>
            <p>The bottom of the list also gets special attention. I enter Demo Day with the assumption that I made a mistake about them. With a selection pool of 10,000-12,000 applications and a juggernaut portfolio, YC partners have a great deal of signal about tech company trends, emerging markets, and optimal founder characteristics. Usually, during the lower ranked pitches, I am able to identify my mistake. Sometimes the founder describes a market I had not considered. Most often, the founders themselves are particularly gifted--and likely the reason they were accepted into the YC portfolio. The March 2019 Demo Day will only be my third to attend as an investor. I have a tugging feeling that one of these companies I originally misunderstood will turn into a future breakout hit.</p>
            <p>My spreadsheet of company names, descriptions, and a blank scoring sheet can be found <a href="https://docs.google.com/spreadsheets/d/1QmJXrHvzH0OrPkLofKPuWAH4wUYc7ciCpCOCeZkk_vQ/edit?usp=sharing">here</a>. You are welcome to make your own copy, modify the document, and change the weights to fit your own hypotheses about the characteristics of a great startup. To respect the founders who wish to keep their companies confidential, the spreadsheet only includes 'announced' companies.  If you do your own evaluations, I would love to know your favorites.</p>
            <p className="italic">Congratulations and best wishes to the founders pitching in a few days!<br/>
            Looking forward to another great Demo Day! <a href="https://twitter.com/glennon">@glennon</a></p>

            <div className="mt-8 bg-white p-4 rounded-sm shadow-sm border border-stone-100">
                <img src="/posts/YCSuS-Group9.jpg" className="w-full grayscale-[10%]" alt="Entrepreneurs visiting Y Combinator's Startup School" />
                <p className="text-xs text-stone-400 mt-2 uppercase tracking-wide font-medium">Entrepreneurs visiting Y Combinator's Startup School</p>
            </div>
        </div>
    )
  },
  {
    slug: 'norris-tube',
    title: 'Map of Norris Geyser Basin, Yellowstone USA',
    date: '12 Mar 2019',
    content: (
        <div className="text-[#44403C] font-light">
            <p className="mb-8">Weekend cartogram experiments and playing with Inkscape took over Monday too. Here is Norris Geyser Basin.</p>
            <img src="/posts/norris4.png" width="600px" className="rounded-sm shadow-sm border border-stone-100 p-2 bg-white" alt="Norris Geyser Basin Map" />
        </div>
    )
  },
  {
    slug: 'yellowstone-cartogram',
    title: 'Cartogram experiment: Yellowstone USA',
    date: '09 Mar 2019',
    content: (
        <div className="text-[#44403C] font-light">
            <p className="mb-8">Since I now exclusively use Ubuntu, it is more difficult to use my normal cartography tools, i.e., Illustrator and ArcGIS. After posting the Upper Geyser Basin map yesterday, I decided to try open source <a href="https://inkscape.org/">Inkscape</a> and see if I could make it work. Anyway, here is a start.</p>
            <img src="/posts/yellcartogram.png" className="rounded-sm shadow-sm border border-stone-100 p-2 bg-white" alt="Yellowstone Cartogram" />
        </div>
    )
  },
  {
    slug: 'oldfaithful-tube',
    title: 'Map of Upper Geyser Basin, Yellowstone USA',
    date: '08 Mar 2019',
    content: (
        <div className="text-[#44403C] font-light">
            <p className="mb-8">Inspired by <a href="https://en.wikipedia.org/wiki/Harry_Beck">Harry Beck's</a> London Tube map, here is my version of the geysers and trails at the Upper Geyser Basin. This is an unused figure from my 2013 doctoral dissertation on networks embedded in geographic space. It includes three of my favorite things: geysers, maps, and networks.</p>
            <img src="/posts/beckfaithful.png" className="rounded-sm shadow-sm border border-stone-100 p-2 bg-white" alt="Beck Faithful Map" />
        </div>
    )
  },
  {
    slug: 'el-tatio-maps',
    title: 'Maps of the El Tatio Geysers, Chile',
    date: '08 Mar 2019',
    content: (
        <div className="text-[#44403C] font-light">
            <p className="mb-4">In 2002, Rhonda Glennon, Shane Fryer, Weldon Hawkins and I inventoried and mapped the geysers of El Tatio, Chile. Our report was published in the <a href="https://www.researchgate.net/publication/284255246_The_extraordinary_thermal_activity_of_El_Tatio_Geyser_Field_Antofagasta_Region_Chile">Transactions of the Geyser Observation and Study Association</a>, and the associated four maps were all reduced to fit into standard page sizes.</p>
            <p className="mb-8">The maps were intended to be a bit bigger, so I am happy to release these maps in pdf format at their native resolution for download.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center group">
                    <a href="/posts/tatiogeneral.pdf" className="font-medium mb-2 text-[#1A2F25] group-hover:underline decoration-stone-300 underline-offset-4 font-serif text-lg">General Map</a>
                    <img src="/posts/tatiogeneral.png" className="border border-stone-100 shadow-sm rounded-sm p-1 bg-white hover:shadow-md transition-shadow" />
                </div>
                 <div className="flex flex-col items-center group">
                    <a href="/posts/tatioupper.pdf" className="font-medium mb-2 text-[#1A2F25] group-hover:underline decoration-stone-300 underline-offset-4 font-serif text-lg">Upper Geyser Basin</a>
                    <img src="/posts/tatioupper.png" className="border border-stone-100 shadow-sm rounded-sm p-1 bg-white hover:shadow-md transition-shadow" />
                </div>
                 <div className="flex flex-col items-center group">
                    <a href="/posts/tatiomiddle.pdf" className="font-medium mb-2 text-[#1A2F25] group-hover:underline decoration-stone-300 underline-offset-4 font-serif text-lg">Middle Geyser Basin</a>
                    <img src="/posts/tatiomiddle.png" className="border border-stone-100 shadow-sm rounded-sm p-1 bg-white hover:shadow-md transition-shadow" />
                </div>
                 <div className="flex flex-col items-center group">
                    <a href="/posts/tatiolower.pdf" className="font-medium mb-2 text-[#1A2F25] group-hover:underline decoration-stone-300 underline-offset-4 font-serif text-lg">Lower Geyser Basin</a>
                    <img src="/posts/tatiolower.png" className="border border-stone-100 shadow-sm rounded-sm p-1 bg-white hover:shadow-md transition-shadow" />
                </div>
            </div>
        </div>
    )
  }
];