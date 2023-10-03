import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-blue-500 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-2" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-04 z-3" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
