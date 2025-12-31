import Link from "next/link";
import { business, navLinks } from "@/lib/siteData";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-block">
          <h3 className="footer-title">{business.name}</h3>
          <p className="footer-text">{business.category}</p>
          <p className="footer-text">{business.address}</p>
          <p className="footer-text">Open {business.hours}</p>
          <p className="footer-text">Phone: {business.phoneDisplay}</p>
        </div>
        <div className="footer-block">
          <h4 className="footer-subtitle">Quick links</h4>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
        <div className="footer-block">
          <h4 className="footer-subtitle">Social</h4>
          <div className="footer-links">
            {business.socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="footer-link">
                {social.label}
              </a>
            ))}
          </div>
          <p className="footer-note">Social links need confirmation.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Local NAP consistent across site. All rights reserved.</p>
      </div>
    </footer>
  );
}
