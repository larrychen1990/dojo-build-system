(this.dojoConfig || this.djConfig || this.require || {}, {
		async:1,
		hasCache:{
				'config-selectorEngine':"lite",
				'config-tlmSiblingOfDojo':1,
				'dojo-built':1,
				'dojo-loader':1,
				dom:1,
				'host-browser':1
		},
		packages:[
				{
					 location:"../dojox",
					 name:"dojox"
				},
				{
					 location:"../dijit",
					 name:"dijit"
				},
				{
					 location:"../app",
					 name:"app"
				},
				{
					 location:".",
					 name:"dojo"
				},
				{
					 location:"../dgrid-1.0",
					 name:"dgrid-1.0"
				},
				{
					 location:"../gridx",
					 name:"gridx"
				},
				{
					 location:"../util",
					 name:"util"
				}
		]
});(function(){
	// must use this.require to make this work in node.js
	var require = this.require;
	// consume the cached dojo layer
	require({cache:{}});
	!require.async && require(["dojo"]);
	require.boot && require.apply(null, require.boot);
})();
