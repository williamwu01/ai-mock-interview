import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'


const page = () => {
	return (
		<>
			<section className='card-cta'>
				<div className='flex flex-col gap-6 max-w-lg'>
					<h2>Get interview Ready with AI Powered Practice & feedback </h2>
					<p className='text-lg'>
						Practice on real interview questions, get AI powered feedback and improve your
					</p>
					<Button asChild className='btn-primary max-sm:w-full'>
						<Link href='/interview'>Start an interview</Link>
					</Button>
				</div>
				<Image src='/robot.png' 
					alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"></Image>
			</section>

			<section className='flex flex-col gap-6 mt-8'>
				<h2>Your Interviews </h2>
				<div className='interview-section'>
					{dummyInterviews.map((interview) =>(
						<InterviewCard {...interview} />
					))}
				</div>
			</section>

			<section className='flex flex-col gap-6 mt-8'>
				<h2>Take an Interview</h2>
				<div className='interview-section'>
				{dummyInterviews.map((interview) => (
						<InterviewCard {...interview} />
					))}
				</div>
			</section>
		</>
	)
}

export default page