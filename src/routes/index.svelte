<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Subject from '$lib/subject/index.svelte';
	const translate = { x: 0, y: 0 };

	const platforms = [
		{
			title: 'Windows版本',
			url: {
				x: '/img/index/win.png',
				xx: '/img/index/win@2x.png'
			},
			size: {
				with: 69,
				height: 70
			},
			version: ''
		},
		{
			title: 'macOS版本',
			url: {
				x: '/img/index/mac.png',
				xx: '/img/index/mac@2x.png'
			},
			size: {
				with: 49,
				height: 49
			},
			version: ''
		},
		{
			title: 'IOS版本',
			url: {
				x: '/img/index/os.png',
				xx: '/img/index/os@2x.png'
			},
			size: {
				with: 44,
				height: 54
			},
			version: ''
		},
		{
			title: 'Android版本',
			url: {
				x: '/img/index/android.png',
				xx: '/img/index/android@2x.png'
			},
			size: {
				with: 51,
				height: 55
			},
			version: ''
		},
		{
			title: '主机加速',
			url: {
				x: '/img/index/pc@1x.png',
				xx: '/img/index/pc@2x.png'
			},
			size: {
				with: 38,
				height: 52
			},
			version: ''
		}
	];

	const infos = [
		{
			title: '金融级传输专线',
			subtitle: '电竞级标准，游戏稳定有保障',
			color: '#dd65ff1a',
			icon: {
				x: '/img/index/data-1.png',
				xx: '/img/index/data-1@2x.png'
			},
			size: {
				with: 105,
				height: 132
			}
		},
		{
			title: '全球节点覆盖',
			subtitle: '全球覆盖，AI智能选择节点更轻松',
			color: '#23f3ad26',
			icon: {
				x: '/img/index/data-2.png',
				xx: '/img/index/data-2@2x.png'
			},
			size: {
				with: 105,
				height: 132
			}
		},
		{
			title: '支持更多游戏',
			subtitle: '千款热门游戏，全平台覆盖',
			color: '#1e5bfa1a',
			icon: {
				x: '/img/index/data-3.png',
				xx: '/img/index/data-3@2x.png'
			},
			size: {
				with: 105,
				height: 132
			}
		},
		{
			title: '免费试用',
			subtitle: '独家自研Cellular matrix服务器',
			color: '#fff34833',
			icon: {
				x: '/img/index/data-4.png',
				xx: '/img/index/data-4@2x.png'
			},
			size: {
				with: 105,
				height: 132
			}
		}
	];

	const mousemove = e => {
		translate.x = (window.screen.availWidth - e.clientX) / 20;
		translate.y = (window.screen.availWidth - e.clientY) / 20;
	};

	onMount(() => {
		console.log('import.meta.env', import.meta.env.VITE_BASE_PATH);
	});
</script>

<svelte:head>
	<title>奇妙网游加速器-专线加速千款热门网游,超稳定更畅快</title>
</svelte:head>
<svelte:body on:mousemove={mousemove} />

