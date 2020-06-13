 //problem : Make an http Request to the server which will return a pdf document, save that document in a file x.pdf

//Issue : The saved file is blank pdf , but the server returned a pdf 

//Comment: While using core http library server was returing a html doc instead of pdf file , i think there was something
//		   to do with mime-type 

const stream = require('fs').Transform,
	axios = require('axios'),
	http = require('http');
	let data = new stream();

 const request = require('request');
 var options ={
	 url:'http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=62799&toslno=62799',
	 headers:{
		 'Content-type':'application/pdf'
	 }
 };
 function callback(error, response, body) {
	 console.log(error);
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
  }
  request(options,callback);

























/* axios.get('http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=62799&toslno=62799')
.then((res)=>{
	fs.writeFile('x.pdf',res.data,{encoding:'binary'},()=>{
		//console.log("sucessFully Writen to x.pdf");
	});
	console.log(res.data);		//this will write the whole recieved binary data to the file
})
.catch((err)=>{
	console.log(err);
})
.then(()=>{
	//console.log("\nEnd");
});

*/

 
