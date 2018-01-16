<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-custom-on:click="clicked">Click me</button>
                <hr>
                <div style="width: 100px; height: 100px; background-color: lightgreen"
                v-custom-on:mouseenter="mouseEnter"
                v-custom-on:mouseleave="mouseLeave">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'custom-on': {
          bind(el, binding, vnode) {
            // el.onclick = function() {
            //   binding.value()
            // }
            const type = binding.arg
            const fn = binding.value
            el.addEventListener(type, fn)
          }
        }
      },
      methods: {
        clicked() {
          alert("clicked!")
        },
        mouseEnter() {
          console.log('mouse entered');
        },
        mouseLeave() {
          console.log('moust left');
        }
      }
    }
</script>

<style>
</style>
