import { useState } from 'react';

interface ITextInputProps {
  className?: string;
  text: string;
  onChangeText: (text: string) => void;
}

const TextInput = (props: ITextInputProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');

  const onChangeText = () => {
    setIsEdit(false);
    if (value) {
      props.onChangeText(value);
    }
  };

  const editor = (
    <label className={props.className}>
      <input onChange={(e) => setValue(e.target.value)} placeholder={props.text} type="text" />
      <button onClick={onChangeText}>Ok</button>
      <button onClick={() => setIsEdit(false)}>X</button>
    </label>
  );

  const text = (
    <div className={props.className} onClick={() => setIsEdit(true)}>
      {props.text}
    </div>
  );

  return <>{isEdit ? editor : text}</>;
};

export default TextInput;
