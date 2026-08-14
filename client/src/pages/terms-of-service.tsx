import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FileText, Scale, AlertTriangle, CreditCard, Shield, Ban, Mail, Phone, MapPin } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-2 mb-6">
            <FileText className="w-4 h-4 text-lime-400" />
            <span className="text-lime-400 text-sm font-medium">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Please read these Terms of Service carefully before using our website and services.
          </p>
          <p className="text-slate-500 mt-4">Last Updated: December 7, 2025</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Agreement */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-lime-500/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-lime-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Agreement to Terms</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the Web Nova Crew website located at webnovacrew.com (the "Service") operated by Web Nova Crew ("us," "we," or "our").
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </div>

            {/* Services Description */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Description of Services</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Web Nova Crew provides custom web development, mobile app development, UI/UX design, and digital marketing services. Our services include but are not limited to:
              </p>
              <ul className="text-slate-400 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Custom website design and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Mobile application development (iOS and Android)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>E-commerce solutions and integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>UI/UX design services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Digital marketing and branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Website maintenance and support</span>
                </li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">User Responsibilities</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                When using our Service, you agree to:
              </p>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Provide accurate and complete information when contacting us or using our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Use the Service only for lawful purposes and in accordance with these Terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Not use the Service in any way that could damage, disable, or impair the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Not attempt to gain unauthorized access to any part of the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Not use any automated system to access the Service without our permission</span>
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Intellectual Property Rights</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Web Nova Crew and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Web Nova Crew. All other trademarks, product names, and logos appearing on the Service are the property of their respective owners.
              </p>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Client Work</h3>
              <p className="text-slate-400 leading-relaxed">
                Upon full payment for services rendered, clients receive ownership rights to the deliverables as specified in their individual service agreement. Web Nova Crew retains the right to display completed work in our portfolio unless otherwise agreed in writing.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Payment Terms</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Payment terms for our services are as follows:
              </p>
              <ul className="text-slate-400 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>A deposit may be required before work commences, as specified in your project proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Payment schedules are outlined in individual service agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Late payments may result in project delays or suspension of services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>All prices are quoted in Indian Rupees (INR) unless otherwise specified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Applicable taxes will be added to the quoted prices as per Indian law</span>
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Limitation of Liability</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                In no event shall Web Nova Crew, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="text-slate-400 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Your access to or use of or inability to access or use the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Any conduct or content of any third party on the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Any content obtained from the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2.5 shrink-0"></span>
                  <span>Unauthorized access, use, or alteration of your transmissions or content</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <p className="text-slate-400 leading-relaxed">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Web Nova Crew, its subsidiaries, affiliates, and its licensors do not warrant that the Service will function uninterrupted, secure, or available at any particular time or location; any errors or defects will be corrected; the Service is free of viruses or other harmful components; or the results of using the Service will meet your requirements.
              </p>
            </div>

            {/* Termination */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold m-0">Termination</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-slate-400 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Lucknow, Uttar Pradesh, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-to-r from-lime-500/10 to-emerald-500/10 border border-lime-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
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
