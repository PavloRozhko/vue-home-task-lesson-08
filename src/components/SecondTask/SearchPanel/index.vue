<template>
  <div class="search-panel">
    <div class="search-panel__container">
      <div class="search-panel__item">
        <h4 class="search-panel__tile">Тип транспорта</h4>
        <select v-model="transportType" class="search-panel__select" @change="setTransportType(transportType)">
          <option :value="0">Усі види транспортних засобів</option>
          <option v-for="carType in getCarTypeSet" :key="carType" :value="carType">{{ carType }}</option>
        </select>
      </div>
      <div v-if="isTransportTypeChosen" class="search-panel__item">
        <h4 class="search-panel__tile">Тип кузова</h4>
        <div class="search-panel__checkbox checkbox">
          <div v-for="body in getCarBodyTypeSet" :key="body" class="checkbox__item">
            <label>
              <input v-model="bodyTypes" type="checkbox" :value="body" @change="setBodyCarType(bodyTypes)" />
              {{ body }}
            </label>
          </div>
        </div>
      </div>
      <div class="search-panel__item">
        <h4 class="search-panel__tile">Марка</h4>
        <select v-model="currentBrand" class="search-panel__select" @change="setCarBrand(currentBrand)">
          <option :value="0">Оберіть</option>
          <option v-for="brand in getCarBrandSet" :key="brand" :value="brand">{{ brand }}</option>
        </select>
      </div>
      <div v-if="isBrandChosen" class="search-panel__item">
        <h4 class="search-panel__tile">Модель</h4>
        <select v-model="currentModel" class="search-panel__select" @change="setCarModel(currentModel)">
          <option :value="0">Оберіть</option>
          <option v-for="model in getCarModelSet" :key="model" :value="model">{{ model }}</option>
        </select>
      </div>
      <div class="search-panel__item">
        <h4 class="search-panel__tile">Рік</h4>
        <div class="search-panel__years">
          <select v-model="rangeStart" class="search-panel__select" @change="onSetStartRange(rangeStart)">
            <option :value="0">Від</option>
            <option v-for="year in productionYears" :key="year" :value="year">{{ year }}</option>
          </select>
          <select v-model="rangeEnd" class="search-panel__select" @change="onSetEndRange(rangeEnd)">
            <option :value="0">До</option>
            <option v-for="year in productionYears" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="search-panel__item reset-button">
        <button @click="onFilterReset">Скинути усі фільтри</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import years from './settings'

export default {
  name: 'SearchPanel',
  data() {
    return {
      transportType: null,
      bodyTypes: [],
      currentBrand: null,
      currentModel: null,
      rangeStart: null,
      rangeEnd: null,
      //-----------------
    }
  },
  computed: {
    ...mapGetters(['getCarTypeSet', 'getCarBodyTypeSet', 'getCarBrandSet', 'getCarModelSet']),

    isTransportTypeChosen() {
      return this.transportType
    },
    isBrandChosen() {
      return this.currentBrand
    },
    productionYears() {
      return years
    },
  },

  methods: {
    ...mapActions(['setFilterProps', 'resetFilterProps']),

    setTransportType(type) {
      this.setFilterProps({ transportType: type })
    },
    setBodyCarType(types) {
      this.setFilterProps({ bodyCarTypes: types })
    },
    setCarBrand(brand) {
      this.setFilterProps({ carBrand: brand })
    },
    setCarModel(model) {
      this.setFilterProps({ carModel: model })
    },
    onSetStartRange(start) {
      this.setFilterProps({ startRange: start })
    },
    onSetEndRange(end) {
      if (this.rangeStart > this.rangeEnd) this.rangeStart = this.rangeEnd - 1
      this.setFilterProps({ endRange: end })
    },
    onFilterReset() {
      this.transportType = null
      this.bodyTypes.length = 0
      this.currentBrand = null
      this.currentModel = null
      this.rangeStart = null
      this.rangeEnd = null
      this.resetFilterProps()
    },
  },
}
</script>

<style lang="scss" scoped>
.search-panel {
  padding: 1.25em;
  // .search-panel__container
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
  }
  // .search-panel__tile
  &__tile {
    font-size: 1.5em;
    color: #9a9aff;
    &:not(:last-child) {
      margin-bottom: 0.3125em;
    }
  }
  // .search-panel__select
  &__select {
    width: 100%;
    height: 3.125em;
    border: 2px solid #9a9aff;
    border-radius: 0.3125em;
  }
  // .search-panel__years
  &__years {
    display: flex;
    gap: 0.3125em;
  }
}
.reset-button {
  align-self: center;
  button {
    padding: 0.9375em 1.25em;
    background-color: #9a9aff;
    color: #fff;
    transition: all 0.3s ease 0s;
    border-radius: 5px;
    &:hover {
      background-color: #6868d3;
    }
    &:active {
      background-color: #4a4ab3;
    }
  }
}
</style>
