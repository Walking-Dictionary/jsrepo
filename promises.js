

// a promise constructor sets resolve and reject conditions
var myPromise = new Promise(function(resolve, reject){

	if (success) 
		{resolve(...);}
	else
		{reject(err());}
});
  // .then method takes to arguments, success and failure funtion
myPromise.then( function(result){console.log(result);}, function(err){console.log(err);});