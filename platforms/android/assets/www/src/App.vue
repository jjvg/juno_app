<template>
	<div>
		<transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>
