/* data.js: all site content in one place.
   Entries marked sample: true are PLACEHOLDERS. Replace them with real creators, case studies and testimonials
   before launch. The build prints a warning while any sample: true entries remain. */
window.RIVAH = {
  instagram: "https://www.instagram.com/rivahstudios.in",
  clients: ["Nova Skincare", "Kaya Apparel", "Pulse Fitness", "Orbit Tech", "Maple Cafe", "Studio Nine", "Verve Audio", "Anaya Jewels"],
  services: [
    { icon: "✦", title: "Social Media Management", text: "We plan, create, and manage content that builds your brand voice, grows engagement, and connects you with the right audience across all major platforms." },
    { icon: "↗", title: "Instagram Growth", text: "Strategy that compounds every week" },
    { icon: "▶", title: "Video Editing", text: "Reels and long form that hold attention" },
    { icon: "◆", title: "Brand Identity", text: "Logo, voice and visual system" },
    { icon: "✎", title: "Graphic Design", text: "Posts, decks and campaign assets" },
    { icon: "◉", title: "Content Creation", text: "Shoots, scripts and storytelling" },
    { icon: "▣", title: "YouTube Management", text: "Channel strategy and publishing" },
    { icon: "◈", title: "Thumbnail Design", text: "Click-worthy, on-brand thumbnails" },
    { icon: "★", title: "Personal Branding", text: "A presence people remember" }
  ],
  /* image: put a path like "assets/creators/aanya.jpg" to replace the gradient + initial */
  creators: [
    { id: 1, name: "Aanya Verma", username: "@aanya.creates", followers: "412K", views: "18.2M", engagement: "6.8%", category: "Lifestyle", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 2, name: "Kabir Mehta", username: "@kabir.fit", followers: "286K", views: "11.4M", engagement: "7.4%", category: "Fitness", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 3, name: "Meera Iyer", username: "@meera.styled", followers: "530K", views: "24.9M", engagement: "5.9%", category: "Fashion", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 4, name: "Rohan Das", username: "@rohan.tech", followers: "198K", views: "9.1M", engagement: "8.1%", category: "Tech", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 5, name: "Isha Kapoor", username: "@isha.daily", followers: "344K", views: "14.6M", engagement: "6.2%", category: "Lifestyle", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 6, name: "Dev Malhotra", username: "@dev.lifts", followers: "251K", views: "10.3M", engagement: "7.0%", category: "Fitness", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 7, name: "Naina Shah", username: "@naina.wears", followers: "468K", views: "20.7M", engagement: "6.5%", category: "Fashion", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { id: 8, name: "Arjun Rao", username: "@arjun.gadgets", followers: "172K", views: "7.8M", engagement: "8.6%", category: "Tech", sample: true, image: "", instagram: "https://www.instagram.com/rivahstudios.in" }
  ],
  tints: ["#B5573A", "#7A8266", "#A24C31", "#5A6350"],
  process: [
    { title: "Discovery", text: "Goals, audience, audit" },
    { title: "Strategy", text: "Plan, pillars, calendar" },
    { title: "Production", text: "Shoot, edit, design" },
    { title: "Execution", text: "Publish and engage" },
    { title: "Optimization", text: "Measure and improve" }
  ],
  /* Reels. For each one: paste its full Instagram link in "instagram" (https://www.instagram.com/reel/XXXXXXXX/).
     Optional: "video" = short muted preview in assets/reels/ (mp4, 9:16, under 2 MB), "poster" = cover image in assets/reels/. */
  reels: [
    { sample: true, title: "Skincare launch reel", client: "Nova Skincare", likes: "12.4K", views: "180K", video: "", poster: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { sample: true, title: "Gym transformation edit", client: "Pulse Fitness", likes: "9.8K", views: "141K", video: "", poster: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { sample: true, title: "Cafe brand story", client: "Maple Cafe", likes: "15.2K", views: "236K", video: "", poster: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { sample: true, title: "Fashion lookbook", client: "Kaya Apparel", likes: "11.1K", views: "167K", video: "", poster: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { sample: true, title: "Behind the scenes", client: "Rivah Studios", likes: "7.6K", views: "98K", video: "", poster: "", instagram: "https://www.instagram.com/rivahstudios.in" },
    { sample: true, title: "Product unboxing", client: "Orbit Tech", likes: "8.9K", views: "122K", video: "", poster: "", instagram: "https://www.instagram.com/rivahstudios.in" }
  ],
  /* FAQ. Review every answer so it matches how you really work (pricing, timelines, reporting, contracts).
     "for" can be: all, small, big, creator. */
  faq: [
    { q: "What does Rivah Studios do?", a: "We help brands and creators grow online with strategic digital marketing, social media management, content and video, branding, websites and SEO, all built to drive real results.", for: ["all"] },
    { q: "Who do you work with?", a: "Creators and personal brands, small businesses and startups, growing brands, and larger businesses. We shape the plan to your size, goals and budget.", for: ["all"] },
    { q: "How do we get started?", a: "Message us on WhatsApp or send the form on the contact page. We start with a short conversation about your goals, then suggest a plan you can say yes or no to.", for: ["all"] },
    { q: "How much does it cost?", a: "It depends on what you need and how often, so there is no one fixed price. Tell us your goal and budget and we will suggest a plan that fits, and you decide.", for: ["all"] },
    { q: "Do you guarantee followers or sales?", a: "No, and be careful of anyone who does. What we commit to is a clear plan, good quality work, steady publishing and honest numbers on what is working.", for: ["all"] },
    { q: "How long until I see results?", a: "Early signs such as better engagement and reach often show within a few weeks. Bigger results build over months, because good marketing compounds. We tell you what to expect for your case.", for: ["all"] },
    { q: "Will I have a say in the content?", a: "Yes. You approve the plan and the content before it goes live, and we adjust based on your feedback.", for: ["all"] },
    { q: "I have a small business and a small budget. Can you still help?", a: "Yes. We can start with the essentials, such as one or two channels, consistent posting and a clear brand look, and grow the plan as your business grows.", for: ["small"] },
    { q: "I do not have a brand, photos or videos yet. Is that a problem?", a: "Not at all. We can start with brand basics, such as logo, colors and tone, and create the photos, videos and posts for you.", for: ["small"] },
    { q: "Do I need a website, or is Instagram enough?", a: "For many small businesses, Instagram with WhatsApp is enough to start. A website adds trust and helps people find you on Google. We will tell you honestly what makes sense for your stage.", for: ["small"] },
    { q: "Can you manage everything so I can focus on my business?", a: "Yes. We plan, create, post and track the results. You just approve, and we handle the rest of the routine work.", for: ["small", "creator"] },
    { q: "Can you handle a larger brand with several channels?", a: "Yes. For larger businesses we work as a dedicated team across social media, content, campaigns and digital marketing, with a clear approval flow so nothing slows down.", for: ["big"] },
    { q: "Can you work with our in-house marketing team?", a: "Yes. We can lead the work or support your team, with a shared calendar and clear roles so everyone knows who does what.", for: ["big"] },
    { q: "How do you measure and report results?", a: "We agree on the goals first, such as reach, engagement or leads, and then share regular reports against them, so you can see what the work is doing for the business.", for: ["big"] },
    { q: "Do you sign contracts or NDAs?", a: "Yes, for larger projects we are happy to work under a written agreement and keep your information confidential.", for: ["big"] },
    { q: "I am a creator, not a business. Can you help?", a: "Yes. We help creators with content planning, video editing, thumbnails and personal branding so they can grow steadily and spend more time creating.", for: ["creator"] },
    { q: "Do you use shortcuts like buying followers?", a: "No. We grow accounts with real content and real audiences. Bought followers hurt reach and trust, so we do not use them.", for: ["all"] }
  ],
  cases: [
    { sample: true, client: "Nova Skincare", category: "Instagram Growth", title: "A skincare brand finds its audience",
      summary: "A new content system and a steady reel rhythm.",
      overview: "A young skincare label had good products but an inconsistent feed and little reach beyond its own followers.",
      objective: "Build a recognisable look and grow qualified followers who turn into customers.",
      strategy: ["Defined three content pillars and a weekly calendar", "Produced short educational reels with a consistent visual style", "Reviewed analytics every two weeks and adjusted hooks and posting times"],
      results: [{ value: "+212%", label: "Reach in 90 days" }, { value: "4.1x", label: "Profile visits" }, { value: "7.2%", label: "Engagement rate" }] },
    { sample: true, client: "Pulse Fitness", category: "Video Editing", title: "Editing that keeps people watching",
      summary: "Faster cuts, clearer hooks, better retention.",
      overview: "A fitness creator filmed great workouts but lost viewers in the first few seconds of every video.",
      objective: "Raise average watch time and turn viewers into followers.",
      strategy: ["Rewrote openings with a clear promise in the first two seconds", "Introduced pattern changes, captions and sound design", "Tested thumbnails and covers across a month of uploads"],
      results: [{ value: "+68%", label: "Average watch time" }, { value: "2.6x", label: "Shares per reel" }, { value: "38K", label: "New followers" }] },
    { sample: true, client: "Kaya Apparel", category: "Brand Identity", title: "A brand look that feels like one voice",
      summary: "Logo, palette and templates across every channel.",
      overview: "A clothing brand used a different style on every platform, so customers struggled to recognise it.",
      objective: "Create one identity that works across social media, packaging and the website.",
      strategy: ["Ran a short brand discovery workshop", "Designed logo, colors, type and a template library", "Handed over a simple guide so the team can keep it consistent"],
      results: [{ value: "100%", label: "Channels on one identity" }, { value: "+41%", label: "Saves per post" }, { value: "3 weeks", label: "From brief to launch" }] }
  ],
  testimonials: [
    { sample: true, name: "Aanya Verma", role: "Lifestyle creator", rating: 5, quote: "They gave my content a clear direction. I finally know what to post and why." },
    { sample: true, name: "Kabir Mehta", role: "Fitness creator", rating: 5, quote: "The editing alone changed how people watch my videos. Communication was quick and honest." },
    { sample: true, name: "Nova Skincare", role: "Founder", rating: 5, quote: "A calm, organised team. Our feed looks like a real brand now, and the numbers followed." }
  ]
};
