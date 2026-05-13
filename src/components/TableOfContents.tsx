interface Heading { id: string; text: string }

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  if (headings.length < 3) return null;
  return (
    <aside className="bg-secondary/60 border border-border rounded-lg p-5 my-8" aria-label="Table of contents">
      <h2 className="text-base font-bold font-heading mb-3">Table of Contents</h2>
      <ol className="space-y-1.5 text-sm font-body list-decimal list-inside">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="text-primary hover:underline">{h.text}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default TableOfContents;
