<template>
  <ASelect :options="state.options"

  />
</template>

<script setup>
import { STATUS_IN_DATABASE } from '../../config/types'
import { extendForSelect } from '../../utils/utils'
import { reactive } from 'vue'

const state = reactive({
  options: Object.values(STATUS_IN_DATABASE).map(item => extendForSelect(item, 'title'))
})
</script>
