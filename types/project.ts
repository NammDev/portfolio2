export type Project = {
  type: string
  title: string
  description: string
  featured?: boolean
  stacks?: string[]
  date: string
  projectLink?: string
  playStoreLink?: string
  repoLink?: string
  icon?: string
  highlight?: boolean
  sznmApps?: boolean
  thumbnail?: string
  thumbnailDark?: string
  projectType: string
  body: {
    raw: string
    html: string
  }
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: string
    flattenedPath: string
  }
  _id: string
  id: string
}
