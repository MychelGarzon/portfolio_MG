import blog1 from '../assets/projects-images/blog1.png';
import blog3 from '../assets/projects-images/blog3.png';
import blog2 from '../assets/projects-images/blog2.png';
import hackaton from '../assets/projects-images/hackaton.jpeg';

const blogData = [
    {
        id: 4,
        title: "Stop Burning Money: Why n8n is the Zapier Killer",
        excerpt: "Tired of paying per 'task'? Discover why n8n's node-based architecture and fair-code model make it the superior choice for scaling automation.",
        content: "If you have been in the automation space for more than a week, you know the pain of the 'Zapier Tax'. You build a workflow, it runs beautifully, and then you hit your task limit. Suddenly, a simple email parser is costing you hundreds of dollars a month. It is time to talk about the elephant in the room: n8n.\n\n**The Fundamental Difference: Linear vs. Flow**\nMost entry-level automation tools use a linear logic—Trigger, then Action, then Action. It is simple, but it is brittle. n8n uses a node-based flow architecture. This means you can loop data, merge different streams, and handle errors within the same workflow. It is not just an integration tool; it is a visual programming language.\n\n**Fair-Code: The Wallet Saver**\nThe biggest driver for the n8n migration is the cost model. n8n is 'fair-code', meaning you can self-host it on your own server (like a $5 DigitalOcean droplet) for free. You are not paying for every step the workflow takes; you are limited only by your server's CPU. Even their cloud offering is priced by 'workflow executions' rather than individual steps. This simple switch effectively makes complex looping automations 10x cheaper.\n\n**When to Switch?**\nIf you are just sending a Slack message when a Google Sheet updates, stay with the simple tools. But if you are trying to build an AI agent, scrape websites, or manage complex database syncing, n8n is the only logical step forward. It stops being about 'connecting apps' and starts being about building software without code.",
        date: "November 20, 2025",
        image: blog1,
        tags: ["n8n", "Zapier Alternative", "Cost Savings"],
        readTime: "7 min read"
    },
    {
        id: 2,
        title: "Build a Personal AI Intern in 15 Minutes with n8n",
        excerpt: "A practical tutorial on connecting OpenAI to Telegram. Stop using ChatGPT in the browser and start automating it into your daily life.",
        content: "Everyone talks about AI, but few people have truly automated it. We are still copy-pasting into ChatGPT's browser window. Today, we are going to change that by building a Telegram bot that acts as your personal intern, powered by n8n and OpenAI.\n\n**The Stack**\nWe need three things: A Telegram account, an OpenAI API Key, and an n8n instance (Cloud or Local). \n\n**Step 1: The Listener (Webhook)**\nFirst, you'll need to talk to the 'BotFather' on Telegram to create a bot and get your token. In n8n, we use the 'Telegram Trigger' node. This node listens for any message you send to your bot. Unlike other platforms that poll for data every 15 minutes, n8n webhooks are instant.\n\n**Step 2: The Brain (OpenAI Node)**\nConnect your trigger to the OpenAI node. Select the 'Chat' resource and 'Complete' operation. Here is the pro-tip: Use a 'System Message' to define the bot's personality. Tell it: 'You are a helpful productivity expert. Keep answers concise.' Map the text from Telegram into the user message field.\n\n**Step 3: The Response**\nFinally, use the Telegram node again, but this time as an action to 'Send Message'. Map the output from OpenAI back to the Chat ID from the trigger.\n\n**Why This Matters**\nCongratulations, you just built a micro-SaaS. By changing the System Prompt, this bot could become a customer support agent, a language tutor, or a code debugger. This is the power of n8n—it turns abstract AI concepts into tangible tools you use on your phone.",
        date: "November 18, 2025",
        image: blog2,
        tags: ["AI", "Tutorial", "Telegram Bot", "OpenAI"],
        readTime: "10 min read"
    },
    {
        id: 3,
        title: "The 'Green Wire' Problem: Mastering n8n Data Flow",
        excerpt: "The number one reason beginners quit n8n is the JSON data structure. We explain how data flows between nodes so you never see 'No Data Found' again.",
        content: "You open n8n, drag in a few nodes, hit 'Execute', and... nothing works. You see a red error or, worse, the workflow runs but the data is empty. Welcome to the 'Green Wire' problem. Unlike other no-code tools that hide the data, n8n forces you to understand a little bit of JSON. Don't panic—it is actually a superpower.\n\n**Everything is an Array**\nHere is the golden rule of n8n: **Every node outputs an Array of Objects.** Even if you only have one item, n8n treats it as a list containing one item. When you see `[ { \"json\": { ... } } ]`, that is n8n wrapping your data. \n\n**The Expression Editor**\nWhen you want to map data from Node A to Node B, you are using the Expression Editor. If you are trying to reference data that isn't there, n8n will complain. The most common mistake is trying to reference data from a node that executed 5 steps ago. In n8n, nodes can only 'see' the data from the node directly behind them unless you explicitly tell them otherwise using the `$('NodeName').item` syntax.\n\n**The 'Set' Node is Your Best Friend**\nIf your data looks messy coming from an API, use a 'Set' node immediately after to clean it up. Define only the variables you need (e.g., Name, Email, ID). This keeps the 'Green Wire' clean and makes debugging significantly easier.\n\n**Conclusion**\nOnce you understand that n8n is just passing JSON objects from left to right, the fear disappears. You stop guessing and start architecting.",
        date: "November 12, 2025",
        image: blog3,
        tags: ["Education", "JSON", "Debugging", "Basics"],
        readTime: "8 min read"
    },
    {
        id: 1,
        title: "SwipeWise: Agentic Automation for Financial Literacy Built in n8n",
        excerpt: "Built entirely in n8n, SwipeWise is a multi-tool agentic workflow designed to deliver real-time financial awareness to young users—right where they make decisions: online.",
        content: "At Junction 2025, I set out to prove that automation can do more than just connect apps—it can teach, guide, and empower. The result? SwipeWise: a fully agentic financial literacy system built entirely in n8n.\n\n**The Mission: Financial Awareness in Real Time**\nSwipeWise targets young users in the moment they need it most—while browsing, shopping, or encountering ads. Using a single unified webhook, the system orchestrates three intelligent tools:\n\n🧠 **Page Classifier**\nCombines deterministic rules with LLM-powered classification to detect shopping pages, checkout flows, and ads. Outputs clean JSON signals for behavioral nudges.\n\n💳 **Offer Analyzer**\nEvaluates pay-later offers, subscriptions, and credit terms with structured logic, fallback handling, and normalization. Delivers consistent, educational insights.\n\n🎨 **Ad Visual Generator**\nTransforms ad payloads into safe, brand-friendly DALL·E prompts. Outputs high-contrast hero visuals focused on objects—not manipulation.\n\n🃏 **SwipeWise Deal Card**\nA dedicated HTML endpoint renders the offer analysis into a responsive card, viewable directly from the browser extension.\n\n🧪 **Eval Harness**\nFive reproducible scenarios—checkout, news, homepage, risky offer, malformed input—run entirely inside n8n. Outputs include total tests, pass/fail counts, and reliability metrics.\n\n**Why n8n?**\nSwipeWise wouldn’t be possible in a linear automation tool. n8n’s node-based architecture allowed me to build a true agent: one that routes, validates, and adapts in real time. The Brain node and Switch logic handle complex decision trees, while internal LLM validations ensure safety and consistency.\n\n**Hackathon Win: Junction 2025**\nSwipeWise took home the win at Junction for its originality, technical depth, and social impact.",
        date: "November 20, 2025",
        image: hackaton,
        tags: ["n8n", "Agentic Automation", "Financial Literacy", "Hackathon Winner"],
        readTime: "6 min read"
    }
];

export default blogData;