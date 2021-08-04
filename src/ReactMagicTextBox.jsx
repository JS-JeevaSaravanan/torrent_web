import React, { useEffect } from "react";

// interface MagicTextBoxProps {
//   value?: string;
//   onChange?: (value: string) => void;
//   placeholder?: string;
//   defaultValue?: string;
// }

const ReactMagicTextBox = (props) => {
  // const textAreaRef = React.createRef<HTMLTextAreaElement>();
  const textAreaRef = React.createRef();
  const [value, setValue] = React.useState(props.value);

  /* Incase text area based on the content */
  const autoAlignment = () => {
    // Using ref to get the text area element
    const node = textAreaRef?.current;

    if (node) {
      node.style.height = "auto";
      node.style.height = node.scrollHeight + "px"; // Main part of the code
    }
  };

  /* On load check and incase the height based on the content */
  useEffect(() => {
    autoAlignment();
  });

  // const inputDataChange = (
  //   event: React.ChangeEvent<HTMLTextAreaElement>
  // ): void => {

  const inputDataChange = (
 event
  ) => {
    // On change every time check the text area content and height
    autoAlignment();
    const currentValue = event.target.value;

    setValue(currentValue);

    if (props.onChange) {
      props.onChange(currentValue);
    }
  };

  return (
    <textarea
      className="input-text"
      ref={textAreaRef}
      onChange={inputDataChange}
      rows={1}
      placeholder={props.placeholder}
      value={value}
    />
  );
};

export default ReactMagicTextBox;