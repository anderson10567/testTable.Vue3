import { describe, it, expect } from 'vitest'
import { calcPrice } from '@/utils/price'

describe('calcPrice', () => {
	it('returns null when inputs are null', () => {
		expect(calcPrice(null, 20)).toBeNull()
		expect(calcPrice(100, null)).toBeNull()
	})

	it('calculates VAT price with 2 decimals', () => {
		expect(calcPrice(100, 20)).toBe(120)
		expect(calcPrice(99.99, 20)).toBe(119.99)
	})
})
