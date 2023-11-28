<template>
  <div class="card" @click="onClick">
    <div class="card__img">
      <img :src="cardData.imgSrc" :alt="cardData.category" />
    </div>
    <div class="card__title">{{ cardData.category }}</div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',

  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },

  emits: ['chose'],

  methods: {
    onClick() {
      this.$emit('chose', this.cardData)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 10em;
  height: 10em;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease 0s;
  &:hover {
    transform: scale(1.05);
  }
  // .card__img
  &__img {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    overflow: hidden;
    // border: 1px solid transparent;
    background-color: #fff;
    // &.active {
    //   border-color: green;
    // }
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    img {
      max-width: 80%;
    }
  }
  // .card__title
  &__title {
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
