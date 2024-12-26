<template>
	<div class="select-none">
		<h1 class="pageTitle text-xl">
			<template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
				<!-- If a link exists, render NuxtLink -->
				<span v-if="breadcrumb.link">
					<Link :href="breadcrumb.link">
					<span class="text-gray-500 hover:text-blue-900 transition-all">
						{{ breadcrumb.title }} {{ capitalizeFirstLetter(breadcrumb.description) }}
					</span>
					</Link>
				</span>

				<!-- If no link, just display the title -->
				<span v-else>
					<span class="capitalize">{{ breadcrumb.title }} {{ capitalizeFirstLetter(breadcrumb.description)
						}}</span>
				</span>

				<RightOutlined v-if="index < breadcrumbs.length - 1" class="ml-1 mr-2" />
			</template>
		</h1>
	</div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { RightOutlined } from '@ant-design/icons-vue';

const props = defineProps({
	breadcrumbs: {
		type: Array,
		required: true,
		default: () => [],
	},
});

function capitalizeFirstLetter(str) {
	if (!str) return '';
	let lowercased = str.toLowerCase();
	return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
}
</script>

<style>
.pageTitle {
	font-weight: bold;
	color: #1E293B;
	display: flex;
	align-items: center;
}
</style>