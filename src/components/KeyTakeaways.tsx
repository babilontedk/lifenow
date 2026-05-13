import { Sparkles } from "lucide-react";

const KeyTakeaways = ({ items }: { items: string[] }) => {
  if (!items?.length) return null;
  return (
    <aside className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-6" aria-label="Key takeaways">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <h2 className="text-base font-bold font-heading text-foreground m-0">Key Takeaways</h2>
      </div>
      <ul className="space-y-1.5 text-sm font-body text-foreground/90 list-disc list-inside">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </aside>
  );
};

export default KeyTakeaways;
