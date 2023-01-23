import Image from 'next/image'
import { redirect } from 'next/navigation'

import { GitHubIcon, TwitterIcon } from '@/components'
import { Data } from '@/lib/data'
import { get } from '@vercel/edge-config'

export const dynamic = 'force-dynamic',
  runtime = 'edge'

const LinkCard = ({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  )
}


const HomePage = async () => {
  const data = await get('data') as Data | undefined

  if (!data) redirect('https://linktr.ee/selenagomez')

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center pt-16 max-w-sm md:max-w-2xl">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes('twitter') ? (
              <TwitterIcon />
            ) : social.href.includes('github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  )
}

export default HomePage
