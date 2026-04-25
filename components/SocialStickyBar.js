const socials = [
  {
    name: "X",
    href: "https://x.com/triostack",
    brand: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M18.244 2H21l-6.02 6.88L22 22h-5.57l-4.364-6.91L6.02 22H3.26l6.44-7.36L2 2h5.71l3.944 6.28L18.244 2zm-1.942 18h1.53L6.88 3.9H5.24L16.302 20z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/triostack-technologies-private-limited/",
    brand: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.27 2.369 4.27 5.455v6.286zM5.337 7.433a1.987 1.987 0 0 1-1.99-1.99c0-1.1.89-1.99 1.99-1.99s1.99.89 1.99 1.99c0 1.099-.89 1.99-1.99 1.99zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/triostack/",
    brand: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/triostack",
    brand: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.708 4.533-4.708 1.312 0 2.686.236 2.686.236v2.976h-1.513c-1.49 0-1.953.931-1.953 1.887v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
        />
      </svg>
    ),
  },
];

export default function SocialStickyBar() {
  return (
    <div className="pointer-events-none fixed right-0 top-1/2 z-[70] hidden -translate-y-1/2 lg:flex">
      <div className="rounded-l-2xl rounded-r-none bg-[linear-gradient(180deg,rgba(6,22,33,0.96)_0%,rgba(9,40,38,0.96)_55%,rgba(6,22,33,0.96)_100%)] px-1.5 py-1.5 shadow-[0_18px_40px_rgba(2,8,23,0.42)] ring-1 ring-[#34d399]/45 backdrop-blur-md">
        <div className="flex flex-col gap-1.5">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              style={{ ["--brand"]: item.brand }}
              className="group pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-[#0b1b2b]/70 shadow-md ring-1 ring-white/12 backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#07121f]/90 hover:shadow-[0_10px_22px_rgba(0,0,0,0.55),0_0_16px_var(--brand)] hover:ring-[color:var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081b28] active:scale-95"
              title={item.name}
            >
              <span className="text-slate-200/70 transition-all duration-200 group-hover:scale-110 group-hover:text-[color:var(--brand)] group-hover:drop-shadow-[0_0_8px_var(--brand)]">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
