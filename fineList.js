"use strict";

window.fineList = {
    searchFines: searchFines
};

let DB = window.data.finesData;

function searchFines(searchKey) {
    let results = [];
    
       if (!isNaN(searchKey)) {
        results = DB.filter(fine => fine.номер === searchKey);
    } else {
        results = DB.filter(fine => fine.тип === searchKey);
    }
    
        if (results.length === 0) {
        return [];
    } else {
        return results;
    }
}
