<template>
  <div class="counter">
    <div class="value">
      <h2>Input A Value :</h2>
      <input v-model="number" type="text" name="input" id="input" placeholder="Input Number Here...."/>
    </div>
    <button class="enter" @click="input">Set Value</button>

    <h1 class="heading">Counter : {{ count}}</h1>
    <div class="start">
    <button @click="increase">Increment</button>
    <button @click="decrease">Decrement</button>
    </div>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import counter from "../../composables/counter"
import {useStore} from "vuex";
import  {computed} from "vue"
export default{
 setup (){
 const store = useStore()
 const {increase, decrease, reset, input, number} = counter()

  console.log(number.value)
 return{
  count: computed(() => store.getters.counter),
  increase,
  decrease,
  reset,
  input,
  number
 }
 },


methods:{
 increment(){
  this.$store.dispatch("increment")
 },

 decrement(){
  this.$store.dispatch("decrement")
 },

//  reset(){
//   this.$store.dispatch("reset")
//  }


}
}
</script>


<style  scoped>
.heading{
  text-align: center;
}

.value{
  display:flex;
  justify-content: center;
  gap:1rem;
}

.start{
  display:flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 2rem
}

button{
  padding: 1rem;
  background-color: black;
  color:white
}

.enter{
  margin:1rem
}
</style>
