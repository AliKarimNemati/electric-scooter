<template>
    <button class="p-2 bg-red-700 hover:bg-black text-white transition px-8 text-lg uppercase rounded-md mt-3">{{content}}</button>
</template>

<script setup lang="ts">
    defineProps({
        content: {
            type: String,
            default: ''
        }
    })
</script>
