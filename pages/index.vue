<template>
	<div class="Home">
		<landing />
		<theme-changer>
			<section-header text="Sandbox" class="experiments-section-header" />
			<work-grid type="exps" :projects="experiments" />
			<contact-section />
		</theme-changer>
		<!-- <further-about />
		<section-header text="Projects" class="project-section-header" />
		<work-grid :projects="workProjs" /> -->
	</div>
</template>

<script>
import Landing from '~/components/home/Landing.vue'
import ContactSection from '~/components/home/ContactSection.vue'
import SectionHeader from '~/components/home/SectionHeader.vue'
import WorkGrid from '~/components/work/WorkGrid.vue'
import ThemeChanger from '~/components/common/ThemeChanger.vue'
import LuxyMixin from '~/assets/js/luxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

export default {
	mixins: [LuxyMixin, cursorMixin],
	components: {
		Landing,
		WorkGrid,
		SectionHeader,
		ContactSection,
		ThemeChanger
	},
	beforeMount() {
		window.scrollTo(0, 0)
	},
	computed: {
		workProjs() {
			return this.$store.state.workPages
		},
		experiments() {
			return this.$store.state.experiments.filter(proj => {
				if (proj.show) return true
				else return false
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.Theme-Changer {
	@media (min-aspect-ratio: 9/12) {
		margin-top: 30vh;
	}
}

.project-section-header {
	margin-top: 50vh;
	margin-bottom: 6vh;
}

.experiments-section-header {
	margin-top: 14vh;

	@media (min-aspect-ratio: 1/1) {
		margin-top: 56vh;
		margin-bottom: 4vh;
	}
}
</style>
