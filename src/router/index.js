import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import { nextTick } from 'vue';

const routes = [
  {
    path: '/',
    name: 'Create New Student',
    // component: () => import('./components/create-student/CreateStudentComponent'),
    component: () => import('../components/create-student/CreateStudentComponent'),
  },
  {
    path: '/list-students',
    name: 'List All Students',
    component: () => import('../components/list-students/ListStudentsComponent'),
  },
  {
    path: '/edit-students/:id',
    name: 'Update Student',
    component: () => import('../components/edit-student/EditStudentComponent'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
