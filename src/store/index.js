import { createStore } from 'vuex'

import { getCurrentData } from './helpers'
import cars from '@/data/carsList.json'

export default createStore({
  state: {
    //-- Task 01
    currentProductsList: [],
    //-- Task 02
    carsList: [],
    filterProps: {},
  },
  getters: {
    //-- Task 01
    getCurrentProductsList(state) {
      if (!state.currentProductsList.length === 0) return
      return state.currentProductsList
    },
    //-- Task 02
    getCarsList: ({ carsList }) => carsList,

    getFilteredList({ filterProps, carsList }) {
      // створення глибокої копії списку машин
      let carsListCopy = JSON.parse(JSON.stringify(carsList))
      // перевірка чи обрано тип ТЗ
      if (filterProps.transportType) {
        // фільтрація по обраному ТИП ТЗ
        const filteredByTransportType = carsListCopy.filter((car) => car.transportType === filterProps.transportType)
        // перевірка чи обрано тип кузова ТЗ
        if (filterProps.bodyCarTypes && filterProps.bodyCarTypes.length !== 0) {
          // створення копії фільтрованого списку машин та фільтрування копії списку машин за критерієм кузова ТЗ
          const filteredByBodyType = filteredByTransportType.filter((car) => {
            for (const bodyType of filterProps.bodyCarTypes) {
              if (bodyType === car.bodyType) return car
            }
          })
          // перевірка чи обрано марку автомобіля
          if (filterProps.carBrand) {
            const filteredByCarBrand = filteredByBodyType.filter((car) => car.carBrand === filterProps.carBrand)
            // перевірка чи обрано модель ТЗ
            if (filterProps.carModel && filterProps.carModel !== 0) {
              const filteredByModel = filteredByCarBrand.filter((car) => car.carModel === filterProps.carModel)
              // перевірка чи обрано діапазон років
              if (filterProps.startRange || filterProps.endRange) {
                // якщо обрано тільки початковий період
                const onlyStartRangeChosen = !filterProps.endRange && filterProps.startRange
                // якщо обрано тільки кінцевий період
                const onlyEndRangeChosen = !filterProps.startRange && filterProps.endRange
                // якщо обрано початок і кінець
                const bothRangesChosen = filterProps.startRange && filterProps.endRange
                if (onlyStartRangeChosen) {
                  const filteredByPeriod = filteredByModel.filter((car) => car.productionYear >= filterProps.startRange)
                  return filteredByPeriod
                } else if (onlyEndRangeChosen) {
                  const filteredByPeriod = filteredByModel.filter((car) => car.productionYear <= filterProps.endRange)
                  return filteredByPeriod
                } else if (bothRangesChosen) {
                  const filteredByBothRanges = filteredByModel.filter(
                    (car) => car.productionYear >= filterProps.startRange && car.productionYear <= filterProps.endRange
                  )
                  return filteredByBothRanges
                } else return filteredByModel
              }
              return filteredByModel
            }
            return filteredByCarBrand
          }
          // повернення відфільтрованого списку за ТИПОМ КУЗОВА
          return filteredByBodyType
        }
        //Повернення списку відфільтрованих по типу ТЗ
        return filteredByTransportType
      } else if (filterProps.carBrand) {
        // якщо не обрано тип ТЗ, а одразу марку
        const filteredByBrand = carsListCopy.filter((car) => car.carBrand === filterProps.carBrand)
        // якщо обрано модель
        if (filterProps.carModel) {
          const filteredByModel = filteredByBrand.filter((car) => car.carModel === filterProps.carModel)
          // перевірка чи обрано діапазон років
          if (filterProps.startRange || filterProps.endRange) {
            // якщо обрано тільки початковий період
            const onlyStartRangeChosen = !filterProps.endRange && filterProps.startRange
            // якщо обрано тільки кінцевий період
            const onlyEndRangeChosen = !filterProps.startRange && filterProps.endRange
            // якщо обрано початок і кінець
            const bothRangesChosen = filterProps.startRange && filterProps.endRange
            if (onlyStartRangeChosen) {
              const filteredByPeriod = filteredByModel.filter((car) => car.productionYear >= filterProps.startRange)
              return filteredByPeriod
            } else if (onlyEndRangeChosen) {
              const filteredByPeriod = filteredByModel.filter((car) => car.productionYear <= filterProps.endRange)
              return filteredByPeriod
            } else if (bothRangesChosen) {
              const filteredByBothRanges = filteredByModel.filter(
                (car) => car.productionYear >= filterProps.startRange && car.productionYear <= filterProps.endRange
              )
              return filteredByBothRanges
            }
            return filteredByModel
          }
          if (filterProps.transportType) {
            filterProps.carModel = null
            filterProps.carBrand = null
          }
          return filteredByModel
        }
        return filteredByBrand
      } else if (filterProps.startRange || filterProps.endRange) {
        // якщо обрано тільки початковий період
        const onlyStartRangeChosen = !filterProps.endRange && filterProps.startRange
        // якщо обрано тільки кінцевий період
        const onlyEndRangeChosen = !filterProps.startRange && filterProps.endRange
        // якщо обрано початок і кінець
        const bothRangesChosen = filterProps.startRange && filterProps.endRange
        if (onlyStartRangeChosen) {
          const filteredByPeriod = carsListCopy.filter((car) => car.productionYear >= filterProps.startRange)
          return filteredByPeriod
        } else if (onlyEndRangeChosen) {
          const filteredByPeriod = carsListCopy.filter((car) => car.productionYear <= filterProps.endRange)
          return filteredByPeriod
        } else if (bothRangesChosen) {
          const filteredByBothRanges = carsListCopy.filter(
            (car) => car.productionYear >= filterProps.startRange && car.productionYear <= filterProps.endRange
          )
          return filteredByBothRanges
        }
        return carsListCopy
      }

      return carsList
    },

    getCarTypeSet({ carsList }) {
      return [...new Set(carsList.map((car) => car.transportType))]
    },
    getCarBodyTypeSet(state) {
      if (!state.filterProps.transportType) return

      const bodySet = new Set()

      for (const body of state.carsList) {
        if (body.transportType !== state.filterProps.transportType) continue
        bodySet.add(body.bodyType)
      }
      return bodySet
    },
    getCarBrandSet({ carsList }) {
      return [...new Set(carsList.map((car) => car.carBrand))]
    },
    getCarModelSet(state) {
      if (!state.filterProps.carBrand) return

      const modelsList = state.carsList.filter((car) => {
        if (car.carBrand === state.filterProps.carBrand) return car.carModel
      })

      return [...new Set(modelsList.map((car) => car.carModel))]
    },
  },
  mutations: {
    //-- Task 01
    setCurrentProductsList(state, categoryID) {
      const currentList = getCurrentData(categoryID)
      state.currentProductsList = currentList
    },
    //-- Task 02
    setCarsList(state, carsList) {
      state.carsList = carsList
    },
    setFilterProps(state, filterProp) {
      Object.assign(state.filterProps, filterProp)
      console.log(state.filterProps)
    },
    resetFilterProps(state) {
      state.filterProps = {}
      console.log(state.filterProps)
    },
  },
  actions: {
    setCurrentProductsList({ commit }, categoryID) {
      commit('setCurrentProductsList', categoryID)
    },
    //-- Task 02
    loadDataFromFile({ commit }) {
      commit('setCarsList', cars)
    },
    setFilterProps({ commit }, filterProp) {
      commit('setFilterProps', filterProp)
    },
    resetFilterProps({ commit }) {
      commit('resetFilterProps')
    },
  },
})
