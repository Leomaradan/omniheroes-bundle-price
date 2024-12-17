<script setup lang="ts">
import { getForm, getRegularPrices, InputIds, type RegularPrices } from '../prices';
import Input from './Input.vue';
import { computed, ref } from 'vue'

const regularPrices = computed<RegularPrices>(() => getRegularPrices())
const form = computed(() => getForm())

const itemsInBundle = ref<Partial<Record<keyof InputIds, number>>>({})
const bundlePrice = ref(0)

const onChangeItemsInBundle = (newValue: number, id: keyof InputIds) => {
  itemsInBundle.value[id] = newValue
}

const onChangeBundlePrice = (newValue: number, _: keyof InputIds) => {
  bundlePrice.value = newValue
}

const bundleValue = computed(() => {
  const items = Object.keys(itemsInBundle.value) as (keyof RegularPrices)[];
  let diamondValue = 0;

  items.forEach(item => {
    if (regularPrices.value[item]) {
      diamondValue += regularPrices.value[item] * (itemsInBundle.value[item as keyof typeof itemsInBundle.value] ?? 0)
    }
  });

  return diamondValue * regularPrices.value.diamondToCurrency;
})

</script>

<template>
  <h1>Bundle Price Calculator</h1>

  <Input label="Bundle price" id="bundlePrice" min="1" type="number" :onChange="onChangeBundlePrice" />

  <hr />
  <div class="columns-4">
    <template v-for="input in form">
      <Input :label="input[1]" :id="input[0]" :placeholder="input[2]" type="number" :onChange="onChangeItemsInBundle" />
    </template>
  </div>

  <hr />

  <div class="card">
    <p>bundle price value is {{ bundleValue.toFixed(2) }}</p>
    <p>bundle price ratio is {{ ((bundleValue / bundlePrice) * 100).toFixed(2) }}%</p>

  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
