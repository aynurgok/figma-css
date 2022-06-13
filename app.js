document.addEventListener('DOMContentLoaded', function() {
    let icon = document.querySelectorAll('.left_icon');
    icon.forEach(function(elements) {
        elements.addEventListener('click', function() {
            let btnActive = document.querySelector('.btnActive');
            if(this != btnActive) {
                btnActive.classList.remove('btnActive');
                btnActive.parentElement.classList.remove('active');
                this.classList.add('btnActive');
                this.parentElement.classList.add('active');
            }
        })
    })
})

/* 
    this keyword
        function() {} => kendisini gösterir
        () => {} window objesini gösterir
*/