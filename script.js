
// yesno display

// function yesnoCheck() {
//     if (document.getElementById('yesCheck').checked) {
//         document.getElementById('show-content').style.display = 'block';
//     } else {
//         document.getElementById('show-content').style.display = 'none';
//     }
//   }

  

//   function YesnoCheck() {
//     if (document.getElementById('YesCheck').checked) {
//         document.getElementById('showcontent').style.display = 'block';
//     } else {
//         document.getElementById('showcontent').style.display = 'none';
//     }
//   }

// table maipulation
$(document).ready(function(){
    // Hide displayed paragraphs
    // $(".yesClick").click(function(){
    //     $("p").hide();
    // });
    
    // Show hidden paragraphs
    $(".yesCheck").click(function(){
        $(".show-content").toggle();
    });
    $(".yesCheck2").click(function(){
        $(".show-content2").toggle();
    });
    $(".yesCheck3").click(function(){
        $(".show-content3").toggle();
    });
    $(".yesCheck4").click(function(){
        $(".show-content4").toggle();
    });
    $(".yesCheck5").click(function(){
        $(".show-content5").toggle();
    });
    $(".yesCheck6").click(function(){
        $(".show-content6").toggle();
    });
    $(".yesCheck7").click(function(){
        $(".show-content7").toggle();
    });
    $(".yesCheck8").click(function(){
        $(".show-content8").toggle();
    });
    $(".yesCheck9").click(function(){
        $(".show-content9").toggle();
    });
    $(".yesCheck10").click(function(){
        $(".show-content10").toggle();
    });
});
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



// Signature


$(document).ready(() => {
    var canvasDiv = document.getElementById('canvasDiv');
    var canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    $("#canvas").attr('height', $("#canvasDiv").outerHeight());
    $("#canvas").attr('width', $("#canvasDiv").width());
    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    
    context = canvas.getContext("2d");
    $('#canvas').mousedown(function(e) {
        var offset = $(this).offset()
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - offset.left, e.pageY - offset.top);
        redraw();
    });

    $('#canvas').mousemove(function(e) {
        if (paint) {
            var offset = $(this).offset()
            //addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            addClick(e.pageX - offset.left, e.pageY - offset.top, true);
            console.log(e.pageX, offset.left, e.pageY, offset.top);
            redraw();
        }
    });

    $('#canvas').mouseup(function(e) {
        paint = false;
    });

    $('#canvas').mouseleave(function(e) {
        paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    $("#reset-btn").click(function() {
        context.clearRect(0, 0, window.innerWidth, window.innerWidth);
        clickX = [];
        clickY = [];
        clickDrag = [];
    });

    $(document).on('click', '#btn-save', function() {
        var mycanvas = document.getElementById('canvas');
        var img = mycanvas.toDataURL("image/png");
        anchor = $("#signature");
        anchor.val(img);
        $("#signatureform").submit();
    });

    var drawing = false;
    var mousePos = {
        x: 0,
        y: 0
    };
    var lastPos = mousePos;

    canvas.addEventListener("touchstart", function(e) {
        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);


    canvas.addEventListener("touchend", function(e) {
        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);


    canvas.addEventListener("touchmove", function(e) {

        var touch = e.touches[0];
        var offset = $('#canvas').offset();
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);



    // Get the position of a touch relative to the canvas
    function getTouchPos(canvasDiv, touchEvent) {
        var rect = canvasDiv.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }


    var elem = document.getElementById("canvas");

    var defaultPrevent = function(e) {
        e.preventDefault();
    }
    elem.addEventListener("touchstart", defaultPrevent);
    elem.addEventListener("touchmove", defaultPrevent);


    function redraw() {
        //
        lastPos = mousePos;
        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }
})
