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
      <ARow :gutter="[16, 0]">
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Статус в БД">
            <SelectAvailability
              size="large"
              :allow-clear="false"
              v-model:value="filters.savedId"
              placeholder="Статус"
              @change="submitFilters"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Месторождение">
            <SelectField
              size="large"
              placeholder="Месторождение"
              v-model:value="filters.field"
              @change="submitFilters"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Тип скважины">
            <SelectWellType
              size="large"
              placeholder="Тип"
              v-model:value="filters.wellTypeId"
              @change="submitFilters"
            />
          </AFormItem>
        </ACol>
        <ACol :lg="6" :sm="12" :xs="24">
          <AFormItem label="Состояние скважины">
            <SelectWellCondition
              size="large"
              placeholder="Состояние"
              v-model:value="filters.wellConditionId"
              @change="submitFilters"
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
              @change="submitFilters"
            />
          </AFormItem>
        </ACol>
      </ARow>
    </AForm>
    <ADivider> Список скважин </ADivider>
    <DefTable
      v-if="oilFields"
      :columns="columns"
      :data-source="oilFields"
      :scroll="{ x: $isMobile ? 1024 : true }"
    >
      <template #bodyCell="{column, record, text}">
      <template v-if="column.dataIndex === 'action'">
        <RouterLink :to="{name: 'OilFieldEdit', params: { id: record.id }}">
          <EditOutlined />
        </RouterLink>
      </template>
      </template>
    </DefTable>
  </ACard>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import { EditOutlined } from "@ant-design/icons-vue";
const store = useStore();

const filters = reactive({
  savedId: 1
});

submitFilters();

function submitFilters() {
  store.dispatch("field/getWell", filters);
}

const oilFields = computed(() => store.getters["field/processedList"]);

const columns = [
  {
    dataIndex: "action",
  },
  {
    title: "№",
    dataIndex: "id",
  },
  {
    title: "Мест-ждение",
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
