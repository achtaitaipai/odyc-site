import { EditorView } from '@codemirror/view'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags as t } from '@lezer/highlight'
import colors from 'open-color'

//https://github.com/codemirror/theme-one-dark/blob/main/src/one-dark.ts

const theme = EditorView.theme(
	{
		'&': {
			color: colors.gray[7],
			backgroundColor: colors.white
		},
		'&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
			{ backgroundColor: colors.blue[1] },
		'.cm-activeLine': { backgroundColor: colors.blue[8] + '0b' }
	},
	{ dark: false }
)

const highlightStyle = HighlightStyle.define([
	{
		tag: t.keyword,
		color: colors.violet[8]
	},
	{
		tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
		color: colors.green[9]
	},
	{
		tag: [t.function(t.variableName), t.labelName],
		color: colors.blue[8]
	},
	{
		tag: [t.color, t.constant(t.name), t.standard(t.name)],
		color: colors.orange[9]
	},
	{
		tag: [t.definition(t.name), t.separator],
		color: colors.blue[6]
	},
	{
		tag: [
			t.typeName,
			t.className,
			t.number,
			t.changed,
			t.annotation,
			t.modifier,
			t.self,
			t.namespace
		],
		color: colors.indigo[7]
	},
	{
		tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
		color: colors.orange[6]
	},
	{
		tag: [t.meta, t.comment],
		color: colors.gray[5]
	},
	{
		tag: t.strong,
		fontWeight: 'bold'
	},
	{
		tag: t.emphasis,
		fontStyle: 'italic'
	},
	{
		tag: t.strikethrough,
		textDecoration: 'line-through'
	},
	{
		tag: t.link,
		color: colors.gray[6],
		textDecoration: 'underline'
	},
	{
		tag: t.heading,
		fontWeight: 'bold',
		color: colors.blue[9]
	},
	{
		tag: [t.atom, t.bool, t.special(t.variableName)],
		color: colors.violet[7]
	},
	{
		tag: [t.processingInstruction, t.string, t.inserted],
		color: colors.orange[6]
	},
	{
		tag: t.invalid,
		color: colors.red[9]
	}
])

export const customTheme = [theme, syntaxHighlighting(highlightStyle)]
