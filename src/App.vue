<template>
	<n-config-provider :locale="ruRU" :date-locale="dateRuRU" :theme="isDark ? darkTheme : null">
		<n-space vertical size="large" style="padding: 24px; max-width: 1200px; margin: 0 auto">
			<n-space align="center" justify="space-between">
				<h2 style="margin: 0">Тестовая таблица (Naive UI)</h2>
				<n-space align="center">
					<span>Тёмная тема</span>
					<n-switch :value="isDark" @update:value="(v: boolean) => (isDark = v)" />
				</n-space>
			</n-space>
			<PricesTable />
		</n-space>
	</n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NConfigProvider, NSpace, NSwitch, darkTheme, ruRU, dateRuRU } from 'naive-ui'
import PricesTable from './components/PricesTable.vue'

const isDark = ref(false)
</script>
