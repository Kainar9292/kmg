
export const routes = [
  {
    path: '/',
    name: 'Statistics',
    component: () => import('../pages/statistics/StatisticsMain.vue'),
    meta: {
      title: 'Статистика'
    }
  },
  {
    path: '/oil-field',
    name: 'OilFieldMain',
    component: () => import('../pages/oil-field/OilFieldMain.vue'),
    meta: {
      title: 'Список скважин'
    }
  },
  {
    path: '/oil-field/add',
    name: 'OilFieldAdd',
    component: () => import('../pages/oil-field/OilFieldAdd.vue'),
      meta: {
        title: 'Добавить скважину'
    }
  },
  {
    path: '/oil-field/edit/:id',
    name: 'OilFieldEdit',
    component: () => import('../pages/oil-field/OilFieldEdit.vue'),
      meta: {
        title: 'Редактировать скважину'
    }
  },
];
