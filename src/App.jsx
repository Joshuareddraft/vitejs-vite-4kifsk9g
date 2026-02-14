import React, { useState, useEffect } from 'react';

// --- Icon Components (Raw SVGs) ---
const IconX = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const IconCopy = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);
const IconMail = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconUser = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const IconMenu = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const IconKey = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
);
const IconPlus = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);
const IconTrash = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
);
const IconEdit = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
);
const IconSave = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
);
const IconLogOut = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);
const IconImage = ({ size = 20, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
);

const App = () => {
  // --- STATE MANAGEMENT ---
  const [view, setView] = useState('home'); // 'home', 'admin', 'login'
  const [activeModal, setActiveModal] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initial Data (Seed data for the first load)
  const initialPosts = [
    {
      id: 1,
      title: "Materialism & The Digital Age",
      date: "OCTOBER 24, 2025",
      image: "https://images.unsplash.com/photo-1517523295844-93c6ea62a4d3?q=80&w=2574&auto=format&fit=crop",
      content: "The translation of labor into code presents a unique paradox for the modern socialist. Where the factory floor provided a tangible site of struggle, the server farm is obscured, often automated, and geographically distributed.<br/><br/>We must ask ourselves: is the alienation experienced by the gig-economy worker distinct from that of the industrial proletariat, or is it merely a shifting of the veil? The digital interface acts as a sanitizing layer, removing the consumer even further from the means of production."
    },
    {
      id: 2,
      title: "Brutalism in Policy",
      date: "SEPTEMBER 12, 2025",
      image: "https://images.unsplash.com/photo-1486744360530-ca9c5676a002?q=80&w=2602&auto=format&fit=crop",
      content: "There is a reason brutalist architecture—often unfairly maligned—was the chosen style of social housing projects and civic centers. It represents an honesty of materials. Concrete does not pretend to be wood; steel does not pretend to be stone.<br/><br/>We require a similar 'Brutalism' in our political rhetoric. The modern neoliberal tendency is to wrap policy in layers of technocratic jargon, softening the blow of austerity with consultant-speak."
    }
  ];

  // Load posts from localStorage or use initial data
  const [posts, setPosts] = useState(() => {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('red_draft_posts');
      return saved ? JSON.parse(saved) : initialPosts;
    }
    return initialPosts;
  });

  // Editor State
  const [editingPost, setEditingPost] = useState(null); 
  const [formData, setFormData] = useState({ title: '', date: '', image: '', content: '' });

  // --- EFFECTS ---
  useEffect(() => {
    localStorage.setItem('red_draft_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ACTIONS ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === '1917') {
      setIsAdmin(true);
      setView('admin');
      setLoginError(false);
      setPasswordInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setView('home');
  };

  const deletePost = (id) => {
    if (confirm('Are you sure you want to purge this record?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const startEdit = (post) => {
    setEditingPost(post);
    setFormData({ ...post });
    setView('editor');
  };

  const startNew = () => {
    setEditingPost(null);
    setFormData({ 
      title: '', 
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase(), 
      image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2558&auto=format&fit=crop', 
      content: '' 
    });
    setView('editor');
  };

  const savePost = () => {
    if (!formData.title || !formData.content) return alert('Title and Content are required.');
    
    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? { ...formData, id: editingPost.id } : p));
    } else {
      const newPost = { ...formData, id: Date.now() };
      setPosts([newPost, ...posts]);
    }
    setView('admin');
  };

  // --- VIEWS ---
  
  // 1. PUBLIC HOME VIEW
  const HomeView = () => (
    <div className="grid grid-cols-12 gap-0 md:gap-12 relative border-l-0 md:border-l-4 border-black pl-0 md:pl-12 min-h-screen">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-black hidden md:block"></div>
      <div className="col-span-12">
        {posts.length === 0 ? (
          <div className="text-center py-20 opacity-50 font-mono">No manifestos published yet.</div>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="group mb-32 last:mb-0 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">
              <div className="md:col-span-4 relative">
                <div className="sticky top-40 transition-transform duration-500">
                  <div className="relative border-4 border-black bg-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(214,40,40,1)]">
                    <div className="absolute inset-0 bg-red-700 mix-blend-multiply opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      onError={(e) => e.target.src = 'https://placehold.co/600x400/111/FFF?text=IMG_ERROR'}
                      className="w-full h-[300px] md:h-[400px] object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-px bg-black flex-grow"></div>
                    <span className="font-oswald font-bold text-sm tracking-widest text-red-700">{post.date}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <header className="mb-8">
                  <h2 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-[0.9] tracking-tight mb-6">
                    {post.title}
                  </h2>
                </header>
                <div 
                  className="prose prose-lg prose-stone max-w-none font-serif text-[#222]"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <div className="mt-12">
                   <button className="inline-block bg-black text-[#F2F0E9] px-4 py-2 font-oswald font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
                      Share Article
                   </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );

  // 2. ADMIN DASHBOARD VIEW
  const AdminView = () => (
    <div className="max-w-4xl mx-auto pt-12">
      <div className="flex justify-between items-center mb-12 border-b-4 border-black pb-4">
        <h2 className="text-4xl font-oswald font-bold uppercase text-red-700">Bureau of Information</h2>
        <div className="flex gap-4">
          <button onClick={startNew} className="flex items-center gap-2 bg-black text-[#F2F0E9] px-6 py-3 font-oswald font-bold uppercase hover:bg-red-700 transition-colors">
            <IconPlus size={20} /> New Directive
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 border-2 border-black px-4 py-3 font-oswald font-bold uppercase hover:bg-black hover:text-[#F2F0E9] transition-colors">
            <IconLogOut size={20} /> Exit
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white border-2 border-black p-6 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <h3 className="font-oswald font-bold text-xl uppercase mb-1">{post.title}</h3>
              <span className="text-xs font-mono text-gray-500">{post.date}</span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => startEdit(post)} className="p-2 hover:bg-gray-100 rounded border border-transparent hover:border-black transition-all" title="Edit">
                <IconEdit size={20} />
              </button>
              <button onClick={() => deletePost(post.id)} className="p-2 text-red-700 hover:bg-red-50 rounded border border-transparent hover:border-red-700 transition-all" title="Delete">
                <IconTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 3. EDITOR VIEW
  const EditorView = () => (
    <div className="max-w-4xl mx-auto pt-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase">{editingPost ? 'Edit Directive' : 'New Directive'}</h2>
        <div className="flex gap-4">
           <button onClick={() => setView('admin')} className="px-4 py-2 font-oswald uppercase hover:underline">Cancel</button>
           <button onClick={savePost} className="flex items-center gap-2 bg-red-700 text-white px-8 py-3 font-oswald font-bold uppercase hover:bg-red-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             <IconSave size={20} /> Publish
           </button>
        </div>
      </div>

      <div className="grid gap-6 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
        <div>
          <label className="block font-oswald font-bold uppercase text-sm mb-2">Headline</label>
          <input 
            type="text" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full bg-[#F2F0E9] border-2 border-black p-4 font-serif text-xl focus:outline-none focus:border-red-700 transition-colors"
            placeholder="ENTER HEADLINE..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-oswald font-bold uppercase text-sm mb-2">Date Stamp</label>
            <input 
              type="text" 
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full bg-[#F2F0E9] border-2 border-black p-3 font-mono text-sm focus:outline-none focus:border-red-700"
            />
          </div>
          <div>
            <label className="block font-oswald font-bold uppercase text-sm mb-2">Visual Anchor (URL)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                className="w-full bg-[#F2F0E9] border-2 border-black p-3 font-mono text-xs focus:outline-none focus:border-red-700"
                placeholder="https://..."
              />
              <div className="w-12 h-12 border-2 border-black bg-gray-100 flex items-center justify-center overflow-hidden">
                {formData.image ? <img src={formData.image} className="w-full h-full object-cover" /> : <IconImage size={20} className="text-gray-400"/>}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block font-oswald font-bold uppercase text-sm mb-2">Manifesto Content (HTML Supported)</label>
          <textarea 
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="w-full h-96 bg-[#F2F0E9] border-2 border-black p-4 font-serif text-lg leading-relaxed focus:outline-none focus:border-red-700 transition-colors resize-y"
            placeholder="Begin writing..."
          />
        </div>
      </div>
    </div>
  );

  // 4. LOGIN MODAL
  const LoginModal = () => (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 bg-black/90 backdrop-blur-sm">
      <div className="bg-[#F2F0E9] border-4 border-red-700 w-full max-w-md p-8 text-center shadow-[0_0_50px_rgba(220,38,38,0.5)]">
        <div className="mb-6">
          <IconKey size={48} className="mx-auto text-red-700 mb-4" />
          <h2 className="text-3xl font-oswald font-bold uppercase">Restricted Access</h2>
          <p className="font-mono text-xs mt-2 uppercase tracking-widest">Authorized Personnel Only</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full border-2 border-black p-3 text-center font-mono text-xl focus:bg-white focus:outline-none"
            placeholder="PASSCODE"
            autoFocus
          />
          {loginError && <p className="text-red-700 font-bold font-oswald uppercase text-sm animate-pulse">Access Denied</p>}
          <div className="flex gap-4 mt-6">
            <button type="button" onClick={() => { setView('home'); setLoginError(false); }} className="flex-1 py-3 font-oswald font-bold uppercase border-2 border-black hover:bg-gray-200">
              Abort
            </button>
            <button type="submit" className="flex-1 py-3 font-oswald font-bold uppercase bg-red-700 text-white hover:bg-red-800">
              Authenticate
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-[#F2F0E9] text-[#111] font-inter relative overflow-x-hidden selection:bg-red-700 selection:text-white">
      {/* CSS Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Oswald:wght@400;500;700&display=swap');
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Merriweather', serif; }
      `}</style>

      {/* Noise Texture */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b-4 border-black ${isScrolled ? 'py-4 bg-[#F2F0E9]' : 'py-8 bg-[#F2F0E9]'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => setView('home')}>
            <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
              The <span className="text-red-700">Red</span> Draft
            </h1>
            <span className="text-xs font-bold tracking-[0.3em] uppercase mt-1 hidden md:block">
              21st Century Perspectives
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            {isAdmin ? (
               <div className="flex items-center gap-4">
                 <span className="font-mono text-xs text-red-700 uppercase">[ ADMIN MODE ACTIVE ]</span>
                 <button onClick={() => setView('admin')} className="font-oswald font-bold text-lg uppercase hover:text-red-700 underline decoration-2 underline-offset-4">Dashboard</button>
               </div>
            ) : (
              <>
                <button onClick={() => setActiveModal('about')} className="font-oswald font-bold text-lg uppercase tracking-widest hover:text-red-700 hover:underline decoration-4 underline-offset-4 transition-all">Manifesto</button>
                <button onClick={() => setActiveModal('contact')} className="font-oswald font-bold text-lg uppercase tracking-widest hover:text-red-700 hover:underline decoration-4 underline-offset-4 transition-all">Comms</button>
              </>
            )}
          </nav>
          
          <button className="md:hidden text-black" onClick={() => setActiveModal('menu')}>
            <IconMenu size={32} />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        {view === 'home' && <HomeView />}
        {view === 'admin' && <AdminView />}
        {view === 'editor' && <EditorView />}
        {view === 'login' && <LoginModal />}
      </main>

      {/* Footer */}
      <footer className="bg-black text-[#F2F0E9] py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
             <h2 className="font-oswald text-3xl uppercase font-bold tracking-widest mb-2">The Red Draft</h2>
             <p className="text-stone-400 font-mono text-sm">© 2026. All Rights Reserved.</p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-6 items-center">
            <a href="#" className="uppercase font-oswald tracking-widest hover:text-red-500 transition-colors">Twitter</a>
            <a href="#" className="uppercase font-oswald tracking-widest hover:text-red-500 transition-colors">RSS</a>
            
            <button 
              onClick={() => setView('login')} 
              className="ml-4 p-2 text-stone-700 hover:text-red-700 transition-colors"
              title="Staff Entrance"
            >
              <IconKey size={16} />
            </button>
          </div>
        </div>
      </footer>

      {/* Public Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
          <div className="bg-[#F2F0E9] border-4 border-black w-full max-w-2xl relative z-10 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] p-8 md:p-12 animate-in fade-in zoom-in duration-200">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 p-2 hover:bg-black hover:text-white transition-colors">
              <IconX size={24} />
            </button>
            {activeModal === 'about' && (
              <div className="text-center">
                <IconUser className="w-16 h-16 mx-auto mb-6 text-red-700 stroke-[1.5]" />
                <h2 className="text-4xl font-oswald font-bold uppercase mb-6 border-b-4 border-black inline-block pb-2">About The Author</h2>
                <div className="prose prose-lg mx-auto font-serif">
                  <p>This project is an attempt to synthesise the philosophical discipline of the past with the fluid realities of the present. I am a political theorist and writer based in Manchester, one of the birthplaces of modern Socialism.</p>
                </div>
              </div>
            )}
            {activeModal === 'contact' && (
              <div className="text-center">
                <IconMail className="w-16 h-16 mx-auto mb-6 text-red-700 stroke-[1.5]" />
                <h2 className="text-4xl font-oswald font-bold uppercase mb-8 border-b-4 border-black inline-block pb-2">Secure Comms</h2>
                <div className="bg-black text-white p-4 font-mono text-lg flex items-center justify-between gap-4 border-2 border-transparent hover:border-red-700 transition-colors">
                  <span>comms@reddraft.blog</span>
                  <button onClick={() => navigator.clipboard.writeText('comms@reddraft.blog')} className="p-2 hover:bg-red-700 rounded transition-colors"><IconCopy size={20} /></button>
                </div>
              </div>
            )}
            {activeModal === 'menu' && (
              <div className="flex flex-col gap-6 text-center">
                 <button onClick={() => { setView('home'); setActiveModal(null); }} className="text-3xl font-oswald font-bold uppercase hover:text-red-700">Home</button>
                 <button onClick={() => setActiveModal('about')} className="text-3xl font-oswald font-bold uppercase hover:text-red-700">Manifesto</button>
                 <button onClick={() => setActiveModal('contact')} className="text-3xl font-oswald font-bold uppercase hover:text-red-700">Comms</button>
                 <button onClick={() => { setActiveModal(null); setView('login'); }} className="text-3xl font-oswald font-bold uppercase text-red-700 mt-4 border-t-2 border-black pt-4">Login</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;