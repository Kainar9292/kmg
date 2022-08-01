<template>
  <ASelect :options="state.options" allow-clear :filter-option="false" />
</template>

<script setup>
import { reactive } from "vue";
import { STATUS_IN_DATABASE } from "@/config/types";
import { extendForSelect } from "@/utils/utils";

const state = reactive({
  options: Object.values(STATUS_IN_DATABASE).map((item) =>
    extendForSelect(item, "title")
  ),
});
</script>
