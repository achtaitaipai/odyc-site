import { javascript } from '@codemirror/lang-javascript'
import { customTheme } from './editorTheme'
import { vim } from '@replit/codemirror-vim'

export const editorConfig = ({ withVim }: { withVim: boolean }) => ({
	basic: true,
	useTab: true,
	editable: true,
	lineWrapping: false,
	readonly: false,
	tabSize: 2,
	placeholder: null,
	lang: javascript(),
	nodebounce: false,
	extensions: [customTheme, ...(withVim ? [vim()] : [])]
})
