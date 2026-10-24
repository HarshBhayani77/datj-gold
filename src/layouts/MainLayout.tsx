import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/NavbarRedesign';
import Footer from '../components/layout/FooterRedesign';

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCategory = location.pathname.startsWith('/collection') || location.pathname === '/wishlist';

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9f7] text-[#0d211a] font-sans selection:bg-[#144a37]/20">
      <Navbar />
      <main className={`flex-grow ${!isHome && !isCategory ? 'pt-[106px] md:pt-[116px]' : ''}`}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
