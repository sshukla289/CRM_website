"use client";
import { useEffect, useMemo, useState } from "react";

const items = [
  {
    id: 1,
    type: "text",
    name: "Rajesh Kumar",
    role: "Founder",
    company: "TechFlow India",
    content:
      "This CRM transformed how we manage leads and billing. The automation features are a game-changer for our sales team.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh",
    href: "https://www.linkedin.com/",
  },
  {
    id: 2,
    type: "video",
    name: "Anjali Rao",
    role: "HR Manager",
    company: "SoftSolutions",
    thumbnail:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=60",
    videoSrc: "https://cdn.pixabay.com/video/2021/04/12/70851-537446545_large.mp4",
    href: "https://www.linkedin.com/",
  },
  {
    id: 3,
    type: "text",
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Global Logistics",
    content:
      "Highly scalable and perfect for multi-branch operations. We've seen a 30% increase in productivity since switching.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya",
    href: "https://www.linkedin.com/",
  },
  {
    id: 4,
    type: "text",
    name: "Amit Patel",
    role: "CEO",
    company: "Patel Enterprises",
    content:
      "The glassmorphism UI is beautiful, but the functionality is even better. Customer support is top-notch!",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=amit",
    href: "https://www.linkedin.com/",
  },
  {
    id: 5,
    type: "video",
    name: "Vikram Singh",
    role: "Sales Director",
    company: "BuildFast Corp",
    thumbnail:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=900&q=60",
    videoSrc: "https://cdn.pixabay.com/video/2021/04/12/70851-537446545_large.mp4",
    href: "https://www.linkedin.com/",
  },
  {
    id: 6,
    type: "text",
    name: "Sneha Gupta",
    role: "Marketing Manager",
    company: "Creative Agency",
    content:
      "Best CRM for Indian businesses. The integration with local payment gateways is seamless and reliable.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sneha",
    href: "https://www.linkedin.com/",
  },
];

const LinkedinIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.27 2.369 4.27 5.455v6.286zM5.337 7.433a1.987 1.987 0 0 1-1.99-1.99c0-1.1.89-1.99 1.99-1.99s1.99.89 1.99 1.99c0 1.099-.89 1.99-1.99 1.99zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

const Stars = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TextTestimonialCard = ({ name, role, company, content, rating, image, href }) => (
  <div className="w-[280px] shrink-0 sm:w-[320px] rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/10">
    <div className="mb-4 flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full border-2 border-[#00b274]/30 transition-colors"
        />
        <div className="min-w-0">
          <h4 className="truncate text-base font-bold leading-tight text-white">{name}</h4>
          <p className="truncate text-xs text-slate-400">
            {role} @ {company}
          </p>
        </div>
      </div>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} LinkedIn`}
          className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/60 text-slate-200/70 transition hover:text-[#0A66C2] hover:ring-1 hover:ring-[#0A66C2]/40"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
      ) : null}
    </div>

    <div className="mb-3">
      <Stars rating={rating} />
    </div>

    <p className="line-clamp-4 text-sm italic leading-relaxed text-slate-300">
      "{content}"
    </p>
  </div>
);

const PlayIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="M8.3 5.2v13.6c0 .9 1 1.4 1.8.9l10.3-6.8c.7-.5.7-1.5 0-2L10.1 4.3c-.8-.6-1.8 0-1.8.9Z"
    />
  </svg>
);

const VideoTestimonialCard = ({ name, role, company, thumbnail, onOpen }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onOpen}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") onOpen();
    }}
    className="group relative w-[280px] shrink-0 sm:w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b274]/70"
    aria-label={`Play video testimonial from ${name}`}
  >
    <div className="relative aspect-[16/10] w-full">
      <img
        src={thumbnail}
        alt={`${name} video thumbnail`}
        className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/95 via-[#050a14]/35 to-transparent" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0b1220]/50 text-white shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
          <PlayIcon className="h-5 w-5 translate-x-[1px]" />
        </span>
        <span className="rounded-full border border-white/10 bg-[#0b1220]/55 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90">
          Watch
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="truncate text-sm font-semibold text-white">{name}</p>
        <p className="truncate text-xs text-slate-300">
          {role} @ {company}
        </p>
      </div>
    </div>
  </div>
);

function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8 sm:px-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div className="absolute inset-0 bg-[#020814]/80 backdrop-blur-md animate-fade-in" />

      <div
        className="relative z-10 w-full max-w-3xl animate-slide-up"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Video testimonial from ${video.name}`}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#050a14]/80 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video modal"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0b1220]/70 text-white/80 transition hover:text-white hover:ring-1 hover:ring-white/25"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <video className="h-full w-full" controls autoPlay playsInline>
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 px-1 pb-1">
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-white">{video.name}</p>
              <p className="truncate text-xs text-slate-300">
                {video.role} @ {video.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, directionClass }) {
  const duplicated = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative w-full overflow-hidden mask-gradient pause-on-hover">
      <div className={`flex w-max transform-gpu items-stretch gap-5 ${directionClass} py-3`}>
        {duplicated.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex">
            <item.Render />
          </div>
        ))}
      </div>
    </div>
  );
}

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const rowItems = useMemo(() => {
    const renderables = items.map((item) => {
      if (item.type === "video") {
        return {
          ...item,
          Render: () => (
            <VideoTestimonialCard
              name={item.name}
              role={item.role}
              company={item.company}
              thumbnail={item.thumbnail}
              onOpen={() => setActiveVideo(item)}
            />
          ),
        };
      }

      return {
        ...item,
        Render: () => (
          <TextTestimonialCard
            name={item.name}
            role={item.role}
            company={item.company}
            content={item.content}
            rating={item.rating}
            image={item.image}
            href={item.href}
          />
        ),
      };
    });

    const top = [];
    const bottom = [];

    for (let index = 0; index < renderables.length; index += 1) {
      (index % 2 === 0 ? top : bottom).push(renderables[index]);
    }

    return { top, bottom };
  }, []);

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00b274]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14 space-y-4">
          <span className="text-[12px] font-bold text-[#00b274] uppercase tracking-[0.3em]">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by growing businesses across India to streamline operations and drive growth.
          </p>
        </div>

        {/* Two-row marquee (reference style) */}
        <div className="space-y-5">
          <MarqueeRow items={rowItems.top} directionClass="animate-marquee-right" />
          <MarqueeRow items={rowItems.bottom} directionClass="animate-marquee-left" />
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
};

export default TestimonialSection;
