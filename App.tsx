import React, { useState } from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Genets from './pages/Genets';
import MartinRidge from './pages/MartinRidge';
import { blogPosts } from './blogData';

const App: React.FC = () => {
  // Use state-based routing (Memory Router) instead of window.location.hash 
  // to prevent "Location.hash setter" access denied errors in sandboxed environments.
  const [route, setRoute] = useState<string>('/');

  const navigate = (path: string) => {
    setRoute(path);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const renderContent = () => {
    if (route === '/' || route === '') {
      return <Home navigate={navigate} />;
    }
    if (route === 'about') {
      return <About />;
    }
    if (route === 'projects') {
      return <Projects navigate={navigate} />;
    }
    if (route === 'genets') {
      return <Genets />;
    }
    if (route === 'martin-ridge-cave') {
      return <MartinRidge />;
    }
    
    // Handle individual blog posts
    if (route.startsWith('post/')) {
        const slug = route.split('/')[1];
        const post = blogPosts.find(p => p.slug === slug);
        if (post) {
            return (
                <article className="max-w-3xl mx-auto pt-4">
                    <header className="mb-14 text-left border-b border-stone-200/60 pb-8">
                        <div className="text-sm font-serif italic text-stone-400 mb-4">{post.date}</div>
                        <h1 className="text-5xl md:text-6xl font-medium mb-6 font-serif text-stone-900 leading-none tracking-tight">{post.title}</h1>
                    </header>
                    <div className="prose prose-lg prose-stone max-w-none text-stone-700 leading-loose font-light prose-headings:font-serif prose-headings:font-medium prose-a:text-stone-900 prose-a:underline prose-a:font-normal prose-a:decoration-stone-300/80 prose-a:underline-offset-4 hover:prose-a:decoration-stone-500 prose-a:transition-all">
                        {post.content}
                    </div>
                    <div className="mt-20 pt-12 border-t border-stone-100">
                        <button 
                            onClick={() => navigate('/')}
                            className="text-stone-400 hover:text-stone-900 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
                        >
                            &larr; Back to Journal
                        </button>
                    </div>
                </article>
            );
        }
    }

    return (
      <div className="text-center py-32">
        <h1 className="text-8xl font-medium text-stone-200 mb-6 font-serif">404</h1>
        <p className="text-xl text-stone-400 mb-10 font-serif italic">Page not found.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-stone-900 text-stone-50 rounded-sm hover:bg-stone-800 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
        >
          Return Home
        </button>
      </div>
    );
  };

  return (
    <Layout currentRoute={route} navigate={navigate}>
      {renderContent()}
    </Layout>
  );
};

export default App;