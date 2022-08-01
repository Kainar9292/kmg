<template>
  <ASelect :options="selectOptions" allow-clear :filter-option="false" />
</template>

<script setup>
import { WELL_TYPES } from "@/config/types";
import { extendForSelect, removeDuplicates } from "@/utils/utils";
import { useStore } from "vuex";
import { computed, reactive } from "vue";

const store = useStore();

const selectOptions = computed(() => {
  const options = store.getters["field/all"].map((field) => {
    return {
      label: field?.well,
      value: field?.well,
    };
  });

  return removeDuplicates(options);
});

const state = reactive({
  options: Object.values(WELL_TYPES).map((item) => extendForSelect(item, "title")),
});
</script>
