import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Shield, Eye, Lock, Database, Cookie, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-lime-400" />
            <span className="text-lime-400 text-sm font-medium">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            At Web Nova Crew, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <p className="text-slate-500 mt-4">Last Updated: December 7, 2025</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-lime-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-lime-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Introduction</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Web Nova Crew ("we," "our," or "us") operates the website webnovacrew.com (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms of Service.
              </p>
            </div>

            {/* Information Collection */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Data</h3>
              <p className="text-slate-400 leading-relaxed">
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="text-slate-400 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>First name and last name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Phone number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Address, State, Province, ZIP/Postal code, City</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Cookies and Usage Data</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Usage Data</h3>
              <p className="text-slate-400 leading-relaxed">
                We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Tracking & Cookies Data</h3>
              <p className="text-slate-400 leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </div>

            {/* Use of Data */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">How We Use Your Data</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Web Nova Crew uses the collected data for various purposes:
              </p>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To provide and maintain our Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To notify you about changes to our Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To allow you to participate in interactive features of our Service when you choose to do so</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To provide customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To gather analysis or valuable information so that we can improve our Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To monitor the usage of our Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To detect, prevent, and address technical issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>To provide you with news, special offers, and general information about other goods, services, and events which we offer</span>
                </li>
              </ul>
            </div>

            {/* Google AdSense & Analytics */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Advertising & Analytics</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-4 mb-3">Google AdSense</h3>
              <p className="text-slate-400 leading-relaxed">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300">www.aboutads.info</a>.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Google Analytics</h3>
              <p className="text-slate-400 leading-relaxed">
                We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website. Google's privacy policy is available at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300">https://policies.google.com/privacy</a>.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Third-Party Cookies</h3>
              <p className="text-slate-400 leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third-party services have their own privacy policies addressing how they use such information.
              </p>
            </div>

            {/* Data Security */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Data Security</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information, including:
              </p>
              <ul className="text-slate-400 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>SSL/TLS encryption for data transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Regular security assessments and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Access controls and authentication measures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Secure data storage practices</span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Your Data Protection Rights</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Depending on your location, you may have the following data protection rights:
              </p>
              <ul className="text-slate-400 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span><strong className="text-white">Right to Access:</strong> You have the right to request copies of your personal data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span><strong className="text-white">Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span><strong className="text-white">Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span><strong className="text-white">Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span><strong className="text-white">Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</span>
                </li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-slate-400 leading-relaxed">
                Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-400 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-r from-lime-500/10 to-emerald-500/10 border border-lime-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:info@webnovacrew.com" className="text-white hover:text-lime-400">info@webnovacrew.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <a href="tel:+919872364476" className="text-white hover:text-lime-400">+91 98723 64476</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lime-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Address</p>
                    <p className="text-white">2nd Floor, Shree Plaza Complex, Vikas Nagar, Ring Road, Lucknow 226022, UP, India</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
