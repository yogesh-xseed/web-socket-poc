<template>
  <div id="app">
    <div id="nav">
      <h3>Select the button to incement the state</h3>
      <button @click="onClickButton(1)">1</button>
      <button @click="onClickButton(2)">2</button>
      <button @click="onClickButton(3)">3</button>
      <button @click="onClickButton(4)">4</button>

      <hr />
      <button @click="getData">Get Data</button>
      <em id="data-string">No Data Present</em>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  name:"App",
method:{
...mapActions(["getData"]),

}
}
</script>