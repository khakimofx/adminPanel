// import React from "react";

const inpStyle =
  'pr-[100px] py-3 pl-3 rounded-xl border-1px border-solid border-[#BDBDBD]'
const labelStyle = 'text-[18px]'

const MainSection = () => {
  return (
    <div className='container'>
      <div>
        <h1>Main section</h1>
        <form action='' className='flex flex-col gap-y-5'>
          <label
            htmlFor='file'
            className='text-[18px] px-4 py-2 w-[170px] text-center cursor-pointer bg-[#DB9C3A] rounded-xl text-[#fff]'
          >
            Upload file
          </label>
          <input type='file' id='file' className='sr-only' />
          <div className=' flex flex-col w-[50%] gap-y-4'>
            <label htmlFor='title' className={labelStyle}>
              Enter title
            </label>
            <input type='text' name='title' id='title' className={inpStyle} />
            <label htmlFor='text' className={labelStyle}>
              Enter text
            </label>
            <input type='text' name='text' id='text' className={inpStyle} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default MainSection
