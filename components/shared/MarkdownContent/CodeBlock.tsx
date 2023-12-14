import { useTheme } from 'next-themes'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// const { toast } = createStandaloneToast()

const handleClickCopy = (childrenValue: string) => async () => {
  const toastId = childrenValue.substring(0, 10)

  await navigator.clipboard.writeText(childrenValue)
  // if (!toast.isActive(toastId)) {
  //   toast({
  //     id: toastId,
  //     status: 'success',
  //     position: 'top-right',
  //     title: 'Copied',
  //     isClosable: true,
  //   })
  // }
}

const CodeBlock = ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  /** https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight */
  const match = /language-(\w+)/.exec(className || '')
  const language = match?.[1]
  const childrenValue = String(children).replace(/\n$/, '')
  const { theme } = useTheme()
  const style = theme === 'dark' ? dracula : oneLight

  return match ? (
    <div className='w-full'>
      <div className='flex items-center'>
        {language && <code className='text-[0.875rem]'>{language}</code>}
        <button
          className='inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle outline-2 outline-transparent outline-offset-2 leading-[1.2] rounded-[1rem] transition h-6 min-w-[2.5rem] bg-[#9AE6B4] ml-auto p-0 text-xs lowercase text-[#1a1a1a] cursor-pointer font-semibold hover:bg-[#68D391] hover:shadow-md hover:border-2'
          onClick={handleClickCopy(childrenValue)}
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter language={language} style={style} showLineNumbers={false}>
        {childrenValue}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default CodeBlock
