import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  navigate: (route: string) => void;
}

// Custom SVG for Firstmoney.in logo based on description
// "1st$n" - 'st' superscript, '$' bold and green
const firstMoneyLogo = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' style='background-color:%23ffffff;'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='110' fill='%231c1917'%3E1%3Ctspan dy='-40' font-size='60'%3Est%3C/tspan%3E%3Ctspan dy='40' font-weight='bold' fill='%2315803d'%3E$%3C/tspan%3En%3C/text%3E%3C/svg%3E`;

const projects: Project[] = [
  {
    title: 'GeyserTimes',
    year: '2010-present',
    description: 'With Jake Young, Will Boekel, et al, a notetaking app and database of geyser observations.',
    image: 'https://alanglennon.com/public/projects-pix/geysertimes.jpg',
    link: 'https://geysertimes.org/',
    category: 'Geography'
  },
  {
    title: 'Firstmoney.in',
    year: '2020-2023',
    description: 'Mentoring and funding for underrepresented founders.',
    image: firstMoneyLogo,
    link: 'https://web.archive.org/web/20250228081317/https://firstmoney.in/',
    category: 'Venture'
  },
  {
    title: 'Investor School',
    year: '2018-2021',
    description: 'Silicon Valley-based startup investor community',
    image: 'https://alanglennon.com/public/projects-pix/pitches.jpg',
    link: 'https://github.com/investorschool',
    category: 'Venture'
  },
  {
    title: 'Arogi',
    year: '2015-2017',
    description: 'With Antonio Medrano, Matt Niblett, Tim Niblett, and Rick Church, NSF-funded spatial analytics company focused on emergency response.',
    image: 'https://alanglennon.com/public/projects-pix/arogi.jpg',
    link: 'https://github.com/arogi',
    category: ['Geography', 'Venture']
  },
  {
    title: 'Geographically Embedded Networks',
    year: '2013',
    description: 'Doctoral Dissertation on networks embedded in geographic space.',
    image: 'https://alanglennon.com/public/projects-pix/genets.jpg',
    link: 'https://alanglennon.com/genets/',
    internalRoute: 'genets',
    category: 'Geography'
  },
  {
    title: 'WhereCamp',
    year: '2007-2013',
    description: 'Discussant at and organizer of numerous California geospatial unconferences.',
    image: 'https://alanglennon.com/public/projects-pix/wherecamp.jpg',
    link: 'https://github.com/WhereCamp',
    category: 'Geography'
  },
  {
    title: 'Crowdsourcing disaster response',
    year: '2010',
    description: 'Co-authored with Mike Goodchild, a preprint of our article in IJDE.',
    image: 'https://alanglennon.com/public/projects-pix/jesusita.jpg',
    link: 'https://www.researchgate.net/publication/220473289_Crowdsourcing_geographic_information_for_disaster_response_A_research_frontier_International_Journal_of_Digital_Earth_33_231-241',
    category: 'Geography'
  },
  {
    title: 'Geographic Data Models',
    year: '2010',
    description: 'A "how to" on creating geographically informed data models.',
    image: 'https://alanglennon.com/public/projects-pix/flowmodel.jpg',
    link: 'https://www.researchgate.net/publication/220606129_Creating_and_Validating_Object-Oriented_Geographic_Data_Models_Modeling_Flow_within_GIS',
    category: 'Geography'
  },
  {
    title: 'UCSB Campus Map',
    year: '2010',
    description: 'With Susan Tran, an interactive map of the UCSB campus.',
    image: 'https://alanglennon.com/public/projects-pix/campusmap.jpg',
    link: 'https://map.ucsb.edu/',
    category: 'Geography'
  },
  {
    title: 'FlowpyGIS',
    year: '2008-2010',
    description: 'A Python script for creating gross, net, and two-way flow lines.',
    image: 'https://alanglennon.com/public/projects-pix/flowpygis.jpg',
    link: 'https://github.com/glennon/FlowpyGIS',
    category: 'Geography'
  },
  {
    title: 'Geography 2.0',
    year: '2005-2007',
    description: 'Contemporaneous blog on the development of virtual globes.',
    image: 'https://alanglennon.com/public/projects-pix/geography2.jpg',
    link: 'https://geography2.blogspot.com/',
    category: 'Geography'
  },
  {
    title: 'Cold water geysers',
    year: '2004',
    description: 'With Rhonda Glennon, an inventory of CO2-driven erupting springs and wells.',
    image: 'https://alanglennon.com/public/projects-pix/crystalin1995.jpg',
    link: 'https://pdfs.semanticscholar.org/57b3/1748382bfb9176d580fb69c5a0ff7ed8b6e0.pdf',
    note: 'Note: link goes to a pdf file.',
    category: 'Geography'
  },
  {
    title: 'El Tatio Geysers',
    year: '2003',
    description: 'With Rhonda Glennon, Shane Fryer, and Weldon Hawkins, an inventory and map of Chile\'s El Tatio geysers.',
    image: 'https://alanglennon.com/public/projects-pix/eltatio.jpg',
    link: 'https://alanglennon.com/elTatioGlennonPfaff.pdf',
    note: 'Note: link goes to a pdf file.',
    category: 'Geography'
  },
  {
    title: 'Martin Ridge Cave Project',
    year: '1996-2003',
    description: 'With Jon Jasper and others, exploration and survey of a massive cave in south-central Kentucky. Now a Cave Research Foundation project.',
    image: 'https://alanglennon.com/public/projects-pix/conductivitytest.jpg',
    link: 'https://alanglennon.com/martin-ridge-cave/',
    internalRoute: 'martin-ridge-cave',
    category: 'Geography'
  },
  {
    title: 'Mammoth Cave drainage patterns',
    year: '2001',
    description: 'Master\'s thesis on subsurface conduit geometries within a karst landscape.',
    image: 'https://alanglennon.com/public/projects-pix/mammothdrainage.jpg',
    link: 'https://www.researchgate.net/publication/216876725_Application_of_Morphometric_Relationships_to_Active_Flow_Networks_within_the_Mammoth_Cave_Watershed',
    category: 'Geography'
  }
];

