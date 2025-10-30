<template>
	<n-data-table
		:columns="columns"
		:data="rows"
		:row-key="rowKey"
		:bordered="false"
		:single-line="false"
	/>
</template>

<script setup lang="tsx">
import { ref, computed } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NDataTable, NSwitch, NDatePicker, NInputNumber } from 'naive-ui'
import { calcPrice } from '@/utils/price'

type Row = {
	id: number
	steName: string
	isActual: boolean
	priceEndDate: number | null // timestamp ms
	priceNotNds: number | null
	nds: number | null
	price: number | null
	fillEndDate: number | null
}

const initialRows: Row[] = [
	{
		id: 1,
		steName: 'Азот газообразный сорт - первый трёхвальный баллон 50 л',
		isActual: true,
		priceEndDate: Date.parse('2025-03-21'),
		priceNotNds: 1000,
		nds: 20,
		price: null,
		fillEndDate: Date.parse('2025-03-21')
	},
	{
		id: 2,
		steName: 'OZONE MICRONE H47 набор фильтров для пылесосов ELECTROLUX',
		isActual: false,
		priceEndDate: Date.parse('2025-03-21'),
		priceNotNds: 850,
		nds: 10,
		price: null,
		fillEndDate: Date.parse('2025-03-21')
	},
	{
		id: 3,
		steName: 'OZONE MICRONE H47 набор фильтров для пылесосов ELECTROLUX CYCLONE',
		isActual: true,
		priceEndDate: Date.parse('2025-03-21'),
		priceNotNds: 1200,
		nds: 20,
		price: null,
		fillEndDate: Date.parse('2025-03-21')
	}
]

const rows = ref<Row[]>(initialRows.map((r) => ({ ...r, price: calcPrice(r.priceNotNds, r.nds) })))

function emitRowState(row: Row): void {
	const payload = {
		id: row.id,
		isActual: row.isActual,
		price: row.price,
		priceNotNds: row.priceNotNds,
		nds: row.nds,
		priceEndDate: row.priceEndDate
	}
	// eslint-disable-next-line no-console
	console.log(payload)
}

function updatePrice(row: Row): void {
	row.price = calcPrice(row.priceNotNds, row.nds)
}

const columns = computed<DataTableColumns<Row>>(() => [
	{
		key: 'steName',
		title: 'Наименование СТЕ',
		sorter: 'default'
	},
	{
		key: 'isActual',
		title: 'В наличии',
		render: (row) => (
			<NSwitch
				value={row.isActual}
				onUpdateValue={(v: boolean) => {
					row.isActual = v
					emitRowState(row)
				}}
			/>
		)
	},
	{
		key: 'priceEndDate',
		title: 'Срок действия предоставленных сведений',
		render: (row) => (
			<NDatePicker
				value={row.priceEndDate}
				onUpdateValue={(v: number | null) => {
					row.priceEndDate = v
					emitRowState(row)
				}}
				clearable
			/>
		)
	},
	{
		key: 'priceNotNds',
		title: 'Цена, руб. без НДС',
		align: 'right',
		render: (row) => (
			<NInputNumber
				min={0}
				value={row.priceNotNds}
				precision={2}
				onUpdateValue={(v: number | null) => {
					row.priceNotNds = v
					updatePrice(row)
					emitRowState(row)
				}}
			/>
		)
	},
	{
		key: 'nds',
		title: 'НДС, %',
		align: 'right',
		render: (row) => (
			<NInputNumber
				min={0}
				max={100}
				value={row.nds}
				precision={2}
				onUpdateValue={(v: number | null) => {
					row.nds = v
					updatePrice(row)
					emitRowState(row)
				}}
			/>
		)
	},
	{
		key: 'price',
		title: 'Цена, руб. с НДС',
		align: 'right',
		render: (row) => (
			<span>
				{row.price?.toLocaleString('ru-RU', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				}) ?? ''}
			</span>
		)
	},
	{
		key: 'fillEndDate',
		title: 'Срок заполнения',
		render: (row) => (
			<span>{row.fillEndDate ? new Date(row.fillEndDate).toLocaleDateString('ru-RU') : ''}</span>
		)
	}
])

function rowKey(row: Row): number {
	return row.id
}
</script>
