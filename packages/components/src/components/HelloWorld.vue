<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{
  name: string
}>()

const a = ref(1)
onMounted(() => {
  a.value++
})
</script>

<template>
  <div>
    {{ name }}
  </div>
</template>
