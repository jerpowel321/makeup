// $(document).ready(function(){
    
//     console.log("ready")
// });

$('.btn').click(function(){
        $.ajax({
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick',
            type: "GET",
            success: function(result){
                console.log(result)
                $('.results').append("<H4>"+ result[0]+"<H4/>")
            },
            error: function(error){
                console.log(`Error ${error}`)
            }
        })
    })