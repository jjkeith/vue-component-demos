import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import CoverGenerator from '../components/CoverGenerator';
import CustomCheckbox from '../components/CustomCheckbox';
import DotProgressTrackerDemo from '../components/DotProgressTracker/DotProgressTrackerDemo';
import DragAndDrop from '../components/DragAndDrop/DragAndDrop';
import GridDemo from '../components/GridDemo';
import Modal from '../components/Modal/ModalDemo';
import OffCanvasMenu from '../components/OffCanvasMenu';
import PaginatedGridSelectorDemo from '../components/PaginatedGridSelector/PaginatedGridSelectorDemo';
import VueTour from '../components/VueTour';
// import Test from '../components/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cover-generator',
      name: 'CoverGenerator',
      component: CoverGenerator,
    },
    {
      path: '/custom-checkbox',
      name: 'CustomCheckbox',
      component: CustomCheckbox,
    },
    {
      path: '/dot-progress-tracker',
      name: 'DotProgressTracker',
      component: DotProgressTrackerDemo,
    },
    {
      path: '/drag-and-drop',
      name: 'DragAndDrop',
      component: DragAndDrop,
    },
    {
      path: '/grid-demo',
      name: 'GridDemo',
      component: GridDemo,
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal,
    },
    {
      path: '/off-canvas-menu',
      name: 'OffCanvasMenu',
      component: OffCanvasMenu,
    },
    {
      path: '/paginated-grid-selector',
      name: 'PaginatedGridSelectorDemo',
      component: PaginatedGridSelectorDemo,
    },
    {
      path: '/vue-tour',
      name: 'VueTour',
      component: VueTour,
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test,
    // },
  ],
});
