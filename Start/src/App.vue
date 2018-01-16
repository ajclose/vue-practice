<template>
    <div class="container">
      <app-header :quotes="quotes" :maxQuotes="maxQuotes"></app-header>
      <new-quote @quoteAdded="addQuote"></new-quote>
      <quotes :quotes="quotes" @quoteDeleted="deleteQuote"></quotes>
      <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import NewQuote from './components/NewQuote.vue'
  import Quotes from './components/Quotes.vue'
  import Footer from './components/Footer.vue'

    export default {
        data: function() {
          return {
            quotes: ['quote'],
            maxQuotes: 10
          }
        },
        components: {
          'app-header': Header,
          'new-quote': NewQuote,
          'quotes': Quotes,
          'app-footer': Footer
        },
        methods: {
          addQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
              alert("You have reached your maximum number of quotes. Please delete a quote first")
            } else {
              this.quotes.push(quote)

            }
          },
          deleteQuote(i) {
            this.quotes.splice(i, 1)
          }
        }
    }
</script>

<style>
</style>
