<template>
  <div class="product-list">
    <div v-if="isEmpty">Оберіть категорію товарів.</div>
    <product-card
      v-for="product in getCurrentProductsList"
      v-else
      :key="product.id"
      :product-data="product"
      class="product-list__item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductsList',

  components: {
    ProductCard,
  },

  computed: {
    ...mapGetters(['getCurrentProductsList']),
    isEmpty() {
      return this.getCurrentProductsList.length === 0
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  max-width: 65.625em;
  margin: 0 auto;
  padding: 0.9375em;
  background-color: #d4d4ff;
  border-radius: 0.625em;
  display: flex;
  gap: 0.625em;
  justify-content: space-between;
}
</style>
