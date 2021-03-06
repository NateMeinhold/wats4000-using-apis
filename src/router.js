import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
// TODO: Import new component
import AdjForNoun from '@/views/AdjForNoun'
import Homophones from '@/views/Homophones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    }, 
    {
      path: '/homophones',
      name: 'homophones',
      component: Homophones
     //every time I add component: Homophones everything breaks
    }
   
    // TODO: Add new route definition here.
  ]
})
