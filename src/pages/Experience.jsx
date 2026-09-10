import { useState, useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import "./Experience.css";
import experienceContent from "../data/dataExperience.json";
import experienceVideo from "../assets/video/mep.mp4";
import experienceThumbnail from "../assets/img/thumbnail.jpg";
import velloralogo from "../assets/img/velloraicon.png";

/* ---------- ANIMATED STAT (0 -> target on scroll into view) ---------- */
function AnimatedStat({ value, suffix = "", label = "", isRating = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  const numericValue = parseFloat(value) || 0;
  const isDecimal = !Number.isInteger(numericValue);

  useEffect(() => {
    if (!isInView) {
      setDisplay(0); // reset so it's ready to count up again next time it scrolls into view
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(isDecimal ? latest.toFixed(1) : Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, numericValue, isDecimal]);

  return (
    <div ref={ref} className="flex-fill flex-sm-grow-0 experience-stat-card">
      <div className="experience-stat-value">
        {display}
        {suffix}
        {isRating && <i className="bi bi-star-fill experience-stat-star" />}
      </div>

      <div className="experience-stat-label">{label}</div>
    </div>
  );
}

function Experience({
  videoLink = experienceVideo,
  thumbnailLink = experienceThumbnail,
  logoLink = velloralogo,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const scrollToAbout = (e) => {
    const navbar = document.getElementById("navbarCollapse");

    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }

    if (window.location.pathname === "/") {
      e.preventDefault();

      const element = document.getElementById("about");

      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;

        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className="container-xxl py-5 padding-top-custom padding-bottom-custom"
      id="experience"
    >
      <div className="container">

        {/* Section Heading */}
        <div
          className="text-center wow fadeInUp"
          data-wow-delay="0.01s"
        >
          <div className="faq-eyebrow">
            <span></span>
            {experienceContent.sectionTitle}
            <span></span>
          </div>

          <h1 className="mb-2">
            {experienceContent.heading}
          </h1>
        </div>

        <div className="row g-5 align-items-center">

          {/* Left Content */}
          <div
            className="col-12 col-lg-6 wow fadeInLeft"
            data-wow-delay="0.01s"
          >
            <p className="text-muted mb-3 experience-paragraph">
              {experienceContent.paragraph1}
            </p>

            <p className="text-muted mb-4 experience-paragraph">
              {experienceContent.paragraph2Intro}{" "}
              <em>"{experienceContent.paragraph2Quote}"</em>
            </p>

            {/* Statistics */}
            <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-4 experience-stats">
              {(experienceContent.stats || []).map((s, i) => (
                <AnimatedStat
                  key={i}
                  value={s?.value ?? 0}
                  suffix={s?.suffix ?? ""}
                  label={s?.label ?? ""}
                  isRating={s?.isRating ?? false}
                />
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={experienceContent.ctaLink}
              className="experience-cta"
              onClick={scrollToAbout}
            >
              {experienceContent.ctaText}&nbsp;→
            </a>
          </div>

          {/* Right Video Section */}
          <div
            className="col-12 col-lg-6 wow fadeInRight"
            data-wow-delay="0.01s"
          >
            {videoLink ? (
              <>
                <div
                  className="experience-video-wrapper"
                  onClick={handleVideoClick}
                >
                  {/* Video */}
                  <video
                    ref={videoRef}
                    src={videoLink}
                    className="experience-video"
                    style={{
                      opacity: videoLoaded ? 1 : 0,
                    }}
                    playsInline
                    onCanPlay={() => setVideoLoaded(true)}
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Loading Thumbnail */}
                  {thumbnailLink && !videoLoaded && (
                    <img
                      src={thumbnailLink}
                      alt="The Vellora Experience"
                      className="experience-video-cover"
                    />
                  )}

                  {/* Video Thumbnail */}
                  {thumbnailLink && !isPlaying && (
                    <img
                      src={thumbnailLink}
                      alt="Video Thumbnail"
                      className="experience-video-cover experience-video-cover-top"
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className={
                      isPlaying
                        ? "experience-video-overlay experience-video-overlay-playing"
                        : "experience-video-overlay"
                    }
                  />

                  {/* Play Button */}
                  {!isPlaying && (
                    <motion.div
                      initial={{
                        scale: 0.8,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      className="experience-play-btn"
                    >
                      <i className="bi bi-play-fill experience-play-icon" />
                    </motion.div>
                  )}

                  {/* Video Footer */}
                  <div className="experience-video-footer">
                    {logoLink && (
                      <img
                        src={logoLink}
                        alt="The Vellora Logo"
                        className="experience-video-logo"
                      />
                    )}

                    <span className="experience-video-caption">
                      {experienceContent.videoCaption}
                    </span>
                  </div>
                </div>

                {/* Video Note */}
                <p className="text-muted text-center mt-3 experience-video-note">
                  <i className="bi bi-volume-up me-1" />
                  {experienceContent.videoFooterNote}
                </p>
              </>
            ) : (
              <div className="experience-video-placeholder">
                <p>Video coming soon</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
export default Experience;