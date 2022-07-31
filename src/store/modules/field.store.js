import { hasString, searhToId, getLibraryById } from './../../utils/utils' 
import { HORIZON,WELL_CONDITION, WELL_TYPES } from "../../config/types";

const state = {
  originalDataInServer: [
  {
    id: 1,
    field: "AA",
    well: "10Д",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 5, title: "V" },
    qLiquid: 11.6,
    waterCut: 88.6,
    oilDensity: 0.83,
    oilFlowRate: 0.03,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 2,
    field: "AA",
    well: "33Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 1, title: "I" },
    qLiquid: 1.8,
    waterCut: 98,
    oilDensity: 0.82,
    oilFlowRate: 0.0,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 3,
    field: "AA",
    well: "10Д",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 2, title: "II" },
    qLiquid: 12.46,
    waterCut: 83,
    oilDensity: 0.83,
    oilFlowRate: 0.04,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 4,
    field: "СС",
    well: "37Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: "V",
    qLiquid: 11.6,
    waterCut: 88.6,
    oilDensity: 0.83,
    oilFlowRate: 0.03,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 5,
    field: "CC",
    well: "47",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 6, title: "IV" },
    qLiquid: 20.11,
    waterCut: 91.64,
    oilDensity: 0.82,
    oilFlowRate: 0.02,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 6,
    field: "AA",
    well: "14",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 2, title: "II" },
    qLiquid: 20.33,
    waterCut: 50,
    oilDensity: 0.82,
    oilFlowRate: 0.21,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 7,
    field: "AA",
    well: "26",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 2, title: "II" },
    qLiquid: 9.76,
    waterCut: 90.86,
    oilDensity: 0.83,
    oilFlowRate: 0.02,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 8,
    field: "BB",
    well: "27",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 3, title: "В простое" },
    horizon: { id: 3, title: "III" },
    qLiquid: null,
    waterCut: 39.92,
    oilDensity: 0.83,
    oilFlowRate: 0.0,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 9,
    field: "AA",
    well: "28Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 3, title: "В простое" },
    horizon: { id: 4, title: "IV" },
    qLiquid: 7.82,
    waterCut: null,
    oilDensity: 0.82,
    oilFlowRate: 0.09,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 10,
    field: "BB",
    well: "29Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 3, title: "III" },
    qLiquid: 6.17,
    waterCut: 99.9,
    oilDensity: 0.83,
    oilFlowRate: 0.0,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 11,
    field: "BB",
    well: "32Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 5, title: "V" },
    qLiquid: 6.84,
    waterCut: 99.9,
    oilDensity: 0.82,
    oilFlowRate: 0.03,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 12,
    field: "CC",
    well: "32Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 3, title: "III" },
    qLiquid: 6.84,
    waterCut: 99.99,
    oilDensity: 0.83,
    oilFlowRate: 0.0,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 13,
    field: "СС",
    well: "35Г",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 5, title: "V" },
    qLiquid: 16.17,
    waterCut: 88.6,
    oilDensity: 0.82,
    oilFlowRate: 0.41,
    saved: {
      id: 1,
      title: "Сохранен",
    },
  },
  {
    id: 14,
    field: "АА",
    well: "203",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 5, title: "V" },
    qLiquid: 10.17,
    waterCut: 3.6,
    oilDensity: 0.81,
    oilFlowRate: 0.41,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 15,
    field: "АА",
    well: "204",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 1, title: "I" },
    qLiquid: 1.8,
    waterCut: 70.45,
    oilDensity: 0.82,
    oilFlowRate: 0.41,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 16,
    field: "АА",
    well: "205",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 2, title: "II" },
    qLiquid: 12.46,
    waterCut: 25.18,
    oilDensity: 0.82,
    oilFlowRate: 0.41,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 17,
    field: "CC",
    well: "206",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 4, title: "IV" },
    qLiquid: 20.11,
    waterCut: 90.6,
    oilDensity: 0.82,
    oilFlowRate: 0.2,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 18,
    field: "AA",
    well: "208",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 2, title: "В работе" },
    horizon: { id: 2, title: "II" },
    qLiquid: 20.33,
    waterCut: 89.57,
    oilDensity: 0.82,
    oilFlowRate: 0.4,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 19,
    field: "AA",
    well: "210",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 1, title: "Наблюдательная" },
    horizon: { id: 2, title: "II" },
    qLiquid: 9.76,
    waterCut: 92.69,
    oilDensity: 0.83,
    oilFlowRate: 0.1,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 20,
    field: "BB",
    well: "211",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 3, title: "В простое" },
    horizon: { id: 3, title: "III" },
    qLiquid: 9.76,
    waterCut: 67.82,
    oilDensity: 0.82,
    oilFlowRate: 0.1,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
  {
    id: 21,
    field: "AA",
    well: "212",
    wellType: { id: 1, title: "Добывающая" },
    wellCondition: { id: 3, title: "В простое" },
    horizon: { id: 4, title: "IV" },
    qLiquid: 7.82,
    waterCut: 20.27,
    oilDensity: 0.82,
    oilFlowRate: 0.07,
    saved: {
      id: 2,
      title: "Не сохранен",
    },
  },
],
  field: []
};

const mutations = {
  GET_WELL(state, payload) {
    state.field = payload;
  },
  SET_WELL(state, payload) {
    state.originalDataInServer.push(payload)
  }
};

const actions = {
  getWell({ commit }, filters) {
    return new Promise((resolve, reject) => {
      // имитация GET запроса
      // При вызове реального fetch, использовать chaning Fn (.then)
      try {
        // simulation server Fetch / Поиск/фильтрация должны быть реализованы на бэкенде
        const getDataInServer = 
              state.originalDataInServer
              .filter(item => { 
                const hasField = filters.field ? hasString(item.field, filters.field) : true
                const hasSaved = filters.savedId ? searhToId(item.saved.id, filters.savedId) : true
                const hasWellType = filters.wellTypeId ? searhToId(item.wellType.id, filters.wellTypeId) : true
                const hasWellCondition = filters.wellConditionId ? searhToId(item.wellCondition.id, filters.wellConditionId) : true
                const hasWell = filters.well?.length ? filters.well.some(elem => elem === item.well) : true

                return hasField && hasSaved && hasWellType && hasWellCondition && hasWell
              })
        
        commit('GET_WELL', getDataInServer)
        resolve(state.getDataInServer)
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  },
  createWell({ commit }, data) {
    return new Promise((resolve, reject) => {
      // Имитация пост запроса

      try {
        const newWell = {
          id: state.originalDataInServer.length + 1,
          field: data.field,
          horizon: getLibraryById(HORIZON, data.horizonId),
          oilDensity: data.oilDensity,
          oilFlowRate: data.oilFlowRate,
          qLiquid: data.qLiquid,
          waterCut: data.waterCut,
          well: data.well,
          wellCondition: getLibraryById(WELL_CONDITION, data.wellConditionId),
          wellType: getLibraryById(WELL_TYPES, data.wellTypeId),
        }

        commit('SET_WELL', newWell)
        resolve(state.getDataInServer)
      } catch (error) {
        console.error(error)
        reject(error)
      } 
    })
  }
};

const getters = {
  processedData: (state) => state.field,
  all: (state) => state.originalDataInServer
};

export default {
  state, mutations, actions, getters, namespaced: true,
};
