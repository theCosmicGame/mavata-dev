import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DescriptionTextArea = styled.textarea`
  font: inherit;
  color: 000;
  font-family: Barlow, sans-serif;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 90%;
  max-width: 100%;
  /* resize: both;  can't do -- resize event listener in HOC */

  height: 200px;
  /* word-wrap: break-word!important;
  word-break: break-all!important; */
  white-space: break-spaces;
  line-height: 1.25;

  &::-webkit-resizer {
    cursor: ns-resize;
    border-radius: 6px;
    background: #79b5d2;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export default function DescriptionInput({ company }) {
  const [description, setDescription] = useState(renderDescriptionText(company.description))
  
  function renderDescriptionText(text) {
    const lines = text.split('\n')

    const newLines = lines.map((line) => (
      line.trim() + '\n\n'
    ))

    let newText = ''
    
    if (newLines.length === 1 || newLines[0] === '') {
      const line = newLines[0];
      if (line.trim() != '' ) {
        newText = line.trim();
      } 
    } else {
      newLines.map((line, idx) => {
        if (idx === newLines.length - 1 ) {
          newText += line.trim()
        } else {
          newText += line
        }
      })
    }

    return newText;
  }

  const handleChange = event => {
    setDescription(event.target.value)
  }

  useEffect(() => {
    setDescription(renderDescriptionText(company.description))
  }, [company])

  return (
    <React.Fragment>
      <DescriptionTextArea readOnly={true} defaultValue={description}></DescriptionTextArea>
    </React.Fragment>
  )
}