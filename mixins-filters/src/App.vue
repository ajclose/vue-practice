<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Fruit</button>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
        <appList></appList>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'
import List from './List.vue'

    export default {
      mixins: [fruitMixin],
      data() {
        return {
          text: 'Hello there'
        }
      },
        filters: {
          toUppercase(value) {
            return value.toUpperCase()
          }
          },
          components: {
            appList: List
          }
    }
</script>

<style>

</style>
