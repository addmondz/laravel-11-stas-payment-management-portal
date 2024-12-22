<template>
    <div class="flex items-center justify-center py-12">
        <div class="w-full max-w-2xl">
            <div class="flex items-center justify-center mb-8">
                <div class="w-1/3">
                    <!-- Reference the image dynamically using the VITE_BASE_URL -->
                    <img :src="imageUrl" class="w-full" />
                </div>
            </div>
            <div class="text-center">
                <div class="mb-5">
                    <p class="uppercase text-xs tracking-wider">Nothing To Show Here</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    data() {
        return {
            // imageUrl: `${import.meta.env.VITE_BASE_URL}/public/images/not-found-illustration.png`
            imageUrl: `${import.meta.env.VITE_BASE_URL}/public/images/not-found-illustration.jpg`
        };
    }
};
</script>