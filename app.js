
let a = document.querySelector('#jmi');

var data = 62698;

function changer(){
    data += 1;
    a.href=`http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=${data}&toslno=${data}`;
    console.log(data);
}
a.addEventListener('click',changer);

//62977 is mine

//62699 is the lower limit