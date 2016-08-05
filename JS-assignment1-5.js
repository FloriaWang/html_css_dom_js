var escapedStr = escapeHTML('<input type="text" name="mobile">');
function escapeHTML(htmlStr){
	htmlStr=htmlStr.replace(/[<>"&]/g, function(char){
		switch (char) {
			case '<':
				return "&lt;";
				break;
			case '>':
				return "&gt;";
				break;
			case '"':
				return "&quot;";
				break;
			case '&':
				return "&amp;";
			default:
				// statements_def
				break;
		}
	});
	//console.log(htmlStr);
	return htmlStr;
};
