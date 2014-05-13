var profile=(function(){
	return {
		basePath:"../../../../target/src/main/webapp/",
		releasePath:"../../app",
		releaseName:"lib",
		action:"release",
		layerOptimize:"closure",
		optimize:"closure",
		cssOptimize:"comments",
		mini:true,
		stripConsole:"warn",
		selectorEngine:"lite",
		defaultConfig: {
			hasCache:{
				"dojo-built": 1,
				"dojo-loader": 1,
				"dom": 1,
				"host-browser": 1,
				"config-selectorEngine": "lite"
			},
			async: 1
		},
		
		staticHasFeatures:{
			"config-deferredInstrumentation": 0,
			"config-dojo-loader-catches": 0,
			"config-tlmSiblingOfDojo": 0,
			"dojo-amd-factory-scan": 0,
			"dojo-combo-api": 0,
			"dojo-config-api": 1,
			"dojo-config-require": 0,
			"dojo-debug-messages": 0,
			"dojo-dom-ready-api": 1,
			"dojo-firebug": 0,
			"dojo-guarantee-console": 1,
			"dojo-has-api": 1,
			"dojo-inject-api": 1,
			"dojo-loader": 1,
			"dojo-log-api": 0,
			"dojo-modulePaths": 0,
			"dojo-moduleUrl": 0,
			"dojo-publish-privates": 0,
			"dojo-requirejs-api": 0,
			"dojo-sniff": 1,
			"dojo-sync-loader": 0,
			"dojo-test-sniff": 0,
			"dojo-timeout-api": 0,
			"dojo-trace-api": 0,
			"dojo-undef-api": 0,
			"dojo-v1x-i18n-Api": 1,
			"dom": 1,
			"host-browser": 1,
			"extend-dojo": 1
		},
		
		packages:[
		      {
		    	  name:"dgrid-1.0",
		    	  location:"dojo/dgrid-1.0"
		      },{
		    	  name:"dijit",
		    	  location:"dojo/dijit"
		      },{
		    	  name:"dojo",
		    	  location:"dojo/dojo"
		      },{
		    	  name:"dojox",
		    	  location:"dojo/dojox"
		      },{
		    	  name:"gridx",
		    	  location:"dojo/gridx"
		      },{
			      name:"util",
			      location:"dojo/util"
			  },{
				  name:"app",
				  location:"app"
			  }
		     ],
		     
		layers:{
		    	 "dojo/dojo":{
		    		 include:["dojo/dojo/dojo","dojo/dojo/i18n","dojo/dojo/domReady","app/main","app/run"],
		    		 customBase:true,
		    		 boot:true
		    	 },
		    	 "app/Dialog":{
		    		 include:["app/Dialog"]
		    	 }
		     }
		     
//		 layers: {
//		         "app/main": {
//		             include: [ "app/main" ],
//		             exclude: [ "app/mail", "app/calendar" ]
//		         },
//		         "app/mail": {
//		             include: [ "app/mail" ],
//		             exclude: [ "app/main" ]
//		         },
//		         "app/calendar": {
//		             include: [ "app/calendar" ],
//		             exclude: [ "app/main" ]
//		         }
//		     },
	};
})();











