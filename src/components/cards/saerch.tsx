import Link from 'next/link'
import { IBlog } from '../../../types'
import { DrawerClose } from '../ui/drawer'
import Image from 'next/image'
import { CalendarDays } from 'lucide-react'

const SaerchCard = (blog: IBlog) => {
	return (
		<Link href={`/blogs/${blog.tags}`}>
			<DrawerClose className='flex flex-col space-y-2 text-start'>
				<Image 
				width={200}
				height={200}
				src={blog.image}
				alt={blog.title}
				className='rounded-md shadow-xl dark:shadow-white/10'
				/>
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-4 h-4'/>
					<p className='text-sm'>05 dec</p>
				</div>
				<h1 className='font-creteRound'>{blog.title}</h1>
			</DrawerClose>
		</Link>
	)
}

export default SaerchCard
