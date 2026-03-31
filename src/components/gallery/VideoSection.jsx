function VideoSection() {
    return (
      <section className="video-section">
        <div className="page-container">
          <div className="video-section__header">
            <p className="page-banner__eyebrow">Shop Video</p>
            <h2>See Exclusive Auto Body In Action</h2>
            <p>
              Add a shop walkthrough, repair process clip, or vehicle showcase video
              here to give customers a stronger feel for the business.
            </p>
          </div>
  
          <div className="video-section__frame">
            <video controls preload="metadata" poster="/images/gallery-video-poster.jpg">
              <source src="/videos/shop-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    );
  }
  
  export default VideoSection;