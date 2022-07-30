<template>
  <APageHeader title="Общий список месторождений" />
  <ACard>
    <ARow :gutter="[16, 16]">
      <ACol :span="6">
        <SelectAvailability size="large" />
      </ACol>
      <ACol :span="6">
        <SelectField size="large" />
      </ACol>
      <ACol :span="6">
        <SelectWellType size="large" />
      </ACol>
      <ACol :span="6">
        <SelectWellCondition size="large" />
      </ACol>
    </ARow>
    <ADivider> Список месторождений </ADivider>
    <DefTable
      v-if="columns"
      :columns="columns"
      :data-source="savedFields"
      :scroll="{ x: $isMobile ? 1024 : true }"
    />
  </ACard>
</template>

<script setup>
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
    dataIndex: "oilDensity",
  },
];
</script>

<style scoped></style>
