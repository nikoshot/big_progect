jQuery(document).ready(function() {



    // TABS
    jQuery('.btn_wt_1').click(function() {
        jQuery('.btn_wt_1').addClass('active');
        jQuery('.tab_w_1').show();

        jQuery('.btn_wt_2').removeClass('active');
        jQuery('.btn_wt_3').removeClass('active');
        jQuery('.btn_wt_4').removeClass('active');
        jQuery('.tab_w_2').hide();
        jQuery('.tab_w_3').hide();
        jQuery('.tab_w_4').hide();
    });

    jQuery('.btn_wt_2').click(function() {
        jQuery('.btn_wt_2').addClass('active');
        jQuery('.tab_w_2').show();

        jQuery('.btn_wt_1').removeClass('active');
        jQuery('.btn_wt_3').removeClass('active');
        jQuery('.btn_wt_4').removeClass('active');
        jQuery('.tab_w_1').hide();
        jQuery('.tab_w_3').hide();
        jQuery('.tab_w_4').hide();
    });

    jQuery('.btn_wt_3').click(function() {
        jQuery('.btn_wt_3').addClass('active');
        jQuery('.tab_w_3').show();

        jQuery('.btn_wt_1').removeClass('active');
        jQuery('.btn_wt_2').removeClass('active');
        jQuery('.btn_wt_4').removeClass('active');
        jQuery('.tab_w_1').hide();
        jQuery('.tab_w_2').hide();
        jQuery('.tab_w_4').hide();
    });

    jQuery('.btn_wt_4').click(function() {
        jQuery('.btn_wt_4').addClass('active');
        jQuery('.tab_w_4').show();

        jQuery('.btn_wt_1').removeClass('active');
        jQuery('.btn_wt_2').removeClass('active');
        jQuery('.btn_wt_3').removeClass('active');
        jQuery('.tab_w_1').hide();
        jQuery('.tab_w_2').hide();
        jQuery('.tab_w_3').hide();
    });




});
