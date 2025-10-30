export function calcPrice(priceNotNds: number | null, nds: number | null): number | null {
	if (priceNotNds == null || nds == null) return null
	return +(priceNotNds + (priceNotNds * nds) / 100).toFixed(2)
}
