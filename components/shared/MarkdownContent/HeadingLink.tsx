import { cn } from '@/lib/utils'
import { convertToId, convertToIdLink } from '@/lib/utils/convertToIdLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeadingLinkProps = {
  children: string
  As: React.ElementType
  level: number
} & React.HTMLAttributes<HTMLElement>

const HeadingLink = ({ children, level, As }: HeadingLinkProps) => {
  const pathname = usePathname()
  const marginBottom = 4 + (7 - level) * 0.5

  return (
    <Link
      style={{ textDecoration: 'none', marginTop: 16 }}
      href={convertToIdLink(pathname ?? '', String(children))}
    >
      <As
        id={convertToId(String(children))}
        className={cn(
          'no-underline my-6 scroll-mt-24 font-heading font-bold hover:underline hover:cursor-pointer',
          `mb-[${marginBottom}px]`,
          level === 1 && 'lg:text-4xl lg:leading-[1.2]',
          level === 2 && 'text-2xl leading-[1.33] lg:text-3xl lg:leading-[1.2]',
          level === 3 && 'text-xl leading-[1.2]',
          level === 4 && 'text-xl',
          level === 5 && 'text-xl',
          level === 6 && 'text-xl'
        )}
      >
        {children}
      </As>
    </Link>
  )
}

export default HeadingLink
