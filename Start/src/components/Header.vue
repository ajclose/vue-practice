<template>
    <div class="row">
      <h2>Quotes Added</h2>
      <div class="progress-bar">
        <div class="progress" :style="{width: (quotes.length)/maxQuotes * 100 + '%'}">
          {{ quotes.length }}/{{ maxQuotes }}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props: [
        'quotes',
        'maxQuotes'
      ],
      methods: {
        updateProgress: {

        }
      }
    }
</script>

<style media="screen">
  .progress-bar {
    height: 20px;
    width: 100%;
    background-color: gray;
  }

  .progress {
    background-color: blue;
    width: 70%;
    transition: .5s;
  }
</style>
