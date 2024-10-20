'use client'

import Link from 'next/link'
import { navLinks } from '../../../../constants'
import ModeToggle from '@/components/shared/mode-toggle'
import GlobalSearch from './global-search'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Mobile from './mobile'

const Navbar = () => {
	const pathname = usePathname()
	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
			  {/*Logo*/}
				<Link href={'/'}>
				<h1 className='text-4xl font-creteRound'>Khaydarov</h1>
				</Link>
				{/*Nav Links */}
				<div className='hidden md:flex gap-2'>
					{navLinks.map(nav => (
						<Link key={nav.route} href={nav.route} className={cn('hover:bg-blue-400/20 py-1 px-3 rounded-sm transition-colors', pathname === nav.route && 'text-blue-400')}>
							{nav.name}
						</Link>
					))}
				</div>
				{/*Search*/}
				<div className='flex items-center gap-1'>
					<GlobalSearch/>
					<ModeToggle/>
					<Mobile/>
				</div>
			</div>
		</div>
	)
}

export default Navbar
