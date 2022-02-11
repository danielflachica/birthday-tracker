<template>
    <h1 class="text-3xl font-bold">
        <i class="material-icons">public</i>
        {{ title }}
        <i class="material-icons">public</i>
    </h1>
</template>

<script>
    export default {
        setup: () => ({
            title: 'Hello, World! This is my Vue3 App',
        }),
    }
</script>
