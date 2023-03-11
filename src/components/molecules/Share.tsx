'use client'

import type { Link, Social } from '@/lib/data'
import { CopyIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../atoms/DropdownMenu'

export const Share = ({ links }: { links: Link[] & Social[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="absolute top-16 right-0 mb-3 flex aspect-square rounded-full border border-neutral-200/10 bg-[rgb(23,23,23)] p-2 transition-all hover:scale-105">
          <CopyIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Copy link to clipboard</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {links.map((link) => (
            <DropdownMenuItem
              key={link.href}
              onClick={async () =>
                await navigator.clipboard.writeText(link.href)
              }
            >
              <p>{link.title}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
