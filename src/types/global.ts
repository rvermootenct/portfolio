export type Data = {
  image: string
  title: string
  subtitle: string
  description?: string
  skills: { id: number, name: string, image: string }[]
  blurb: string[]
}
