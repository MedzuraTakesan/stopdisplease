<template>
  <div class="manual">
    <h3 class="text-success pl-3 pt-3"> {{ $t(`Good User's Manual'`)}}</h3>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <b-button v-b-toggle.collapse-manual-1 variant="manual" class="m-1">
            <span class="h4 text-info manual--step">
              <b-icon icon="info-circle-fill" size="sm" variant="info"></b-icon>
              {{ $t(`If you are looking for...`)}}
            </span>
            </b-button>
            <b-collapse id="collapse-manual-1">
              <b-card>
                <span> {{ $t(`You can look in our products section`)}} </span>
                <a href="/products"> {{ $t(`products`)}}</a>.
                <span> {{ $t(`Users decide which stores are more profitable to buy from`)}} </span>
              </b-card>
            </b-collapse>
          </div>
          <div>
            <b-button v-b-toggle.collapse-manual-2 variant="manual" class="m-1">
            <span class="h4 text-warning manual--step">
              <b-icon icon="award-fill" size="sm" variant="warning"></b-icon>
              {{ $t(`If you want to help...`)}}
            </span>
            </b-button>
            <b-collapse id="collapse-manual-2">
              <b-card>
                <ul>
                  <li>
                    <span>
                      {{ $t(`In the section`)}}
                      <a href="/products"> {{ $t(`products`)}}</a>,
                      {{ $t('you can add stores with attractive prices')}}
                    </span>
                  </li>
                  <li>
                    <span>
                      {{ $t(`You can help financially in the section`)}}
                      <a href="/donations"> {{ $t(`donations`)}}</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      {{ $t(`Or help us develop our`)}}
                      <a href="/donations"> {{ $t(`service`)}}</a>
                    </span>
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </div>
          <div>
            <b-button v-b-toggle.collapse-manual-3 variant="manual" class="m-1">
            <span class="h4 text-primary manual--step">
              <b-icon icon="shop" size="sm" variant="primary"></b-icon>
              {{ $t(`If you want to offer your store...`)}}
            </span>
            </b-button>
            <b-collapse id="collapse-manual-3">
              <b-card>
                <span>
                  {{ $t(`We will post it for free in the section`)}}
                  <a href="/products"> {{ $t(`shops`)}}</a>,
                  {{ $t('only if the product will soon be in stock and at an affordable price')}}
                </span>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
        <b-col cols="3">
          <img src="/img/doge-black.png" width="100%">
        </b-col>
      </b-row>
    </b-container>
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
import { BIcon, BIconArrowUp } from 'bootstrap-vue'

@Component({
  components: {
    BIcon,
    BIconArrowUp // <- The icon needs to be registered with your page/app
  }
})
export default class Logo extends Vue {
  @Module.State('name') readonly name!: string;
}
</script>
<style lang="scss">
.manual {
 &--step {
   &:hover {
     text-decoration: underline;
   }
 }
}
</style>
