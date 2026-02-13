import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";

const navLinks = [
  { name: "اتصل بنا", href: "/contact" },
  { name: "عن الشركة", href: "/about" },
  { name: "المدونة", href: "/blog" },
  { name: "الأطباق الرئيسية", href: "/menu" },
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
    href: "#",
  },
  {
    name: "cart",
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
    href: "#",
  },
  {
    name: "wishlist",
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
    href: "#",
  },
  {
    name: "search",
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
    href: "#",
  },
];

export default function Header() {
  return (
    <section className={`Header ${style.section}`}>
      <div className={`container ${style.container}`}>  
        <div className={`icons ${style.icons}`}>
          {navIcons.map((icon) => (
            <Link key={icon.name} href={icon.href} className={style.iconLink}>
              <div className={style.icon}>
                {icon.svg}
              </div>
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
            <Image src="/logo.png" alt="Header Image" width={155} height={75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
