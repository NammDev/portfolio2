export type ProjectDetailWrapperProps = {
  projectData: {
    title: string
    description: string
    featured: boolean
    stacks: string[]
    date: string
    projectLink: string
    repoLink?: string
    icon: string
    projectType: string
    body: {
      raw: string
      html: string
    }
    _id: string
  }
  source: string
}
