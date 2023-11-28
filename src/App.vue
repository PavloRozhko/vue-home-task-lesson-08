<template>
  <div class="tasks">
    <h1 class="tasks__tile">Домашні завдання урок № 8.</h1>
    <first-task class="tasks__item" />
    <second-task class="tasks__item" />
  </div>
</template>

<script>
import FirstTask from '@/components/FirstTask'
import SecondTask from '@/components/SecondTask'

export default {
  name: 'App',
  components: { FirstTask, SecondTask },
}
</script>

<style lang="scss">
@import './assets/styles/index';

#app {
  max-width: 1200px;
  margin: 0 auto;
}
.tasks {
  // .tasks__tile
  &__tile {
    font-size: 2em;
    text-align: center;
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 1.5625em;
    }
  }
  // .tasks__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 1.5625em;
    }
  }
}
</style>
