import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'


const Page = () => {
	return (
		<div className='max-w-6xl mx-auto pt-24'>
			<div className='flex-1 flex flex-col space-y-4 '>
					<h2 className='text-3xl font-creteRound'>Khaydarov</h2>
					<p className='line-clamp-2 text-muted-foreground max-w-xl'>
						Thomas Macaulay is a writer based in New York City. He is interested
						in all things tech, science, and photography related, and likes to
						yo-yo in
					</p>
					<Link
						href={'/'}
						className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
					>
						<span>See all posts by this author</span>
						<ArrowUpRight />
					</Link>
					
		   	<p className='text-muted-foreground text-xl'>
				<span className='font-bold text-white'>04</span> Published posts
			</p>
			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
					<span>Published posts</span>
				</h2>
				<div className='flex flex-col space-y-24 mt-24 font-creteRound'>
					<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit odio possimus deserunt debitis iusto laborum nulla, facere optio ea accusantium voluptatibus deleniti earum harum ad quo veritatis magni autem magnam consequuntur adipisci? Pariatur voluptatem amet optio saepe, facilis repellat facere, modi nemo laudantium soluta nihil veniam sunt consequuntur ullam suscipit aperiam obcaecati repellendus tempora? Incidunt corporis repellat accusamus illo, esse dolor iusto deserunt blanditiis eius tempora praesentium ipsa provident delectus, commodi cumque dolore. Facere quia provident sunt suscipit, nulla, dolores placeat necessitatibus voluptas molestiae veniam cum sit eligendi vel similique quas dignissimos quae minima quis eius ea. Tenetur, ut.</span>
				</div>
				</div>
		</div>
	)
}

export default Page
