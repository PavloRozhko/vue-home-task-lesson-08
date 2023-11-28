<template>
  <div class="second-task">
    <h2 class="second-task__title">Задача №2.</h2>
    <div class="second-task__container">
      <search-panel class="second-task__item" />
      <cars-list class="second-task__item" />
    </div>
  </div>
</template>

<script>
import SearchPanel from './SearchPanel'
import { mapActions } from 'vuex'
import CarsList from './CarsList'

export default {
  name: 'SecondTask',

  components: {
    CarsList,
    SearchPanel,
  },

  created() {
    this.loadDataFromFile()
  },

  methods: {
    ...mapActions(['loadDataFromFile']),
  },
}
</script>

<style lang="scss" scoped>
.second-task {
  &__container {
    max-width: 75em;
    margin: 0 auto;
    display: flex;
    gap: 0.625em;
    padding-left: 0.9375em;
    padding-right: 0.9375em;
  }
  &__title {
    font-size: 1.5em;
    color: green;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
  }
  // .second-task__item
  &__item {
    &:first-child {
      flex-basis: 30%;
    }
    &:last-child {
      flex-basis: 70%;
    }
  }
}
</style>
