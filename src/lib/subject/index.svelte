<script>
	import { onDestroy, onMount } from 'svelte';
	import { getSubject } from '$lib/services';

	let subjects = [],
		index = 0,
		timer = 0;

	onMount(async () => {
		const { data } = await getSubject();
		subjects = data;
		timer = setInterval(switcher, 3000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});

	const switcher = async () => {
		if (index === subjects.length - 1) {
			index = 0;
		} else {
			index += 1;
		}
	};

	const mouseenter = () => {
		if (timer) {
			clearInterval(timer);
		}
	};

	const mouseleave = () => {
		timer = setInterval(switcher, 3000);
	};
</script>

<div
	class="subjects flex justify-between"
	on:mouseenter={mouseenter}
	on:mouseleave={mouseleave}
>
	<div class="left-block flex flex-col justify-between">
		<div class="subject relative">
			{#each subjects as subject, i}
				<div class="box absolute inset-0" class:active={i === index}>
					<img
						src={import.meta.env.VITE_PICTURE_URL + subject.subject_pic_url}
						alt={subject.game_name}
						id={subject.subject_url}
					/>
				</div>
			{/each}
		</div>
		<div class="subject relative">
			{#each subjects as subject, i}
				<div
					class="box absolute inset-0"
					class:active={index < subjects.length - 1
						? i === index + 1
						: i === index - subjects.length + 1}
				>
					<img
						src={import.meta.env.VITE_PICTURE_URL + subject.subject_pic_url}
						alt={subject.game_name}
						id={subject.subject_url}
					/>
				</div>
			{/each}
		</div>
	</div>

	<div class="middle-block relative">
		{#each subjects as subject, i}
			<div
				class="box absolute inset-0"
				class:active={index < subjects.length - 2
					? i === index + 2
					: i === index - subjects.length + 2}
			>
				<img
					src={import.meta.env.VITE_PICTURE_URL + subject.subject_pic_url}
					alt={subject.game_name}
					id={subject.subject_url}
				/>
			</div>
		{/each}
	</div>

	<div class="right-block flex flex-col justify-between">
		<div class="subject relative">
			{#each subjects as subject, i}
				<div
					class="box absolute inset-0"
					class:active={index < subjects.length - 3
						? i === index + 3
						: i === index - subjects.length + 3}
				>
					<img
						src={import.meta.env.VITE_PICTURE_URL + subject.subject_pic_url}
						alt={subject.game_name}
						id={subject.subject_url}
					/>
				</div>
			{/each}
		</div>
		<div class="subject relative">
			{#each subjects as subject, i}
				<div
					class="box absolute inset-0"
					class:active={index < subjects.length - 4
						? i === index + 4
						: i === index - subjects.length + 4}
				>
					<img
						src={import.meta.env.VITE_PICTURE_URL + subject.subject_pic_url}
						alt={subject.game_name}
						id={subject.subject_url}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.left-block,
	.right-block {
		.subject {
			width: 289px;
			height: 192px;
		}
	}

	.middle-block {
		width: 592px;
		height: 399px;
	}

	.box {
		width: inherit;
		height: inherit;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		cursor: pointer;
		&.active {
			opacity: 1;
		}

		img {
			width: inherit;
			height: inherit;
			object-fit: cover;
			object-position: center;
		}
	}
</style>
