import Markdown from "react-markdown";
export default function BlogMarkdown({ children }) {
  return (
    <div className="blog-prose">
      <Markdown
        skipHtml
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          img: () => null,
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
