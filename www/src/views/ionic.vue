<template>
	<div id="ionic">
		<ion-app>
			<ion-page class="show-page">
				<ion-header>
					<ion-toolbar>
						<ion-title>Ionic + Vuejs</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content>
					<ion-button><router-link to="/">Go back</router-link></ion-button>
				</ion-content>
			</ion-page>

		</ion-app>

	</div>
	
		 
</template>
<script>
	export default{
		name: 'ionic'
	}
</script>