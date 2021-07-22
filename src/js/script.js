function myFunction() {
    // Объявлять переменные
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(document).ready(function(){
    $('.next').click(function() {
        $('.pagination').find('.pageNumber.active').next().addClass('active');
        $('.pagination').find('.pageNumber.active').prev().removeClass('active');
    });
    $('.next').click(function() {
        $('.pagination').find('.pageNumber.active').prev().addClass('active');
        $('.pagination').find('.pageNumber.active').next().removeClass('active');
    });
});

