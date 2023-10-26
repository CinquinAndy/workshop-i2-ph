'use client'
import Image from 'next/image'
import React from 'react'

export function VideoOrMinia({ minia, video }) {
	const [isHover, setIsHover] = React.useState(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}
	return (
		<div
			className={
				'absolute left-0 top-0 flex h-full w-full items-center justify-center'
			}
		>
			<button
				className={'relative h-full w-full'}
				onMouseEnter={() => {
					handleMouseEnter()
				}}
				onMouseLeave={() => {
					handleMouseLeave()
				}}
			>
				{isHover ? (
					<>
						<video
							src={`${video}`}
							autoPlay={true}
							loop={true}
							muted={true}
							playsInline={true}
							className={
								'absolute left-0 top-0 h-full w-full object-cover object-center'
							}
						/>
					</>
				) : (
					<>
						<Image
							src={`${minia}`}
							alt={'minia'}
							fill={true}
							className={'object-cover object-center'}
						/>
					</>
				)}
			</button>
		</div>
	)
}
