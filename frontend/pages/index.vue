<template>
  <div class="pt-4 index__wrapper">
    <b-container>
      <div>
        <h1 class="text-dark index__header" v-text="$t('Users themselves can help you find a scarce product, at good prices.')"></h1>
        <h2 class="text-dark index__header" v-text="$t('Unite in the fight against overbidding.')"></h2>
      </div>
      <div class="index__manual mt-5">
        <manual/>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import Logo from "~/components/Logo.vue";
import Manual from "~/components/index/Manual.vue";
@Component({
  components: {Manual, Logo}
})
export default class index extends Vue {

}
</script>

<style lang="scss">
.index {
  &__header {
    text-align: center;
  }
  &__manual {
    background-color: whitesmoke;
    border-radius: 4px;
    -webkit-box-shadow: 0px 8px 8px 1px rgba(69, 70, 71, 0.2);
    -moz-box-shadow: 0px 8px 8px 1px rgba(69, 70, 71, 0.2);
    box-shadow: 0px 8px 8px 1px rgba(69, 70, 71, 0.2);
  }
  &__wrapper {
    background-color: #726cf8;
    background-image: linear-gradient(315deg, #726cf8 0%, #e975a8 74%);
  }
}
</style>
