import ViewCounter, { ViewCounterProps } from '../pages/note/ViewCounter'

type DetailViewCountsProps = Pick<ViewCounterProps, 'slug' | 'As'>

const DetailViewCounts = async (props: DetailViewCountsProps) => {
  // const viewCount = await getViewCount(props.slug)
  const viewCount = 1283

  return <ViewCounter {...props} count={viewCount} trackView />
}

export default DetailViewCounts
