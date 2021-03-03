<template>
  <div>
    <span v-text="$t('Hello')"></span>
    <select v-model="$i18n.locale">
      <option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
      >{{ lang.name }}</option
      >
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

const Module = namespace('language')

@Component
export default class Logo extends Vue {
  @Module.State('name') readonly name!: string;
}
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
