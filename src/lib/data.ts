export type Link = {
  href: string
  title: string
  image?: string
}

export type Social = {
  href: string
  title: string
}

export type Data = {
  name: string
  avatar: string
  links: Link[]
  socials: Social[]
}
