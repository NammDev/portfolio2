import { FaSearch } from 'react-icons/fa'

type PostSearchProps = {
  keyword: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

const PostSearch = ({ keyword, onChange, placeholder = 'Search' }: PostSearchProps) => {
  return (
    <div className='w-full flex relative isolate'>
      <input
        className='w-full ps-4 pe-10 rounded-md bg-buttonBackground1 dark:bg-[rgba(255,255,255,0.04)] focus:outline-none focus-visible:bg-transparent focus-visible:border-[rgb(99,179,237)] border-2 border-transparent font-sans text-[1rem] h-10 transition-all outline-offset-2 relative appearance-none text-foreground'
        type='text'
        defaultValue={keyword}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className='right-0 w-[2.5rem] h-[2.5rem] text-base flex top-0 z-2 items-center justify-center absolute font-sans'>
        <FaSearch />
      </div>
    </div>
  )
}

export default PostSearch
