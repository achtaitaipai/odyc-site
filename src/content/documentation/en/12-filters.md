---
title: Filters
---

# Filters

**Filters** let you modify the overall visual appearance of your game by applying graphical effects to the entire screen. They can help enhance the atmosphere or give your game a unique visual identity.

OdyC uses **WebGL** to render these visual effects. This enables smooth and dynamic rendering, but be aware:

- **Filters rely heavily on the graphics card**.
- They can **reduce performance** on older or low-end machines.
- Some devices (especially mobile or limited browsers) **may not support WebGL** at all.

Using filters is best suited for short games, visual experiments, or projects targeting modern hardware.

## Usage

You can enable a filter when creating your game, by adding a `filter` property to the configuration. Each filter has a **name** (such as `crt`, `neon`, or `fractal`) and may include **custom settings** depending on the effect.

Here’s a minimal example:

```js
const game = createGame({
	// other game options...
	filter: {
		name: 'neon'
	}
})
```

This code applies the **neon** filter to the entire game screen.

## Available Filters

### `fractal`

The `fractal` filter replaces every pixel of the screen with a **symmetrical polygon**, creating a hypnotic, kaleidoscope-like effect.

```js
filter: {
	name: 'fractal',
	settings: {
		sideCount: 12,    // Number of sides for each polygon
		scale: 0.9,       // Zoom level (between 0 and 1)
		rotation: 0       // Rotation angle (between 0 and 1)
	}
}
```

---

### `crt`

This filter simulates the look of an old **CRT screen**: slight distortion, scanlines, and a subtle curvature.

```js
filter: {
	name: 'crt',
	settings: {
		warp: 0.7,           // Screen curvature (between 0 and 1)
		lineIntensity: 0.2,  // Opacity of the scanlines (between 0 and 1)
		lineWidth: 0.6,      // Width of the scanlines (between 0 and 1)
		lineCount: 85        // Number of scanlines (integer)
	}
}
```

---

### `neon`

The `neon` filter combines a **glow effect** with a **mosaic-like rendering**, perfect for futuristic or stylized games.

```js
filter: {
	name: 'neon',
	settings: {
		scale: 0.75,     // Size of mosaic tiles (between 0 and 1)
		intensity: 0.8   // Glow strength (between 0 and 1)
	}
}
```

---

## Custom Shaders

If you want more control, OdyC lets you use your **own WebGL shaders** to create fully customized visual effects.

To do so, provide a `filter` object with a `fragment` property containing your custom GLSL **fragment shader**.
Optionally, you can also include a custom **vertex shader** using the `vertex` property.

### Basic example with a fragment shader:

```js
const myShader = `
precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
	vec4 color = texture2D(u_texture, v_texCoord);
	gl_FragColor = vec4(1.0 - color.rgb, color.a); // Invert colors
}
`

const game = createGame({
	filter: {
		fragment: myShader
	}
})
```

You can also add a `settings` object to define **custom uniforms** passed to your shader. These will be accessible in GLSL with the `u_` prefix.

> \[!TIP]
> To better understand how shaders are structured in OdyC, you can explore the official filter examples in the [src/shaders folder of the GitHub repository](https://github.com/achtaitaipai/odyc/tree/main/src/shaders).
