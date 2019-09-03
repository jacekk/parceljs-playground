<template>
	<div>
		<header>
			<img class="app-logo" :src="logoPath" alt="logo" />
			<nav class="app-menu">
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
			</nav>
		</header>
		<main class="app-main">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import logoPath from '../../images/app-logo.png'

export default {
	name: 'app',
	data() {
		return {
			logoPath,
		}
	},
}
</script>

<style lang="sass" scoped>
.app-logo
    display: flex
    margin: 0 auto
.app-menu
    display: flex
    justify-content: center
    padding: 10px 0
    > *
        padding: 20px
        margin: 0 4px
        background: #ddd
.app-main
    display: flex
    justify-content: center
</style>
