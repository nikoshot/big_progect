jQuery(document).ready(function() {



    jQuery('input,textarea').focus(function() {
        jQuery(this).data('placeholder', jQuery(this).attr('placeholder'))
        jQuery(this).attr('placeholder', '');
    });
    jQuery('input,textarea').blur(function() {
        jQuery(this).attr('placeholder', jQuery(this).data('placeholder'));
    });

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 30) {
            $("header").addClass('fix');
        } else {
            jQuery("header").removeClass('fix');
        }
    });

    // TABS
    /*jQuery('.btn_tab_1').click(function() {
        jQuery('.btn_tab_1').addClass('active');
        jQuery('.tab_1').show();

        jQuery('.btn_tab_2').removeClass('active');
        jQuery('.btn_tab_3').removeClass('active');
        jQuery('.tab_2').hide();
        jQuery('.tab_3').hide();
    });

    jQuery('.btn_tab_2').click(function() {
        jQuery('.btn_tab_2').addClass('active');
        jQuery('.tab_2').show();

        jQuery('.btn_tab_1').removeClass('active');
        jQuery('.btn_tab_3').removeClass('active');
        jQuery('.tab_1').hide();
        jQuery('.tab_3').hide();
    });

    jQuery('.btn_tab_3').click(function() {
        jQuery('.btn_tab_3').addClass('active');
        jQuery('.tab_3').show();

        jQuery('.btn_tab_1').removeClass('active');
        jQuery('.btn_tab_2').removeClass('active');
        jQuery('.tab_1').hide();
        jQuery('.tab_2').hide();
    });*/


    // TABS





    jQuery('.dropdown, .lang').hover(function() {
        jQuery(this).find('.drop_menu').slideDown(300);
    }, function() {
        var na = jQuery(this);
        na.find('.drop_menu').first().stop(true, true).slideUp(60);
    });


    jQuery('.btn_menu_mob').click(function() {
        jQuery('.menu_mob').addClass('act');

        jQuery('.bglayer_menu').fadeIn();
    });

    jQuery('.close_menu').click(function() {
        jQuery('.menu_mob').removeClass('act');

        jQuery('.bglayer_menu').fadeOut();
    });
    jQuery('.bglayer_menu').click(function() {
        jQuery('.menu_mob').removeClass('act');

        jQuery('.bglayer_menu').fadeOut();
    });

    jQuery('.li_1 .a_mob_menu').click(function() {
        jQuery('.dr_1').slideToggle(300);

        jQuery('.dr_2').slideUp(300);
        jQuery('.dr_3').slideUp(300);
        jQuery('.dr_4').slideUp(300);
    });
    jQuery('.li_2 .a_mob_menu').click(function() {
        jQuery('.dr_2').slideToggle(300);

        jQuery('.dr_1').slideUp(300);
        jQuery('.dr_3').slideUp(300);
        jQuery('.dr_4').slideUp(300);
    });
    jQuery('.li_3 .a_mob_menu').click(function() {
        jQuery('.dr_3').slideToggle(300);

        jQuery('.dr_1').slideUp(300);
        jQuery('.dr_2').slideUp(300);
        jQuery('.dr_4').slideUp(300);
    });
    jQuery('.li_4 .lang_m').click(function() {
        jQuery('.dr_4').slideToggle(300);

        jQuery('.dr_1').slideUp(300);
        jQuery('.dr_2').slideUp(300);
        jQuery('.dr_3').slideUp(300);
    });



    jQuery('.tl_1').click(function() {
        jQuery('.ul_1').slideToggle(300);

        jQuery('.ul_2').slideUp(300);
        jQuery('.ul_3').slideUp(300);
        jQuery('.ul_4').slideUp(300);
        jQuery('.ul_5').slideUp(300);
    });

    jQuery('.tl_2').click(function() {
        jQuery('.ul_2').slideToggle(300);

        jQuery('.ul_1').slideUp(300);
        jQuery('.ul_3').slideUp(300);
        jQuery('.ul_4').slideUp(300);
        jQuery('.ul_5').slideUp(300);
    });
    jQuery('.tl_3').click(function() {
        jQuery('.ul_3').slideToggle(300);

        jQuery('.ul_1').slideUp(300);
        jQuery('.ul_2').slideUp(300);
        jQuery('.ul_4').slideUp(300);
        jQuery('.ul_5').slideUp(300);
    });
    jQuery('.tl_4').click(function() {
        jQuery('.ul_4').slideToggle(300);

        jQuery('.ul_1').slideUp(300);
        jQuery('.ul_2').slideUp(300);
        jQuery('.ul_3').slideUp(300);
        jQuery('.ul_5').slideUp(300);
    });
    jQuery('.tl_5').click(function() {
        jQuery('.ul_5').slideToggle(300);

        jQuery('.ul_1').slideUp(300);
        jQuery('.ul_2').slideUp(300);
        jQuery('.ul_3').slideUp(300);
        jQuery('.ul_4').slideUp(300);
    });



});
function switchTab(id){
        var container = jQuery(event.target).closest('.tab_main ');
        container.find('.btn_tab').removeClass('active');
        container.find('.tab').hide();
        container.find('.btn_tab_' + id).addClass('active');
        container.find('.tab_' + id).show();
    }
function showModal(modal_id) {
    jQuery('#' + modal_id).css('display', 'table').animate({opacity: 1}, 250);
}
function closeModal() {
    var modal =jQuery(event.target).closest('.modal-container');
    modal.animate({opacity: 0}, 250, function () {
        modal.hide();
    });
}
