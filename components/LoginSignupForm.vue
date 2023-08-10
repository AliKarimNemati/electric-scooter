<template>
  <form class="flex flex-col items-center gap-y-2" @submit.prevent="handleSubmit">
    <input
      v-model="formInfo.username"
      type="text"
      class="border border-red-700 rounded-md px-2 py-1 w-64"
      placeholder="username"
    />
    <input
      v-model="formInfo.email"
      type="email"
      class="border border-red-700 rounded-md px-2 py-1 w-64"
      placeholder="email"
      v-if="type === 'signup'"
    />
    <input
      v-model="formInfo.password"
      type="password"
      class="border border-red-700 rounded-md px-2 py-1 w-64"
      placeholder="password"
    />
    <p class="text-red-700">{{error}}</p>
    <PrimaryBtn
      :content="type === 'signup' ? 'sign up' : 'login'"
      class="lowercase mb-6"
    />
  </form>
</template>

<script setup>

let formInfo = ref({
  username: "",
  email: "",
  password: "",
});

let error = ref('')

const probs = defineProps({
  type: {
    default: "",
  },
});

const emits = defineEmits(['getFormInfo']);

function handleSubmit() {
    error.value = formValidation();
    if(error.value === ''){
        emits("getFormInfo", formInfo);
    }
}

function formValidation() {
    if (formInfo.value.username.length < 5) {
        return "username must be at least 5 characters."
    }else if(formInfo.value.email.length == 0 && probs.type === "signup"){
        return "email is required."
    }
    else if(formInfo.value.password.length < 5){
        return "password must be at least 5 characters."
    }
    else{
        return ''
    }
}
</script>
