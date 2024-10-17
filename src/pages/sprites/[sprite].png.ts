import type { APIRoute, GetStaticPaths } from 'astro'
import sharp from 'sharp'
import sprites from 'src/content/sprites/sprites.json'
import {} from 'odyc'
import { defaultColors } from 'src/components/Paint/utils'

export const getStaticPaths = (() => {
	return sprites.map((el, i) => ({
		params: { sprite: i },
		props: { sprite: el.sprite }
	}))
}) satisfies GetStaticPaths

export const GET: APIRoute = async ({ props }) => {
	const rows = props.sprite.split('\n')
	const spriteSize = 8
	const rawImgData = new Uint8Array(spriteSize * spriteSize * 4)
	console.log(rows)
	for (let y = 0; y < spriteSize; y++) {
		for (let x = 0; x < spriteSize; x++) {
			const cell = rows[y]?.[x]
			const color = defaultColors[cell]
			const rgba = hexToRgba(color)
			rawImgData.set(rgba, (y * spriteSize + x) * 4)
		}
	}
	const img = await sharp(rawImgData, {
		raw: {
			width: spriteSize,
			height: spriteSize,
			channels: 4
		}
	})
		.png()
		.toBuffer()
	return new Response(img, {
		status: 200,
		headers: {
			'Content-Type': 'image/png'
		}
	})
}

const hexToRgba = (hex?: string): Uint8Array => {
	if (!hex) return new Uint8Array([0, 0, 0, 0])
	let r = 0,
		g = 0,
		b = 0,
		a = 255

	if (hex.length === 7 || hex.length === 9) {
		r = parseInt(hex.slice(1, 3), 16)
		g = parseInt(hex.slice(3, 5), 16)
		b = parseInt(hex.slice(5, 7), 16)
		if (hex.length === 9) {
			a = parseInt(hex.slice(7, 9), 16)
		}
	}
	return new Uint8Array([r, g, b, a])
}
