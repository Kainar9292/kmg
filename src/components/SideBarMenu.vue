<template>
  <ALayoutSider breakpoint="lg" collapsed-width="0">
    <div class="logo">
      <img src="./../assets/icons/kmg.log.png" alt="log" />
    </div>
    <AMenu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <AMenuItem key="Statistics">
        <RouterLink :to="{ name: 'Statistics' }">
          <PieChartOutlined />
          <span class="nav-text">Статистика</span></RouterLink
        >
      </AMenuItem>
      <AMenuItem key="OilFieldMain">
        <RouterLink :to="{ name: 'OilFieldMain' }">
          <FireOutlined />
          <span class="nav-text">Месторождения</span>
        </RouterLink>
      </AMenuItem>
    </AMenu>
  </ALayoutSider>
</template>

<script setup>
import { FireOutlined, PieChartOutlined } from "@ant-design/icons-vue";
import { ref, watch, computed } from "vue";
import { useRoute} from 'vue-router'
import { useStore } from "vuex";

const store = useStore();
const selectKeyInStore = store.getters["other/path"];
const selectedKeys = ref([selectKeyInStore]);

watch(
  selectedKeys,
  () => {
    store.dispatch("other/setPath", selectedKeys.value[0]);
  },
  { immediate: true }
);
</script>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  img {
    width: 40px;
  }
}
</style>
