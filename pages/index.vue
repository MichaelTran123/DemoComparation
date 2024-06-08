<template>
  <div>
    <h1>Options API with Mixin</h1>
    <MixinComponent />

    <h1>Composition API with Import</h1>
    <CompositionComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MixinComponent from '@/components/MixinComponent.vue';
import CompositionComponent from '@/components/CompositionComponent.vue';

export default Vue.extend({
  components: {
    MixinComponent,
    CompositionComponent
  }
});
</script>

<style scoped>
h1 {
  margin-top: 20px;
}
</style>
