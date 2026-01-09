import React from 'react';

const Genets: React.FC = () => {
  return (
    <div className="prose prose-lg prose-stone max-w-none leading-relaxed font-light prose-headings:font-serif prose-headings:font-medium prose-headings:text-[#1A2F25] prose-a:text-[#1A2F25] prose-a:font-normal prose-a:underline prose-a:decoration-stone-300/80 prose-a:underline-offset-4 hover:prose-a:decoration-[#4A6356] prose-a:transition-all">
      <h2 className="text-4xl md:text-5xl font-medium mb-8 pb-4 border-b border-stone-200/60 font-serif tracking-tight text-[#1A2F25]">Dissertation: GENets</h2>

      <div className="bg-[#fffcf9] p-10 rounded-sm mb-12 not-prose border border-stone-200/80 shadow-sm">
        <p className="font-medium text-3xl mb-2 text-[#1A2F25] font-serif leading-tight">Analysis of Geographically Embedded Networks</p>
        <p className="mb-8 text-stone-400 uppercase tracking-widest text-[10px] font-bold mt-4">23 March 2013 &bull; Doctoral Dissertation by J. Alan Glennon</p>
        
        <a href="/genets/GlennonPhD.pdf" className="inline-block bg-stone-50 text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-all px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] border border-stone-200">
          Download PDF (11 MB)
        </a>
      </div>

      <div className="text-sm text-stone-500 mb-12 border-l border-stone-300 pl-6 py-1 font-serif italic">
        <p className="m-0 mb-1"><b>Revision history:</b></p>
        <p className="m-0">Jan 4, 2026 - Used Google Gemini LLM to auto-format the site and revert from markdown back to HTML.</p>
        <p className="m-0">Feb 27, 2019 - Reformatted html to markdown. Removed internal editing revision history. Updated deprecated links.</p>
        <p className="m-0">May 6, 2013 - Initial website</p>
      </div>

      <h3 className="text-2xl font-medium mb-6 text-[#1A2F25] font-serif italic">Code and Supplementary Material</h3>
      <ul className="list-none pl-0 space-y-6">
        <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-stone-100 pb-4">
          <strong className="font-medium text-[#1A2F25] mr-2 font-serif text-lg">FlowpyGIS (Python 2.7)</strong> 
          <span className="text-[#44403C]">Interaction matrix to flow shapefile creator.</span>
          <div className="sm:ml-auto mt-2 sm:mt-0 space-x-3 text-xs font-bold uppercase tracking-wider">
             <a href="https://github.com/glennon/FlowpyGIS/" className="text-stone-400 hover:text-stone-700 transition-colors">Code</a>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-stone-100 pb-4">
          <strong className="font-medium text-[#1A2F25] mr-2 font-serif text-lg">QGIS FlowMapper Plugin</strong> <span className="text-[#44403C]">(by C. Gulluoglu and powered by FlowpyGIS)</span>
          <div className="sm:ml-auto mt-2 sm:mt-0 space-x-3 text-xs font-bold uppercase tracking-wider">
             <a href="https://plugins.qgis.org/plugins/FlowMapper/" className="text-stone-400 hover:text-stone-700 transition-colors">Repo</a>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-stone-100 pb-4">
          <strong className="font-medium text-[#1A2F25] mr-2 font-serif text-lg">GeyserSynth (Python 3.3)</strong> <span className="text-[#44403C]">Synthetic geyser eruption data</span>
          <div className="sm:ml-auto mt-2 sm:mt-0 space-x-3 text-xs font-bold uppercase tracking-wider">
             <a href="/genets/syntheruptmodule.txt" className="text-stone-400 hover:text-stone-700 transition-colors">Code</a>
          </div>
        </li>
        <li className="border-b border-stone-100 pb-4">
          <strong className="font-medium text-[#1A2F25] font-serif text-lg">GeyserNaive (Python 3.3)</strong> <span className="text-[#44403C]">To support GTP Naive case</span>
        </li>
        <li className="flex flex-col sm:flex-row sm:items-baseline border-b border-stone-100 pb-4">
          <strong className="font-medium text-[#1A2F25] mr-2 font-serif text-lg">GeyserTimes (Android)</strong> 
          <span className="text-[#44403C]">Download at</span>
          <div className="sm:ml-auto mt-2 sm:mt-0 space-x-3 text-xs font-bold uppercase tracking-wider">
            <a href="https://play.google.com/store/apps/details?id=org.application.geysertimes" className="text-stone-400 hover:text-stone-700 transition-colors">Play Store</a> 
          </div>
        </li>
        <li>
          <strong className="font-medium text-[#1A2F25] font-serif text-lg">Defense Slideset</strong> 
          <a href="/genets/GENetsDefense26.pdf" className="text-stone-400 hover:text-stone-700 transition-colors ml-2 text-xs italic">download as pdf (12MB)</a>
        </li>
      </ul>

      <p className="mt-16 text-stone-300 text-[9px] uppercase tracking-[0.2em] border-t border-stone-200/60 pt-8 text-center">last update: 27 February 2019</p>
    </div>
  );
};

export default Genets;