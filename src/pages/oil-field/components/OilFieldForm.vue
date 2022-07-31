<template>
  <AForm
    id="oil_field_form"
    layout="vertical"
    :model="form"
    :rules="formRules"
    @finish="onFinish"
  >
    <ARow :gutter="24">
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Выберите месторождение" name="field">
          <SelectField
            size="large"
            placeholder="Месторождение"
            v-model:value="form.field"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Название скважины" name="well">
          <AInput size="large" placeholder="Скважина" v-model:value="form.well" />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Тип скважины" name="wellTypeId">
          <SelectWellType
            size="large"
            placeholder="Тип"
            v-model:value="form.wellTypeId"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Состояние скважины" name="wellConditionId">
          <SelectWellCondition
            size="large"
            placeholder="Состояние"
            v-model:value="form.wellConditionId"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Горизонт" name="horizonId">
          <SelectHorizon
            size="large"
            placeholder="Горизонт"
            v-model:value="form.horizonId"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Q жидкости" name="qLiquid">
          <AInput
            size="large"
            type="number"
            placeholder="Q"
            v-model:value="form.qLiquid"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Обводненность" name="waterCut">
          <AInput
            size="large"
            type="number"
            placeholder="Обводненность"
            v-model:value="form.waterCut"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Плотность нефти" name="oilDensity">
          <AInput
            size="large"
            type="number"
            placeholder="Плотность"
            v-model:value="form.oilDensity"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Дебит нефти" name="oilFlowRate">
          <AInput
            size="large"
            type="number"
            placeholder="Дебит"
            v-model:value="form.oilFlowRate"
          />
        </AFormItem>
      </ACol>
    </ARow>
  </AForm>
</template>

<script setup>
import { reactive } from "vue";
import { vvRequired } from "./../../../config/validation-rules";

const emit = defineEmits(["submit"]);
const formRules = {
  field: [vvRequired],
  well: [vvRequired],
  wellTypeId: [vvRequired],
  wellConditionId: [vvRequired],
  horizonId: [vvRequired],
  waterCut: [vvRequired],
  qLiquid: [vvRequired],
  oilDensity: [vvRequired],
  oilFlowRate: [vvRequired],
};
const form = reactive({});

function onFinish(values) {
  emit("submit", values);
}
</script>
