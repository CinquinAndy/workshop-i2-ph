import React from 'react'
import Image from 'next/image'
import { getContent } from '@/services/getData'

export async function CustomVideosSection() {
	const data = await getContent()
	console.log(data)
	return (
		<>
			<img
				className="img"
				alt="Div"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/div-rightarrowwrapper.svg"
			/>
			<div className="overlap-group-wrapper">
				<div className="overlap-group">
					<div
						className={
							'absolute left-0 top-0 flex h-full w-full items-center justify-center'
						}
					>
						<div className={'relative h-full w-full'}>
							<Image
								src={`${data[0].minia_url}`}
								alt={'minia'}
								fill={true}
								className={'object-cover object-center'}
							/>
						</div>
					</div>
					{/*<div className="m" />*/}
					<div className="div-marker-overlays">
						<div className="variable">
							<div className="text-wrapper-14">17:11</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-12">
				<div className="text-wrapper-15">{data[0].artist_name}</div>
			</div>
			<img
				className="list-item"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-126.svg"
			/>
			<div className="list-item-2">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon.svg"
				/>
				<div className="variable-k">{data[0].vue_number}</div>
			</div>
			<img
				className="list-item-3"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item.svg"
			/>
			<div className="list-item-4">{data[0].like_pourcent}</div>
			<div className="link-Polenisation-coach-gives-wrapper">
				<p className="p">{data[0].title}</p>
			</div>
			<img
				className="list-item-5"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-1.svg"
			/>
			<div className="overlap-wrapper">
				<div className="overlap-group">
					<div className="m-eaftggaaaa-mh" />
					<div className="variable-wrapper">
						<div className="variable-2">
							<div className="text-wrapper-16">9:51</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-13">
				<div className="text-wrapper-17">{data[1].artist_name}</div>
			</div>
			<img
				className="list-item-6"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-127.svg"
			/>
			<img
				className="list-item-7"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-173.svg"
			/>
			<div className="list-item-8">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-1.svg"
				/>
				<div className="variable-k">{data[1].vue_number}</div>
			</div>
			<img
				className="list-item-9"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-2.svg"
			/>
			<div className="list-item-10">{data[1].like_pourcent}</div>
			<div className="link-huge-boobed-wrapper">
				<p className="link-huge-boobed">{data[1].title}</p>
			</div>
			<img
				className="list-item-11"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-3.svg"
			/>
			<div className="list-item-link-14">
				<div className="overlap-group">
					<div className="m-eaftggaaaa-mh-2" />
					<div className="div-marker-overlays">
						<div className="variable">
							<div className="text-wrapper-14">15:25</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-15">
				<div className="text-wrapper-18">{data[2].artist_name}</div>
			</div>
			<img
				className="list-item-12"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-128.svg"
			/>
			<div className="list-item-13">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-2.svg"
				/>
				<div className="variable-m">{data[2].vue_number}</div>
			</div>
			<img
				className="list-item-14"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-4.svg"
			/>
			<div className="list-item-15">{data[2].like_pourcent}</div>
			<div className="link-Polenisationy-ass-wrapper">
				<p className="text-wrapper-19">{data[2].title}</p>
			</div>
			<img
				className="list-item-16"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-5.svg"
			/>
			<div className="list-item-link-16">
				<div className="overlap-group">
					<div className="m-2" />
					<div className="div-marker-overlays-2">
						<div className="variable-3">
							<div className="text-wrapper-14">28:49</div>
						</div>
						<div className="span-phpfreeblock">
							<div className="span-phfreetext">
								<div className="text-wrapper-20">Free</div>
							</div>
							<img
								className="SVG"
								alt="Svg"
								src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/svg.svg"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-17">
				<div className="text-wrapper-21">{data[3].artist_name}</div>
			</div>
			<img
				className="list-item-17"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-182.svg"
			/>
			<div className="list-item-18">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-3.svg"
				/>
				<div className="variable-4">{data[3].vue_number}</div>
			</div>
			<img
				className="list-item-19"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-6.svg"
			/>
			<div className="list-item-20">{data[3].like_pourcent}</div>
			<div className="link-pilf-armani-wrapper">
				<p className="text-wrapper-22">{data[3].title}</p>
			</div>
			<img
				className="list-item-21"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-7.svg"
			/>
			<div className="list-item-link-18">
				<div className="overlap-group">
					<div className="m-qm-tmxybeaftggaaaa" />
					<div className="div-marker-overlays">
						<div className="variable">
							<div className="text-wrapper-14">21:31</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-19">
				<div className="text-wrapper-23">{data[4].artist_name}</div>
			</div>
			<img
				className="list-item-22"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-129.svg"
			/>
			<div className="list-item-23">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-4.svg"
				/>
				<div className="variable-4">{data[4].vue_number}</div>
			</div>
			<img
				className="list-item-24"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-8.svg"
			/>
			<div className="list-item-25">{data[4].like_pourcent}</div>
			<div className="link-gushing-teen-wrapper">
				<p className="link-gushing-teen">{data[4].title}</p>
			</div>
			<img
				className="list-item-26"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-9.svg"
			/>
			<div className="list-item-link-20">
				<div className="overlap-group">
					<div className="m-eaftggaaaa-mh-3" />
					<div className="variable-wrapper">
						<div className="variable-2">
							<div className="text-wrapper-16">7:04</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-21">
				<div className="text-wrapper-24">{data[5].artist_name}</div>
			</div>
			<img
				className="list-item-27"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-130.svg"
			/>
			<div className="list-item-28">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-5.svg"
				/>
				<div className="variable-4">{data[5].vue_number}</div>
			</div>
			<img
				className="list-item-29"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-10.svg"
			/>
			<div className="list-item-30">{data[5].like_pourcent}</div>
			<div className="link-DREDD-vs-wrapper">
				<p className="text-wrapper-25">{data[5].title}</p>
			</div>
			<img
				className="list-item-31"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-11.svg"
			/>
			<div className="list-item-link-22">
				<div className="overlap-group">
					<div className="m-eaftggaaaa-mh-4" />
					<div className="variable-wrapper">
						<div className="variable-2">
							<div className="text-wrapper-16">6:15</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-23">
				<div className="text-wrapper-24">{data[6].artist_name}</div>
			</div>
			<img
				className="list-item-32"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-131.svg"
			/>
			<div className="list-item-33">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-6.svg"
				/>
				<div className="variable-k">{data[6].vue_number}</div>
			</div>
			<img
				className="list-item-34"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-12.svg"
			/>
			<div className="list-item-35">{data[6].like_pourcent}</div>
			<div className="link-director-joins-wrapper">
				<p className="text-wrapper-26">{data[6].title}</p>
			</div>
			<img
				className="list-item-36"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-13.svg"
			/>
			<div className="list-item-link-24">
				<div className="overlap-group">
					<div className="m-2" />
					<div className="div-marker-overlays-2">
						<div className="variable-3">
							<div className="text-wrapper-14">29:19</div>
						</div>
						<div className="span-phpfreeblock">
							<div className="span-phfreetext">
								<div className="text-wrapper-20">Free</div>
							</div>
							<img
								className="SVG"
								alt="Svg"
								src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/svg-1.svg"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-25">
				<div className="text-wrapper-27">{data[7].artist_name}</div>
			</div>
			<img
				className="list-item-37"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-183.svg"
			/>
			<div className="list-item-38">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-7.svg"
				/>
				<div className="variable-m">{data[7].vue_number}</div>
			</div>
			<img
				className="list-item-39"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-14.svg"
			/>
			<div className="list-item-40">{data[7].like_pourcent}</div>
			<div className="link-OMG-my-pissed-wrapper">
				<p className="link-OMG-my-pissed">{data[7].title}</p>
			</div>
			<img
				className="list-item-41"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-15.svg"
			/>
			<div className="list-item-link-26">
				<div className="overlap-group">
					<div className="m-eaftggaaaa-mh-5" />
					<div className="div-marker-overlays">
						<div className="variable">
							<div className="text-wrapper-14">14:53</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-27">
				<div className="text-wrapper-28">{data[8].artist_name}</div>
			</div>
			<img
				className="list-item-42"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-132.svg"
			/>
			<div className="list-item-43">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-8.svg"
				/>
				<div className="variable-k">{data[8].vue_number}</div>
			</div>
			<img
				className="list-item-44"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-16.svg"
			/>
			<div className="list-item-45">{data[8].like_pourcent}</div>
			<div className="link-TODAY-i-WILL-wrapper">
				<p className="link-TODAY-i-WILL">{data[8].title}</p>
			</div>
			<img
				className="list-item-46"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-17.svg"
			/>
			<div className="list-item-link-28">
				<div className="overlap-group">
					<div className="m-eaftggaaaa-mh-wz" />
					<div className="div-marker-overlays">
						<div className="variable">
							<div className="text-wrapper-14">23:36</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-29">
				<div className="text-wrapper-29">{data[9].artist_name}</div>
			</div>
			<img
				className="list-item-47"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-133.svg"
			/>
			<div className="list-item-48">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-9.svg"
				/>
				<div className="variable-4">{data[9].vue_number}</div>
			</div>
			<img
				className="list-item-49"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-18.svg"
			/>
			<div className="list-item-50">{data[9].like_pourcent}</div>
			<div className="link-he-Flyed-me-in-wrapper">
				<p className="link-he-Flyed-me-in">{data[9].title}</p>
			</div>
			<img
				className="list-item-51"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-19.svg"
			/>
			<div className="list-item-link-30">
				<div className="overlap-group">
					<div className="m-qryglxybeaftggaaaa" />
					<div className="div-marker-overlays">
						<div className="variable">
							<div className="text-wrapper-14">13:27</div>
						</div>
					</div>
				</div>
			</div>
			<div className="list-item-link-31">
				<div className="text-wrapper-30">{data[10].artist_name}</div>
			</div>
			<img
				className="list-item-52"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-134.svg"
			/>
			<div className="list-item-53">
				<img
					className="icon"
					alt="Icon"
					src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/icon-10.svg"
				/>
				<div className="variable-k">{data[10].vue_number}</div>
			</div>
			<img
				className="list-item-54"
				alt="List item"
				src="https://cdn.animaapp.com/projects/653916e56ce58c258174905b/releases/65391751a9201e96f4b7651e/img/list---item-20.svg"
			/>
			<div className="list-item-55">{data[10].like_pourcent}</div>
			<div className="link-fan-Flys-wrapper">
				<p className="link-fan-Flys">{data[10].title}</p>
			</div>
		</>
	)
}
