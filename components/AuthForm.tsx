'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const formSchema = z.object({
	username: z.string().min(2).max(50),
});

const AuthForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className='card-border lg:min-w-[566px]:'>
			<div className='flex flex-col gap-6 card py-14 px-10'>
				<div className='flex flex-row gap-2 justify-center'>
					<Image 
						src='/logo.svg' 
						alt='Logo' 
						width={32} 
						height={38} />
					<h2>JobReady.AI</h2>
				</div>
				<h1 className='text-center text-2xl font-bold'>Practice Job Interview with AI</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder='shadcn' {...field} />
									</FormControl>
									<FormDescription>This is your public display name.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Submit</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default AuthForm;
