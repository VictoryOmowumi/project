import React from 'react'

interface TagProps {
    title: string;
    icon: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({
    title, icon
}) => {
  return (
    <div className='w-max flex items-center gap-3 pl-1.5 py-1 pr-3 bg-[#2e808633] border border-[#2d808666] rounded-full'>
        <div className='bg-black text-[#c8f461] p-2 rounded-full text-sm'>
            {icon}
        </div>
        <span className='text-indigo-500 dark:text-gray-200 font-medium text-sm'>{title}</span>

    </div>
  )
}

export default Tag