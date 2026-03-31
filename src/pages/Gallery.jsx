import PageBanner from "../components/common/PageBanner";
import GalleryGrid from "../components/gallery/GalleryGrid";
import VideoSection from "../components/gallery/VideoSection";

function Gallery() {
  return (
    <>
      <PageBanner
        eyebrow="Our Work"
        title="Gallery & Vehicle Transformations"
        text="Take a look at repair work, refinishing projects, and completed automotive transformations from Exclusive Auto Body."
      />

      <GalleryGrid />
      <VideoSection />
    </>
  );
}

export default Gallery;