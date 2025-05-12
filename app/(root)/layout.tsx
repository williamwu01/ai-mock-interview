import Link from 'next/link';
import { ReactNode } from 'react';
import Image from 'next/image';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='root-layout'>
			<nav>
				<Link href='/' className='flex items center gap-2'>
					<Image src='/logo.svg' alt='logo' width={38} height={32}></Image>
				</Link>
			</nav>
			{children}
		</div>
	);
};

export default RootLayout;
