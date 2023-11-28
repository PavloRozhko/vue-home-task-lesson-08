<template>
  <div class="categories">
    <div class="categories__items">
      <category-card
        v-for="category in categoriesList"
        :key="category.id"
        class="categories__item"
        :card-data="category"
        @chose="onChose"
      />
    </div>
    <div class="categories__label">
      <span v-if="!currentCategoryTitle">Товари</span>
      <span v-else>{{ currentCategoryTitle }}</span>
      в Україні
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CategoryCard from './CategoryCard.vue'
import { categoriesList } from './settings'

export default {
  name: 'CategoriesPanel',

  components: {
    CategoryCard,
  },

  data() {
    return {
      currentCategoryTitle: null,
    }
  },

  computed: {
    categoriesList() {
      return categoriesList
    },
  },

  methods: {
    ...mapActions(['setCurrentCategory', 'setCurrentProductsList']),
    onChose(category) {
      this.currentCategoryTitle = category.category
      this.setCurrentProductsList(category.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  // .categories__items
  &__items {
    max-width: 62.5em;
    margin: 0 auto;
    background-color: #d4d4ff;
    border-radius: 0.625em;
    display: flex;
    justify-content: space-evenly;
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
  // .categories__item
  &__item {
    padding: 1.5625em;
  }
  // .categories__label
  &__label {
    max-width: 62.5em;
    margin: 0 auto;
    background-color: #d4d4ff;
    padding: 25px;
    border-radius: 0.625em;
    span {
      font-size: 1.125em;
      font-weight: 700;
    }
  }
}
</style>
