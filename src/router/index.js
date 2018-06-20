import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'pages/Recommend/Recommend'
import Hot from 'pages/Hot/Hot'
import Search from 'pages/Search/Search'
import Disc from 'pages/Disc/Disc'



Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
  	{
  		path: '/',
  		redirect: '/Recommend'
  	},
    {
    	path: '/Recommend',
    	name: 'Recommend',
    	component: Recommend,
    	children: [
    		{
    			path: ':id',
    			name: 'Disc',
    			component: Disc
    		}
    	]
    },
    {
    	path: '/Hot',
    	name: 'Hot',
    	component: Hot
    },
    {
    	path: '/Search',
    	name: 'Search',
    	component: Search
    },
  ]
})
