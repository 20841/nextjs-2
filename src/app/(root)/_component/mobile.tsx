import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { navLinks } from '../../../../constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { DrawerClose } from '@/components/ui/drawer'


const Mobile = () => {
const pathname = 	usePathname()
	return (
		<div>
			<Sheet>
  <SheetTrigger asChild className='flex md:hidden'>
	  <Button size={'icon'} variant={'ghost'}>
			<Menu/>
			</Button>	
	</SheetTrigger>
	<SheetContent side={'left'}>
  <Link href={'/'}>
	<DrawerClose>
		<h1 className='text-4xl font-creteRound'>Khaydarov</h1>
	</DrawerClose>
	</Link>
	<Separator className='my-3'/>
	<DrawerClose>
		<div className='flex flex-col space-y-3'>
			{navLinks.map(nav => (
				<Link
				key={nav.route}
				href={nav.route}
				className={cn(
					'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
					pathname === nav.route && 'text-blue-400 bg-blue-400/20'
				)}
				>
					<nav.icon className='w-5 h-5' />
					<DrawerClose>
						{nav.name}
					</DrawerClose>
				</Link>
			))}
		</div>
	</DrawerClose>
    
	</SheetContent>



  {/* <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent> */}
</Sheet>

		</div>
	)
}

export default Mobile
