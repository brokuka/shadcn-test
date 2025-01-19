<script setup lang="ts">
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

const data: Partial<Equipment> = {
  id: 'imperial-boots',
  name: 'Imperial Boots',
  slot: 'boots',
  rarity: 'imperial',
  statsProgression: {
    heroDefense: {
      extra: {
        lv_10: '100',
        lv_30: '100',
      },
    },
    magicDamageResistance: {
      extra: {
        lv_20: 10,
        lv_40: 10,
      },
    },
  },
}
</script>

<template>
  <!-- <NuxtLink to="/">
    To index
  </NuxtLink>

  <UiScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm font-medium leading-none">
        Tags
      </h4>

      <div v-for="tag in tags" :key="tag">
        <div class="text-sm">
          {{ tag }}
        </div>

        <UiSeparator class="my-2" />
      </div>
    </div>
    <UiScrollBar />
  </UiScrollArea> -->
  <Gear v-bind="data" />
</template>
