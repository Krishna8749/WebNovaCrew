import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/SchemaMarkup";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Get answers to the most common questions about our web and app development services.",
  faqs,
  className = ""
}: FAQSectionProps) {
  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

// Pre-built FAQ data for different pages
export const homeFAQs: FAQItem[] = [
  {
    question: "Why should I choose Web Nova Crew over other web development companies in India?",
    answer: "Three reasons: Results, Speed, and Transparency. Unlike agencies that just build websites, we build revenue machines. Our clients see an average 300% increase in conversions. We deliver 40% faster than industry average (3-4 months vs 6+ months). And we're 100% transparent—no hidden costs, weekly updates, and you own everything we build. Plus, we're rated 4.9/5 on Clutch with 97% client retention. We don't just promise; we prove it."
  },
  {
    question: "How much does a website cost? I've seen quotes from ₹10,000 to ₹10 lakhs.",
    answer: "Here's the truth: cheap websites cost you more in the long run. A ₹10,000 website won't rank on Google, won't convert visitors, and will need rebuilding in 6 months. Our websites start at ₹50,000 for basic sites and ₹1.5-5 lakhs for custom solutions—but they generate 10-50x ROI. One client invested ₹3 lakhs and generated ₹2 crore in the first year. We offer free consultations to give you an exact quote based on your goals."
  },
  {
    question: "How long will my website take? I need it fast.",
    answer: "We understand urgency. A basic website: 2-3 weeks. E-commerce store: 4-6 weeks. Custom web app: 2-4 months. Mobile app: 3-5 months. We've delivered projects in as little as 10 days for urgent launches. During our free consultation, we'll give you an exact timeline and stick to it—or you get a discount. No excuses, no delays."
  },
  {
    question: "Will my website actually rank on Google?",
    answer: "Every website we build is SEO-optimized from the code level up. We don't just add meta tags—we optimize site speed (under 2 seconds), implement schema markup, ensure mobile-first design, and structure content for featured snippets. Our clients typically see Page 1 rankings within 3-6 months. We've helped 50+ businesses dominate their keywords. If SEO is critical for you, we also offer dedicated SEO services with guaranteed results."
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "You won't be—because we don't finalize anything without your approval. Our process includes unlimited revisions during the design phase. We show you wireframes, then mockups, then prototypes. You approve each stage before we move forward. In 50+ projects, we've never had a client unhappy with the final design. And if somehow you're not satisfied, we'll keep working until you are—that's our guarantee."
  },
  {
    question: "Do you provide support after the website is live?",
    answer: "Yes—and this is where most agencies fail. We offer 24/7 emergency support (30-minute response for critical issues), monthly maintenance packages starting at ₹10,000, and a dedicated account manager for ongoing needs. 97% of our clients stay with us for ongoing support because we treat your website like it's our own. Your success is our success."
  }
];

export const servicesFAQs: FAQItem[] = [
  {
    question: "What types of websites can you build?",
    answer: "We build all types of websites including corporate websites, e-commerce stores, SaaS platforms, web applications, portfolio sites, landing pages, blogs, educational platforms, healthcare portals, real estate websites, and custom enterprise solutions. Our expertise spans across industries from startups to Fortune 500 companies."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, website redesign is one of our core services. We analyze your current site's performance, identify areas for improvement, and create a modern, SEO-optimized design that improves user experience and conversion rates. We ensure smooth migration with zero downtime and preserve your existing SEO rankings."
  },
  {
    question: "Do you develop native or hybrid mobile apps?",
    answer: "We specialize in both. For most projects, we recommend Flutter for cross-platform development as it provides native-like performance for both iOS and Android from a single codebase, reducing development time and cost by 40%. For projects requiring maximum platform-specific features, we also offer native iOS (Swift) and Android (Kotlin) development."
  },
  {
    question: "What is your web development process?",
    answer: "Our process includes: 1) Discovery & Planning - understanding your goals and requirements, 2) UI/UX Design - creating wireframes and visual designs, 3) Development - coding with best practices, 4) Testing - rigorous QA across devices, 5) Launch - deployment and go-live, 6) Support - ongoing maintenance and optimization. We follow Agile methodology with weekly updates."
  },
  {
    question: "Can you integrate third-party APIs and services?",
    answer: "Yes, we have extensive experience integrating payment gateways (Razorpay, Stripe, PayPal), CRM systems (Salesforce, HubSpot), marketing tools (Mailchimp, SendGrid), analytics platforms, social media APIs, shipping providers, and custom enterprise APIs. We ensure secure and efficient integrations."
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "Yes, we offer complete hosting solutions on AWS, Google Cloud, or Vercel based on your needs. We handle domain registration, SSL certificates, CDN setup, email configuration, and server management. Our hosting packages include 99.9% uptime guarantee and daily backups."
  }
];

export const aboutFAQs: FAQItem[] = [
  {
    question: "When was Web Nova Crew founded?",
    answer: "Web Nova Crew was founded in 2023 in Mohali, India. In just a short time, we've grown to a team of 20+ specialists and have successfully delivered 40+ projects, generating over $3M in revenue for our clients. Our rapid growth is a testament to our commitment to excellence and client satisfaction."
  },
  {
    question: "Where is Web Nova Crew located?",
    answer: "Our headquarters is located at 2nd Floor, Shree Plaza Complex, Vikas Nagar, Ring Road, Lucknow 226022, Uttar Pradesh, India. While we're based in India, we serve clients globally including the USA, UK, Australia, Canada, and the Middle East. We offer both in-person and remote collaboration options."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including Healthcare, Real Estate, E-commerce, FinTech, Education, Travel & Hospitality, Manufacturing, Retail, Legal Services, and Startups. Our versatile team adapts to industry-specific requirements and compliance standards."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with businesses of all sizes - from early-stage startups to established enterprises. For startups, we offer MVP development packages and flexible payment terms. We've helped numerous startups launch successfully and scale their digital presence."
  },
  {
    question: "What sets your team apart from other agencies?",
    answer: "Our team combines technical excellence with business acumen. Every developer is trained in SEO best practices, ensuring your website ranks well from day one. We maintain a 100% client satisfaction rate, offer transparent pricing with no hidden costs, and provide dedicated project managers for seamless communication."
  }
];
