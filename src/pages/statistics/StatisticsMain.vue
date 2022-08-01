<template>
  <APageHeader title="Статистика" :ghost="false"/>

  <ACard class="card">
  <ARow>
    <ACol :lg="12" :sm="24">
      <ADivider> Количество скважин по статусу в БД </ADivider>
      <PieChart :chartData="savedCount"/>
    </ACol>
      <ACol :lg="12" :sm="24">
      <ADivider> Количестов скважин по состоянию </ADivider>
      <PieChart 
      :chartData="wellConditionCount"/>
    </ACol>
  </ARow>

  </ACard>
</template>

<script setup>
import { computed} from 'vue'
import {  PieChart } from 'vue-chart-3';
import { useStore } from "vuex";
import { WELL_CONDITION, STATUS_IN_DATABASE } from '@/config/types'

const store = useStore();

store.dispatch("field/getWell");

const wellList = computed(() => store.state.field.field) 

function getChartData(labels, dataSet) {
  return {    
    labels: labels,
    datasets: [
      {
        data: dataSet,
        backgroundColor: ['#77CEFF', '#0079AF',],
      },
    ],
  };
  
}

const savedCount = computed(() => {
  const labels = Object.values(STATUS_IN_DATABASE).map((item ) => item.title )
  let saved = 0;
  let notSaved = 0;

  wellList.value.forEach((item) => {
    if (item.saved.id ===  STATUS_IN_DATABASE.Saved.id) {
      ++saved
    } else {
      ++notSaved
    }
  })
  return getChartData(labels, [saved, notSaved])
})

const wellConditionCount = computed(() => {
  let observant = 0;
  let inWork = 0;
  let idle = 0;

  const labels = Object.values(WELL_CONDITION).map((item ) => item.title )

  wellList.value.forEach((item) => {
    if (item.wellCondition.id ===  WELL_CONDITION.Observant.id) {
      ++observant
    } else if(item.wellCondition.id ===  WELL_CONDITION.InWork.id) {
      ++inWork
    } else {
      ++idle
    }
  })

    return getChartData(labels, [observant, inWork, idle])

})
    
</script>
