import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Search, Sparkles, Filter, ChevronRight, UserCheck } from 'lucide-react';
import { NEWS_AND_EVENTS, NewsEvent } from '../data/departmentData';

interface Props {
  onOpenEventModal: (event: NewsEvent) => void;
}

export const NewsEventsView: React.FC<Props> = ({ onOpenEventModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Announcements', 'Seminars', 'Competitions', 'Student Life'];

  const filteredItems = NEWS_AND_EVENTS.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#EDE2D1] pb-8 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#8A6748]">
          Campus Life & Department Bulletins
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#332D27]">
          News & Events
        </h1>
        <p className="text-base sm:text-lg text-[#332D27]/80 max-w-3xl font-sans leading-relaxed">
          Stay updated with technical hackathons, guest lectures, research symposiums, and departmental circulars.
        </p>
      </div>

      {/* Featured Spotlight Banner */}
      <div className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-2xl overflow-hidden shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8A6748]">
              <Sparkles className="w-4 h-4 text-[#85836A]" />
              <span>Flagship Department Highlight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#332D27] leading-snug">
              5th National Women in Tech Hackathon & Competitive Coding 2026
            </h2>
            <p className="text-xs sm:text-sm text-[#332D27]/80 leading-relaxed font-sans">
              An intensive coding sprint uniting female computer scientists from universities nationwide to solve real-world civic computing challenges and algorithms. Organized by GCWUS CS Department & ACM-W.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8A6748]">
              <span className="flex items-center gap-1.5 font-semibold">
                <Calendar className="w-4 h-4" />
                Nov 14, 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-semibold">
                <MapPin className="w-4 h-4" />
                Ada Lovelace Lab
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenEventModal(NEWS_AND_EVENTS[1])}
                className="px-5 py-2.5 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Register & View Event Schedule
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full bg-[#EDE2D1]">
            <img
              src="/src/assets/images/student_hackathon_seminar_1791702781226.jpg"
              alt="University female computer science students coding at symposium"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#EDE2D1] pb-6">
        <div className="flex items-center gap-1.5 flex-wrap p-1 bg-[#EDE2D1]/60 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#FFFDF8] text-[#332D27] shadow-xs'
                  : 'text-[#332D27]/70 hover:text-[#332D27]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news & events..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A]/50 rounded-lg focus:outline-hidden focus:border-[#8A6748]"
          />
          <Search className="w-4 h-4 text-[#8A6748] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFDF8] border border-[#B5A18A]/30 rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-[#8A6748] transition-all hover:shadow-xs group"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-xs text-[#8A6748]">
                <span className="font-semibold uppercase tracking-wider">{item.category}</span>
                <span className="font-mono text-[11px] bg-[#F8F4EC] px-2 py-0.5 rounded border border-[#EDE2D1]">
                  {item.isUpcoming ? 'Upcoming' : 'Archive'}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#332D27] group-hover:text-[#8A6748] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#332D27]/80 line-clamp-3 leading-relaxed font-sans">
                {item.excerpt}
              </p>

              <div className="space-y-1 text-xs text-[#332D27]/75 pt-2 border-t border-[#EDE2D1]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#8A6748] shrink-0" />
                  <span>{item.date} {item.time ? `· ${item.time}` : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8A6748] shrink-0" />
                  <span className="truncate">{item.venue}</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#EDE2D1] flex items-center justify-between">
              {item.registrationOpen ? (
                <span className="text-[11px] text-[#85836A] font-bold flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Registration Open</span>
                </span>
              ) : (
                <span className="text-[11px] text-[#8A6748]/70">General Record</span>
              )}

              <button
                onClick={() => onOpenEventModal(item)}
                className="text-xs font-bold text-[#8A6748] hover:text-[#332D27] cursor-pointer inline-flex items-center gap-1"
              >
                <span>Read Full Notice</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="p-12 text-center bg-[#FFFDF8] rounded-xl border border-[#EDE2D1] text-xs text-[#332D27]/70">
          No news bulletins or events found matching your query.
        </div>
      )}
    </div>
  );
};
