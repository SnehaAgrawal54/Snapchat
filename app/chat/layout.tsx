import LeftSidebar from '@/components/LeftSidebar'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-screen flex'>
        <LeftSidebar/>
        {children}
    </div>
  )
}

export default layout