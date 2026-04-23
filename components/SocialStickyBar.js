const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
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
    href: "https://www.instagram.com/",
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
    href: "https://www.facebook.com/",
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
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    brand: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M23.498 6.186a3.03 3.03 0 0 0-2.132-2.144C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.366.497A3.03 3.03 0 0 0 .502 6.186 31.128 31.128 0 0 0 0 12a31.128 31.128 0 0 0 .502 5.814 3.03 3.03 0 0 0 2.132 2.144c1.861.497 9.366.497 9.366.497s7.505 0 9.366-.497a3.03 3.03 0 0 0 2.132-2.144A31.128 31.128 0 0 0 24 12a31.128 31.128 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
        />
      </svg>
    ),
  },
];

export default function SocialStickyBar() {
  return (
    <div className="fixed right-0 top-1/2 z-[70] hidden -translate-y-1/2 lg:flex">
      <div className="rounded-l-2xl rounded-r-none bg-[#0b1220]/80 px-1.5 py-1.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
        <div className="flex flex-col gap-1.5">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              style={{ ["--brand"]: item.brand }}
              className="group grid h-10 w-10 place-items-center rounded-full bg-white shadow-md ring-1 ring-black/10 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b274] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] active:scale-95"
              title={item.name}
            >
              <span className="text-[var(--brand)] opacity-55 saturate-75 transition-all group-hover:scale-110 group-hover:opacity-100 group-hover:saturate-150">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
