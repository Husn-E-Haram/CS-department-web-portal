import React, { useState } from 'react';
import { 
  GraduationCap, CheckCircle2, AlertCircle, FileText, Calendar, 
  HelpCircle, ChevronDown, ChevronUp, Send, Printer, RotateCcw, 
  Sparkles, Check, Phone, Mail, User, BookOpen 
} from 'lucide-react';
import { FAQS } from '../data/departmentData';

interface Props {
  preSelectedProgram?: string;
}

export const AdmissionsView: React.FC<Props> = ({ preSelectedProgram = 'bscs' }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(preSelectedProgram);
  const [educationBg, setEducationBg] = useState('FSC');
  const [marksPercentage, setMarksPercentage] = useState('');
  const [message, setMessage] = useState('');
  const [hasAgreed, setHasAgreed] = useState(false);

  // Form Validation & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    refNumber: string;
    fullName: string;
    email: string;
    phone: string;
    program: string;
    educationBg: string;
    marks: string;
    date: string;
  } | null>(null);

  // FAQs Accordion State
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    } else if (!/^(\+92|0)?[0-9]{10,12}$/.test(phone.trim().replace(/[-\s]/g, ''))) {
      errs.phone = 'Please provide a valid Pakistani/international phone number (e.g. 0300-1234567).';
    }

    if (!program) {
      errs.program = 'Please select your target degree program.';
    }

    if (!educationBg) {
      errs.educationBg = 'Please specify your educational background.';
    }

    if (!marksPercentage.trim()) {
      errs.marksPercentage = 'Please enter your obtained marks or percentage.';
    } else {
      const num = parseFloat(marksPercentage);
      if (isNaN(num) || num < 0 || num > 100) {
        errs.marksPercentage = 'Please enter a valid percentage between 0 and 100.';
      }
    }

    if (!hasAgreed) {
      errs.hasAgreed = 'You must acknowledge the verification terms.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate server processing
    setTimeout(() => {
      const generatedRef = `GCWUS-CS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        refNumber: generatedRef,
        fullName,
        email,
        phone,
        program: program === 'bscs' ? 'BS Computer Science' : program === 'mscs' ? 'MS Computer Science' : program === 'bsit' ? 'BS Information Technology' : 'BS Software Engineering',
        educationBg,
        marks: `${marksPercentage}%`,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 700);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setProgram('bscs');
    setEducationBg('FSC');
    setMarksPercentage('');
    setMessage('');
    setHasAgreed(false);
    setErrors({});
    setSubmissionSuccess(false);
    setSubmittedData(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-[#EDE2D1] pb-8 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
          Admissions Fall 2026
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27]">
          Admissions & Enrollment
        </h1>
        <p className="text-base sm:text-lg text-[#332D27]/80 max-w-3xl font-sans leading-relaxed">
          Join Government College Women University Sialkot. Explore our entry criteria, required documents, merit calculation, and submit a demonstration application inquiry.
        </p>
      </div>

      {/* ================= IMPORTANT DATES STRIP ================= */}
      <section className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A6748]">
          <Calendar className="w-4 h-4" />
          <span>Fall 2026 Admission Schedule & Milestones</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          {[
            { date: 'Oct 01 – Nov 10, 2026', event: 'Application Submission Window', note: 'Online submission active' },
            { date: 'Nov 14, 2026', event: 'Departmental Admission Test (MSCS)', note: 'Auditorium Hall 1' },
            { date: 'Nov 20, 2026', event: 'First Merit List Publication', note: 'Notice Board & Portal' },
            { date: 'Nov 28, 2026', event: 'Orientation & Class Commencement', note: 'Fall Semester Starts' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-[#F8F4EC] rounded-xl border border-[#EDE2D1] space-y-1">
              <span className="text-xs font-bold text-[#8A6748] font-mono block">{item.date}</span>
              <p className="text-xs sm:text-sm font-bold text-[#332D27]">{item.event}</p>
              <span className="text-[11px] text-[#332D27]/70 block">{item.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STEP-BY-STEP ADMISSION PROCESS ================= */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
            Step-by-Step Procedure
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
            Application & Selection Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Eligibility Check', desc: 'Verify intermediate or bachelor’s percentage (min. 50%) and subject combinations.' },
            { step: '02', title: 'Submit Inquiry', desc: 'Fill the demonstration online form below or visit the university admission desk.' },
            { step: '03', title: 'Documents Review', desc: 'Submit attested copies of certificates, CNIC/B-Form, and character certificate.' },
            { step: '04', title: 'Merit List', desc: 'Check departmental merit rankings published per HEC and university guidelines.' },
            { step: '05', title: 'Fee Deposit', desc: 'Submit the fee voucher in authorized bank branches to secure semester enrollment.' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-2 shadow-2xs">
              <span className="text-2xl font-serif font-bold text-[#8A6748]">{item.step}</span>
              <h4 className="text-sm font-bold text-[#332D27]">{item.title}</h4>
              <p className="text-xs text-[#332D27]/80 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ELIGIBILITY & REQUIRED DOCUMENTS ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Eligibility Requirements */}
        <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A6748]">
            <GraduationCap className="w-4 h-4" />
            <span>Eligibility Criteria Summary</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-[#332D27]">
            Degree Entry Benchmarks
          </h3>

          <div className="space-y-3 pt-1 text-xs">
            <div className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] space-y-1">
              <span className="font-bold text-[#8A6748]">BS Computer Science (BSCS)</span>
              <p className="text-[#332D27]/85">
                Minimum 50% marks in F.Sc. Pre-Engineering, ICS (Physics/Comp Science), or General Science with Mathematics. A-Level applicants require IBCC equivalence.
              </p>
            </div>
            <div className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] space-y-1">
              <span className="font-bold text-[#8A6748]">MS Computer Science (MSCS)</span>
              <p className="text-[#332D27]/85">
                16 years of computing education (BSCS/BSIT/BSSE) with min. 2.50/4.00 CGPA (semester) or 50% marks (annual), plus qualifying entry test.
              </p>
            </div>
            <div className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] space-y-1">
              <span className="font-bold text-[#8A6748]">BS Software Engineering & IT</span>
              <p className="text-[#332D27]/85">
                Minimum 50% marks in Intermediate with Mathematics or equivalent qualification.
              </p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A6748]">
            <FileText className="w-4 h-4" />
            <span>Required Verification Documents</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-[#332D27]">
            Checklist for Applicants
          </h3>

          <div className="space-y-2 pt-1">
            {[
              'Matriculation / O-Level Certificate and Detailed Marks Sheet (DMC) - 3 attested copies',
              'Intermediate / HSSC / F.Sc / ICS / A-Level Result Card - 3 attested copies',
              'CNIC or NADRA B-Form copy of applicant and Father / Guardian',
              'Character Certificate issued by the Head of the last attended institution',
              '4 passport-size photographs with light blue background',
              'Domicile Certificate of candidate or parent (Punjab Province)',
              'Equivalence certificate from IBCC (for foreign certificates / O-Level & A-Level)'
            ].map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#332D27]">
                <CheckCircle2 className="w-4 h-4 text-[#85836A] shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKING ADMISSION INQUIRY / APPLICATION FORM ================= */}
      <section className="bg-[#FFFDF8] border-2 border-[#8A6748]/30 rounded-2xl p-6 sm:p-10 shadow-md">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8A6748] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Demonstration Application & Inquiry System</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27]">
              Admission Inquiry & Demonstration Form
            </h2>
            <p className="text-xs sm:text-sm text-[#332D27]/80 mt-1 leading-relaxed font-sans">
              Test the interactive admissions workflow. Every field features client-side validation for empty values, email syntax, phone format, and percentage constraints.
            </p>
          </div>

          {/* Submission Success Confirmation Card */}
          {submissionSuccess && submittedData ? (
            <div className="p-6 sm:p-8 bg-[#EDE2D1]/60 border border-[#85836A] rounded-xl space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#85836A] text-[#FFFDF8] flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#332D27]">Inquiry Registered Successfully!</h3>
                  <p className="text-xs text-[#8A6748] font-semibold">
                    Reference ID: <span className="font-mono text-[#332D27]">{submittedData.refNumber}</span>
                  </p>
                </div>
              </div>

              {/* Review summary */}
              <div className="bg-[#FFFDF8] p-5 rounded-lg border border-[#B5A18A]/30 text-xs space-y-2">
                <h4 className="font-bold text-[#8A6748] uppercase tracking-wider text-[11px] border-b border-[#EDE2D1] pb-1.5">
                  Summary of Submitted Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-[#8A6748] font-medium">Applicant Name:</span>
                    <p className="font-semibold text-[#332D27]">{submittedData.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[#8A6748] font-medium">Applied Program:</span>
                    <p className="font-semibold text-[#332D27]">{submittedData.program}</p>
                  </div>
                  <div>
                    <span className="text-[#8A6748] font-medium">Email Address:</span>
                    <p className="font-semibold text-[#332D27] font-mono">{submittedData.email}</p>
                  </div>
                  <div>
                    <span className="text-[#8A6748] font-medium">Phone Number:</span>
                    <p className="font-semibold text-[#332D27] font-mono">{submittedData.phone}</p>
                  </div>
                  <div>
                    <span className="text-[#8A6748] font-medium">Background & Marks:</span>
                    <p className="font-semibold text-[#332D27]">{submittedData.educationBg} ({submittedData.marks})</p>
                  </div>
                  <div>
                    <span className="text-[#8A6748] font-medium">Registration Date:</span>
                    <p className="font-semibold text-[#332D27]">{submittedData.date}</p>
                  </div>
                </div>
              </div>

              {/* Academic Disclaimer Notice */}
              <div className="p-3 bg-[#F8F4EC] rounded border border-[#EDE2D1] text-[11px] text-[#8A6748] leading-relaxed">
                <strong>Important Notice:</strong> This is an interactive frontend demonstration for the Department of Computer Science at GCWUS. No official university records have been modified, and this receipt is for evaluation testing.
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#FFFDF8] border border-[#B5A18A] hover:bg-[#EDE2D1] text-[#332D27] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#8A6748]" />
                  <span>Print Application Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-2 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error Summary Banner if errors exist */}
              {Object.keys(errors).length > 0 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Please resolve the following before submitting:</span>
                    <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px]">
                      {Object.values(errors).map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Candidate Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Mahnoor Fatima"
                      className={`w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#B5A18A] focus:border-[#8A6748]'
                      }`}
                    />
                    <User className="w-4 h-4 text-[#8A6748] absolute left-2.5 top-2.5" />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. mahnoor@gmail.com"
                      className={`w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#B5A18A] focus:border-[#8A6748]'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-[#8A6748] absolute left-2.5 top-2.5" />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="0300-1234567"
                      className={`w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#B5A18A] focus:border-[#8A6748]'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-[#8A6748] absolute left-2.5 top-2.5" />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Select Target Program *
                  </label>
                  <select
                    value={program}
                    onChange={(e) => {
                      setProgram(e.target.value);
                      if (errors.program) setErrors({ ...errors, program: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                      errors.program ? 'border-red-500' : 'border-[#B5A18A] focus:border-[#8A6748]'
                    }`}
                  >
                    <option value="bscs">BS Computer Science (BSCS) - 4 Years</option>
                    <option value="mscs">MS Computer Science (MSCS) - 2 Years</option>
                    <option value="bsit">BS Information Technology (BSIT) - 4 Years</option>
                    <option value="bsse">BS Software Engineering (BSSE) - 4 Years</option>
                  </select>
                  {errors.program && <p className="text-[11px] text-red-600 mt-1">{errors.program}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Educational Background */}
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Previous Education Background *
                  </label>
                  <select
                    value={educationBg}
                    onChange={(e) => {
                      setEducationBg(e.target.value);
                      if (errors.educationBg) setErrors({ ...errors, educationBg: '' });
                    }}
                    className="w-full px-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden focus:border-[#8A6748]"
                  >
                    <option value="FSC">FSC</option>
                    <option value="ICS">ICS</option>
                    <option value="A-Levels">A-Levels</option>
                    <option value="DAE">DAE</option>
                    <option value="BS">BS</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Marks / Percentage */}
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Obtained Marks / Percentage (%) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={marksPercentage}
                    onChange={(e) => {
                      setMarksPercentage(e.target.value);
                      if (errors.marksPercentage) setErrors({ ...errors, marksPercentage: '' });
                    }}
                    placeholder="e.g. 78.5"
                    className={`w-full px-3 py-2 text-xs bg-[#FFFDF8] border rounded-lg focus:outline-hidden ${
                      errors.marksPercentage ? 'border-red-500 focus:border-red-500' : 'border-[#B5A18A] focus:border-[#8A6748]'
                    }`}
                  />
                  {errors.marksPercentage && <p className="text-[11px] text-red-600 mt-1">{errors.marksPercentage}</p>}
                </div>
              </div>

              {/* Message / Inquiry Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#332D27] mb-1">
                  Inquiry Message or Special Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about hostel accommodation, fee concession, or specific curriculum electives..."
                  className="w-full px-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden focus:border-[#8A6748]"
                />
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#332D27]/85">
                  <input
                    type="checkbox"
                    checked={hasAgreed}
                    onChange={(e) => {
                      setHasAgreed(e.target.checked);
                      if (errors.hasAgreed) setErrors({ ...errors, hasAgreed: '' });
                    }}
                    className="mt-0.5 rounded border-[#B5A18A] text-[#8A6748] focus:ring-[#8A6748]"
                  />
                  <span>
                    I confirm that the academic scores provided represent authentic estimates and acknowledge that this is an interactive demonstration portal.
                  </span>
                </label>
                {errors.hasAgreed && <p className="text-[11px] text-red-600 mt-1">{errors.hasAgreed}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Validating & Recording Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Demonstration Application Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS (ACCORDION) ================= */}
      <section className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-2xl p-6 sm:p-10 shadow-2xs space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
            Applicant Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#EDE2D1] rounded-xl overflow-hidden bg-[#F8F4EC]/40"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-[#EDE2D1]/40 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#332D27] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#8A6748] shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#8A6748] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8A6748] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 pt-1 border-t border-[#EDE2D1] bg-[#FFFDF8] text-xs sm:text-sm text-[#332D27]/85 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
