<template>
  <ASelect :options="state.options" allow-clear :filter-option="false" />
</template>

<script setup>
import { FIELD_LIST } from "@/config/types";
import { extendForSelect } from "@/utils/utils";
import { reactive } from "vue";

const state = reactive({
  options: FIELD_LIST.map((item) => extendForSelect(item, "title")).map((item) => {
    return { label: item.label, value: item.label };
  }),
});
</script>
