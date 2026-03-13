'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Cake, Heart, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export const BentoProfile = () => {
  const [mounted, setMounted] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<{
    title: string;
    artist: string;
    albumArt: string;
    isPlaying: boolean;
    progress: number;
    duration: number;
    songUrl?: string;
    trackId?: string;
    previewUrl?: string;
  }>({
    title: "Not Playing",
    artist: "Spotify",
    albumArt: "https://picsum.photos/seed/spotify/300/300",
    isPlaying: false,
    progress: 0,
    duration: 100
  });

  const birthdate = '2001-03-09';
  const [ageInfo, setAgeInfo] = useState({ age: 0, daysLeft: 0 });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing');
        const data = await res.json();
        
        if (!res.ok) {
          console.warn("Spotify API returned an error:", data.message || "Unknown error");
          setNowPlaying(prev => ({
            ...prev,
            isPlaying: false,
            title: data.message || "Spotify Error",
            artist: "Check Credentials"
          }));
          return;
        }

        if (data.title) {
          setNowPlaying(data);
        } else {
          setNowPlaying({
            title: "Not Playing",
            artist: "Spotify",
            albumArt: "https://picsum.photos/seed/spotify/300/300",
            isPlaying: false,
            progress: 0,
            duration: 100
          });
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
    const calculateAge = () => {
      const bday = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - bday.getFullYear();
      const m = today.getMonth() - bday.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
        age--;
      }

      const nextBirthday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
      if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }
      const diffTime = Math.abs(nextBirthday.getTime() - today.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setAgeInfo({ age, daysLeft: diffDays });
    };

    calculateAge();
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-32 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Editorial Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-zinc-900 dark:bg-white"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Personal Archive</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-[-0.08em] dark:text-white leading-[0.85] uppercase">
              Life <br /><span className="text-zinc-300 dark:text-zinc-800">Unfiltered.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-zinc-500 dark:text-zinc-400 max-w-[280px] text-sm font-medium leading-relaxed">
              A collection of moments, sounds, and spaces that define my journey beyond the screen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          
          {/* Spotify Card - Immersive Glass Player */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-2 md:row-span-1 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Dynamic Background Blur */}
            <div className="absolute inset-0 opacity-30 dark:opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100">
              <Image 
                src={nowPlaying.albumArt} 
                alt="" 
                fill 
                className="object-cover blur-[100px]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex justify-between items-start relative z-10">
              <div className="flex items-center gap-3 px-5 py-2 bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-full shadow-xl">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <span className={`absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75 ${nowPlaying.isPlaying ? 'animate-ping' : ''}`}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]"></span>
                </div>
                <span className="text-[10px] font-black text-zinc-900 dark:text-white uppercase tracking-[0.2em]">
                  {nowPlaying.isPlaying ? 'On Air' : 'Paused'}
                </span>
              </div>
              {nowPlaying.songUrl && (
                <a 
                  href={nowPlaying.songUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-full hover:bg-[#1DB954] hover:text-white transition-all duration-500"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="flex items-end gap-8 relative z-10">
              <div className="relative w-32 h-32 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-2xl group-hover:rotate-3 transition-transform duration-700">
                <Image 
                  src={nowPlaying.albumArt} 
                  alt="Album Art" 
                  fill 
                  sizes="128px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0 mb-2">
                <h3 className="text-3xl font-bold dark:text-white leading-none tracking-tighter truncate group-hover:text-[#1DB954] transition-colors">{nowPlaying.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium truncate mt-2">{nowPlaying.artist}</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="h-1 w-full bg-zinc-200/50 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#1DB954] shadow-[0_0_15px_rgba(29,185,84,0.5)]" 
                  initial={{ width: 0 }}
                  animate={{ width: `${(nowPlaying.progress / nowPlaying.duration) * 100}%` }}
                  transition={{ type: "spring", stiffness: 30, damping: 15 }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
                <span>Now Listening</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: nowPlaying.isPlaying ? [4, 12, 4] : 4 }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-[#1DB954] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Birthday Card - Life Progress */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 rounded-[3rem] p-10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="p-4 bg-zinc-100 dark:bg-white/5 rounded-3xl group-hover:bg-pink-500/20 transition-all duration-500">
                <Cake className="w-6 h-6 text-zinc-400 group-hover:text-pink-500 transition-colors" />
              </div>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Experience</span>
            </div>
            
            <div className="relative z-10">
              <div className="text-7xl font-bold dark:text-white tracking-tighter leading-none">{ageInfo.age}</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mt-3">Years Lived</p>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-white/5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black dark:text-white uppercase tracking-widest mb-1">Next Cycle</span>
                  <span className="text-xs text-zinc-500 font-medium">{ageInfo.daysLeft} Days Remaining</span>
                </div>
                <div className="relative w-12 h-12">
                  <svg className="w-full h-full -rotate-90">
                    <circle 
                      cx="24" cy="24" r="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      className="text-zinc-200 dark:text-white/5"
                    />
                    <motion.circle 
                      cx="24" cy="24" r="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      strokeDasharray="126"
                      initial={{ strokeDashoffset: 126 }}
                      animate={{ strokeDashoffset: 126 - (126 * (365 - ageInfo.daysLeft) / 365) }}
                      className="text-pink-500"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Card - Atmospheric Base */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-1 md:row-span-2 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 rounded-[3rem] p-0 overflow-hidden relative group"
          >
            <div className="absolute top-8 left-8 z-10">
              <div className="p-5 bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 dark:border-white/5">
                <MapPin className="w-6 h-6 text-[#00FF00]" />
              </div>
            </div>

            <a 
              href="https://maps.apple.com/?q=Davao+City+Philippines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-8 right-8 z-10 p-5 bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 dark:border-white/5 hover:text-[#00FF00] transition-all hover:scale-110"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <div className="w-full h-full relative">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=125.5083%2C6.9639%2C125.7083%2C7.1639&layer=mapnik&marker=7.0639%2C125.6083"
                className="w-full h-full border-none grayscale invert dark:invert-0 contrast-150 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000"
                title="Location Map"
              />
              
              <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl transform group-hover:translate-y-[-10px] transition-all duration-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse shadow-[0_0_10px_#00FF00]"></span>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00FF00]">Active Station</p>
                  </div>
                  <h3 className="text-3xl font-bold text-white leading-none tracking-tighter">Davao City, PH</h3>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-4">7.06° N, 125.61° E</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Card - Typographic Lifestyle */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-2 md:row-span-1 bg-zinc-900 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#00FF00]"></div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Interests</span>
              </div>
              <h3 className="text-5xl font-bold text-white leading-[0.85] tracking-[-0.06em] mb-10 uppercase">
                Beyond <br /><span className="text-[#00FF00]">The Code.</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {['GYM', 'HIKING', 'BADMINTON', 'VOLLEYBALL', 'RUNNING'].map(hobby => (
                  <div key={hobby} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.2em] hover:bg-[#00FF00] hover:text-black transition-all duration-500 cursor-default">
                    {hobby}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute right-[-10%] bottom-[-20%] w-96 h-96 bg-[#00FF00]/5 rounded-full blur-[120px] group-hover:bg-[#00FF00]/10 transition-colors duration-1000"></div>
            
            <Heart className="absolute top-10 right-10 w-16 h-16 text-white/5 group-hover:text-[#00FF00]/10 transition-all duration-700 group-hover:scale-110" />
          </motion.div>

          {/* Contact/Stat Card - Premium Widget */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900/30 border border-zinc-100 dark:border-white/5 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#00FF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            
            <div className="relative z-10">
              <div className="text-8xl font-bold dark:text-white tracking-[-0.08em] mb-2 group-hover:text-[#00FF00] transition-colors duration-700">100%</div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-10">Commitment</p>
              
              <a 
                href="mailto:caballerokeith2@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-black uppercase tracking-[0.3em] rounded-[2rem] hover:bg-[#00FF00] dark:hover:bg-[#00FF00] hover:text-black transition-all duration-500 group/btn shadow-2xl"
              >
                <span>Initiate</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </div>
            
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-white/[0.02] pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};