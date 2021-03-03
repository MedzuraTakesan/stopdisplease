<template>
  <div class="pt-4 products__wrapper">
    <b-container>
      <div>

      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  components: {}
})
export default class products extends Vue {

}
</script>

<style lang="scss">
.products {
  &__block {
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
