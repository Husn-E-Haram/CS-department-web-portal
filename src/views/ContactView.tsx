import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, AlertCircle, Building2, HelpCircle } from 'lucide-react';

interface Props {
  prefilledEmail?: string;
  prefilledSubject?: string;
}

export const ContactView: React.FC<Props> = ({
  prefilledEmail = '',
  prefilledSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(prefilledEmail);
  const [subject, setSubject] = useState(prefilledSubject);
  const [category, setCategory] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!email.trim()) {
      errs.email = 'Please provide your contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!subject.trim()) errs.subject = 'Please specify the subject of your message.';
    if (!message.trim()) {
      errs.message = 'Please type your inquiry or message.';
    } else if (message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setCategory('General Inquiry');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#EDE2D1] pb-8 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
          Reach Our Administration & Faculty
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27]">
          Contact Department
        </h1>
        <p className="text-base sm:text-lg text-[#332D27]/80 max-w-3xl font-sans leading-relaxed">
          Have questions regarding academic programs, admissions criteria, research collaborations, or campus visits? We are here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Contact Cards & Campus Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs">
            <h2 className="text-xl font-serif font-bold text-[#332D27]">
              Department Office Information
            </h2>

            <div className="space-y-4 text-xs text-[#332D27]">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8F4EC] rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#8A6748]" />
                </div>
                <div>
                  <span className="font-bold text-[#8A6748] uppercase tracking-wider block">Campus Address</span>
                  <p className="text-[#332D27]/90 leading-relaxed mt-0.5">
                    Department of Computer Science, Academic Block 2, Government College Women University, Kutchehry Road, Sialkot 51310, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8F4EC] rounded-lg shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#8A6748]" />
                </div>
                <div>
                  <span className="font-bold text-[#8A6748] uppercase tracking-wider block">Email Directory</span>
                  <p className="font-mono text-[#332D27] mt-0.5">cs@gcwus.edu.pk</p>
                  <p className="text-[11px] text-[#8A6748]">chairperson.cs@gcwus.edu.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8F4EC] rounded-lg shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#8A6748]" />
                </div>
                <div>
                  <span className="font-bold text-[#8A6748] uppercase tracking-wider block">Telephone & Extensions</span>
                  <p className="font-mono text-[#332D27] mt-0.5">+92 (52) 9250137 - Ext: 124 / 125</p>
                  <p className="text-[11px] text-[#8A6748]">Fax: +92 (52) 9250138</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#F8F4EC] rounded-lg shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#8A6748]" />
                </div>
                <div>
                  <span className="font-bold text-[#8A6748] uppercase tracking-wider block">Administrative Hours</span>
                  <p className="text-[#332D27] mt-0.5">Monday to Friday: 08:30 AM – 04:00 PM</p>
                  <p className="text-[11px] text-[#8A6748]">Closed on Saturdays, Sundays & Gazetted Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Map & Directions Guide */}
          <div className="bg-[#EDE2D1]/40 border border-[#B5A18A]/30 rounded-xl p-6 space-y-3">
            <h3 className="text-sm font-serif font-bold text-[#332D27] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#8A6748]" />
              <span>Campus Navigation & Visitor Gate</span>
            </h3>
            <p className="text-xs text-[#332D27]/80 leading-relaxed font-sans">
              Visitors are requested to enter via Gate 1 (Kutchehry Road Main Gate). Identity verification and visitor passes are issued at the Security Desk. The Computer Science Department is located on the 1st floor of the Science Block.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 sm:p-10 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
                Direct Message
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#332D27] mt-1">
                Send an Inquiry to the Department Office
              </h2>
              <p className="text-xs text-[#332D27]/75 mt-0.5">
                All fields marked with an asterisk (*) are required.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-[#EDE2D1]/60 border border-[#85836A] rounded-xl text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#85836A] text-[#FFFDF8] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#332D27]">Message Received</h3>
                  <p className="text-xs text-[#332D27]/85 mt-1 leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your message regarding <em>"{subject}"</em> has been logged in this demonstration interface. In production, this dispatches directly to the departmental coordination desk.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-[#8A6748] text-[#FFFDF8] rounded-lg text-xs font-semibold hover:bg-[#725439] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(errors).length > 0 && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>Please correct highlighted fields before sending.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#332D27] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Sana Javed"
                      className={`w-full px-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                        errors.name ? 'border-red-500' : 'border-[#B5A18A]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#332D27] mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                        errors.email ? 'border-red-500' : 'border-[#B5A18A]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#332D27] mb-1">Inquiry Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Faculty & Research">Faculty & Research</option>
                      <option value="Student Affairs & Verification">Student Affairs & Verification</option>
                      <option value="Alumni Liaison">Alumni Liaison</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#332D27] mb-1">Subject *</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. Inquiry regarding BSCS Lab Access"
                      className={`w-full px-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                        errors.subject ? 'border-red-500' : 'border-[#B5A18A]'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">Message Body *</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Write your detailed query or message here..."
                    className={`w-full px-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                      errors.message ? 'border-red-500' : 'border-[#B5A18A]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Department</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
