<template>
  <div class="h-100">
    <div class="tabs">
      <div class="tab-head" :class="index === selected && 'selected'"
           v-for="(tab, index) in tabs" :key="index"
           @click="selectTab(index)">
        {{tab.name}}
      </div>
    </div>
    <div class="tab-content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tab from '@/components/tabs/Tab.vue';

@Component
export default class Tabs extends Vue {
  private tabs = this.$children as [Tab];
  private selected = 0;

  private selectTab(given: number) {
    this.selected = given;
    this.tabs.forEach((tab, index) => {
      tab.setVisible(index === given);
    });
  }

  mounted() {
    this.tabs[0].setVisible(true);
  }
}
</script>

<style scoped>
  .tabs {
    display: flex;
    height: 60px;
    background: var(--background);
  }

  .tab-head {
    margin: 0.5em 1em 0;
    padding: 0.2em 1em;
    border-bottom-style: none;
    border-bottom: var(--blue);
    user-select: none;
  }

  .tab-head.selected {
    border-bottom-width: 4px;
    border-bottom-style: solid;
  }

  .tab-head:hover {
    cursor: pointer;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  .tab-head.selected:hover {
    border-bottom-width: 4px;
  }

  .tab-content {
    margin: 1em;
    max-height: calc(100% - 60px - 2em);
    overflow: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: none;
  }
</style>