var profile=(function(){
	var testResource=/^app\/tests\//,
	//checks if mid is in app/tests directory
		copyOnly=function(filename,mid){
			var list={
					"app/tests/tests.profile":true,
					//we shouldn't touch our profile
					"app/tests/package.json":true
					//we shouldn't touch our package.json
			};
			return (mid in list)||
				(/^app\/resources\//.test(mid)
						&&!/\.css$/.test(filename))||
				/(png|jpg|jpeg|gif|tiff)$/.test(filename);
			// Check if it is one of the special files, if it is in
            // app/resource (but not CSS) or is an image
		};
		
	return {
		resourceTags:{
			test:function(filename,mid){
				return testResource.test(mid)||mid=="app/tests";
				// Tag our test files
			},
			
			copyOnly:function(filename,mid){
				return copyOnly(filename,mid);
				// Tag our copy only files
			},
			
			amd:function(/*String*/filename,/*Module ID*/mid){
				return !testResource.test(mid)
						&& !copyOnly(filename,mid)
						&& /\.js$/.test(filename);
				 // If it isn't a test resource, copy only,
                 // but is a .js file, tag it as AMD
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