const Projects: React.FC<ProjectsProps> = ({ navigate }) => {
  const [filter, setFilter] = useState<'All' | 'Geography' | 'Venture'>('All');

  const filteredProjects = projects.filter(project => 
    filter === 'All' 
        ? true 
        : Array.isArray(project.category) 
            ? project.category.includes(filter) 
            : project.category === filter
  );

  return (
    <div className="pt-2 pb-20">
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200/60 pb-8">
        <h2 className="text-5xl md:text-6xl font-medium text-[#1A2F25] font-serif tracking-tight mb-6 md:mb-0">Projects</h2>
        
        {/* Taxonomy Toggle - Updated styling for the new look */}
        <div className="flex space-x-8 text-xs font-bold uppercase tracking-[0.15em]">
            {['All', 'Geography', 'Venture'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`
                        relative py-2 transition-all duration-300
                        ${filter === cat ? 'text-[#1A2F25]' : 'text-stone-300 hover:text-stone-500'}
                    `}
                >
                    {cat}
                    {filter === cat && (
                        <span className="absolute left-0 right-0 bottom-0 h-px bg-[#C5A572]"></span>
                    )}
                </button>
            ))}
        </div>
      </header>
      
      {/* The "Archive" List Layout */}
      <div className="flex flex-col space-y-16">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          >
            {/* Image Column - 4:3 Aspect Ratio */}
            <div className="w-full md:w-[35%] flex-shrink-0">
               <div className="relative overflow-hidden bg-stone-100 border border-stone-200 aspect-[4/3] shadow-sm rounded-[1px] group-hover:shadow-md transition-all duration-500">
                  {/* Inner noise overlay */}
                  <div className="absolute inset-0 opacity-10 bg-repeat pointer-events-none z-10 mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}></div>
                  
                  {/* Image Link Wrapper */}
                   {project.internalRoute ? (
                    <a 
                        href={`#${project.internalRoute}`}
                        onClick={(e) => { e.preventDefault(); navigate(project.internalRoute!); }}
                        className="cursor-pointer block h-full w-full"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover grayscale-[15%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 ease-out" 
                        />
                    </a>
                   ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                         <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover grayscale-[15%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 ease-out" 
                        />
                    </a>
                   )}
               </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 flex flex-col items-start pt-2">
               <div className="flex flex-col items-start w-full">
                   <h3 className="text-3xl md:text-4xl font-serif font-medium leading-none text-[#1A2F25] mb-2 group-hover:text-[#4A6356] transition-colors duration-300">
                        {project.internalRoute ? (
                            <a 
                                href={`#${project.internalRoute}`}
                                onClick={(e) => { e.preventDefault(); navigate(project.internalRoute!); }}
                            >
                                {project.title}
                            </a>
                        ) : (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        )}
                   </h3>
                   <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
                        {project.year}
                   </span>
               </div>

               <p className="mt-5 text-[#44403C] font-light leading-relaxed text-lg max-w-prose">
                    {project.description}
               </p>

               <div className="mt-6 pt-6 border-t border-stone-100 w-full flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8C9E94]">
                        {Array.isArray(project.category) ? project.category.join(' & ') : project.category}
                    </span>
                    
                    {project.note && (
                        <span className="text-[9px] italic text-stone-300 font-serif">PDF Available</span>
                    )}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;