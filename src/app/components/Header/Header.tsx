import Image from "next/image";
import Link from "next/link";
import style from "./Header.module.css";

const navLinks = [
  { 
    name: "اتصل بنا", 
    href: "/contact" 
  },
  { 
    name: "عن الشركة", 
    href: "/about" 
  },
  { 
    name: "المدونة", 
    href: "/blog" 
  },
  { 
    name: "الأطباق الرئيسية", 
    href: "/menu" 
  },
  {
    name: "الرئيسية",
    className: `hasMega ${style.hasMega}`,
    href: "/",
    icon: "/arrow.png",
    megaMenu: [
      { name: "المقبلات", href: "/menu/appetizers" },
      { name: "الأطباق", href: "/menu/main-courses" },
      { name: "الحلويات", href: "/menu/desserts" },
      { name: "المشروبات", href: "/menu/beverages" },
    ],
  },
];

const navIcons = [
  {
    name: "user",
    href: "/login",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    name: "cart",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
  {
    name: "wishlist",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    name: "search",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
];

const socialIcons = [
  { name: "facebook", src: "/facebook.png" },
  { name: "instagram", src: "/insta.png" },
  { name: "whatsapp", src: "/whatsapp.png" },
  { name: "snapchat", src: "/snapchat.png" },
];

const contactInfo = {
  phone: "+201010428244",
  email: "aloll0.dev@gmail.com",
  emailHref: "mailto:aloll0.dev@gmail.com",
  location: "مصر, المنصوره",
};

export default function Header() {
  return (
    <>
      <div className={style.topBarContainer}>
        <div className={`top-bar flex justify-between container ${style.topBar}`}>
          <div className={`contact-info flex items-center ${style.contactInfo}`}>
            <div className={`icon-with flex items-center gap-4 ${style.iconWith}`}>
              {socialIcons.map((social) => (
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              ))}
            </div>

            <span className="mx-4">|</span>

            <div className={`icon-with flex items-center ${style.iconWith}`}>
              <span>{contactInfo.phone}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
          </div>

          <div className={`contact-info flex items-center ${style.contactInfo}`}>
            <div className={`icon-with flex items-center ${style.iconWith}`}>
              <a href={contactInfo.emailHref}>
                {contactInfo.email}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <span className="mx-4">|</span>

            <div className={`icon-with flex items-center ${style.iconWith}`}>
              <span>{contactInfo.location}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <section className={`Header ${style.section}`}>
        <div className={`container ${style.container}`}>
          <div className={`icons ${style.icons}`}>
            {navIcons.map((icon) => (
              <Link 
                key={icon.name} 
                href={icon.href} 
                className={style.iconLink}
              >
                <div className={style.icon}>{icon.svg}</div>
              </Link>
            ))}
          </div>

          <div className={`nav ${style.nav_container}`}>
            <ul className={`nav-list ${style.navList}`}>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`${style.navItem} ${link.megaMenu ? style.hasMega : ""}`}
                >
                  <Link href={link.href || "#"} className={style.navLink}>
                    {link.name}
                    {link.icon && (
                      <Image
                        src={link.icon}
                        alt={`${link.name} icon`}
                        width={12}
                        height={12}
                        className={style.navIcon}
                      />
                    )}
                  </Link>

                  {link.megaMenu && (
                    <div className={style.megaMenu}>
                      {link.megaMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={style.megaItem}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={`image ${style.image}`}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Header Image"
                width={155}
                height={75}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}