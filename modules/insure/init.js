define("init",["sm"],function(e) {
	return {
		modal: null,
		initIf:function(e){
			console.log(e);
		}
	}
}),
define("config",["sm"],function(e) {
	return {
		config:function(e){
			//e.initIf();
			console.log(e);
		}
	}
}),
define(["config"],
function(e) {
	var o = function (e) {
        this.init(e);
    }
	return o.prototype = {
        modal: null,
        init: function(a) {
        
		var list =data.content.product_clause;
        var tpl = document.getElementById('tpl').innerHTML;
        var html = juicer(tpl, data.content);
        $("#container").html(html);

        }
    }
});
/*define(["config","init"],function(e,g) {
	console.log(e);
	console.log(g);
	return function init(e,g){
		e.log();
		e.initIf();
	};
});*/