$(document).ready(function() {
    $.getJSON('http://127.0.0.1:5500/miJS/MIData.Json', function (data) {
        var reviewInfo = ' ';
        $.each(data, function() {
            reviewInfo += '<ul class ="reviewCard">'
            $.each(this, function(name, value){
                if(name === 'image'){
                    reviewInfo += (`<img class ="albumImg" src ='${value}'>`) 
                }  else {
                    reviewInfo += (`<li>${value}</li>`);
                }
                
            })
           reviewInfo += '</ul>';
        });
           
        
        $('#MIreviews').html(reviewInfo)

        });
});