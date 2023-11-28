<template>
  <div class="cars-list">
    <car-card v-for="car in getFilteredList" :key="car.id" :car-data="car" class="cars-list__item" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CarCard from './CarCard.vue'

mapGetters

export default {
  name: 'CarsList',

  components: {
    CarCard,
  },

  computed: {
    ...mapGetters(['getCarsList', 'getFilteredByBodyTypeCars', 'getFilteredByBrandCars', 'getFilteredList']),
  },
}
</script>

<style lang="scss" scoped>
.cars-list {
  // .cars-list__item
  &__item {
    padding: 1.25em;
    border-bottom: 2px solid #000;
    &:not(:last-child) {
      margin-bottom: 1.5625em;
    }
  }
}
</style>
