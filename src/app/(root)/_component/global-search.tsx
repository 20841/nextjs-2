'use client'

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import {Loader2, Minus, Search } from 'lucide-react'
import { popularCategories, popularTags } from '../../../../constants'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { IBlog, IAuthor } from '../../../../types'
import {debounce} from 'lodash'
import SaerchCard from '@/components/cards/saerch'

const GlobalSearch = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [blogs, setBlogs] = useState<IBlog>([])



	const handleSearch = async(e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLocaleLowerCase()

		if(text && text.length > 2){
			setIsLoading(true)
			const data = await IAuthor(text)
			setBlogs(data)
			setIsLoading(false)
		} else {
			setBlogs([])
			setIsLoading(false)
		}
	} 

	const debounceSearch = debounce(handleSearch, 500)

	return (
		<Drawer>
  <DrawerTrigger><div className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
		<span className='hidden md:flex'>Search</span>
		<Search className='w-4 h-4'/>
		</div>
		</DrawerTrigger>
  <DrawerContent>
		<div className='container max-w-6xl mx-auto py-12'>
    <Input className='bg-secondary' placeholder='Type to search blog...'
		onChange={debounceSearch}
		disabled={isLoading}
		/>
		{isLoading && <Loader2 className='animate-spin mt-4 mx-auto'/>}
		{blogs.length ? <div className='text-2xl font-creteRound mt-8'>{blogs.length} Resaults found.</div> : null}
		<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2'>
			{blogs && blogs.map(blog => <SaerchCard key={blog.title} {...blog} />)}
		</div>
		<div className='flex flex-col space-y-2 mt-4'>
		<div className='flex items-center gap-2'>
			<p className='font-creteRound text-2xl'>See post by categories</p>
			<Minus/>
			<Link href={'/about'} className='text-blue-500 underline hover:90'>
			<DrawerClose>
				See all
			</DrawerClose>
			
			</Link>
		</div>
			
			
			<div className='flex flex-wrap gap-2'>
				{popularCategories.map(item => <Badge key={item.slug} variant={'secondary'}>{item.name}</Badge>)}
			</div>
		</div>
		<div className='flex flex-col space-y-2 mt-4'>
			
		<div className='flex items-center gap-2'>
			<p className='font-creteRound text-2xl'>See post by categories</p>
			<Minus/>
			
			<Link href={'/blogs'} className='text-blue-500 underline hover:90'>
			
			<DrawerClose>
				See all
			</DrawerClose>
			</Link>
		</div>
				
			
			<div className='flex flex-wrap gap-2'>
				{popularTags.map(item =>
					 <Badge 
					 key={item.slug} variant={'secondary'}>{item.name}
					 </Badge>
					 )}
			</div>
		</div>
		</div>
  </DrawerContent>
</Drawer>

	)
}

export default GlobalSearch
