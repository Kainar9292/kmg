<template>
  <ALayout class="page-layout">
    <SideBarMenu :activeKey="route.name" />
    <ALayout>
      <Header :title="route.meta.title" />

      <ALayout-content class="content">
        <slot />
      </ALayout-content>
    </ALayout>
  </ALayout>
</template>

<script setup>
import SideBarMenu from "./../components/SideBarMenu.vue";
import Header from "./../components/Header.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
