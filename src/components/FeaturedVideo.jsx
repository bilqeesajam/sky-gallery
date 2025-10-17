import './Styling/FeaturedVideo.css';

export default function FeaturedVideo() {
  return (
    <section href="#featured" id="video" className="featured-video">
      <h2 className="video-title">Featured</h2>
      <video 
        className="video-player"
        controls // this enables play/pause/volume/fullscreen
        // poster="/assets/images/SKY_20250530_201403.jpg"
      >
        <source src="/assets/videos/c37f4ae4fe3f47418513939f6d6553df.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
