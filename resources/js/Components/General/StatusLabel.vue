<template>
	<span :class="statusClass" class="block text-center capitalize px-3 py-1 me-2 text-sm font-medium rounded">
		{{ name ? name : statusText }}
	</span>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
	status: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	}
})

// Computed property to determine the class based on the status
const statusClass = computed(() => {
	const status = props.status.toLowerCase()
	const name = props.name

	if (status === 'pending approval') {
		if (name === 'Pending Approval • L1') {
			return 'text-red-800 bg-red-100';
		}
		else if (name === 'Pending Approval • L2') {
			return 'text-red-800 bg-orange-100';
		}
		else if (name === 'Pending Approval • L3') {
			return 'text-red-800 bg-yellow-100';
		}
	}

	switch (status) {
		case 'completed':
		case 'payment completed':
		case 'success':
			return 'text-green-800 bg-green-100'
		case 'approved':
			return 'text-blue-800 bg-blue-100'
		case 'pending submission':
			return 'text-blue-800 bg-cyan-100'
		case 'rejected':
		case 'payment failed':
			return 'text-red-800 bg-red-100'
		case 'pending approval':
			return 'text-yellow-800 bg-yellow-100'
		case 'cancelled':
		default:
			return 'text-gray-800 bg-gray-100'
	}
})

// Optional: Capitalize the status text
const statusText = computed(() => {
	return props.status.charAt(0).toUpperCase() + props.status.slice(1).toLowerCase()
})
</script>
