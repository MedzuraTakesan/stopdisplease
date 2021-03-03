<template>
  <b-row class="pt-2 bg-dark footerLayout">
    <b-col class="footerLayout__info mt-5 text-light">
      <b-row cols="1" class="m-0">
        <b-col>
          <h2> {{ $t('We work to ensure that products are bought by users, and not by resellers.')}} </h2>
        </b-col>
        <b-col class="footerLayout__contacts">
          <p class="m-0"> {{ $t('Contacts')}}</p>
          <b-row cols="2" class="m-0">
            <span> {{ $t('e-mail')}} </span>
            <span> bingo7696@gmail.com </span>
            <span> Telegram </span>
            <a target="_blank" href="https://t.me/nebo_7even"> @DeniJones </a>
            <span> open source </span>
            <a target="_blank" href="https://github.com/MedzuraTakesan/stopdisplease"> github </a>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <img src="/img/doge-work.png" height="100%">
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  components: {}
})
export default class FooterLayout extends Vue {

}
</script>

<style lang="scss">
.footerLayout {
  -webkit-box-shadow: 0px 2px 8px 9px rgba(10, 10, 10, 0.2);
  -moz-box-shadow: 0px 2px 8px 9px rgba(10, 10, 10, 0.2);
  box-shadow: 0px 2px 8px 9px rgba(10, 10, 10, 0.2);
  &__info {
    justify-content: center;
    display: flex;
  }
  &__contacts {
    max-width: 375px;
  }
}
</style>
