import { useLanguage } from "@/hooks/useLanguage";
import MediaUpload from "./MediaUpload";

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {t('gallery')}
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <MediaUpload
                key={`video-${index}`}
                type="video"
                placeholder={t('uploadVideo')}
                maxSize={50}
                accept="video/mp4"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Photos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <MediaUpload
                key={`photo-${index}`}
                type="photo"
                placeholder={t('uploadPhoto')}
                maxSize={10}
                accept="image/jpeg,image/png,image/jpg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;