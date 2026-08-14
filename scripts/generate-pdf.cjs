const PDFDocument = require('C:/Users/Web Nova Crew/AppData/Roaming/npm/node_modules/pdfkit');
const path = require('path');
const fs = require('fs');

// Ensure docs directory exists
const docsDir = path.join(__dirname, '..', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const doc = new PDFDocument({ size: 'A4', layout: 'landscape', margin: 40 });
const output = fs.createWriteStream(path.join(docsDir, 'NovaCrewWeb_Codebase_Documentation.pdf'));
doc.pipe(output);

// Colors
const bgDark = [0.02, 0.04, 0.08];
const accentBlue = [0.23, 0.51, 0.96];
const accentPurple = [0.5, 0.3, 0.8];
const accentGreen = [0.2, 0.7, 0.5];
const accentOrange = [0.9, 0.6, 0.2];
const textLight = [0.85, 0.88, 0.95];
const textMuted = [0.5, 0.6, 0.8];
const boxBg = [0.08, 0.12, 0.18];
const headerBg = [0.06, 0.09, 0.16];

let pageNum = 0;

function drawBackground() {
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(bgDark);
}

function drawHeader(title) {
  doc.rect(0, 0, doc.page.width, 50).fill(headerBg);
  doc.fontSize(16).fillColor(accentBlue).text(title, 40, 15);
  pageNum++;
}

function drawFooter() {
  doc.rect(0, doc.page.height - 25, doc.page.width, 25).fill(headerBg);
  doc.fontSize(8).fillColor(textMuted).text(`NovaCrewWeb Documentation | Page ${pageNum}`, 40, doc.page.height - 15);
}

function drawBox(x, y, w, h, borderColor, borderWidth = 1) {
  doc.rect(x, y, w, h).fill(boxBg).stroke(borderColor, borderWidth);
}

function newPage(title) {
  if (pageNum > 0) doc.addPage();
  drawBackground();
  drawHeader(title);
  drawFooter();
  return { y: doc.page.height - 70 };
}

// ============ PAGE 1: COVER ============
drawBackground();
doc.rect(0, doc.page.height - 140, doc.page.width, 140).fill(headerBg);

doc.fontSize(42).fillColor([1, 1, 1]).text('NovaCrewWeb', 40, doc.page.height - 80);
doc.fontSize(16).fillColor([0.6, 0.7, 0.9]).text('Complete Codebase Documentation', 40, doc.page.height - 50);
doc.fontSize(12).fillColor([0.4, 0.5, 0.7]).text('Website App | AI Automation | Tools | Services', 40, doc.page.height - 32);

doc.moveTo(40, doc.page.height - 160).lineTo(doc.page.width - 40, doc.page.height - 160).stroke([0.2, 0.3, 0.5], 1);

// Purpose Section
doc.fontSize(14).fillColor(accentBlue).text('Purpose & Vision', 40, doc.page.height - 190);
doc.fontSize(10).fillColor(textLight).text(
  'A full-stack web application for NovaCrew - a professional app development company serving India & Kuwait markets. ' +
  'The platform showcases services, generates leads, displays portfolio, and automates business operations through AI-powered tools.',
  40, doc.page.height - 215, { width: 750, lineGap: 3 }
);

// Key Metrics Box
drawBox(40, doc.page.height - 320, 750, 75, accentBlue);
doc.fontSize(12).fillColor(accentBlue).text('Key Metrics', 55, doc.page.height - 285);
doc.fontSize(9).fillColor(textLight).text('7+ Years Experience  |  250+ Apps Delivered  |  India & Kuwait Markets  |  40% Lower Cost', 55, doc.page.height - 305);
doc.fontSize(9).fillColor(textMuted).text('Tech Stack: React 19 | Vite | TypeScript | TailwindCSS | Radix UI | Express | Node.js | PostgreSQL', 55, doc.page.height - 320);

// Tech Stack Section
drawBox(40, doc.page.height - 450, 360, 115, accentPurple);
doc.fontSize(11).fillColor(accentPurple).text('Frontend Technologies', 55, doc.page.height - 415);
doc.fontSize(8).fillColor(textLight).text(
  'React 19.2.0 - UI Library\nVite - Build Tool\nTypeScript - Type Safety\nTailwindCSS - Styling\nRadix UI - Components\nFramer Motion - Animations\nWouter - Routing\nReact Query - Data Fetching\nZod - Validation\nLucide React - Icons',
  55, doc.page.height - 435, { lineGap: 2 }
);

drawBox(420, doc.page.height - 450, 370, 115, accentGreen);
doc.fontSize(11).fillColor(accentGreen).text('Backend & Database', 435, doc.page.height - 415);
doc.fontSize(8).fillColor(textLight).text(
  'Express.js - Server Framework\nNode.js - Runtime\nPostgreSQL - Database\nDrizzle ORM - Type-safe Queries\nNeon Serverless - Database Hosting\nPassport.js - Authentication\nNodemailer - Email Service\nExpress Session - Sessions',
  435, doc.page.height - 435, { lineGap: 2 }
);

// Statistics
drawBox(40, 40, 750, 100, accentOrange);
doc.fontSize(11).fillColor(accentOrange).text('Project Statistics', 55, 55);
doc.fontSize(8).fillColor(textLight).text(
  'Total Pages: 90+ (Home, About, Services, Portfolio, Blog, Contact, Careers, Pricing, Team, etc.)\n' +
  'Service Pages: 14 specialized services | Location Pages: 60+ city pages (India: 25+, Kuwait: 15+, Lucknow: 19)\n' +
  'UI Components: 45+ reusable components | Data Files: 8 static data modules\n' +
  'Routes: Eager loaded (critical) + Lazy loaded (secondary) for performance optimization',
  55, 72, { lineGap: 2 }
);

doc.fontSize(8).fillColor(textMuted).text('Generated: ' + new Date().toLocaleDateString(), 40, 30);
pageNum++;

// ============ PAGE 2: MIND MAP ARCHITECTURE ============
let pos = newPage('MIND MAP: Project Architecture');

// Main root
drawBox(300, pos.y - 30, 200, 50, accentBlue, 2);
doc.fontSize(14).fillColor([1, 1, 1]).text('NovaCrewWeb', 330, pos.y - 18, { width: 140, align: 'center' });
doc.fontSize(8).fillColor(textLight).text('Full-Stack Application', 330, pos.y - 5, { width: 140, align: 'center' });

// Three pillars
doc.moveTo(400, pos.y - 30).lineTo(400, pos.y - 80).stroke(accentBlue, 2);
doc.moveTo(300, pos.y - 80).lineTo(500, pos.y - 80).stroke(accentBlue, 2);
doc.moveTo(300, pos.y - 80).lineTo(300, pos.y - 100).stroke(accentBlue, 2);
doc.moveTo(400, pos.y - 80).lineTo(400, pos.y - 100).stroke(accentBlue, 2);
doc.moveTo(500, pos.y - 80).lineTo(500, pos.y - 100).stroke(accentBlue, 2);

drawBox(230, pos.y - 115, 140, 40, accentBlue);
doc.fontSize(10).fillColor([1, 1, 1]).text('CLIENT', 270, pos.y - 98, { width: 60, align: 'center' });
doc.fontSize(7).fillColor(textLight).text('React/Vite', 270, pos.y - 85, { width: 60, align: 'center' });

drawBox(330, pos.y - 115, 140, 40, accentBlue);
doc.fontSize(10).fillColor([1, 1, 1]).text('SERVER', 370, pos.y - 98, { width: 60, align: 'center' });
doc.fontSize(7).fillColor(textLight).text('Express/Node', 370, pos.y - 85, { width: 60, align: 'center' });

drawBox(430, pos.y - 115, 140, 40, accentBlue);
doc.fontSize(10).fillColor([1, 1, 1]).text('DATABASE', 465, pos.y - 98, { width: 70, align: 'center' });
doc.fontSize(7).fillColor(textLight).text('PostgreSQL', 465, pos.y - 85, { width: 70, align: 'center' });

// Components details
drawBox(40, pos.y - 200, 710, 70, accentPurple);
doc.fontSize(10).fillColor(accentPurple).text('Client Components', 55, pos.y - 175);
doc.fontSize(8).fillColor(textLight).text(
  'Layout: Navbar, Footer | Sections: CTA, FAQ, Testimonials, Stats | SEO: Head, SchemaMarkup | ' +
  'UI: 45+ Components (Button, Input, Dialog, Table, Carousel, Chart, Calendar, etc.) | Widgets: WhatsApp, LiveChat, Badges',
  55, pos.y - 160, { lineGap: 2 }
);

drawBox(40, pos.y - 285, 340, 70, accentGreen);
doc.fontSize(10).fillColor(accentGreen).text('Server Routes', 55, pos.y - 260);
doc.fontSize(8).fillColor(textLight).text(
  'Contact Form Handler | Email Service (Nodemailer)\nSession Management | Static File Serving\nAPI Routes for dynamic content',
  55, pos.y - 245, { lineGap: 2 }
);

drawBox(410, pos.y - 285, 340, 70, accentOrange);
doc.fontSize(10).fillColor(accentOrange).text('Data Models', 425, pos.y - 260);
doc.fontSize(8).fillColor(textLight).text(
  'Users (authentication) | Blog Posts | Case Studies\nJobs/Careers | Team Members | India Cities\nKuwait Cities | Lucknow Areas',
  425, pos.y - 245, { lineGap: 2 }
);

// ============ PAGE 3: AI & AUTOMATION ============
pos = newPage('AI & AUTOMATION TOOLS');

// AI App Development Box
drawBox(40, pos.y - 130, 340, 110, accentPurple, 2);
doc.fontSize(12).fillColor(accentPurple).text('AI App Development', 55, pos.y - 105);
doc.fontSize(8).fillColor(textLight).text(
  '- GPT-4 / GPT-4o Integration\n' +
  '- Claude 3.5 AI Models\n' +
  '- LangChain Framework\n' +
  '- TensorFlow & PyTorch ML\n' +
  '- Hugging Face Models\n' +
  '- Voice AI & Speech Recognition\n' +
  '- Facial Recognition & Biometrics\n' +
  '- LLM-Powered Semantic Search\n' +
  '- Predictive Analytics',
  55, pos.y - 120, { lineGap: 1 }
);

// AI Chatbot Development Box
drawBox(400, pos.y - 130, 340, 110, accentGreen, 2);
doc.fontSize(12).fillColor(accentGreen).text('AI Chatbot Development', 415, pos.y - 105);
doc.fontSize(8).fillColor(textLight).text(
  '- WhatsApp AI Bots\n' +
  '- Website AI Chatbots\n' +
  '- Customer Service Automation\n' +
  '- Sales AI Agents\n' +
  '- Lead Generation Bots\n' +
  '- Multi-language Support (50+)\n' +
  '- CRM Integration\n' +
  '- Analytics Dashboard\n' +
  '- Custom Training on Business Data',
  415, pos.y - 120, { lineGap: 1 }
);

// AI Use Cases Box
drawBox(40, pos.y - 245, 700, 100, accentOrange);
doc.fontSize(11).fillColor(accentOrange).text('AI Use Cases & Industries', 55, pos.y - 220);
doc.fontSize(8).fillColor(textLight).text(
  'E-commerce AI        → Product recommendations, dynamic pricing, inventory forecasting\n' +
  'Healthcare AI        → Symptom analysis, appointment scheduling, patient monitoring\n' +
  'Real Estate AI       → Property valuation, lead scoring, virtual property tours\n' +
  'FinTech AI           → Fraud detection, credit scoring, investment recommendations\n' +
  'Education AI         → Personalized learning, automated grading, tutoring bots\n' +
  'Customer Service AI   → 24/7 chatbots, ticket routing, sentiment analysis',
  55, pos.y - 235, { lineGap: 2 }
);

// Chatbot Types
drawBox(40, pos.y - 360, 700, 100, accentBlue);
doc.fontSize(11).fillColor(accentBlue).text('Chatbot Types Offered', 55, pos.y - 335);
doc.fontSize(8).fillColor(textLight).text(
  'Customer Support Chatbot  → ₹50,000+  |  Ticket creation, FAQ automation, escalation, sentiment analysis\n' +
  'Sales & Lead Gen Chatbot   → ₹75,000+  |  Lead scoring, calendar booking, product recommendations\n' +
  'E-commerce Chatbot         → ₹80,000+  |  Product catalog search, order status, cart recovery\n' +
  'Enterprise AI Assistant    → ₹1,50,000+ |  Knowledge base RAG, document Q&A, IT helpdesk',
  55, pos.y - 350, { lineGap: 2 }
);

// Tech Stack
drawBox(40, pos.y - 435, 700, 60, accentPurple);
doc.fontSize(11).fillColor(accentPurple).text('AI Tech Stack', 55, pos.y - 415);
doc.fontSize(8).fillColor(textLight).text(
  'LLMs: GPT-4, GPT-4o, Claude 3.5 | Frameworks: LangChain, Rasa, Dialogflow, Botpress | ' +
  'ML: TensorFlow, PyTorch, Hugging Face | Backend: Python, FastAPI, Node.js | ' +
  'Vector DB: Pinecone, Weaviate | Integrations: WhatsApp API, Slack, Teams, Shopify',
  55, pos.y - 400, { lineGap: 2 }
);

// ============ PAGE 4: SERVICES OFFERED ============
pos = newPage('SERVICES OFFERED');

// Service boxes - Row 1
drawBox(40, pos.y - 100, 230, 80, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('Mobile Development', 50, pos.y - 80);
doc.fontSize(7).fillColor(textLight).text(
  '• Android (Kotlin)\n• iOS (Swift)\n• Flutter Cross-Platform\n• React Native\n• App UI/UX Design\n• App Store Optimization',
  50, pos.y - 95, { lineGap: 1 }
);

drawBox(285, pos.y - 100, 230, 80, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('Web Development', 295, pos.y - 80);
doc.fontSize(7).fillColor(textLight).text(
  '• React.js & Next.js\n• Laravel / PHP\n• WordPress / Shopify\n• Progressive Web Apps\n• SaaS Platforms\n• Landing Pages',
  295, pos.y - 95, { lineGap: 1 }
);

drawBox(530, pos.y - 100, 210, 80, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('E-Commerce', 540, pos.y - 80);
doc.fontSize(7).fillColor(textLight).text(
  '• Shopify / WooCommerce\n• Multi-vendor Marketplace\n• Payment Gateway\n• Inventory Management\n• B2B / B2C Solutions\n• Delivery Integration',
  540, pos.y - 95, { lineGap: 1 }
);

// Service boxes - Row 2
drawBox(40, pos.y - 195, 230, 80, accentGreen);
doc.fontSize(10).fillColor(accentGreen).text('Real Estate Apps', 50, pos.y - 175);
doc.fontSize(7).fillColor(textLight).text(
  '• Property Marketplace\n• Agent CRM Panel\n• Hyper-local Search\n• Map Integration\n• Admin Dashboard\n• Rental / Sale Listings',
  50, pos.y - 190, { lineGap: 1 }
);

drawBox(285, pos.y - 195, 230, 80, accentGreen);
doc.fontSize(10).fillColor(accentGreen).text('On-Demand Apps', 295, pos.y - 175);
doc.fontSize(7).fillColor(textLight).text(
  '• Food Delivery\n• Grocery Delivery\n• Medicine Delivery\n• Parcel / Logistics\n• Delivery Boy App\n• Store Manager Panel',
  295, pos.y - 190, { lineGap: 1 }
);

drawBox(530, pos.y - 195, 210, 80, accentGreen);
doc.fontSize(10).fillColor(accentGreen).text('ERP & CRM Systems', 540, pos.y - 175);
doc.fontSize(7).fillColor(textLight).text(
  '• Custom Business Software\n• Laravel / Node.js / Python\n• Lead Management\n• HR Management\n• Inventory & Accounting\n• API Integrations',
  540, pos.y - 190, { lineGap: 1 }
);

// Pricing Box
drawBox(40, pos.y - 310, 700, 100, accentOrange);
doc.fontSize(11).fillColor(accentOrange).text('Pricing Overview', 55, pos.y - 290);
doc.fontSize(8).fillColor(textLight).text(
  'INDIA PRICING:\n' +
  '• Starter App: ₹25,000 – ₹60,000 (Basic UI/UX, 5-7 Screens, 7-15 Days)\n' +
  '• Business App: ₹65,000 – ₹1,20,000 (Custom Design, Admin Panel, Payment Gateway, 15-30 Days) [POPULAR]\n' +
  '• AI/Enterprise App: ₹1,20,000 – ₹5,00,000 (AI Features, Multi-platform, Analytics, 30-45 Days)\n\n' +
  'KUWAIT PRICING:\n' +
  '• Mobile App (Basic): 200 – 600 KWD (Arabic Support, KNET Ready)\n' +
  '• E-commerce App: 450 – 1,100 KWD (Multi-vendor, Payment Gateway) [POPULAR]\n' +
  '• Premium AI App: 1,200 – 4,500 KWD (Enterprise Grade, Full Support)',
  55, pos.y - 300, { lineGap: 1 }
);

// ============ PAGE 5: UI COMPONENTS & TOOLS ============
pos = newPage('UI COMPONENTS & TOOLS LIBRARY');

// UI Components Box
drawBox(40, pos.y - 100, 340, 80, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('UI Components (45+)', 50, pos.y - 80);
doc.fontSize(7).fillColor(textLight).text(
  'Button, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Toggle\n' +
  'Badge, Card, Avatar, Alert, Dialog, Drawer, Sheet, Popover, Tooltip\n' +
  'Collapsible, Accordion, Tabs, Table, Pagination, Toast, Sonner, Spinner\n' +
  'Skeleton, Progress, Separator, Kbd, Label, Breadcrumb',
  50, pos.y - 95, { lineGap: 1 }
);

// Advanced Components Box
drawBox(400, pos.y - 100, 340, 80, accentPurple);
doc.fontSize(10).fillColor(accentPurple).text('Advanced Components', 410, pos.y - 80);
doc.fontSize(7).fillColor(textLight).text(
  'Carousel, Chart, Calendar, DatePicker, Command (Search)\n' +
  'Context Menu, Data Table, Dropdown Menu, Hover Card\n' +
  'Input OTP, Item, Menubar, Navigation Menu\n' +
  'Resizable Panels, Scroll Area, Form with Validation',
  410, pos.y - 95, { lineGap: 1 }
);

// Libraries Box
drawBox(40, pos.y - 180, 700, 65, accentGreen);
doc.fontSize(10).fillColor(accentGreen).text('Libraries & Dependencies', 55, pos.y - 160);
doc.fontSize(7).fillColor(textLight).text(
  'UI: Radix UI, TailwindCSS, Framer Motion, Lucide React Icons, Recharts, Shadcn/ui patterns\n' +
  'Routing: Wouter | Forms: React Hook Form + Zod | State: TanStack React Query, Next Themes\n' +
  'Backend: Express, Passport.js, Nodemailer, Drizzle ORM, PostgreSQL, Neon Serverless\n' +
  'Build: Vite, TypeScript, esbuild, Tailwind CSS Vite Plugin',
  55, pos.y - 175, { lineGap: 1 }
);

// SEO Box
drawBox(40, pos.y - 270, 700, 75, accentOrange);
doc.fontSize(10).fillColor(accentOrange).text('SEO & Marketing Tools', 55, pos.y - 250);
doc.fontSize(7).fillColor(textLight).text(
  '• SEO Head Component with meta tags, keywords, Open Graph, Twitter cards\n' +
  '• Schema Markup: LocalBusiness, Breadcrumb, Service, FAQ, Corporate Contact\n' +
  '• Dynamic page titles and descriptions per route | Semantic HTML structure\n' +
  '• robots.txt and sitemap.xml generation | Service Worker for PWA | Vite plugin for meta images',
  55, pos.y - 265, { lineGap: 1 }
);

// Widgets Box
drawBox(40, pos.y - 365, 700, 80, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('Widgets & Features', 55, pos.y - 345);
doc.fontSize(7).fillColor(textLight).text(
  '• WhatsApp Float Button - Click-to-chat widget for instant contact\n' +
  '• Live Chat Widget - Real-time customer chat support\n' +
  '• Social Proof Widget - Testimonials and reviews display\n' +
  '• Certification Badges - Trust indicators and credentials\n' +
  '• Dynamic CTAs - Call-to-action sections with conversion optimization\n' +
  '• FAQ Section - Accordion-style questions | Stats Section - Animated counters\n' +
  '• Testimonials Carousel - Client reviews with photos',
  55, pos.y - 360, { lineGap: 1 }
);

// ============ PAGE 6: LOCATION-BASED PAGES ============
pos = newPage('LOCATION-BASED PAGES (60+ Pages)');

// India Cities
drawBox(40, pos.y - 100, 700, 80, accentBlue, 2);
doc.fontSize(11).fillColor(accentBlue).text('India Cities (25+ Locations)', 55, pos.y - 75);
doc.fontSize(8).fillColor(textLight).text(
  'Tier 1 (Major): Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad\n' +
  'Tier 2 (Growing): Lucknow, Jaipur, Indore, Bhopal, Surat, Vadodara, Kanpur, Chandigarh\n' +
  'Tier 3 (Emerging): Agra, Varanasi, Kochi, Noida, Gurgaon, Ghaziabad, Nagpur, Patna, Raipur, Ranchi',
  55, pos.y - 90, { lineGap: 2 }
);

// Kuwait Cities
drawBox(40, pos.y - 190, 700, 75, accentGreen, 2);
doc.fontSize(11).fillColor(accentGreen).text('Kuwait Cities (15+ Locations)', 55, pos.y - 165);
doc.fontSize(8).fillColor(textLight).text(
  'Kuwait City, Al-Ahmadi, Farwaniya, Hawally, Jahra, Fahaheel, Salmiya, Bayan\n' +
  'Jabriya, Mangaf, Mahboula, Fintas, Mirqab, Mubarak Al-Kabeer, Sabah Al-Salem, Salwa',
  55, pos.y - 180, { lineGap: 2 }
);

// Lucknow Areas
drawBox(40, pos.y - 280, 700, 75, accentOrange, 2);
doc.fontSize(11).fillColor(accentOrange).text('Lucknow Areas (19 Locations)', 55, pos.y - 255);
doc.fontSize(8).fillColor(textLight).text(
  'Gomti Nagar, Gomti Nagar Extension, Hazratganj, Indira Nagar, Aliganj, Alambagh\n' +
  'Jankipuram, Rajajipuram, Mahanagar, Ashiyana, Vrindavan Yojna, Aminabad, Chowk\n' +
  'Charbagh, Lalbagh, Faizabad Road, Sultanpur Road, Shaheed Path, Sushant Golf City',
  55, pos.y - 270, { lineGap: 2 }
);

// Specialized Pages
drawBox(40, pos.y - 370, 700, 75, accentPurple);
doc.fontSize(11).fillColor(accentPurple).text('Specialized Industry Pages (Kuwait)', 55, pos.y - 345);
doc.fontSize(8).fillColor(textLight).text(
  '• Kuwait E-commerce App Development - Multi-vendor, payment gateway, Arabic RTL support\n' +
  '• Kuwait Logistics App Development - Fleet management, tracking, delivery optimization\n' +
  '• Kuwait Real Estate App Development - Property listings, agent CRM, map integration\n' +
  '• Kuwait Restaurant App Development - Online ordering, menu management, delivery integration',
  55, pos.y - 360, { lineGap: 1 }
);

// SEO Benefit
drawBox(40, pos.y - 445, 700, 60, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('Hyper-Local SEO Strategy', 55, pos.y - 425);
doc.fontSize(8).fillColor(textLight).text(
  'Each location page is optimized for local SEO with city-specific content, keywords, testimonials, and service details.\n' +
  'This enables ranking for searches like "app development in [city]" or "mobile app development near me".',
  55, pos.y - 440, { lineGap: 1 }
);

// ============ PAGE 7: BUSINESS POTENTIAL ============
pos = newPage('PROJECT POTENTIAL & BUSINESS VALUE');

// Market Reach
drawBox(40, pos.y - 100, 700, 80, accentBlue, 2);
doc.fontSize(11).fillColor(accentBlue).text('Market Reach & Expansion Potential', 55, pos.y - 75);
doc.fontSize(8).fillColor(textLight).text(
  '• Dual-market presence: India (1.4B+ population) & Kuwait (4.5M+ population, high GDP per capita)\n' +
  '• 60+ location-specific landing pages for hyper-local SEO targeting\n' +
  '• Multi-language support (English, Hindi, Arabic) with RTL support for Arabic\n' +
  '• Currency-aware pricing display (INR and KWD) with localized payment gateways (KNET, Razorpay)\n' +
  '• Growing digital adoption in GCC region post-pandemic, increasing demand for app development services',
  55, pos.y - 90, { lineGap: 2 }
);

// Revenue Streams
drawBox(40, pos.y - 190, 700, 75, accentGreen, 2);
doc.fontSize(11).fillColor(accentGreen).text('AI & Automation Revenue Streams', 55, pos.y - 165);
doc.fontSize(8).fillColor(textLight).text(
  '• AI chatbot development services (₹50K - ₹3L+ per project) with subscription maintenance options\n' +
  '• SaaS product potential: AI chatbot platform, predictive analytics tools, automation agents\n' +
  '• Enterprise AI agent development for large organizations with long-term contracts\n' +
  '• Voice AI and multilingual chatbot solutions for tourism, healthcare, and government sectors',
  55, pos.y - 180, { lineGap: 2 }
);

// Competitive Advantages
drawBox(40, pos.y - 280, 700, 75, accentOrange, 2);
doc.fontSize(11).fillColor(accentOrange).text('Competitive Advantages', 55, pos.y - 255);
doc.fontSize(8).fillColor(textLight).text(
  '• 7+ years industry experience with 250+ apps delivered across multiple verticals\n' +
  '• 40% lower development costs compared to agencies in US, UK, and Gulf countries\n' +
  '• 100% on-time delivery guarantee with milestone-based payment structure\n' +
  '• 60 days free post-launch support | Complete AI integration capabilities (GPT-4, Claude, TensorFlow)\n' +
  '• One-stop solution: Mobile, Web, AI, ERP, E-commerce - reducing need for multiple vendors',
  55, pos.y - 270, { lineGap: 2 }
);

// Technical Excellence
drawBox(40, pos.y - 370, 700, 75, accentPurple);
doc.fontSize(11).fillColor(accentPurple).text('Technical Excellence', 55, pos.y - 345);
doc.fontSize(8).fillColor(textLight).text(
  '• Modern tech stack: React 19, TypeScript, Vite for 10x faster performance than CRA\n' +
  '• Scalable architecture with lazy loading and code splitting for optimal bundle sizes\n' +
  '• SEO-optimized with schema markup, semantic HTML, and dynamic meta tags\n' +
  '• PWA-ready with service workers for offline capabilities and app-like experience\n' +
  '• Database: PostgreSQL with Drizzle ORM for type-safe queries and migrations',
  55, pos.y - 360, { lineGap: 2 }
);

// ============ PAGE 8: DIRECTORY STRUCTURE ============
pos = newPage('DIAGRAM OUTLINE: Directory Structure');

// Root Structure
drawBox(40, pos.y - 95, 700, 75, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('Root Structure', 55, pos.y - 70);
doc.fontSize(7).fillColor(textLight).font('Courier').text(
  'NovaCrewWeb/\n' +
  '├── client/               (React Frontend - Vite + React 19)\n' +
  '├── server/               (Express Backend - API Routes)\n' +
  '├── shared/               (Shared Types/Schemas - Drizzle ORM)\n' +
  '├── script/               (Build Scripts - Static Generation)\n' +
  '├── docs/                 (Documentation)\n' +
  '├── package.json          (Root Dependencies - type: "module")\n' +
  '├── vite.config.ts       (Vite Configuration)\n' +
  '└── tsconfig.json        (TypeScript Configuration)',
  55, pos.y - 85, { lineGap: 1 }
);

// client/src Structure
drawBox(40, pos.y - 200, 700, 90, accentGreen);
doc.fontSize(10).fillColor(accentGreen).text('client/src Structure', 55, pos.y - 175);
doc.fontSize(7).fillColor(textLight).font('Courier').text(
  'client/src/\n' +
  '├── components/           (UI & Layout)\n' +
  '│   ├── layout/           (Navbar, Footer)\n' +
  '│   ├── sections/         (CTA, FAQ, Testimonials, Stats, FounderBio)\n' +
  '│   ├── seo/              (Head, SchemaMarkup)\n' +
  '│   ├── templates/        (IndiaCityPage, KuwaitCityPage)\n' +
  '│   ├── ui/               (45+ Radix-based Components)\n' +
  '│   └── widgets/          (WhatsAppFloat, LiveChat, SocialProof, Badges)\n' +
  '├── pages/                (Route Pages)\n' +
  '│   ├── locations/       (60+ India/Kuwait/Lucknow Pages)\n' +
  '│   └── services/         (14 Service Pages)\n' +
  '├── data/                 (8 Static Data Files)\n' +
  '├── hooks/                (useMobile, useToast)\n' +
  '├── lib/                  (queryClient, utils)\n' +
  '└── App.tsx               (Main Router with Lazy Loading)',
  55, pos.y - 185, { lineGap: 1 }
);

// server Structure
drawBox(40, pos.y - 290, 340, 75, accentOrange);
doc.fontSize(10).fillColor(accentOrange).text('server/ Structure', 55, pos.y - 265);
doc.fontSize(7).fillColor(textLight).font('Courier').text(
  'server/\n' +
  '├── index.ts              (Express Entry)\n' +
  '├── routes.ts             (API Routes)\n' +
  '├── storage.ts            (Session/Storage)\n' +
  '├── contact-email.ts      (Nodemailer)\n' +
  '├── vite.ts               (Vite Dev Server)\n' +
  '└── load-env.ts           (Env Variables)',
  55, pos.y - 275, { lineGap: 1 }
);

// shared Structure
drawBox(400, pos.y - 290, 340, 75, accentPurple);
doc.fontSize(10).fillColor(accentPurple).text('shared/ Structure', 415, pos.y - 265);
doc.fontSize(7).fillColor(textLight).font('Courier').text(
  'shared/\n' +
  '└── schema.ts             (Drizzle ORM Schema)\n' +
  '    - users table\n' +
  '    - insertUserSchema\n' +
  '    - Type exports',
  415, pos.y - 275, { lineGap: 1 }
);

// Key Files
drawBox(40, pos.y - 380, 700, 75, accentBlue);
doc.fontSize(10).fillColor(accentBlue).text('Key Configuration Files', 55, pos.y - 355);
doc.fontSize(7).fillColor(textLight).font('Courier').text(
  'package.json       Dependencies & npm scripts (dev, build, start, check, db:push)\n' +
  'vite.config.ts     Vite bundler with plugins (react, tailwind), SSR settings\n' +
  'tsconfig.json      TypeScript paths (@/ alias), strict mode enabled\n' +
  'tailwind.config    Custom colors, fonts, animations for NovaCrew branding\n' +
  'drizzle.config.ts  Database ORM configuration for PostgreSQL\n' +
  'components.json    Shadcn/ui component registry paths\n' +
  'postcss.config.js  CSS post-processing with autoprefixer',
  55, pos.y - 370, { lineGap: 2 }
);

// Finalize
doc.end();
console.log('PDF generated successfully: docs/NovaCrewWeb_Codebase_Documentation.pdf');
console.log('Total pages: ' + pageNum);
