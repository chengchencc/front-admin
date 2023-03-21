<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <template>
      <div class="rule-group-box">
        <div v-for="ruleItem in ruleDatas" :key="ruleItem.id" class="rule-item">
          <div></div>
        </div>
      </div>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { Recordable } from 'vite-plugin-mock';
  import { defineComponent, reactive } from 'vue';
  import { originData } from './data';

  export default defineComponent({
    name: 'DictionaryManagement',
    components: {},
    setup() {
      const ruleDatas = reactive<Recordable[]>(originData);
      return {
        ruleDatas,
      };
    },
  });
</script>
