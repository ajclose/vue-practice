<template>
    <div class="row">
      <quote v-for="(quote, i) in quotes" @click.native="deleteQuote(i)">
        {{ quote }}
      </quote>
    </div>
</template>

<script>
  import Quote from './Quote.vue'

    export default {
      components: {
        quote: Quote
      },
      props: ['quotes'],
      methods: {
        deleteQuote(i) {
          this.$emit('quoteDeleted', i)
        }
      }
    }
</script>

<style>

</style>
