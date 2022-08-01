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
            :disabled="isEditing"
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
          <AInputNumber
            size="large"
            :step="0.01"
            :precision="2"
            :min="0"
            placeholder="Q"
            v-model:value="form.qLiquid"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Обводненность" name="waterCut">
          <AInputNumber
            size="large"
            :step="0.01"
            :precision="2"
            :min="0"
            placeholder="Обводненность"
            v-model:value="form.waterCut"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Плотность нефти" name="oilDensity">
          <AInputNumber
            size="large"
            :step="0.01"
            :precision="2"
            :min="0"
            placeholder="Плотность"
            v-model:value="form.oilDensity"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Дебит нефти" name="oilFlowRate">
          <AInputNumber
            size="large"
            :step="0.01"
            :precision="2"
            :min="0"
            placeholder="Дебит"
            v-model:value="form.oilFlowRate"
          />
        </AFormItem>
      </ACol>
      <ACol :lg="8" :md="18" :xs="24">
        <AFormItem label="Статус в БД" name="savedId">
            <SelectAvailability
              size="large"
              :allow-clear="false"
              v-model:value="form.savedId"
              placeholder="Статус"
            />
        </AFormItem>
      </ACol>
    </ARow>
  </AForm>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import { vvRequired } from "@/config/validation-rules";
import { useStore } from "vuex";

const props = defineProps({
  dataId: Number,
});

const store = useStore()

const isEditing = computed(() => !!props.dataId);
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
  savedId: [vvRequired],
};
const form = reactive({});

onMounted(() => {
  if (isEditing.value)
    store.dispatch("field/getWellItem", props.dataId)
      .then(() => {
        const wellItem = store.state.field.fieldItem

        form.field = wellItem.field
        form.well = wellItem.well
        form.wellTypeId = wellItem.wellType.id
        form.wellConditionId = wellItem.wellCondition.id
        form.horizonId = wellItem.horizon.id
        form.qLiquid = wellItem.qLiquid
        form.waterCut = wellItem.waterCut
        form.oilDensity = wellItem.oilDensity
        form.oilFlowRate = wellItem.oilFlowRate
        form.savedId = wellItem.saved.id
      }
    )
});

function onFinish(values) {
  emit("submit", values);
}
</script>
