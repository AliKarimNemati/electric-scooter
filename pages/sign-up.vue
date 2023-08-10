<template>
    <h1 class="text-center font-semibold text-5xl my-6 text-red-700">Sign Up</h1>
    <LoginSignupForm type="signup" @getFormInfo="(e) => {formInfo = e; console.log(formInfo)}"/>
</template>

<script setup>
    let formInfo = ref([])
</script>