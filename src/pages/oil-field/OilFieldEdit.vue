<template>
  <APageHeader title="Редактировать скважину" @back="() => $router.go(-1)" :ghost="false">
    <template #extra>
      <AButton type="primary" size="large" html-type="submit" form="oil_field_form">
        Сохранить
      </AButton>
    </template>
  </APageHeader>
  <ACard class="card">
    <OilFieldForm @submit="onSubmitEdit" :data-id="dataId"/>
  </ACard>
</template>

<script setup>
import OilFieldForm from "@/pages/oil-field/components/OilFieldForm.vue"
import { notification } from "ant-design-vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

const dataId = computed(() => +route.params.id);

function onSubmitEdit(values) {

  store
    .dispatch("field/editWellItem", {data: values, id: dataId.value})
    .then(() => {
      notification.success({
        message: "Скважина успешно изменена",
      });
      router.push({ name: "OilFieldMain" });
    })
    .catch((error) => {
      notification.error({
        message: `Произошла ошибка - ${error}`,
      });
    });
}
</script>
