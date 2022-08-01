<template>
  <ASelect :options="state.options" allow-clear :filter-option="false" />
</template>

<script setup>
import { WELL_CONDITION } from "@/config/types";
import { extendForSelect } from "@/utils/utils";
import { reactive } from "vue";

const state = reactive({
  options: Object.values(WELL_CONDITION).map((item) => extendForSelect(item, "title")),
});
</script>
