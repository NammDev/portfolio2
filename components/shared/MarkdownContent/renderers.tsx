import type { Components } from 'react-markdown'

// import CodeBlock from './CodeBlock'
import HeadingLink from './HeadingLink'

export const renderers: Components = {
  // code: CodeBlock,
  // a: ({ href, children }) => {
  //   return (
  //     <ChakraLink href={href} isExternal wordBreak='break-word'>
  //       {children}
  //     </ChakraLink>
  //   )
  // },
  h1: ({ children }) => (
    <HeadingLink level={1} As='h1'>
      {String(children)}
    </HeadingLink>
  ),
  h2: ({ children }) => (
    <HeadingLink level={2} As='h2'>
      {String(children)}
    </HeadingLink>
  ),
  h3: ({ children }) => (
    <HeadingLink level={3} As='h3'>
      {String(children)}
    </HeadingLink>
  ),
  h4: ({ children }) => (
    <HeadingLink level={4} As='h4'>
      {String(children)}
    </HeadingLink>
  ),
  h5: ({ children }) => (
    <HeadingLink level={5} As='h5'>
      {String(children)}
    </HeadingLink>
  ),
  h6: ({ children }) => (
    <HeadingLink level={6} As='h6'>
      {String(children)}
    </HeadingLink>
  ),
  // table: Table,
  // thead: Thead,
  // tbody: Tbody,
  // tr: Tr,
  // td: Td,
}
