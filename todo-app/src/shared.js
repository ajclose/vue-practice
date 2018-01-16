/* eslint-disable */

export function parseDate(timestamp) {
    if(timestamp != null){
        var datetime = new Date(timestamp);
        return datetime.toLocaleDateString()
    }
}

// export function parseTime(timestamp) {
//     if(timestamp != null){
//         var datetime = new Date(timestamp);
//         return datetime.toLocaleTimeString()
//     }
// }
//
// export function getWeekday(day_index) {
//     var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     var weekday = "";
//     if(day_index < weekdays.length){
//         weekday = weekdays[day_index]
//     }
//     return weekday
// }
//
// export function formatDatetime(date) {
//     var datetime = new Date(date)
//     var local_date = datetime.getDate()
//     var local_hour = datetime.getHours()
//     datetime.setUTCDate(local_date)
//     datetime.setUTCHours(local_hour)
//     var timestamp = datetime.toISOString()
//     return timestamp.slice(0,19);
// }
//
// export function shrinkString(string,length){
//     if(string.length > length){
//         return string.substring(0,length)+"..."
//     }
//     return string
// }
//
// export function round(value) {
//     return Number(Math.round(value+'e'+2)+'e-'+2)
// }
//
// export function roundTo(value,places) {
//     return Number(Math.round(value+'e'+places)+'e-'+places)
// }
//
// export function sortTable(sortKey,data,desc) {
//     return data.sort(function(a,b) {
//         if (a[sortKey] < b[sortKey]){
//             if(desc) {
//                 return -1;
//             }
//             return 1;
//         }
//         if (a[sortKey] > b[sortKey]){
//             if(desc) {
//                 return 1;
//             }
//             return -1;
//         }
//       return 0;
//   });
// }
//
// export function sortTableByDate(dateAttr,secondaryAttr,data,desc) {
//     return data.sort(function(a,b) {
//         if (new Date(a[dateAttr]) < new Date(b[dateAttr])){
//             if(desc) {
//                 return -1;
//             }
//             return 1;
//         }
//         if (new Date(a[dateAttr]) > new Date(b[dateAttr])){
//             if(desc) {
//                 return 1;
//             }
//             return -1;
//         }
//         if (a[secondaryAttr] < b[secondaryAttr]){
//             if(desc) {
//                 return -1;
//             }
//             return 1;
//         }
//         if (a[secondaryAttr] > b[secondaryAttr]){
//             if(desc) {
//                 return 1;
//             }
//             return -1;
//         }
//       return 0;
//   });
// }
//
// export function multiSortTable(sortKey1,sortKey2,data,desc) {
//     return data.sort(function(a,b) {
//         if (a[sortKey1] < b[sortKey1]){
//             if(desc) {
//                 return -1;
//             }
//             return 1;
//         }
//         if (a[sortKey1] > b[sortKey1]){
//             if(desc) {
//                 return 1;
//             }
//             return -1;
//         }
//         if (a[sortKey2] < b[sortKey2]){
//             if(desc) {
//                 return -1;
//             }
//             return 1;
//         }
//         if (a[sortKey2] > b[sortKey2]){
//             if(desc) {
//                 return 1;
//             }
//             return -1;
//         }
//       return 0;
//   });
// }
//
// export function sortList(data) {
//     return data.sort(function(a,b) {
//         if(a < b){
//             return -1;
//         }
//         if(a > b){
//             return 1;
//         }
//         return 0;
//     });
// }
//
// export function filterData(filterKey,filterValue,data) {
//     return data.filter(function(obj){
//         if(obj[filterKey].toLowerCase().indexOf(filterValue.toLowerCase()) >= 0){
//             return obj
//         }
//     });
// }
//
// export function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// export function generateGUID() {
//   function s4() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   }
//   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//     s4() + '-' + s4() + s4() + s4();
// }
//
// export function validateEmail(email) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
//         return true
//     }
//     return false
// }
