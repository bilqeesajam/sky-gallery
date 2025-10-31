import FeaturedVideo from './components/FeaturedVideo';
import Hero from './components/Hero';
// import Dedication from './components/Dedication';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Dedication /> */}
      <FeaturedVideo />
      <Gallery />
    </>
  );
}

export default App;
