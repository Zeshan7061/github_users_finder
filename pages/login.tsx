import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type formState = {
	email: string
	password: string
}

const schema = yup
	.object({
		email: yup.string().required().email(),
		password: yup.string().required('Password is required'),
	})
	.required()

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<formState>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
		shouldFocusError: true,
	})

	const onSubmit = (values: formState) => {
		console.log(values)
		reset(
			{},
			{
				keepDefaultValues: true,
				keepValues: false,
			}
		)
	}

	return (
		<div className='container m-auto md:p-10 text-center'>
			<h1 className='md:text-5xl text-3xl my-5'>Login</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-5 md:p-10 w-full md:w-1/2 m-auto'>
				<div className='flex flex-col'>
					<label htmlFor='email' className='text-left text-lg mb-2'>
						Email
					</label>
					<input
						type='email'
						{...register('email', {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						})}
						autoFocus
						tabIndex={1}
						// className='input-field'
					/>
					<p className='text-red-500 text-left'>{errors.email?.message}</p>
				</div>

				<div className='flex flex-col'>
					<label htmlFor='pwd' className='text-left text-lg mb-2'>
						Password
					</label>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('password', {
							required: true,
							minLength: 8,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						})}
						// className='input-field'
					/>
					<p className='text-red-500 text-left'>
						{errors.password?.message}
					</p>

					<label htmlFor='cb' className='text-left text-lg mb-2 mt-3'>
						<input
							type='checkbox'
							name='cb'
							className='mr-2'
							onChange={e => setShowPassword(e.target.checked)}
						/>
						Show password
					</label>
				</div>

				<input
					type='submit'
					value='Login'
					className='input-field bg-orange-400 text-white text-xl cursor-pointer hover:bg-orange-500 transition-all duration-150 hover:ring-2 hover:ring-orange-500'
				/>
			</form>
		</div>
	)
}

export default Login
