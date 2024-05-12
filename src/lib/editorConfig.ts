import { javascript } from '@codemirror/lang-javascript'
import { createTheme } from 'thememirror'
import { tags as t } from '@lezer/highlight'

// Author: TextMate
export const theme = createTheme({
	variant: 'light',
	settings: {
		background: '#FFFFFF',
		foreground: '#212529',
		caret: '#212529',
		selection: '#748ffc',
		gutterBackground: '#FFFFFF',
		gutterForeground: '#00000070',
		lineHighlight: '#e7f5ff'
	},
	styles: [
		{
			tag: t.comment,
			color: '#adb5bd'
		},
		{
			tag: [t.keyword, t.operator, t.typeName, t.tagName, t.propertyName],
			color: '#1864ab',
			fontWeight: 'bold'
		},
		{
			tag: [t.attributeName, t.definition(t.propertyName)],
			color: '#364fc7'
		},
		{
			tag: [t.className, t.string, t.special(t.brace)],
			color: '#ff922b'
		},
		{
			tag: t.number,
			color: '#2f9e44',
			fontWeight: 'bold'
		},
		{
			tag: t.variableName,
			fontWeight: 'bold',
			color: '#212529'
		}
	]
})

export const editorConfig = {
	lang: javascript(),
	theme
}
