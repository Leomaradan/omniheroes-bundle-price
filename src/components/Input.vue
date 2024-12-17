<script setup lang="ts">
import { ref, watch } from 'vue'
import { InputIds } from '../prices';
import { FormKit } from '@formkit/vue';

const { id, onChange, min = "0" } = defineProps<{ id: keyof InputIds, label: string, placeholder?: string, type?: string, min?: string, onChange: (newValue: number, id: keyof InputIds) => void }>()

const state = ref(typeof min === 'string' ? parseInt(min) : 0)

watch(state, (newValue) => {
    onChange(newValue, id)
})

</script>

<template>
    <FormKit type="number" :help="placeholder" :min="min" :label="label" number="integer" :name="id" v-model="state" />
</template>
