const http = require('http'),                                                
	  Stream = require('stream').Transform,  
	  fs = require('fs');
var data = new Stream();                                                    

var initial = 62670;

url=`http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=${initial}&toslno=${initial}`;

http.get(url, function(response) {                                        

  response.on('data', function(chunk) {                                       
    data.push(chunk);                                                         
  });                                                                         
	
	debugger;

	response.on('end', function() {                                             
    fs.writeFile('downlaod.pdf', data.read(),()=>{
		console.log("Written SucessFully");
	});
  });                                                                         
}).end();

