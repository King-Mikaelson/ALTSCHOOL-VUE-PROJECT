<template>
  <div class="counter">
    <div class="value">
      <h2>Input a value :</h2>
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


}
}
</script>


<style >
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
  margin: 1rem 0rem;
  gap: 2rem
}

button{
  width: 200px;
  height:45px;
  background-color: black;
  margin: 20px;
  border:1px solid #185a9d;
  border-radius: 15px;
  cursor: pointer;
  color: white;
  font-size: 15px;
  text-shadow: 1px 1px 2px black;
  font-weight: bold;
}


.enter{
  margin:1rem
}


body{
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;

  background: #43cea2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #43cea2, #185a9d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #43cea2, #185a9d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
