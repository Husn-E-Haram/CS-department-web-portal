import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, UserCheck, Check, Sparkles } from 'lucide-react';
import { NewsEvent } from '../data/departmentData';

interface Props {
  event: NewsEvent | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<Props> = ({ event, onClose }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regRoll, setRegRoll] = useState('');
  const [formError, setFormError] = useState('');

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim()) {
      setFormError('Please enter both your name and email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail)) {
      setFormError('Please provide a valid email format.');
      return;
    }
    setFormError('');
    setIsRegistered(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-8 bg-[#FFFDF8] border border-[#B5A18A]/40 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#EDE2D1]/70 border-b border-[#B5A18A]/30 p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A6748] uppercase tracking-wider">
              <span>{event.category}</span>
              <span>·</span>
              <span>{event.isUpcoming ? 'Upcoming Event' : 'Department Archive'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#332D27] mt-1 leading-snug">
              {event.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#332D27]/70 hover:text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Metadata Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-[#F8F4EC] rounded-lg border border-[#EDE2D1] text-xs">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <span className="text-[#8A6748] font-medium">Date:</span>
                <p className="text-[#332D27] font-semibold">{event.date}</p>
              </div>
            </div>
            {event.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8A6748] shrink-0" />
                <div>
                  <span className="text-[#8A6748] font-medium">Time:</span>
                  <p className="text-[#332D27] font-semibold">{event.time}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8A6748] shrink-0" />
              <div>
                <span className="text-[#8A6748] font-medium">Venue:</span>
                <p className="text-[#332D27] font-semibold">{event.venue}</p>
              </div>
            </div>
          </div>

          {/* Full description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A6748] mb-2">Event Brief</h3>
            <p className="text-sm text-[#332D27]/90 leading-relaxed font-sans">
              {event.fullContent}
            </p>
          </div>

          {/* Organizer / Speaker info */}
          {event.speakerOrOrganizer && (
            <div className="p-3 bg-[#EDE2D1]/40 rounded border border-[#B5A18A]/30 text-xs">
              <span className="text-[#8A6748] font-bold uppercase tracking-wider">Host / Committee: </span>
              <span className="text-[#332D27] font-medium">{event.speakerOrOrganizer}</span>
            </div>
          )}

          {/* Interactive Registration Simulation (for upcoming events) */}
          {event.registrationOpen && (
            <div className="border border-[#B5A18A]/40 rounded-lg p-4 bg-[#F8F4EC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A6748] mb-2 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" />
                <span>Simulated Delegate & Student Registration</span>
              </h4>

              {isRegistered ? (
                <div className="p-4 bg-[#EDE2D1] rounded border border-[#85836A]/40 text-center space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#85836A] text-[#FFFDF8] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-[#332D27]">Registration Recorded Successfully!</p>
                  <p className="text-xs text-[#332D27]/80">
                    A confirmation badge voucher for <strong>{regName}</strong> has been generated for {event.title}.
                  </p>
                  <p className="text-[11px] text-[#8A6748] italic">
                    * Demo registration simulation for GCWUS Computer Science portal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="e.g. Ayesha Tariq"
                        className="w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded focus:outline-hidden focus:border-[#8A6748]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Email *</label>
                      <input 
                        type="email" 
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="student@gcwus.edu.pk"
                        className="w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded focus:outline-hidden focus:border-[#8A6748]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Roll / CNIC (Optional)</label>
                      <input 
                        type="text" 
                        value={regRoll}
                        onChange={(e) => setRegRoll(e.target.value)}
                        placeholder="CS-F24-012"
                        className="w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded focus:outline-hidden focus:border-[#8A6748]"
                      />
                    </div>
                  </div>

                  {formError && (
                    <p className="text-xs text-red-600 font-medium">{formError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 bg-[#8A6748] text-[#FFFDF8] rounded text-xs font-medium hover:bg-[#725439] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Confirm Event Registration (Simulation)</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F8F4EC] border-t border-[#EDE2D1] px-6 py-3.5 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#332D27] bg-[#EDE2D1] hover:bg-[#B5A18A]/40 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
