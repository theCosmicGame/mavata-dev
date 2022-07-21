import React from 'react';

export default function renderParagraph(paragraph) {
  // With fancy ES6:
  const [firstLine, ...rest] = paragraph.split('\n')
  // Or ES5:
  const lines = paragraph.split('\n')
  const firstLinee = lines[0]
  const restt = lines.slice(1)

  return (
    <React.Fragment>
      <p key='description-00'>
        {firstLine}
      </p>
        {rest.map((line, idx) => (
          // React.Fragment doesn’t create a wrapper element in the DOM.
          // If you don’t care about that, you can use div instead
          <p key={`description-${idx}-${line}`}>{line}</p>
        ))}
    </React.Fragment>
  )
}
