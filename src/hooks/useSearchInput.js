import { useState } from 'react'

const useSearchInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  }
}
export { useSearchInput }
