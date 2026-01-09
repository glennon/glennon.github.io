import React from 'react';
import { blogPosts } from '../blogData';

interface HomeProps {
    navigate: (route: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="max-w-5xl mx-auto xl:pl-32">
      <div className="relative pl-0 md:pl-8">
        {/* The Chronological Thread - Vertical Line */}
        <div className="absolute left-4 md:left-0 top-2 bottom-0 w-px bg-stone-300/50 hidden md:block"></div>

        {blogPosts.map((post) => (
          <article key={post.slug} className="mb-24 last:mb-0 group">
            
            {/* Content Container */}
            <div className="pl-0 md:pl-12 relative flex flex-col">
                
                {/* Date: Marginalia on XL, Eyebrow on MD/LG */}
                {/* We render the date *before* the title group so it stacks on top for smaller screens */}
                <div className="xl:absolute xl:-left-[12.5rem] xl:w-32 xl:text-right xl:top-[0.4rem] mb-3 xl:mb-0">
                    <div className="inline-block xl:block bg-[#FCFAF8] pr-4 xl:pr-0 text-xs font-bold uppercase tracking-[0.15em] text-stone-400 font-sans">
                        {post.date}
                    </div>
                </div>

                {/* Title & Dot Wrapper - Grouped to ensure Dot always aligns with Title */}
                <div className="relative">
                    {/* Timeline Dot (Desktop only) */}
                    {/* Positioned relative to this wrapper so it stays with the title even if date pushes it down */}
                    <div className="absolute -left-[3.25rem] top-[0.6em] w-[9px] h-[9px] rounded-full bg-[#FCFAF8] border-2 border-stone-300 group-hover:border-[#1A2F25] group-hover:scale-125 transition-all duration-300 hidden md:block z-10"></div>

                    <h2 className="text-4xl md:text-5xl font-medium text-[#1A2F25] font-serif leading-[1.1] tracking-tight mb-6 italic">
                    <a 
                        href={`#post/${post.slug}`} 
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`post/${post.slug}`);
                        }}
                        className="hover:text-[#4A6356] transition-colors duration-300 decoration-stone-200 underline-offset-8 decoration-1 hover:underline"
                    >
                        {post.title}
                    </a>
                    </h2>
                </div>
                
                {/* Preview / Excerpt */}
                <div className="prose prose-lg prose-stone max-w-none text-[#44403C] leading-relaxed font-light prose-headings:font-serif prose-headings:font-medium prose-headings:text-[#1A2F25] prose-p:text-[#44403C] prose-a:text-[#1A2F25] prose-a:font-normal prose-a:underline prose-a:decoration-stone-300/70 prose-a:underline-offset-4 hover:prose-a:text-[#4A6356] hover:prose-a:decoration-[#4A6356] prose-a:transition-all prose-img:rounded-sm prose-img:shadow-sm prose-img:border prose-img:border-stone-100 prose-img:p-1 prose-img:bg-white">
                    {post.content}
                </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Pagination using the thread motif */}
      <div className="flex justify-between items-center pt-20 mt-12 md:pl-12 border-t border-stone-100 md:border-t-0 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 hidden md:block"></div>
        <button disabled className="text-[10px] font-bold text-stone-300 cursor-not-allowed uppercase tracking-[0.2em] hover:text-stone-400 transition-colors">
            &larr; Older Entries
        </button>
        <button disabled className="text-[10px] font-bold text-stone-300 cursor-not-allowed uppercase tracking-[0.2em] hover:text-stone-400 transition-colors">
            Newer Entries &rarr;
        </button>
      </div>
    </div>
  );
};

export default Home;