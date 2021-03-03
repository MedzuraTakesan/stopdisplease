<template>
  <b-navbar class="headerLayout" sticky type="dark" variant="dark">
    <b-navbar-brand href="#">StopDis</b-navbar-brand>
    <b-navbar-nav type="dark">
      <b-nav-item href="/"> {{ $t('Home') }} </b-nav-item>
      <b-nav-item href="/products"> {{ $t('Products') }} </b-nav-item>
    </b-navbar-nav>
    <b-row class="ml-auto">
      <b-col align-self="center" cols="4">
        <b-nav-text v-text="$t('Language')"/>
      </b-col>
      <b-col>
        <b-form-select
          v-model="$i18n.locale"
          :options="$i18n.locales"
          text-field="name"
          key-field="code"
          value-field="code"
        ></b-form-select>
      </b-col>
    </b-row>
  </b-navbar>
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
export default class HeaderLayout extends Vue {
  @Module.State('name') readonly name!: string;
}
</script>
<style>
.headerLayout {
  -webkit-box-shadow: 0px -2px 8px 9px rgba(50, 50, 50, 0.2);
  -moz-box-shadow: 0px -2px 8px 9px rgba(50, 50, 50, 0.2);
  box-shadow: 0px -2px 8px 9px rgba(50, 50, 50, 0.2);
}
</style>
