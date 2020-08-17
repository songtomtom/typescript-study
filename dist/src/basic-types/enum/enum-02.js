"use strict";
var Week2;
(function (Week2) {
    Week2[Week2["Sun"] = 0] = "Sun";
    Week2[Week2["Mon"] = 22] = "Mon";
    Week2[Week2["Tue"] = 23] = "Tue";
    Week2[Week2["Wed"] = 24] = "Wed";
    Week2[Week2["Thu"] = 25] = "Thu";
    Week2[Week2["Fri"] = 26] = "Fri";
    Week2[Week2["Sat"] = 27] = "Sat";
})(Week2 || (Week2 = {}));
console.log(Week2.Mon);
console.log(Week2.Tue);
console.log(Week2['Sat']);
console.log(Week2[0]);
console.log(Week2[24]);
