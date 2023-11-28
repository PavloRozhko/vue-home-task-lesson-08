<template>
  <a href="#" class="product-card">
    <div class="product-card__img">
      <img :src="productData.imgSrc" :alt="productData.title" />
    </div>
    <div class="product-card__info">
      <div class="product-card__title">{{ productData.title }}</div>
      <div class="product-card__price">{{ productData.price }}</div>
      <div class="product-card__old-price">{{ productData.oldPrice }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 0.3125em;
  border: 1px solid #000;
  padding: 0.625em;
  gap: 0.625em;
  width: 15.625em;
  height: 9.375em;
  overflow: hidden;
  // .product-card__img
  &__img {
    flex-basis: 40%;
    img {
      max-width: 100%;
    }
  }
  // .product-card__info
  &__info {
    flex-basis: 60%;
    *:not(:last-child) {
      margin-bottom: 0.3125em;
    }
  }
  // .product-card__title
  &__title {
    font-size: 1.125em;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
  // .product-card__price
  &__price {
    color: chocolate;
    font-weight: 700;
  }
  // .product-card__old-price
  &__old-price {
    font-size: 0.875em;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 0.125em;
      width: 35%;
      background-color: gray;
    }
  }
}
</style>
