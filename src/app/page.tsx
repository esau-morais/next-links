import Image from 'next/image'
import { redirect } from 'next/navigation'

import { LinkCard } from '@/components/molecules/LinkCard'
import { Share } from '@/components/molecules/Share'
import type { Data } from '@/lib/data'
import { get } from '@vercel/edge-config'
import { GithubIcon, TwitterIcon } from 'lucide-react'

export const dynamic = 'force-dynamic',
  runtime = 'edge'

const HomePage = async () => {
  const data = (await get('data')) as Data | undefined

  if (!data) redirect('https://emots.dev')

  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col items-center justify-center pt-16 md:max-w-2xl">
      <Share links={[...data.links, ...data.socials]} />
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="mt-4 mb-8 text-xl font-bold text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="mt-8 flex items-center gap-4 text-white">
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
              <GithubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  )
}

export default HomePage
