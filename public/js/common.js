requirejs.config({
    baseUrl: "file:///C:/Users/JiangHanLin/Desktop/h5/public/js/lib",
    paths: {
        base: "..",
        app: "../app",
        util: "../util",
        module: "../module",
        config: "C:/Users/JiangHanLin/Desktop/h5/modules/insure",
        amap: "https://webapi.amap.com/maps?v=1.3&key=8731440374969a0479cd2e72770b30b8"
    },
    shim: {
        "sm-date-picker": {
            deps: ["sm"],
            exports: "$"
        }
    }
}),
require(["zepto","config/json","juicer","jweixin"],function(e) {
	return {
		modal: null,
		initIf:function(e){
			console.log(e);
		}
	}
})
