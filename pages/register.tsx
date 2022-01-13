import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type formState = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

const schema = yup
	.object({
		name: yup.string().required().min(3),
		email: yup.string().required().email(),
		password: yup
			.string()
			.required('Password is required')
			.min(8)
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
				'Password must contain at least one uppercase, one lowercase, one number and one special character'
			),
		confirmPassword: yup
			.string()
			.required('Confirm password is required')
			.oneOf([yup.ref('password'), null], "Passwords don't match"),
	})
	.required()

const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus,
	} = useForm<formState>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
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
		setFocus('name')
	}

	return (
		<div className='container m-auto md:p-10 text-center'>
			<h1 className='md:text-5xl text-3xl my-5'>Register</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-5 md:p-10 w-full md:w-1/2 m-auto'>
				<div className='flex flex-col'>
					<label htmlFor='name' className='text-left text-lg mb-2'>
						Name
					</label>
					<input
						type='text'
						{...register('name', { required: true })}
						// className='input-field'
						defaultValue='John Doe'
						autoFocus
					/>
					{/* {errors.name && (
						<p className='text-red-500 text-left'>* Name is required</p>
					)} */}
					<p className='text-red-500 text-left'>{errors.name?.message}</p>
				</div>

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
						// className='input-field'
					/>
					{/* {errors.email?.type === 'required' && (
						<p className='text-red-500 text-left'>* Email is required</p>
					)}
					{errors.email?.type === 'pattern' && (
						<p className='text-red-500 text-left'>
							* Invalid email address
						</p>
					)} */}
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
					{/* {errors.password?.type === 'required' && (
						<p className='text-red-500 text-left'>
							* Password is required
						</p>
					)}
					{errors.password?.type === 'minLength' && (
						<p className='text-red-500 text-left'>
							* Password must be at least 8 characters
						</p>
					)}
					{errors.password?.type === 'pattern' && (
						<p className='text-red-500 text-left'>
							* Password must contain at least one lowercase letter,
							one uppercase letter, one number, and one special
							character
						</p>
					)} */}
					<p className='text-red-500 text-left'>
						{errors.password?.message}
					</p>
					{/* <label htmlFor='cb' className='text-left text-lg mb-2 mt-3'>
						<input
							type='checkbox'
							name='cb'
							className='mr-2'
							onChange={e => setShowPassword(e.target.checked)}
						/>
						Show password
					</label> */}
				</div>

				<div className='flex flex-col'>
					<label htmlFor='pwd' className='text-left text-lg mb-2'>
						Confirm Password
					</label>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('confirmPassword', {
							required: true,
							minLength: 8,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						})}
						// className='input-field'
					/>
					{/* {errors.password?.type === 'required' && (
						<p className='text-red-500 text-left'>
							* Password is required
						</p>
					)}
					{errors.password?.type === 'minLength' && (
						<p className='text-red-500 text-left'>
							* Password must be at least 8 characters
						</p>
					)}
					{errors.password?.type === 'pattern' && (
						<p className='text-red-500 text-left'>
							* Password must contain at least one lowercase letter,
							one uppercase letter, one number, and one special
							character
						</p>
					)} */}
					<p className='text-red-500 text-left'>
						{errors.confirmPassword?.message}
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
					value='Register'
					className='input-field bg-orange-400 text-white text-xl cursor-pointer hover:bg-orange-500 transition-all duration-150 hover:ring-2 hover:ring-orange-500'
				/>
			</form>
		</div>
	)
}

export default Register
