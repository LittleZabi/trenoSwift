<script lang="ts">
	import { life, setUserCharName } from '../lib/globals';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import Icon from '@iconify/svelte';
	import Stars from './Stars.svelte';
	export let post_slug = '';
	export let name = '';
	const getRand = (max: number) => Math.ceil(Math.random() * (max - 1));
	const color = '0000111123456789abcdef';
	const lightness = '34567';
	const getRandomColor = () => {
		return (
			'#' +
			lightness[getRand(lightness.length)] +
			color[getRand(color.length)] +
			lightness[getRand(lightness.length)] +
			color[getRand(color.length)] +
			lightness[getRand(lightness.length)] +
			color[getRand(color.length)]
		);
	};
	let message: { message: string; variant: string } | any = false;
	let loading: boolean = false;
	let reviews: any = [
		{ fullname: 'Dai Lee', country: 'Ba sing se', review: 'hello world. one man army' },
		{
			fullname: 'Seu wah',
			country: 'Water Street',
			review:
				'The person who made the drugs for hong kong and rest of asia. which is working under big smile lee and dog eyes from some years but now winsten chu send wei shen to take the command of this drug company and grab out seu wah alive and learn him a lesson.'
		},
		{ fullname: 'Dai Lee', country: 'Ba sing se', review: 'hello world. one man army' },
		{
			fullname: 'Seu wah',
			country: 'Water Street',
			review:
				'The person who made the drugs for hong kong and rest of asia. which is working under big smile lee and dog eyes from some years but now winsten chu send wei shen to take the command of this drug company and grab out seu wah alive and learn him a lesson.'
		},
		{ fullname: 'Dai Lee', country: 'Ba sing se', review: 'hello world. one man army' },
		{
			fullname: 'Seu wah',
			country: 'Water Street',
			review:
				'The person who made the drugs for hong kong and rest of asia. which is working under big smile lee and dog eyes from some years but now winsten chu send wei shen to take the command of this drug company and grab out seu wah alive and learn him a lesson.'
		},
		{ fullname: 'Dai Lee', country: 'Ba sing se', review: 'hello world. one man army' },
		{
			fullname: 'Seu wah',
			country: 'Water Street',
			review:
				'The person who made the drugs for hong kong and rest of asia. which is working under big smile lee and dog eyes from some years but now winsten chu send wei shen to take the command of this drug company and grab out seu wah alive and learn him a lesson.'
		}
	];
	let reviewsCount: number = 0;

	const getComments = async () => {
		await axios
			.get(`/api/reviews?post_slug=${post_slug}`)
			.then((res) => {
				reviews = res.data.reviews;
				reviewsCount = res.data.reviewsCount;
			})
			.catch((e) => console.error(e));
	};
	async function handleMessage(e: any) {
		message = false;
		// if ($USER_CONTEXT.object._id) {
		// 	const review = e.target.review.value;
		// 	if (review.lenght < 4) {
		// 		message = {
		// 			message: 'review must be greater than 3 char',
		// 			variant: 'error'
		// 		};
		// 		return 0;
		// 	}
		// 	if (review.lenght < 2) {
		// 		message = {
		// 			message: 'Enter minimum 3 characters!',
		// 			variant: 'error'
		// 		};
		// 		return 0;
		// 	}
		// 	let _id = $USER_CONTEXT.object._id;
		// 	let fullname = $USER_CONTEXT.object.firstname + ' ' + $USER_CONTEXT.object.lastname;
		// 	let country = $USER_CONTEXT.object.country;
		// 	axios
		// 		.post(
		// 			'/api/reviews?set-review=1',
		// 			setForm({
		// 				review,
		// 				post_id: post_slug,
		// 				_id,
		// 				fullname,
		// 				country
		// 			})
		// 		)
		// 		.then((res) => {
		// 			let y: any = [res.data.reviews, ...reviews];
		// 			e.target['review'].value = '';
		// 			reviewsCount += 1;
		// 			message = {
		// 				message: 'Successfully added!',
		// 				variant: 'success'
		// 			};
		// 			reviews = y;
		// 		})
		// 		.catch((e) => {
		// 			console.error(e);
		// 			message = {
		// 				message: e.response?.data?.message ?? 'Error occured during processing!',
		// 				variant: 'error'
		// 			};
		// 		});
		// } else {
		// 	window.location.href = `/sign-in?r=${$page.url.pathname}#review-section`;
		// 	return 1;
		// }
	}
	onMount(() => {
		getComments();
	});
</script>

