import React, { useState } from 'react';
import { 
  User, BookOpen, Clock, FileText, Award, Bell, Calendar, 
  Download, LogOut, CheckCircle2, AlertCircle, Upload, ChevronRight, 
  ExternalLink, Sparkles, Printer, Check, X, ShieldCheck 
} from 'lucide-react';
import { 
  DEMO_STUDENT, DEMO_ENROLLED_COURSES, INITIAL_ASSIGNMENTS, 
  TIMETABLE_DAYS, TRANSCRIPT_HISTORY, DEMO_NOTICES, Assignment 
} from '../data/departmentData';
import { CSDepartmentLogo } from '../components/CSDepartmentLogo';

interface Props {
  isLoggedIn: boolean;
  onOpenLoginModal: () => void;
  onLogout: () => void;
}

type TabType = 'overview' | 'courses' | 'timetable' | 'assignments' | 'results' | 'notices' | 'calendar' | 'forms';

export const StudentPortalView: React.FC<Props> = ({
  isLoggedIn,
  onOpenLoginModal,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [assignments, setAssignments] = useState<Assignment[]>(INITIAL_ASSIGNMENTS);

  // Assignment Submission Modal State
  const [submittingAssignment, setSubmittingAssignment] = useState<Assignment | null>(null);
  const [uploadFileName, setUploadFileName] = useState('');
  const [submissionComments, setSubmissionComments] = useState('');
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState(false);

  // Bonafide / Form Download feedback
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleOpenSubmit = (asg: Assignment) => {
    setSubmittingAssignment(asg);
    setUploadFileName(`Submission_${asg.courseCode}_Mahnoor.pdf`);
    setSubmissionComments('');
    setUploadSuccessMessage(false);
  };

  const handleConfirmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submittingAssignment) return;

    // Update assignment in local state
    setAssignments(prev => prev.map(a => {
      if (a.id === submittingAssignment.id) {
        return {
          ...a,
          status: 'Submitted',
          submissionDate: 'Just now (Oct 11, 2026)',
          fileName: uploadFileName || 'Assignment_Submission.pdf'
        };
      }
      return a;
    }));

    setUploadSuccessMessage(true);
    setTimeout(() => {
      setSubmittingAssignment(null);
      setUploadSuccessMessage(false);
    }, 1200);
  };

  const handleSimulateDownload = (formName: string) => {
    setDownloadNotice(`Generated and downloaded: ${formName}`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3500);
  };

  // If not logged in, show demo entry screen
  if (!isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-[#FFFDF8] border-2 border-[#8A6748]/30 rounded-2xl p-8 sm:p-12 text-center shadow-lg space-y-6">
          <div className="flex justify-center">
            <CSDepartmentLogo size="lg" showText={false} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
              GCWUS Academic Management System
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#332D27]">
              Student Portal & Academic Dashboard
            </h1>
            <p className="text-sm text-[#332D27]/80 max-w-xl mx-auto font-sans leading-relaxed">
              Log in to access your registered courses, weekly laboratory schedule, coursework assignment uploads, and academic transcript records.
            </p>
          </div>

          <div className="p-5 bg-[#EDE2D1]/60 border border-[#B5A18A]/40 rounded-xl max-w-md mx-auto text-left space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#8A6748]">
              <ShieldCheck className="w-4 h-4" />
              <span>Demonstration Account Available</span>
            </div>
            <div className="font-mono text-[11px] text-[#332D27] space-y-1 bg-[#FFFDF8] p-3 rounded border border-[#EDE2D1]">
              <p>Email: <span className="font-bold">student@gcwus.edu.pk</span></p>
              <p>Password: <span className="font-bold">Password123</span></p>
              <p className="text-[10px] text-[#8A6748] pt-1">Sample Student: Mahnoor Fatima (CS-F23-042)</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenLoginModal}
              className="px-8 py-3 bg-[#8A6748] hover:bg-[#725439] text-[#FFFDF8] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span>Sign In to Student Dashboard</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#8A6748] italic">
            * This demonstration portal uses local state and realistic mock records. Real passwords are never stored.
          </p>
        </div>
      </div>
    );
  }

  // Authenticated Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
      {/* Top Banner / Student Greeting */}
      <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-2xl p-6 sm:p-8 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#8A6748] text-[#FFFDF8] flex items-center justify-center font-serif text-2xl font-bold shrink-0 border-2 border-[#FFFDF8] shadow-sm">
            MF
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A6748] uppercase tracking-wider">
              <span>{DEMO_STUDENT.program}</span>
              <span>·</span>
              <span className="font-mono">{DEMO_STUDENT.rollNo}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27]">
              Welcome, {DEMO_STUDENT.name}
            </h1>
            <p className="text-xs text-[#332D27]/75 font-sans">
              Semester: {DEMO_STUDENT.semester} · Section: {DEMO_STUDENT.section} · Academic Advisor: {DEMO_STUDENT.advisor}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center shrink-0">
          <button
            onClick={() => handleSimulateDownload('Semester_Card_F26.pdf')}
            className="px-3.5 py-2 bg-[#F8F4EC] hover:bg-[#EDE2D1] border border-[#B5A18A]/40 text-[#332D27] rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
            title="Download student card PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#8A6748]" />
            <span className="hidden sm:inline">Student ID Card</span>
          </button>

          <button
            onClick={onLogout}
            className="px-3.5 py-2 bg-[#EDE2D1] hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-[#B5A18A]/30 text-[#332D27] rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {downloadNotice && (
        <div className="p-3 bg-[#EDE2D1] border border-[#85836A] rounded-lg text-xs font-semibold text-[#332D27] flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-[#85836A]" />
          <span>{downloadNotice}</span>
        </div>
      )}

      {/* Main Dashboard Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#EDE2D1] text-xs font-semibold">
        {[
          { id: 'overview', label: 'Overview', icon: User },
          { id: 'courses', label: 'Enrolled Courses', icon: BookOpen },
          { id: 'timetable', label: 'Weekly Timetable', icon: Clock },
          { id: 'assignments', label: 'Assignments', icon: FileText },
          { id: 'results', label: 'Exams & Transcript', icon: Award },
          { id: 'notices', label: 'Department Notices', icon: Bell },
          { id: 'calendar', label: 'Academic Calendar', icon: Calendar },
          { id: 'forms', label: 'Download Forms', icon: Download },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#8A6748] text-[#FFFDF8] shadow-xs'
                  : 'bg-[#FFFDF8] text-[#332D27]/80 hover:bg-[#EDE2D1]/50 border border-[#EDE2D1]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= TAB 1: OVERVIEW ================= */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in duration-150">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-1 shadow-2xs">
              <span className="text-xs uppercase tracking-wider text-[#8A6748] font-bold">Cumulative GPA</span>
              <p className="text-3xl font-serif font-bold text-[#332D27] tabular-nums">{DEMO_STUDENT.cgpa}</p>
              <span className="text-[11px] text-[#85836A] font-semibold">Scale: 4.00 · Top 5%</span>
            </div>
            <div className="p-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-1 shadow-2xs">
              <span className="text-xs uppercase tracking-wider text-[#8A6748] font-bold">Current Courses</span>
              <p className="text-3xl font-serif font-bold text-[#332D27] tabular-nums">5 Courses</p>
              <span className="text-[11px] text-[#8A6748]">17 Credit Hours Enrolled</span>
            </div>
            <div className="p-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-1 shadow-2xs">
              <span className="text-xs uppercase tracking-wider text-[#8A6748] font-bold">Overall Attendance</span>
              <p className="text-3xl font-serif font-bold text-[#332D27] tabular-nums">{DEMO_STUDENT.attendanceOverall}%</p>
              <span className="text-[11px] text-[#85836A] font-semibold">Eligible for Exam</span>
            </div>
            <div className="p-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl space-y-1 shadow-2xs">
              <span className="text-xs uppercase tracking-wider text-[#8A6748] font-bold">Pending Tasks</span>
              <p className="text-3xl font-serif font-bold text-[#332D27] tabular-nums">
                {assignments.filter(a => a.status === 'Pending').length} Due
              </p>
              <span className="text-[11px] text-[#8A6748]">Algorithms & Database</span>
            </div>
          </div>

          {/* Quick Schedule Today & Notices Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Today's Schedule */}
            <div className="lg:col-span-7 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EDE2D1] pb-3">
                <h3 className="text-base font-serif font-bold text-[#332D27] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8A6748]" />
                  <span>Monday Academic Schedule (Today)</span>
                </h3>
                <button 
                  onClick={() => setActiveTab('timetable')}
                  className="text-xs font-bold text-[#8A6748] hover:underline"
                >
                  Full Week →
                </button>
              </div>

              <div className="space-y-3">
                {TIMETABLE_DAYS[0].slots.map((slot, sIdx) => (
                  <div key={sIdx} className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] flex items-start justify-between gap-3 text-xs">
                    <div>
                      <p className="font-bold text-[#332D27]">{slot.course}</p>
                      <p className="text-[#8A6748] mt-0.5">{slot.room} · {slot.teacher}</p>
                    </div>
                    <span className="font-mono bg-[#FFFDF8] px-2 py-1 rounded border border-[#B5A18A]/30 font-semibold text-[#332D27] shrink-0">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Circulars */}
            <div className="lg:col-span-5 bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EDE2D1] pb-3">
                <h3 className="text-base font-serif font-bold text-[#332D27] flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#8A6748]" />
                  <span>Important Notices</span>
                </h3>
                <button 
                  onClick={() => setActiveTab('notices')}
                  className="text-xs font-bold text-[#8A6748] hover:underline"
                >
                  All Circulars →
                </button>
              </div>

              <div className="space-y-3">
                {DEMO_NOTICES.slice(0, 2).map((notice) => (
                  <div key={notice.id} className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] space-y-1 text-xs">
                    <span className="text-[10px] font-mono text-[#8A6748]">{notice.date}</span>
                    <h4 className="font-bold text-[#332D27]">{notice.title}</h4>
                    <p className="text-[11px] text-[#332D27]/80 line-clamp-2">{notice.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: ENROLLED COURSES ================= */}
      {activeTab === 'courses' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#332D27]">
              Current Semester Enrolled Courses (Fall 2026)
            </h3>
            <p className="text-xs text-[#332D27]/75 mt-0.5">
              Review syllabus outlines, instructors, schedule, and attendance records.
            </p>
          </div>

          <div className="space-y-4">
            {DEMO_ENROLLED_COURSES.map((course) => (
              <div key={course.code} className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE2D1] pb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#8A6748] bg-[#F8F4EC] px-2 py-0.5 rounded border border-[#EDE2D1]">
                      {course.code}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-[#332D27] mt-1">
                      {course.title}
                    </h4>
                    <p className="text-xs text-[#8A6748] font-medium mt-0.5">
                      Instructor: {course.instructor} · Credit Hours: {course.credits}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="text-right">
                      <span className="text-[#8A6748] text-[10px] uppercase font-bold block">Attendance</span>
                      <span className="font-bold text-[#332D27]">{course.attendance}%</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#8A6748] text-[10px] uppercase font-bold block">Midterm</span>
                      <span className="font-bold text-[#332D27]">{course.midtermMarks}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#8A6748] text-[10px] uppercase font-bold block">Grade Proj.</span>
                      <span className="font-bold text-[#85836A] text-sm">{course.projection}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#332D27]">
                  <div className="p-2.5 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1]">
                    <span className="font-bold text-[#8A6748] block mb-0.5">Lecture & Lab Schedule:</span>
                    <span>{course.schedule}</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1]">
                    <span className="font-bold text-[#8A6748] block mb-0.5">Key Syllabus Modules:</span>
                    <span className="line-clamp-2">{course.syllabus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 3: TIMETABLE ================= */}
      {activeTab === 'timetable' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#332D27]">
                Weekly Laboratory & Lecture Timetable
              </h3>
              <p className="text-xs text-[#332D27]/75 mt-0.5">
                Classroom and laboratory locations in Computer Science Block.
              </p>
            </div>
            <button
              onClick={() => handleSimulateDownload('Weekly_Timetable_BSCS_5A.pdf')}
              className="px-3.5 py-1.5 bg-[#EDE2D1] hover:bg-[#B5A18A]/40 text-[#332D27] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#8A6748]" />
              <span>Print Schedule</span>
            </button>
          </div>

          <div className="space-y-4">
            {TIMETABLE_DAYS.map((dayPlan) => (
              <div key={dayPlan.day} className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl overflow-hidden shadow-2xs">
                <div className="bg-[#EDE2D1]/60 px-5 py-2.5 border-b border-[#B5A18A]/30 font-bold text-xs uppercase tracking-wider text-[#8A6748]">
                  {dayPlan.day}
                </div>
                <div className="divide-y divide-[#EDE2D1]">
                  {dayPlan.slots.map((slot, sIdx) => (
                    <div key={sIdx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-[#8A6748] bg-[#F8F4EC] px-2.5 py-1 rounded border border-[#EDE2D1] shrink-0">
                          {slot.time}
                        </span>
                        <div>
                          <p className="font-bold text-[#332D27] text-sm">{slot.course}</p>
                          <p className="text-[#8A6748] mt-0.5">{slot.teacher}</p>
                        </div>
                      </div>
                      <span className="font-medium bg-[#FFFDF8] px-3 py-1 rounded border border-[#B5A18A]/30 text-[#332D27] shrink-0 self-start sm:self-center">
                        {slot.room}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 4: ASSIGNMENTS TRACKER ================= */}
      {activeTab === 'assignments' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#332D27]">
              Semester Assignments & Coursework Submissions
            </h3>
            <p className="text-xs text-[#332D27]/75 mt-0.5">
              Submit pending lab reports and code tasks directly through this demo interface.
            </p>
          </div>

          <div className="space-y-4">
            {assignments.map((asg) => (
              <div key={asg.id} className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#8A6748] bg-[#F8F4EC] px-2 py-0.5 rounded border border-[#EDE2D1]">
                        {asg.courseCode}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        asg.status === 'Graded'
                          ? 'bg-emerald-100 text-emerald-800'
                          : asg.status === 'Submitted'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {asg.status}
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#332D27] mt-1">
                      {asg.title}
                    </h4>
                    <p className="text-xs text-[#8A6748]">{asg.courseName}</p>
                  </div>

                  <div className="text-right text-xs">
                    <span className="text-[#8A6748] font-medium">Due Date:</span>
                    <p className="font-bold text-[#332D27]">{asg.dueDate}</p>
                    <p className="text-[11px] text-[#8A6748] mt-0.5">Total Marks: {asg.totalMarks}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#332D27]/80 font-sans leading-relaxed">
                  {asg.description}
                </p>

                {asg.status === 'Graded' && (
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                    <div>
                      <span className="font-bold">Evaluation Result: </span>
                      <span>Score: {asg.obtainedMarks} / {asg.totalMarks}</span>
                    </div>
                    <span className="text-[11px] text-emerald-700">Submitted: {asg.submissionDate} ({asg.fileName})</span>
                  </div>
                )}

                {asg.status === 'Submitted' && (
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>Assignment successfully submitted for instructor grading.</span>
                    </div>
                    <span className="font-mono text-[11px] text-blue-700">{asg.fileName}</span>
                  </div>
                )}

                {asg.status === 'Pending' && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => handleOpenSubmit(asg)}
                      className="px-4 py-2 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Submit Solution (Simulation)</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 5: RESULTS & TRANSCRIPT ================= */}
      {activeTab === 'results' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#332D27]">
                Official Academic Transcript Preview
              </h3>
              <p className="text-xs text-[#332D27]/75 mt-0.5">
                Semester-by-semester Grade Point Average and credit completion history.
              </p>
            </div>
            <button
              onClick={() => handleSimulateDownload('Official_Transcript_Mahnoor_F23.pdf')}
              className="px-4 py-2 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Complete Transcript</span>
            </button>
          </div>

          <div className="space-y-6">
            {TRANSCRIPT_HISTORY.map((sem, sIdx) => (
              <div key={sIdx} className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl overflow-hidden shadow-2xs">
                <div className="bg-[#EDE2D1]/60 px-5 py-3 border-b border-[#B5A18A]/30 flex items-center justify-between">
                  <h4 className="font-serif font-bold text-base text-[#332D27]">{sem.semester}</h4>
                  <div className="text-xs font-mono font-bold text-[#8A6748]">
                    <span>GPA: {sem.gpa}</span>
                    <span className="mx-2">·</span>
                    <span>Credits: {sem.credits}</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8F4EC] text-[#8A6748] uppercase tracking-wider font-semibold border-b border-[#EDE2D1]">
                      <tr>
                        <th className="py-2.5 px-4">Course Code</th>
                        <th className="py-2.5 px-4">Course Title</th>
                        <th className="py-2.5 px-4 text-center">Credit Hours</th>
                        <th className="py-2.5 px-4 text-center">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EDE2D1] text-[#332D27]">
                      {sem.courses.map((c, cIdx) => (
                        <tr key={cIdx} className="hover:bg-[#F8F4EC]/50 transition-colors">
                          <td className="py-2 px-4 font-mono font-semibold">{c.code}</td>
                          <td className="py-2 px-4">{c.name}</td>
                          <td className="py-2 px-4 text-center font-mono">{c.credits}</td>
                          <td className="py-2 px-4 text-center font-mono font-bold text-[#8A6748]">{c.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 6: NOTICES ================= */}
      {activeTab === 'notices' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#332D27]">
              Department Circulars & Official Announcements
            </h3>
            <p className="text-xs text-[#332D27]/75 mt-0.5">
              Notifications issued by the Office of Chairperson and Examination Directorate.
            </p>
          </div>

          <div className="space-y-4">
            {DEMO_NOTICES.map((notice) => (
              <div key={notice.id} className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#8A6748]">{notice.date}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    notice.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-[#EDE2D1] text-[#332D27]'
                  }`}>
                    {notice.priority} Priority
                  </span>
                </div>
                <h4 className="text-base font-serif font-bold text-[#332D27]">{notice.title}</h4>
                <p className="text-xs sm:text-sm text-[#332D27]/85 leading-relaxed font-sans">{notice.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 7: CALENDAR ================= */}
      {activeTab === 'calendar' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#332D27]">
              Academic Calendar & Semester Milestones
            </h3>
            <p className="text-xs text-[#332D27]/75 mt-0.5">
              Official timeline for Fall Semester 2026.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 shadow-2xs">
            <div className="space-y-4">
              {[
                { date: 'September 01, 2026', event: 'Course Enrollment & Semester Fee Verification', status: 'Completed' },
                { date: 'September 08, 2026', event: 'Commencement of Regular Academic Classes & Labs', status: 'Completed' },
                { date: 'October 25, 2026', event: 'Midterm Assessment Preparation & Hall Ticket Release', status: 'Upcoming' },
                { date: 'November 09 – 16, 2026', event: 'Midterm Examination Week', status: 'Upcoming' },
                { date: 'December 18, 2026', event: 'Annual University Sports Gala & Tech Week', status: 'Upcoming' },
                { date: 'January 15 – 26, 2027', event: 'Final Term Terminal Examinations', status: 'Upcoming' },
                { date: 'February 05, 2027', event: 'Declaration of Semester Results & Grade Gazettes', status: 'Upcoming' },
              ].map((cal, idx) => (
                <div key={idx} className="p-3 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#8A6748] font-bold w-44 shrink-0">{cal.date}</span>
                    <span className="font-medium text-[#332D27]">{cal.event}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold self-start sm:self-center shrink-0 ${
                    cal.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-[#EDE2D1] text-[#8A6748]'
                  }`}>
                    {cal.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 8: FORMS ================= */}
      {activeTab === 'forms' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#332D27]">
              Student Document & Clearance Forms
            </h3>
            <p className="text-xs text-[#332D27]/75 mt-0.5">
              Click to generate and simulate downloading official university forms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Semester Fee Challan Voucher', desc: 'Pre-filled bank deposit slip for tuition fees.', file: 'Fee_Challan_Fall2026.pdf' },
              { title: 'Bonafide Student Certificate Form', desc: 'Verification certificate for scholarship and visa authorities.', file: 'Bonafide_Request_Form.pdf' },
              { title: 'Library Membership Renewal', desc: 'Departmental & central library access authorization.', file: 'Library_Renewal_Form.pdf' },
              { title: 'Final Year Project (FYP) Proposal Sheet', desc: 'Standard project proposal synopsis template.', file: 'FYP_Proposal_Template.docx' },
              { title: 'Course Add / Drop Form', desc: 'Elective adjustment form with advisor sign-off.', file: 'Add_Drop_Form_2026.pdf' },
              { title: 'Hostel Accommodation Clearance', desc: 'Campus residence facility permit voucher.', file: 'Hostel_Clearance_Form.pdf' },
            ].map((form, idx) => (
              <div key={idx} className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-5 flex flex-col justify-between shadow-2xs space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-[#332D27]">{form.title}</h4>
                  <p className="text-xs text-[#332D27]/75 mt-1">{form.desc}</p>
                </div>
                <button
                  onClick={() => handleSimulateDownload(form.file)}
                  className="w-full py-2 bg-[#F8F4EC] hover:bg-[#EDE2D1] border border-[#B5A18A]/40 rounded-lg text-xs font-semibold text-[#8A6748] hover:text-[#332D27] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Voucher</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= ASSIGNMENT SUBMISSION MODAL ================= */}
      {submittingAssignment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          onClick={() => setSubmittingAssignment(null)}
        >
          <div 
            className="w-full max-w-lg bg-[#FFFDF8] border border-[#B5A18A]/40 rounded-xl shadow-2xl overflow-hidden p-6 space-y-4 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#EDE2D1] pb-3">
              <div>
                <span className="text-[11px] font-bold text-[#8A6748] font-mono">{submittingAssignment.courseCode}</span>
                <h3 className="text-lg font-serif font-bold text-[#332D27]">{submittingAssignment.title}</h3>
              </div>
              <button 
                onClick={() => setSubmittingAssignment(null)}
                className="p-1 text-[#332D27]/60 hover:text-[#332D27]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {uploadSuccessMessage ? (
              <div className="p-6 bg-[#EDE2D1] border border-[#85836A] rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-[#85836A] mx-auto" />
                <p className="text-xs font-bold text-[#332D27]">Submission Uploaded!</p>
                <p className="text-[11px] text-[#332D27]/80">Your coursework solution has been recorded for evaluation.</p>
              </div>
            ) : (
              <form onSubmit={handleConfirmSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#332D27] mb-1">Simulated Upload File Name</label>
                  <input
                    type="text"
                    value={uploadFileName}
                    onChange={(e) => setUploadFileName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F4EC] border border-[#B5A18A] rounded-lg font-mono focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#332D27] mb-1">Submission Notes / Code Repository URL (Optional)</label>
                  <textarea
                    rows={3}
                    value={submissionComments}
                    onChange={(e) => setSubmissionComments(e.target.value)}
                    placeholder="e.g. Completed benchmarking in C++17 with runtime graphs included in report appendix."
                    className="w-full px-3 py-2 bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden"
                  />
                </div>

                <div className="p-3 bg-[#EDE2D1]/40 border border-[#B5A18A]/30 rounded-lg text-[11px] text-[#8A6748]">
                  * This triggers an interactive status change on the student dashboard from "Pending" to "Submitted".
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmittingAssignment(null)}
                    className="px-4 py-2 bg-[#EDE2D1] text-[#332D27] rounded-lg font-semibold hover:bg-[#B5A18A]/40 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload & Submit Assignment</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
