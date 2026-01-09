import React from 'react';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Main Narrative Column */}
      <div className="lg:col-span-8 prose prose-lg prose-stone max-w-none font-light leading-loose prose-headings:font-serif prose-headings:font-medium prose-headings:text-[#1A2F25] prose-p:text-[#44403C] prose-strong:text-[#1A2F25] prose-strong:font-medium prose-a:text-[#1A2F25] prose-a:font-normal prose-a:underline prose-a:decoration-stone-300/80 prose-a:underline-offset-4 hover:prose-a:decoration-[#4A6356] prose-a:transition-all">
        
        <p className="text-xl md:text-2xl leading-relaxed mb-10 text-[#292524] font-serif italic antialiased">
          My name is Alan, and I am a geographer. Lately, most of my time has been spent working on and with startups in Silicon Valley.
        </p>

        <h3 className="text-3xl font-medium mb-6 text-[#1A2F25] tracking-tight mt-12">Background</h3>
        <div className="font-sans font-light">
            <p className="mb-6">
              Alan Glennon is a computational geographer and entrepreneur. He earned his PhD in 2013 at the UCSB Department of Geography under <a href="https://www.geog.ucsb.edu/~good/">Michael Goodchild</a> investigating spatial computation and geographically embedded networks. Alan has worked with and studied networks in geography for over two decades, starting with field research to map cave and karst watersheds. This initial interest in caves led him to Western Kentucky University where he earned a Master of Science in Geoscience. Concurrently, he worked as a naturalist at Mammoth Cave National Park, Jewel Cave National Monument, and Great Basin National Park.
            </p>
            <p className="mb-6">
              In 1999, Glennon co-founded and worked as assistant director for the WKU Hoffman Environmental Research Institute, a laboratory dedicated to applied research on human interaction with karst landscapes. Later, in 2008 when Mike Goodchild founded UCSB's Center for Spatial Studies, Glennon worked as the center's first graduate researcher--developing a spatial lunch series, numerous software workshops, a weekly help desk, and its lightning talks event. From 2015 to 2017, Glennon was co-founder of transportation logistics software company <a href="https://github.com/arogi">Arogi</a>. Glennon and his family live near San Francisco.
            </p>
        </div>

        <div className="mt-16 pt-10 border-t border-stone-300/60">
            <p className="text-left italic mb-8 text-stone-500 font-serif text-xl">~ Alan</p>
            <div className="font-sans text-sm space-y-2 text-stone-600">
                <p className="mb-0">Find me on <a href="https://github.com/glennon" className="font-medium text-[#1A2F25]">GitHub</a>.</p>
                <p>Scientific publications available at <a href="https://www.researchgate.net/profile/Alan_Glennon" className="font-medium text-[#1A2F25]">ResearchGate</a>.</p>
                <p>Email: glennon (at) gmail.com</p>
            </div>
        </div>
      </div>

      {/* The Dossier / Vital Stats Column */}
      <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
        
        {/* Photo Specimen - Updated to look like a placed photo */}
        <div className="relative group rotate-1 hover:rotate-0 transition-transform duration-500 origin-top-left">
            <div className="absolute inset-0 bg-[#E8E4DD] shadow-sm transform translate-x-1 translate-y-1 rounded-sm"></div>
            <img 
                src="https://alanglennon.com/public/alan2016.jpg" 
                alt="Alan Glennon" 
                className="relative rounded-sm shadow-md grayscale-[20%] sepia-[15%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 w-full border-4 border-[#FDFBF7]" 
            />
            <p className="text-[10px] text-stone-500 mt-4 italic font-serif text-center">Fig 1. Pacifica, CA (2016)</p>
        </div>

        {/* Condensed Resume Card */}
        <div className="relative bg-[#FAF8F5] p-6 rounded-[2px] shadow-md border border-[#D6D1CD]">
            {/* Subtle inner noise texture overlay for just the card */}
            <div className="absolute inset-0 opacity-10 bg-repeat pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10 font-mono text-xs text-stone-700 leading-relaxed">
                
                {/* Education */}
                <div className="mb-6">
                    <span className="block text-stone-400 text-[9px] uppercase tracking-widest mb-2 font-bold">Education</span>
                    <div className="space-y-1">
                        <div>PhD Geography, UCSB</div>
                        <div>MS Geoscience, WKU</div>
                    </div>
                </div>

                {/* Experience / Roles */}
                <div className="mb-6">
                    <span className="block text-stone-400 text-[9px] uppercase tracking-widest mb-3 font-bold">Professional Roles</span>
                    <div className="space-y-3">
                        <div>
                            <span className="block font-bold text-[#2C2926]">Venture Partner</span>
                            <span className="block text-stone-500 text-[10px]">CapitalX/Float32 &bull; 2020-2022</span>
                        </div>
                        
                        <div>
                            <span className="block font-bold text-[#2C2926]">CEO & Co-Founder</span>
                            <span className="block text-stone-500 text-[10px]">Arogi &bull; 2015-2017</span>
                        </div>
                        
                        <div>
                            <span className="block font-bold text-[#2C2926]">Visiting Professor</span>
                            <span className="block text-stone-500 text-[10px]">UNL NOVA &bull; 2013</span>
                        </div>
                        
                        <div>
                            <span className="block font-bold text-[#2C2926]">Researcher</span>
                            <span className="block text-stone-500 text-[10px]">UCSB &bull; 2003-2012</span>
                        </div>

                        <div>
                            <span className="block font-bold text-[#2C2926]">Research Hydrologist</span>
                            <span className="block text-stone-500 text-[10px]">WKU &bull; 1999-2003</span>
                        </div>
                        
                        <div>
                            <span className="block font-bold text-[#2C2926]">National Park Ranger</span>
                            <span className="block text-stone-500 text-[10px]">1991-1999</span>
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div>
                    <span className="block text-stone-400 text-[9px] uppercase tracking-widest mb-1 font-bold">Location</span>
                    <div>San Francisco</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;