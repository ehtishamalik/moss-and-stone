import { FOOTER } from "@/constants";

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
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="md:p-5 md:max-w-xs">
            <h3>Sign up to receive our promotions and news</h3>
          </div>
        </div>
        <div className="px-5 py-2.5 bg-primary text-primary-foreground border-t border-background">
          <h4>M & S</h4>
        </div>
      </div>
    </footer>
  );
}
