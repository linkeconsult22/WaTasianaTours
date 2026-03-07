    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js"
    
        $('#search-btn').on('click', function (e) { e.preventDefault(); $('#search-dd').toggleClass('open'); });
        $(document).on('click', function (e) { if (!$(e.target).closest('.search-wrap').length) $('#search-dd').removeClass('open'); });
        $('#nav-toggle').on('click', function () { var $n = $('#mobile-nav'); $n.css('display') === 'none' ? $n.show() : $n.hide(); });
    