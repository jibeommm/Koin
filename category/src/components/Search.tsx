import { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: Props) {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}
