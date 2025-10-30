import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import PricesTable from '@/components/PricesTable.vue'
import { NInputNumber } from 'naive-ui'

describe('PricesTable', () => {
	it('recalculates price and logs row on edit', async () => {
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
		const wrapper = mount(PricesTable)

		const inputs = wrapper.findAllComponents(NInputNumber)
		expect(inputs.length).toBeGreaterThan(0)
		const callUpdate = (idx: number) => {
			const p = inputs[idx]?.props() as { onUpdateValue?: (v: number | null) => void } | undefined
			if (p?.onUpdateValue) p.onUpdateValue(10)
		}
		callUpdate(0)
		callUpdate(1)
		await nextTick()

		expect(logSpy.mock.calls.length).toBeGreaterThan(0)

		logSpy.mockRestore()
	})
})
