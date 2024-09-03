<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import LinkIcon from '$lib/assets/LinkIcon.svelte';

	interface Project {
		title: string;
		url: string;
		dateStart: string;
		dateEnd: string;
		stack: string[];
		content: string;
	}

	const projects: Project[] = [
		{
			title: 'accomreviews',
			url: 'https://accomreviews.co.uk',
			dateStart: '2024',
			dateEnd: 'present',
			stack: ['SvelteKit', 'Drizzle ORM', 'Tailwind CSS', 'Coolify'],
			content:
				'Find out what real students think about their halls and find the perfect university accommodation for you.'
		},
		{
			title: 'TypeTest.io',
			url: 'https://typetest.io',
			dateStart: '2020',
			dateEnd: '2023',
			stack: ['Vue.js', 'Nuxt', 'Express', 'MongoDB'],
			content:
				'Take timed tests to find out your WPM, track your progress, and improve your typing ability. Acquired by <a href="https://whatpulse.org/" target="_blank">WhatPulse</a> in 2023.'
		}
	];
</script>

<svelte:head>
	<title>Lucas Hockley</title>
</svelte:head>

<main class="max-w-xl mx-auto px-4 mb-48">
	<section>
		<h1 class="mt-28 mb-4 font-semibold text-3xl">Lucas Hockley</h1>

		<p>
			I'm currently looking for a job in tech, probably as a full-stack or front-end engineer. <a
				href="/20240819-lucas-hockley-cv.pdf"
				target="_blank">Here's a link to my CV</a
			> (with my contact info!)
		</p>
	</section>

	<section>
		<h2>Projects</h2>

		<ul class="flex gap-4 flex-col my-4">
			{#each projects as project}
				<li>
					<p class="font-semibold text-lg text-gray-900 flex gap-2 items-center">
						{project.title}
						<a href={project.url} target="_blank" class="text-gray-800"><LinkIcon size={20} /></a>
						<span class="my-2 text-gray-500 font-medium text-xs pt-0.5">
							{project.dateStart} <span class="text-gray-900">-</span>
							{project.dateEnd}
						</span>
					</p>

					<p class="my-2">{@html project.content}</p>

					<div class="flex gap-1.5 items-center my-3 -ml-1.5 flex-wrap gap-y-3">
						{#each project.stack as tech}
							<p class="bg-gray-50 text-gray-700 border-1.5 rounded-full px-2.5 py-1 text-xs">
								{tech}
							</p>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>About Me</h2>

		<p class="my-4">
			I graduated in summer 2024 with a degree in Computer Science from the University of Leeds.
			Since then, I've been working hard on <a href="https://accomreviews.co.uk" target="_blank"
				>accomreviews</a
			>, and more recently have been applying to some jobs.
		</p>

		<p class="my-4">
			I've been creating full-stack web apps for over 4 years now, focusing on designing beautiful,
			accessible and functional experiences. In this time I've used a huge range of tech, so I'm
			used to learning new things all the time. At the moment though, I'm feeling really productive
			with SvelteKit, Tailwind and Drizzle, hosting everything via Coolify on a cheap VPS.
		</p>

		<p class="my-4">
			I also love tinkering with things. A few years back I designed and manufactured my dream
			keyboard, but now I'm hooked on driving and working on my '97 Toyota Celica GT.
		</p>
	</section>
</main>
