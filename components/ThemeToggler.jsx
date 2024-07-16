import React from 'react'
import { useTheme } from 'next-themes'
import { SunIcon,MoonIcon } from 'lucide-react'
import { Button } from '../components/ui/button.jsx';

const ThemeToggler = () => {
    const {theme,setTheme} = useTheme();
    return (
    <div>
      <Button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} >
        <SunIcon className='w-[1.2rem] h-[1.2rem] scale-100  dark:scale-0' />
        <MoonIcon className=' w-[1.2rem] h-[1.2rem] scale-0 dark:scale-100 ' />
      </Button>
    </div>
  )
}

export default ThemeToggler
