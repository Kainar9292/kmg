import DefTable from "./lib/DefTable.vue";
import SelectAvailability from "./form/SelectAvailability.vue";
import SelectField from "./form/SelectField.vue";
import SelectWellType from "./form/SelectWellType.vue";
import SelectWellCondition from "./form/SelectWellCondition.vue";

export function registerGlobalComponents(app) {
  const Vue = app; 
  Vue.component('DefTable', DefTable);
  Vue.component('SelectAvailability', SelectAvailability);
  Vue.component('SelectField', SelectField);
  Vue.component('SelectWellType', SelectWellType);
  Vue.component('SelectWellCondition', SelectWellCondition);

}