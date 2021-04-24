// table maipulation

$(document).ready(function(){
        
    var html='<tr><td><input class="form-control" type="text" name="fname[]" required=""></td> <td><input class="form-control" type="text" name="email[]" required=""></td> <td><input class="form-control" type="text" name="phone[]" required=""></td><td><input class="form-control" type="text" name="addr[]" required=""></td>  <td><input class= "btn btn-danger" type= "button" name= "remove" id= "remove" value= "Remove"></td></tr>';

    // var x = 1;
    //      $("#add").click(function(){
    //         $('#table_field').hide(html);       
    // });

    var x = 1;
         $("#add").click(function(){
            $('#table_field').append(html);       
    });

    $("#table_field").on('click',"#remove",function(){
          $(this).closest('tr').remove();       
    });

});