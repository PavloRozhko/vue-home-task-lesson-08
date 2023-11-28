<template>
  <div class="first-task">
    <h2 class="first-task__title">Задача №1.</h2>
    <categories-panel class="first-task__component" />
    <product-list class="first-task__component" />
  </div>
</template>

<script>
import CategoriesPanel from './CategoriesPanel'
import ProductList from './ProductsList'

export default {
  name: 'FirstTask',
  components: {
    CategoriesPanel,
    ProductList,
  },
}
</script>

<style lang="scss" scoped>
.first-task {
  // .first-task__title
  &__title {
    font-size: 1.5em;
    color: green;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
  // .first-task__component
  &__component {
    &:not(:last-child) {
      margin-bottom: 1.5625em;
    }
  }
}
</style>