<sction class="jumbotron">
	<div class="content">
		<img
			src="/img/index/jumbotron-title@2x.png"
			alt="玩游戏,就用奇妙加速器"
			width="365"
		/>
		<h3>金融级顶级专线 / 千款游戏多平台 / 硬核稳定不丢包 / 手术级精准加速</h3>

		<a class="download-btn" href="/download.html">
			<img src="/img/download.svg" alt="免费下载" class="icon" width="27" />
			免费下载
		</a>
	</div>

	<div class="platform-block flex items-end justify-between">
		{#each platforms as platform}
			<a
				role="button"
				class="platform flex flex-col"
				href={platform.version ? `/download.html` : ''}
			>
				<div class="platform-cover flex-1 flex items-center justify-center">
					<img
						{...platform.size}
						src={platform.url.x}
						srcset="{platform.url.xx} 2x"
						alt={platform.title}
					/>
				</div>
				<div class="platform-title text-center">
					{platform.title}
				</div>
				<div class="platform-action">
					<button class="platform-download" disabled={!!platform.version}>
						{platform.version ? '立即下载' : '敬请期待'}
					</button>
				</div>
			</a>
		{/each}
	</div>

	<img
		class="data-bg"
		src="/img/index/bg-data@1x.png"
		srcset="/img/index/bg-data@2x.png 2x"
		alt="网游加速器"
		width="899"
		height="548"
		style="transform: translate({translate.x}px,{translate.y}px)"
	/>
</sction>

<section class="subject-block bg-white flex flex-col items-center">
	<div class="block py-4">
		<div class="title flex items-center justify-center">
			<img
				src="/img/index/title.png"
				srcset="/img/index/title@2x.png 2x"
				alt="千款游戏 全平台覆盖"
				width="443"
				height="60"
			/>
		</div>
		<div class="subtitle text-center my-4">
			PC端/移动端热门游戏，新游超快适配
		</div>

		<Subject />
	</div>
</section>

<section class="info-block bg-white flex flex-col items-center">
	<div class="block py-4">
		<div class="title flex items-center justify-center">
			<img
				src="/img/index/title-2.png"
				srcset="/img/index/title-2@2x.png"
				alt="加速稳定 超低延迟"
				width="397"
				height="60"
			/>
		</div>
		<div class="flex items-center justify-center my-4">
			<a class="download-btn" href="/download.html">
				<img src="/img/download.svg" alt="免费下载" class="icon" width="27" />
				免费下载
			</a>
		</div>

		<div class="infos flex items-center justify-between my-4">
			{#each infos as info}
				<div class="info flex flex-col items-center">
					<div
						class="info-cover relative flex items-center justify-center"
						style="color: {info.color};"
					>
						<img src={info.icon.x} alt={info.title} />
					</div>
					<div class="info-content">
						<div class="title text-center text-xl">{info.title}</div>
						<div class="subtitle text-center text-sm mt-4">{info.subtitle}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss" scoped>
	section {
		width: 100%;

		&:last-of-type {
			padding-bottom: 100px;
		}
	}
	.jumbotron {
		width: 1200px;
		height: 900px;
		position: relative;
		padding-top: 200px;
		display: flex;
		flex-direction: column;

		.content {
			color: var(--white);
			flex: 1;

			h3 {
				margin-top: 23px;
			}

			.download-btn {
				margin-top: 30px;
			}
		}

		.data-bg {
			position: absolute;
			right: -50px;
			top: 50px;
		}

		.platform-block {
			margin-bottom: 80px;

			.platform {
				width: 200px;
				height: 120px;
				background: linear-gradient(180deg, #9b66ff 0%, #7d59ff 100%);
				box-shadow: 0px 10px 20px 0px rgba(0, 51, 157, 0.2);
				border-radius: 20px;
				transition: all 0.2s ease-in-out;
				border: 0 solid var(--white);
				&:hover {
					height: 150px;
					border: 4px solid var(--white);
					.platform-action {
						height: 30px;
					}
				}
				&-title {
					color: white;
					line-height: 2.5;
				}

				&-action {
					height: 0px;
					overflow: hidden;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: height 0.2s ease-in-out;
				}

				&-download {
					width: 100px;
					height: 24px;
					background: #ffffff;
					border-radius: 15px;
					font-size: 10px;
					color: var(--dark-op);
				}
			}
		}
	}

	.subject-block {
		.block {
			width: 1200px;
		}

		.subtitle {
			color: #999;
		}
	}

	.info-block {
		.block {
			width: 1200px;
		}

		.info {
			&-cover {
				width: 150px;
				height: 150px;
				img {
					z-index: 1;
				}

				&::after {
					content: '';
					position: absolute;
					width: 155px;
					height: 155px;
					background-color: currentColor;
					border-radius: 50%;
					bottom: -40px;
				}
			}

			&-content {
				margin-top: 80px;
			}
		}
	}

	.download-btn {
		width: 200px;
		height: 54px;
		background: linear-gradient(90deg, #ffd22e 0%, #f8c04f 100%);
		box-shadow: 0px 10px 10px 0px rgba(0, 51, 157, 0.2);
		border-radius: 27px;
		border: 4px solid #ffffff;
		color: #7a491e;
		font-size: 20px;
		outline: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: border 0.2s ease-out, box-shadow 0.2s ease-out;

		.icon {
			width: 27px;
			height: 27px;
			margin-right: 10px;
		}

		&:hover {
			border: 2px solid #ffffff;
			color: #7a491e;
			.icon {
				animation-name: bounce;
				animation-duration: 1s;
				transform-origin: center bottom;
			}
		}
	}
</style>
