import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Image container */}
      <div
        className="relative z-10 max-w-[90vw] max-h-[85vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        />
        {images.length > 1 && (
          <p className="text-center text-white/70 text-sm mt-4">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryLightbox;
