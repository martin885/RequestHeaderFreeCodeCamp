
var moduleHeader= function (ipadress,language,software) {

    var ipadress=ipadress;
var language=language.split(',');

var soft1=software.split('(');
var soft2=soft1[1].split(')');
var software=soft2[0];
return {ipadress:ipadress,language:language[0],software:software}
}
module.exports=moduleHeader;