<template>
  <div class="car-card">
    <a href="#" class="car-card__container">
      <div class="car-card__image">
        <img :src="carData.imgSrc" :alt="carData.title" />
      </div>
      <div class="car-card__info car-info">
        <div class="car-info__title">{{ carData.title }}</div>
        <div class="car-info__engine">{{ carData.description }}</div>
        <div class="car-info__price price">
          <span class="price__usd">{{ carData.price }}$</span>
          <span class="price__uah"> {{ convertPriceInUAH }} грн. </span>
        </div>
        <div class="car-info__types type">
          <div class="type__item">
            <span class="material-symbols-outlined"> readiness_score </span>
            <span>{{ carData.carMileage }} км</span>
          </div>
          <div class="type__item">
            <span class="material-symbols-outlined"> pin_drop </span>
            <span>{{ carData.location }}</span>
          </div>
          <div class="type__item">
            <span class="material-symbols-outlined"> propane_tank </span>
            <span>{{ carData.fuelType }}</span>
          </div>
          <div class="type__item">
            <span class="material-symbols-outlined"> auto_transmission </span>
            <span>{{ carData.transmission }}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarCard',

  props: {
    carData: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    convertPriceInUAH() {
      const price = this.carData.price * 38
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.car-card {
  // .car-card__container
  &__container {
    display: flex;
    gap: 0.9375em;
  }
  // .car-card__image
  &__image {
    flex: 0 1 50%;
    img {
      max-width: 100%;
    }
  }
  // .car-card__info
  &__info {
    flex: 0 1 50%;
  }
}
.car-info {
  line-height: 1.2;
  > *:not(:last-child) {
    margin-bottom: 0.625em;
  }
  // .car-info__title
  &__title {
    font-size: 1.5em;
    color: #9a9aff;
    &:hover {
      text-decoration: underline;
    }
  }
  // .car-info__engine
  &__engine {
    font-size: 1.125em;
    color: #4e4b4b;
  }
}
.price {
  display: flex;
  align-items: center;
  gap: 1.25em;
  line-height: 1;
  // .price__usd
  &__usd {
    color: rgb(46, 139, 46);
    font-size: 2em;
  }
}
.type {
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, auto);
  row-gap: 0.625em;
  // .type__item
  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
.material-symbols-outlined {
  font-size: inherit;
  color: #9a9aff;
}
</style>
