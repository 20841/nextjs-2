import { ChildProps } from '../../../types'
import Footer from './_component/footer'
import Navbar from './_component/navbar'

const Layout = ({children}: ChildProps) => {
	return (
		<main>
			<Navbar/>
			<div className='container'>
				
				{children}
			</div>
			<Footer/>
		</main>
	)
}

export default Layout
