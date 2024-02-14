import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



// https://codesandbox.io/s/react-query-debounce-ted8o?file=/src/useDebounce.js
export default function useDebounce<T>(search: T, delay: number): T {
  // State and setters for debounced search
  const [debouncedValue, setDebouncedValue] = useState<T>(search);
  const router =useRouter();


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/search?q=` + search);
      } else {
        router.push(`/search`);
      }
    }, delay);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return debouncedValue;
}