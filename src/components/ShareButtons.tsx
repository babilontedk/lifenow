import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { toast } from "sonner";
import { SITE_URL } from "@/lib/seo";

const ShareButtons = ({ title, path }: { title: string; path: string }) => {
  const url = `${SITE_URL}${path}`;
  const enc = encodeURIComponent;
  const links = [
    { icon: Twitter, label: "Share on X", href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}` },
    { icon: Facebook, label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { icon: Linkedin, label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not copy link");
    }
  };

  return (
    <div className="flex items-center gap-2 my-6">
      <span className="text-sm text-muted-foreground font-body mr-2">Share:</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}
          className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
          <l.icon className="h-4 w-4" />
        </a>
      ))}
      <button onClick={copy} aria-label="Copy link"
        className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ShareButtons;
