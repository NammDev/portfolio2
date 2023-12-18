import { getViewCount } from '@/lib/db/view'
import ViewCounter, { ViewCounterProps } from '../pages/note/ViewCounter'

type DetailViewCountsProps = Pick<ViewCounterProps, 'slug' | 'As'>

const DetailViewCounts = async (props: DetailViewCountsProps) => {
  const viewCount = await getViewCount(props.slug)

  return <ViewCounter {...props} count={viewCount} trackView />
}

export default DetailViewCounts
