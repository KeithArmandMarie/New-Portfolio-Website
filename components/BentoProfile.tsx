'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Cake, Heart, Music, ExternalLink } from 'lucide-react';
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
    const interval = setInterval(fetchNowPlaying, 10000);
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
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[120px]">
        <div className="mb-12">
          <h2 className="text-4xl font-medium tracking-[-0.06em] dark:text-white uppercase flex items-center gap-3">
            <span className="text-[#00FF00]">✦</span> Personal Space
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">A little more about my life outside of work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Spotify Card */}
{/* Spotify Card */}
<motion.div 
  whileHover={{ y: -5 }}
  className="md:col-span-2 md:row-span-1 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
>
  <div className="flex justify-between items-start relative z-10">
    <div className="flex items-center gap-2 px-3 py-1 bg-[#1DB954]/10 rounded-full">
      <Music className={`w-4 h-4 text-[#1DB954] ${nowPlaying.isPlaying ? 'animate-bounce' : ''}`} />
      <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-wider">
        {nowPlaying.isPlaying ? 'Currently Listening' : 'Last Played'}
      </span>
    </div>
    {nowPlaying.songUrl && (
      <a href={nowPlaying.songUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#1DB954] transition-colors" />
      </a>
    )}
  </div>

  <div className="flex items-center gap-6 relative z-10">
    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500">
      <Image 
        src={nowPlaying.albumArt} 
        alt="Album Art" 
        fill 
        sizes="(max-width: 768px) 96px, 96px"
        className="object-cover"
        referrerPolicy="no-referrer"
      />
      {nowPlaying.isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="flex gap-1">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i}
                animate={{ height: [8, 16, 8] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-white rounded-full"
              />
            ))}
          </div>
        </div>
      )}
    </div>
    <div>
      <h3 className="text-xl font-bold dark:text-white leading-tight truncate max-w-[200px]">{nowPlaying.title}</h3>
      <p className="text-gray-500 dark:text-gray-400 truncate max-w-[200px]">{nowPlaying.artist}</p>
    </div>
  </div>

  <div className="space-y-2 relative z-10">
    <div className="h-1 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-[#1DB954]" 
        initial={{ width: 0 }}
        animate={{ width: `${(nowPlaying.progress / nowPlaying.duration) * 100}%` }}
      />
    </div>
    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      <span>Spotify</span>
      <div className="flex items-center gap-1.5">
        {nowPlaying.isPlaying && (
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#1DB954] rounded-full shadow-[0_0_8px_rgba(29,185,84,0.6)]"
          />
        )}
        <span>{nowPlaying.isPlaying ? 'Live' : 'Offline'}</span>
      </div>
    </div>
  </div>
  
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1DB954]/10 blur-[60px] rounded-full group-hover:bg-[#1DB954]/20 transition-colors" />
</motion.div>

          {/* Birthday Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-between group relative"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-pink-500/10 rounded-2xl">
                <Cake className="w-6 h-6 text-pink-500" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Birthday</span>
            </div>
            
            <div className="mt-4">
              <div className="text-4xl font-black dark:text-white tracking-tighter">{ageInfo.age}</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Years of experience in life</p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/10 mt-auto">
              <div className="flex items-center gap-2 text-xs font-bold dark:text-white uppercase tracking-wider">
                <Calendar className="w-3 h-3 text-pink-500" />
                <span>{ageInfo.daysLeft} Days to go</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-0 overflow-hidden relative group"
          >
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <div className="p-3 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <MapPin className="w-5 h-5 text-[#00FF00]" />
              </div>
            </div>

            <a 
              href="https://maps.apple.com/?q=Davao+City+Philippines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 p-3 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:text-[#00FF00] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <div className="w-full h-full relative">
              <iframe 
                src="https://duckduckgo.com/assets/maps/map.html?q=Davao+City+Philippines&t=h&z=12"
                className="w-full h-full border-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                title="Apple Maps Location"
              />
              
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00FF00] mb-1">Current Base</p>
                  <h3 className="text-xl font-bold leading-tight">Davao City, PH</h3>
                  <p className="text-[10px] text-white/60 mt-1 font-medium">8.0767° N, 125.6115° E</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 bg-[#00FF00] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-black leading-none tracking-tighter mb-4 uppercase">
                Hobbies <br />Outside Work.
              </h3>
              <p className="text-black/70 text-sm font-medium max-w-[250px]">
                Staying active and healthy through various sports and outdoor activities.
              </p>
            </div>
            
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-black/10 rounded-full flex items-center justify-center">
              <Heart className="w-32 h-32 text-black/20" />
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2">
              {['GYM', 'HIKING', 'BADMINTON', 'VOLLEYBALL', 'RUNNING'].map(hobby => (
                <div key={hobby} className="px-3 py-1 bg-black/10 rounded-full text-[10px] font-bold text-black uppercase tracking-wider">
                  {hobby}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small Stat Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group"
          >
            <div className="text-5xl font-black dark:text-white tracking-tighter mb-2 group-hover:text-[#00FF00] transition-colors">100%</div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Commitment</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};