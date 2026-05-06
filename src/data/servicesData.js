import { Monitor, BarChart, LineChart, Share2, Palette, Wrench, Target, Cloud } from 'lucide-react';

const servicesData = [
  {
    id: 'website-design-development',
    title: 'Website Design & Development',
    icon: Monitor,
    shortDesc: 'Custom, fast websites that turn visitors into customers.',
    benefits: ['Mobile-first responsive design', 'Under 2-second load times', 'Built for lead generation'],
    price: 'From £1,200',
    heroSubtitle: 'Beautiful, fast websites built to grow your business.',
    includes: ['Custom UX/UI design', 'Mobile responsive development', 'CMS integration (WordPress, headless)', 'Contact forms & lead capture', 'Speed & performance optimisation', 'SSL security & hosting setup'],
    whoFor: ['Small businesses needing a professional online presence', 'Companies with outdated websites losing customers', 'Startups launching their first brand online'],
    problemsSolved: ['Your website looks outdated and unprofessional', 'Visitors leave quickly because it loads too slowly', 'You have no way to capture leads or bookings online'],
    deliverables: ['Fully custom website (5-50+ pages)', 'Mobile & tablet optimised design', 'Admin dashboard for easy updates', 'SEO-ready structure', 'Analytics integration'],
    timeline: '4-8 weeks depending on complexity',
    pricingGuide: 'Simple brochure sites from £500. Standard business sites from £1,200. E-commerce from £2,500. Custom web apps from £4,000.',
    faqs: [
      { question: 'Do I need to provide content?', answer: 'We can work with your existing content or help you create new copy. Basic copywriting guidance is included in all packages.' },
      { question: 'Will I be able to update the site myself?', answer: 'Yes. We build every site with an easy-to-use content management system so you can make updates without any technical knowledge.' },
      { question: 'Do you provide hosting?', answer: 'We can recommend and set up reliable UK hosting, or work with your existing provider.' }
    ]
  },
  {
    id: 'seo-search-visibility',
    title: 'SEO & Search Visibility',
    icon: BarChart,
    shortDesc: 'Get found on Google by your ideal customers.',
    benefits: ['Local & national SEO', 'Monthly ranking reports', 'Content strategy included'],
    price: 'From £400/mo',
    heroSubtitle: 'Rank higher on Google and get found by the right people.',
    includes: ['Technical SEO audit & fixes', 'Keyword research & strategy', 'On-page optimisation', 'Google Business Profile setup', 'Monthly performance reporting', 'Content recommendations'],
    whoFor: ['Businesses invisible on Google search', 'Local businesses wanting to rank in their area', 'Companies losing traffic to competitors'],
    problemsSolved: ['Nobody can find you on Google', 'Your competitors rank above you for key searches', 'You don\'t know which keywords to target'],
    deliverables: ['Full SEO audit report', 'Keyword strategy document', 'Monthly ranking & traffic reports', 'Google Business Profile optimisation', 'On-page SEO improvements'],
    timeline: 'Initial audit in 1 week. Ongoing monthly campaigns.',
    pricingGuide: 'One-off SEO audit from £400. Monthly SEO campaigns from £400/month. Local SEO packages from £300/month.',
    faqs: [
      { question: 'How long until I see results?', answer: 'SEO is a long-term strategy. Most clients see noticeable improvements within 3-6 months, with significant results by month 6-12.' },
      { question: 'Do you guarantee first page rankings?', answer: 'No ethical SEO provider can guarantee specific rankings. We focus on sustainable, white-hat strategies that deliver real, lasting results.' }
    ]
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Digital Marketing Strategy',
    icon: LineChart,
    shortDesc: 'Data-driven campaigns that deliver real leads.',
    benefits: ['Google Ads management', 'Performance tracking', 'ROI-focused approach'],
    price: 'From £500/mo',
    heroSubtitle: 'Smart marketing campaigns that actually bring in customers.',
    includes: ['Google Ads setup & management', 'Campaign strategy & planning', 'Landing page optimisation', 'A/B testing', 'Conversion tracking setup', 'Monthly performance reports'],
    whoFor: ['Businesses wanting more leads from online advertising', 'Companies spending on ads with poor returns', 'Startups needing fast visibility'],
    problemsSolved: ['You\'re spending money on ads with no clear ROI', 'You don\'t know how to set up or manage Google Ads', 'Your marketing feels scattered and unfocused'],
    deliverables: ['Marketing strategy document', 'Campaign setup & launch', 'Monthly performance & spend reports', 'Conversion rate optimisation', 'Regular strategy reviews'],
    timeline: 'Campaign setup in 1-2 weeks. Ongoing management monthly.',
    pricingGuide: 'Campaign management from £500/month (ad spend is separate). Strategy sessions from £250.',
    faqs: [
      { question: 'How much should I spend on ads?', answer: 'We recommend a minimum of £500-£1,000/month ad budget for meaningful results, but we can work with smaller budgets for local campaigns.' },
      { question: 'Which platforms do you manage?', answer: 'We specialise in Google Ads and Meta (Facebook/Instagram) ads. We also support LinkedIn ads for B2B clients.' }
    ]
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    icon: Share2,
    shortDesc: 'Build your brand and engage customers on social media.',
    benefits: ['Content calendar planning', 'Professional post design', 'Community management'],
    price: 'From £350/mo',
    heroSubtitle: 'Consistent, professional social media that grows your audience.',
    includes: ['Social media strategy', 'Content calendar creation', 'Post design & copywriting', 'Scheduling & publishing', 'Community management & replies', 'Monthly analytics reports'],
    whoFor: ['Businesses with no time for social media', 'Brands with inconsistent or unprofessional posting', 'Companies wanting to build an online community'],
    problemsSolved: ['You never have time to post on social media', 'Your social profiles look inactive or unprofessional', 'You don\'t know what to post or when'],
    deliverables: ['Monthly content calendar', '12-20 designed posts per month', 'Caption & hashtag strategy', 'Community management', 'Monthly performance report'],
    timeline: 'Strategy in week 1. Content begins week 2. Ongoing monthly.',
    pricingGuide: 'Social media management from £350/month for 2 platforms. Additional platforms from £150/month each.',
    faqs: [
      { question: 'Which platforms do you manage?', answer: 'We cover Facebook, Instagram, LinkedIn, and TikTok. We recommend focusing on 2-3 platforms rather than spreading too thin.' },
      { question: 'Do I need to approve every post?', answer: 'We send a content calendar for approval each month. You can approve, edit, or request changes before anything goes live.' }
    ]
  },
  {
    id: 'branding-creative-design',
    title: 'Branding & Creative Design',
    icon: Palette,
    shortDesc: 'Stand out with a professional brand your customers trust.',
    benefits: ['Logo & visual identity', 'Brand guidelines', 'Print & digital assets'],
    price: 'From £600',
    heroSubtitle: 'A professional brand identity that builds trust and recognition.',
    includes: ['Logo design (3 concepts)', 'Colour palette & typography', 'Brand guidelines document', 'Business card design', 'Social media brand templates', 'Letterhead & email signature'],
    whoFor: ['New businesses needing a professional identity', 'Companies with inconsistent or amateur branding', 'Businesses rebranding for growth'],
    problemsSolved: ['Your brand looks amateur compared to competitors', 'You have no consistent visual identity', 'Customers don\'t recognise or remember your business'],
    deliverables: ['Final logo in all formats (SVG, PNG, print)', 'Brand guidelines PDF', 'Colour palette & typography specs', 'Business card & letterhead designs', 'Social media templates'],
    timeline: '2-4 weeks from initial briefing to final delivery.',
    pricingGuide: 'Logo design from £600. Full brand identity package from £1,200. Rebranding projects from £1,500.',
    faqs: [
      { question: 'How many logo concepts do I get?', answer: 'We provide 3 initial concepts based on your brief. You choose your favourite, and we refine it with up to 3 rounds of revisions.' },
      { question: 'Do I own the final designs?', answer: 'Yes. Full copyright and all source files are transferred to you upon final payment.' }
    ]
  },
  {
    id: 'website-maintenance-support',
    title: 'Website Maintenance & Support',
    icon: Wrench,
    shortDesc: 'Keep your site fast, secure, and up to date.',
    benefits: ['Regular updates & backups', 'Security monitoring', 'Priority support'],
    price: 'From £150/mo',
    heroSubtitle: 'Reliable maintenance so your website is always working for you.',
    includes: ['Weekly software & plugin updates', 'Daily automated backups', 'Uptime monitoring (99.9% guarantee)', 'Security scanning & patching', 'Monthly performance reports', 'Priority email & phone support'],
    whoFor: ['Any business with a live website', 'Companies without internal IT staff', 'Sites built on WordPress or similar CMS'],
    problemsSolved: ['Your website has been hacked or has security issues', 'You don\'t know if your site is backed up', 'Software updates are breaking things on your site'],
    deliverables: ['Monthly maintenance report', 'Backup verification', 'Security scan results', 'Performance benchmarks', 'Support ticket resolution'],
    timeline: 'Setup in 1-2 days. Ongoing monthly service.',
    pricingGuide: 'Basic maintenance from £150/month. Premium support with priority response from £250/month.',
    faqs: [
      { question: 'What if my site goes down?', answer: 'We monitor your site 24/7. If downtime is detected, we are alerted immediately and begin restoration within minutes.' },
      { question: 'Can I cancel anytime?', answer: 'Yes. Our maintenance plans are month-to-month with no long-term contracts.' }
    ]
  },
  {
    id: 'lead-generation-systems',
    title: 'Lead Generation Systems',
    icon: Target,
    shortDesc: 'Automated systems that bring you qualified leads.',
    benefits: ['Landing page funnels', 'Email automation', 'CRM integration'],
    price: 'Custom quote',
    heroSubtitle: 'Build systems that consistently bring in new business enquiries.',
    includes: ['Landing page design & build', 'Lead capture forms', 'Email automation sequences', 'CRM setup & integration', 'Lead scoring & qualification', 'Conversion tracking'],
    whoFor: ['Businesses relying on word-of-mouth only', 'Companies with no lead pipeline', 'Service businesses wanting consistent enquiries'],
    problemsSolved: ['You have no predictable way to get new leads', 'People visit your site but never get in touch', 'You rely on referrals and have no backup plan'],
    deliverables: ['Custom landing page(s)', 'Lead capture & qualification system', 'Email nurture sequence', 'CRM dashboard setup', 'Monthly lead report'],
    timeline: '3-6 weeks for full system setup.',
    pricingGuide: 'Lead generation systems are custom-quoted based on your industry, goals, and required integrations. Typical projects range from £2,000-£5,000.',
    faqs: [
      { question: 'Do I need a CRM already?', answer: 'No. We can recommend and set up a CRM for you, or integrate with your existing system (HubSpot, Pipedrive, etc.).' },
      { question: 'How many leads can I expect?', answer: 'Results vary by industry and budget. We set realistic targets during the strategy phase and optimise continuously.' }
    ]
  },
  {
    id: 'it-cloud-support',
    title: 'IT & Cloud Support',
    icon: Cloud,
    shortDesc: 'Reliable tech support for your business operations.',
    benefits: ['Cloud migration', 'Help desk support', 'Infrastructure management'],
    price: 'From £200/mo',
    heroSubtitle: 'Expert IT support so technology never holds your business back.',
    includes: ['Cloud setup & migration', 'Email & collaboration tools', 'Help desk & ticketing', 'Network & security setup', 'Software procurement advice', 'Regular system health checks'],
    whoFor: ['Small businesses without in-house IT', 'Teams struggling with technology issues', 'Companies migrating to cloud systems'],
    problemsSolved: ['Technology problems slow down your team', 'You don\'t have anyone to call when things break', 'Your systems are outdated and insecure'],
    deliverables: ['IT infrastructure assessment', 'Cloud migration plan & execution', 'Help desk access', 'Monthly system health report', 'Vendor management'],
    timeline: 'Assessment in 1 week. Migration 2-4 weeks. Ongoing support.',
    pricingGuide: 'IT support plans from £200/month. Cloud migration projects from £1,000. Full managed IT from £400/month.',
    faqs: [
      { question: 'Do you support Mac and Windows?', answer: 'Yes. We support both Mac and Windows environments, as well as common business software like Microsoft 365 and Google Workspace.' },
      { question: 'What are your response times?', answer: 'Critical issues: within 1 hour. Standard requests: within 4 hours during business hours.' }
    ]
  }
];

export default servicesData;
