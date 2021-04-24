// table maipulation

$(document).ready(function() {

    var html = '<tr><td><input class="form-control" type="text" name="fname[]" required=""></td> <td><input class="form-control" type="text" name="email[]" required=""></td> <td><input class="form-control" type="text" name="phone[]" required=""></td><td><input class="form-control" type="text" name="addr[]" required=""></td> <td><a class= "btn btn-danger" type= "button" name= "remove" id= "remove">-</a></td></tr>';
    var html2 = '<tr><td><input class="form-control" type="text" name="fname[]" required=""></td> <td><input class="form-control" type="text" name="email[]" required=""></td> <td><input class="form-control" type="text" name="phone[]" required=""></td><td><input class="form-control" type="text" name="addr[]" required=""></td> <td><input class="form-control" type="text" name="cddr[]" required=""></td>  <td><a class= "btn btn-danger" type= "button" name= "remove" id= "remove">-</a></td></tr>';

    // var x = 1;
    //      $("#add").click(function(){
    //         $('#table_field').hide(html);       
    // });


    // For the table at 6.1
    $("#add").click(function() {
        $('#table_field').append(html);
    });

    $("#table_field").on('click', "#remove", function() {
        $(this).closest('tr').remove();
    });

    // For the table at 7.1
    $("#add1").click(function() {
        $('#table_field_1').append(html2);
    });

    $("#table_field_1").on('click', "#remove", function() {
        $(this).closest('tr').remove();
    });


    // For the table at 8.1
    $("#add2").click(function() {
        $('#table_field_2').append(html);
    });

    $("#table_field_2").on('click', "#remove", function() {
        $(this).closest('tr').remove();
    });
});