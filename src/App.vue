<template>
  <div id="app">
  	<home-header></home-header>
		<home-nav></home-nav>
  	<keep-alive>
  		<router-view></router-view>
  	</keep-alive>
  </div>
</template>

<script>
	import HomeHeader from 'components/Header'
	import HomeNav from 'components/MainNav'
	export default {
	  name: 'App',
	  components: {
	  	HomeHeader,
	  	HomeNav
	  }
	}
</script>

<style>

</style>
