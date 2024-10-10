import { javascript } from '@codemirror/lang-javascript'
import { customTheme } from './editorTheme'

export const editorConfig = {
	basic: true,
	useTab: true,
	editable: true,
	lineWrapping: false,
	readonly: false,
	tabSize: 2,
	placeholder: null,
	lang: javascript(),
	nodebounce: false,
	extensions: [customTheme]
}
