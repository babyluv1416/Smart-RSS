define({
	global: {
		'shift+1': 'feeds:focus',
		'shift+2': 'articles:focus',
		'shift+3': 'content:focus',
		'shift+4': 'content:focusSandbox',
		'esc': 'global:hideOverlays',
		'shift+insert': 'global:runTests'
	},
	feeds: {
		'up': 'feeds:selectPrevious',
		'down': 'feeds:selectNext',
		'u': 'feeds:selectPrevious',
		'j': 'feeds:selectNext',
		
		'ctrl+left': 'feeds:closeFolders',
		'ctrl+right': 'feeds:openFolders',
		'left': 'feeds:toggleFolder',
		'right': 'feeds:showArticles',
		'enter': 'feeds:showAndFocusArticles',

		'shift+j': 'feeds:selectNext',
		'shift+down': 'feeds:selectNext',
		'shift+u': 'feeds:selectPrevious',
		'shift+up': 'feeds:selectPrevious',
	},
	articles: {
		'd': 'articles:delete',
		'del': 'articles:delete',
		'shift+d': 'articles:delete',
		'shift+del': 'articles:delete',
		'ctrl+f': 'articles:focusSearch',
		'shift+enter': 'articles:fullArticle',
		'enter': 'articles:fullArticle',
		'k': 'articles:mark',
		'j': 'articles:selectNext',
		'down': 'articles:selectNext',
		'u': 'articles:selectPrevious',
		'up': 'articles:selectPrevious',

		'shift+j': 'articles:selectNext',
		'shift+down': 'articles:selectNext',
		'shift+u': 'articles:selectPrevious',
		'shift+up': 'articles:selectPrevious',

		'g': 'articles:markAndNextUnread',
		't': 'articles:markAndPrevUnread',
		'h': 'articles:nextUnread',
		'y': 'articles:prevUnread',
		'z': 'articles:prevUnread',

		'ctrl+shift+a': 'articles:markAllAsRead',
		'ctrl+a': 'articles:selectAll',
		'p': 'articles:pin',
		'n': 'articles:undelete',
		'space': 'articles:spaceThrough',
		'r': 'articles:update',

		'pgup': 'articles:pageUp',
		'pgdown': 'articles:pageDown',
		'end': 'articles:scrollToBottom',
		'home': 'articles:scrollToTop'
	},
	content: {
		'up': 'content:scrollUp',
		'down': 'content:scrollDown',
		'space': 'content:spaceThrough',
		'pgup': 'content:pageUp',
		'pgdown': 'content:pageDown',
		'end': 'content:scrollToBottom',
		'home': 'content:scrollToTop',
		'del': 'content:delete',
		'd': 'content:delete',
		'k': 'content:mark',

		'g': 'articles:markAndNextUnread',
		't': 'articles:markAndPrevUnread',
		'h': 'articles:nextUnread',
		'y': 'articles:prevUnread',
		'z': 'articles:prevUnread',
		'j': 'articles:selectNext',
		'u': 'articles:selectPrevious'
	},
	sandbox: {
		'del': 'content:delete',
		'd': 'content:delete',
		'k': 'content:mark',
		'space': 'content:spaceThrough',

		'g': 'articles:markAndNextUnread',
		't': 'articles:markAndPrevUnread',
		'h': 'articles:nextUnread',
		'y': 'articles:prevUnread',
		'z': 'articles:prevUnread',
		'j': 'articles:selectNext',
		'u': 'articles:selectPrevious'
	},
	keys: {
		8: 'backspace',
		9: 'tab',
		13: 'enter',
		//16: 'shift',
		//17: 'ctrl',
		20: 'capslock',
		27: 'esc',
		32: 'space',
		33: 'pgup',
		34: 'pgdown',
		35: 'end',
		36: 'home',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		45: 'insert',
		46: 'del'
	}
});
