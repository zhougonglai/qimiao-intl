<script>
	import { page } from '$app/stores';
</script>

<header class="absolute inset-x-0 top-0 flex justify-center" role="heading">
	<div class="header-block w-full">
		<nav role="navigation" class="inline-flex items-center">
			<div id="logo" class="flex justify-center items-center">
				<img
					width="133"
					height="40"
					class="logo"
					src="/img/logo@1x.png"
					srcset="/img/logo@2x.png 2x"
					alt="加速器下载"
				/>
			</div>
			<ul class="nav-list flex-1 flex">
				<li class="nav-item" class:active={$page.url.pathname === '/'}>
					<a href="/">首页</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss" scoped>
	header {
		--p: 30px;
		padding: var(--p) 0;
		z-index: 9;
		.header-block {
			max-width: 1200px;
		}

		nav {
			width: fit-content;
			height: 60px;
			line-height: 60px;
			background: linear-gradient(270deg, #9b66ff 0%, #7d59ff 100%);
			box-shadow: 0px 10px 20px 0px rgba(0, 51, 157, 0.2);
			border-radius: 50px;
			padding: 0 var(--p);
		}
	}

	.nav {
		&-list {
			margin-left: var(--p);
		}

		&-item {
			width: 120px;
			color: var(--white-op);
			text-align: center;
			position: relative;
			&:hover,
			&.active {
				color: var(--white);
			}
			&.active {
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: calc(50% - 20px);
					width: 40px;
					height: 8px;
					background: #ffffff;
					border-radius: 4px;
				}
			}
			a {
				display: block;
			}
		}
	}
</style>