<div class="reviews-view">
	<div class="page-size" style="margin:auto">
		<div class="rev-2832">
			<section class="sec-start">
				<div class="profile small-t" style={`background: ${getRandomColor()}`}>
					<div class="pro-987"></div>
				</div>
				<h3>Reviews {reviewsCount ? reviewsCount : ''}</h3>
			</section>
			<section>
				<div class="profile">
					<div class="pro-987">
						<Icon icon="bi:fire" style="color: #ffa9a9;" />
					</div>
				</div>
				<div>
					<div class="new-review">
						<p class="fs16 fw6">Tell others what you think</p>
						<p class="para fs14">
							text that include any abuse or voilating any rules and regulations will be remove and
							one who does that can't write comments again for a month or more.
						</p>
						<textarea placeholder="Enter your review..."></textarea>
						<p class="fw6 fs16 p2">Rate this product</p>
						<div class="rat">
							<Stars
								callback={(rating) => console.log('rating: ', rating)}
								setRating={true}
								Style={'width: 22px; margin-left: 3px;'}
							/>
						</div>
						<button class="dfc">
							Submit
							<!-- <Icon icon="akar-icons:edit" /> -->
						</button>
					</div>
				</div>
			</section>
			<section class="sec-start">
				<div class="profile small-t" style={`background: ${getRandomColor()}`}>
					<div class="pro-987"></div>
				</div>
				<h3>Ratings and reviews</h3>
			</section>
			{#each reviews as review}
				<section>
					<div class="profile" style={`background: ${getRandomColor()}`}>
						<div class="pro-987">
							{review.image ? review.image : setUserCharName(review.fullname)}
						</div>
					</div>
					<div class="a92wqi">
						<div>
							<span class="fw6 fs18">{review.fullname}</span>
							<span class="dfc fs12 a-23">
								<Icon icon="ion:location-outline" />
								{review.country}
							</span>
							<span class="dfc fs12 a-23">
								<Icon icon="solar:calendar-line-duotone" />
								{life(review.createdAt).from()}
							</span>
						</div>
						<div class="review-text">{review.review}</div>
					</div>
				</section>
			{/each}
			<section class="sec-start no-trail">
				<div class="profile small-t" style={`background: ${getRandomColor()}`}>
					<div class="pro-987"></div>
				</div>
				<button class="fs18 fw7"> Click to see more companions </button>
			</section>
			<!-- <section class="no-trail">
				<div class="profile small-t">
					<div class="pro-987"></div>
			</div>
				<div>
					<div class="a92wqi">
						<h5>
							see more companion about <b>{name}</b>
						</h5>
						<div class="review-form">
							<button disabled={reviews.length < 1 ? true : false} class="btn btn-primary">
								{#if reviews.length < 1}
									No Reviews Found
								{:else}
									Load More
								{/if}
							</button>
						</div>
					</div>
				</div>
			</section> -->
		</div>
	</div>
</div>

<style lang="scss">
	.new-review {
		& button {
			width: 251px;
			height: 46px;
			border-radius: 40px;
			background: black;
			color: white;
			font-family: inherit;
			font-size: 16px;
			text-transform: uppercase;
			font-weight: 500;
			&:hover {
				background: rgb(31, 31, 31);
			}
		}
		& .rat {
			margin-top: 8px;
			margin-bottom: 5px;
		}
		& textarea {
			width: 90%;
			height: 100px;
			padding: 10px;
			background: #f8f9ff;
			border-radius: 5px;
			border: 1px solid #e3e3f8;
			font-size: 16px;
		}
		& .p2 {
			margin-top: 10px;
		}
		& .para {
			margin-bottom: 10px;
			margin-top: 2px;
		}
		margin-top: -28px;
		margin-left: 10px;
	}
	.reviews-view {
		color: black;
		overflow: hidden;
		background: #ffffff;
		padding: 10px 0;
		& .rev-2832 {
			padding: 0px 10px;
			margin: 10px 190px;
		}
		& section {
			margin: 10px 0 17px -11px;
			min-height: 47px;
			border-radius: 6px;
			padding: 16px 14px;
			box-shadow: 2px 5px 10px #00000024;
			position: relative;
			background-color: rgba(255, 255, 255, 0.5098039216);
			&::before {
				content: ' ';
				border-left: 2px solid #15266f;
				position: absolute;
				height: 100%;
				width: 2px;
				left: -8px;
				top: 43px;
			}
			&.sec-start {
				box-shadow: none;
				background: none;
				margin-bottom: 0;
				min-height: 0;
				padding-bottom: 0;
				& h3 {
					margin-top: -13px;
				}
			}
			&.no-trail {
				& button {
					background: none;
					padding: 0;
					margin: 0;
					margin-top: -13px;
					display: block;
				}
				&::before {
					content: none;
				}
			}
		}
		& .profile {
			background: #15266f;
			color: white;
			width: 36px;
			height: 36px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			font-size: 16px;
			margin-left: -41px;
			margin-right: 10px;
			letter-spacing: 1px;
			z-index: 1;
			position: relative;
			border: 1px solid #00000030;
			&.small-t {
				width: 4px;
				height: 4px;
				margin-left: -24px;
				margin-top: 16px;
				background: #5e89ff;
			}
		}
		:global(.a92wqi .a-23 svg) {
			margin-left: 10px;
			margin-right: 3px;
		}
		& .a92wqi {
			margin-left: 5px;
			margin-top: -30px;
			& .a-23 {
				display: inline-flex;
				color: rgb(0 0 0);
				justify-content: flex-start;
			}
		}
		& .review-username {
			& span {
				margin-left: 7px;
				font-size: 12px;
			}
		}
	}
</style>
