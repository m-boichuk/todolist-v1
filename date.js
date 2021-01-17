module.exports.getDate = getDate;

function getDate() {
    let today = new Date();
    // var correntDay = today.getDay();
    var day = ""
    
    let options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    
    }
    
    return day = today.toLocaleDateString("en-US", options);
    
  }

  module.exports.getDay = getDay;
  function getDay() {
    let today = new Date();
    // var correntDay = today.getDay();
    var day = ""
    
    let options ={
        weekday: "long",
        
        
    
    }
    
    return day = today.toLocaleDateString("en-US", options);
  }


