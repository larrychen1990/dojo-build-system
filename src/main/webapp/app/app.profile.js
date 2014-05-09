var profile=(function(){
	return {
		resourceTags:{
			amd:function(/*String*/filename,/*Module ID*/mid){
				return /\.js$/.test(filename);
			}
		}
	};
})();



//resourceTags:
//	amd
//	The resource is an AMD module.
//	
//	declarative
//	The resource uses declarative markup you want to scan for dependencies.
//	
//	test
//	The resource is part of the test code of the package.
//	
//	copyOnly
//	The resource should be copied to the destination location and otherwise left unaltered.
//	
//	miniExclude
//	The resource should not be copied to the destination if the profile property mini is truthy.





