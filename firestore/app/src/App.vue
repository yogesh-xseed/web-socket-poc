<template>
  <div id="app">
    <div id="nav">
      <h3>Select the button to incement the state</h3>
      <button @click="onClickButton(1)">1</button>
      <button @click="onClickButton(2)">2</button>
      <button @click="onClickButton(3)">3</button>
      <button @click="onClickButton(4)">4</button>
      <hr />
      <button @click="getData()">Get Data</button>
      <em>{{practiceSession.data}}</em>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      practiceSession: state => state.practiceSession
    })
  },
  methods: {
    ...mapActions(["getData", "incrementState"]),
    onClickButton(pos) {
      let newData = {
        ...this.practiceSession.data,
        [pos]: this.practiceSession.data[pos] + 1
      };

      this.incrementState(newData);
    }
  }
};
</script>