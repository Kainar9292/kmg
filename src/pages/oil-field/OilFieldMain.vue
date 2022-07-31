<template>
  <APageHeader title="Общий список скважин" :ghost="false">
    <template #extra>
      <RouterLink :to="{ name: 'OilFieldAdd' }">
        <AButton type="primary" size="large"> Добавить </AButton>
      </RouterLink>
    </template>
  </APageHeader>

  <ACard class="card">
    <AForm layout="vertical">
      <ARow :gutter="[16, 16]">
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Статус в БД">
            <SelectAvailability
              size="large"
              v-model:value="filters.savedId"
              placeholder="Статус"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Месторождение">
            <SelectField
              size="large"
              placeholder="Месторождение"
              v-model:value="filters.field"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Тип скважины">
            <SelectWellType
              size="large"
              placeholder="Тип"
              v-model:value="filters.wellTypeId"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Состояние скважины">
            <SelectWellCondition
              size="large"
              placeholder="Состояние"
              v-model:value="filters.wellConditionId"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Скважина">
            <SelectWell
              size="large"
              placeholder="Скважина"
              mode="multiple"
              :show-arrow="true"
              :max-tag-count="5"
              v-model:value="filters.well"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Запросить данные">
            <AButton @click="getFields" size="large" type="primary">Показать</AButton>
          </AFormItem>
        </ACol>
      </ARow>
    </AForm>

    <ADivider> Список месторождений </ADivider>
    <DefTable
      v-if="columns"
      :columns="columns"
      :data-source="oilFields"
      :scroll="{ x: $isMobile ? 1024 : true }"
    />
  </ACard>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
const store = useStore();

let filters = reactive({});

function getFields() {
  store.dispatch("field/getWell", filters);
}

const oilFields = computed(() => store.getters["field/processedData"]);

const columns = [
  {
    title: "№",
    dataIndex: "id",
  },
  {
    title: "Месторождение",
    dataIndex: "field",
  },
  {
    title: "Скважина",
    dataIndex: "well",
  },
  {
    title: "Тип скважины",
    dataIndex: ["wellType", "title"],
  },
  {
    title: "Состояние скважины",
    dataIndex: ["wellCondition", "title"],
  },
  {
    title: "Горизонт",
    dataIndex: ["horizon", "title"],
  },
  {
    title: "Q жидкости",
    dataIndex: "qLiquid",
  },
  {
    title: "Обводненность",
    dataIndex: "waterCut",
  },
  {
    title: "Плотность нефти",
    dataIndex: "oilDensity",
  },
  {
    title: "Дебит нефти",
    dataIndex: "oilFlowRate",
  },
  {
    title: "Статус в базе",
    dataIndex: ["saved", "title"],
  },
];
</script>
