import React, { useEffect, useState } from 'react';

const useDebounce =  (inputValue, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    
    useEffect(() => {
        const timerIndex = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, delay);

        return () => clearTimeout(timerIndex);
    }, [inputValue, delay]);

    return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  return (<>
  <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."></input>
    <div>Debounced value is {debouncedValue}</div>
  
  </>
    
  );
};

export default SearchBar;