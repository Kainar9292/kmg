
<template>
<ACard>

 <ARow :gutter="[16,16]">
  <ACol>
  <AFormItem>
    <SelectAvailability size="large"/>

  </AFormItem>
  </ACol>
  <ACol :span="6">
    <ASelect/>
  </ACol>
  <ACol :span="6">
    <ASelect/>
  </ACol>
  <ACol :span="6">
    <ASelect/>
  </ACol>

</ARow>
  <ATable :columns="columns" :data-source="saveField" :scroll="{ x: $isMobile ? 1024 : true}"/>
</ACard>

</template>

<script setup>
import SelectAvailability from './components/Select/SelectAvailability.vue'

const columns = [
  {
    title: '№',
    dataIndex: 'id'
  },
  {
    title: 'Месторождение',
    dataIndex: 'field'
  },
  {
    title: 'Скважина',
    dataIndex: 'well'
  },
  {
    title: 'Тип скважины',
    dataIndex: ['wellType', 'title']
  },
  {
    title: 'Состояние скважины',
    dataIndex: ['wellCondition', 'title']
  },
  {
    title: 'Горизонт',
    dataIndex: ['horizon', 'title']
  },
  {
    title: 'Q жидкости',
    dataIndex: 'qLiquid'
  },
  {
    title: 'Обводненность',
    dataIndex: 'waterCut'
  },
  {
    title: 'Плотность нефти',
    dataIndex: 'oilDensity'
  },
  {
    title: 'Дебит нефти',
    dataIndex: 'oilDensity'
  }

]

const saveField = [
  {
    id: 1,
    field: 'AA',
    well: '10Д',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 1, title: 'Наблюдательная' },
    horizon: { id: 5, title: 'V' },
    qLiquid: 11.6,
    waterCut: 88.6,
    oilDensity: 0.83,
    oilFlowRate: 0.03
  }, {
    id: 2,
    field: 'AA',
    well: '33Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 2, title: 'В работе' },
    horizon: { id: 1, title: 'I' },
    qLiquid: 1.8,
    waterCut: 98,
    oilDensity: 0.82,
    oilFlowRate: 0.00
  }, {
    id: 3,
    field: 'AA',
    well: '10Д',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { id: 2, title: 'В работе' },
    horizon: { id: 2, title: 'II' },
    qLiquid: 12.46,
    waterCut: 83,
    oilDensity: 0.83,
    oilFlowRate: 0.04
  }, {
    id: 4,
    field: 'СС',
    well: '37Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 1, title: 'Наблюдательная' },
    horizon: 'V',
    qLiquid: 11.6,
    waterCut: 88.6,
    oilDensity: 0.83,
    oilFlowRate: 0.03
  }, {
    id: 5,
    field: 'CC',
    well: '47',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 1, title: 'Наблюдательная' },
    horizon: { typeId: 6, title: 'IV' },
    qLiquid: 20.11,
    waterCut: 91.64,
    oilDensity: 0.82,
    oilFlowRate: 0.02
  }, {
    id: 6,
    field: 'AA',
    well: '14',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 2, title: 'В работе' },
    horizon: { typeId: 2, title: 'II' },
    qLiquid: 20.33,
    waterCut: 50,
    oilDensity: 0.82,
    oilFlowRate: 0.21
  }, {
    id: 7,
    field: 'AA',
    well: '26',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 1, title: 'Наблюдательная' },
    horizon: { typeId: 2, title: 'II' },
    qLiquid: 9.76,
    waterCut: 90.86,
    oilDensity: 0.83,
    oilFlowRate: 0.02
  }, {
    id: 8,
    field: 'BB',
    well: '27',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 3, title: 'В простое' },
    horizon: { typeId: 3, title: 'III' },
    qLiquid: null,
    waterCut: 39.92,
    oilDensity: 0.83,
    oilFlowRate: 0.00
  }, {
    id: 9,
    field: 'AA',
    well: '28Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 3, title: 'В простое' },
    horizon: { typeId: 4, title: 'IV' },
    qLiquid: 7.82,
    waterCut: null,
    oilDensity: 0.82,
    oilFlowRate: 0.09
  }, {
    id: 10,
    field: 'BB',
    well: '29Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 1, title: 'Наблюдательная' },
    horizon: { typeId: 3, title: 'III' },
    qLiquid: 6.17,
    waterCut: 99.9,
    oilDensity: 0.83,
    oilFlowRate: 0.00
  }, {
    id: 11,
    field: 'BB',
    well: '32Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 2, title: 'В работе' },
    horizon: { typeId: 5, title: 'V' },
    qLiquid: 6.84,
    waterCut: 99.9,
    oilDensity: 0.82,
    oilFlowRate: 0.03
  }, {
    id: 12,
    field: 'CC',
    well: '32Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 2, title: 'В работе' },
    horizon: { typeId: 3, title: 'III' },
    qLiquid: 6.84,
    waterCut: 99.99,
    oilDensity: 0.83,
    oilFlowRate: 0.00
  }, {
    id: 13,
    field: 'СС',
    well: '35Г',
    wellType: { typeId: 1, title: 'Добывающая' },
    wellCondition: { typeId: 2, title: 'В работе' },
    horizon: { typeId: 5, title: 'V' },
    qLiquid: 16.17,
    waterCut: 88.6,
    oilDensity: 0.82,
    oilFlowRate: 0.41
  }

]
</script>

<style scoped>
</style>
