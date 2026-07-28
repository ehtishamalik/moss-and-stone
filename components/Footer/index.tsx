import { FOOTER } from "@/constants";
import { Link } from "../ui/link";

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="px-container">
        <div className="p-5 flex flex-col-reverse md:flex-row gap-16 md:gap-2.5 bg-primary text-primary-foreground">
          <div className="flex-1 md:p-5 flex flex-col md:flex-row gap-10">
            {FOOTER.map((item, index) => (
              <div key={index} className="flex-1">
                <p className="font-semibold! mb-5">{item.title}</p>
                {item.links && (
                  <ul className="space-y-2">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="md:p-5 md:max-w-xs">
            <h3 className="mb-2.5">Let's Create Something Exceptional</h3>
            <p className="mb-5">
              Experience custom tailoring that's crafted to fit your style,
              comfort, and confidence.
            </p>
            <Link
              href="https://maps.app.goo.gl/d8VtBuZLdomqUSSf9"
              variant={"secondary"}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Shop
            </Link>
          </div>
        </div>
        <div className="px-5 md:px-10 py-2.5 bg-primary text-primary-foreground border-t border-background">
          <h4>Baba Tailors &copy; {new Date().getFullYear()}</h4>
        </div>
      </div>
    </footer>
  );
}
