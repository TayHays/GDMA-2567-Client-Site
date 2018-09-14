// JavaScript Document


		$('.main-gallery').flickity({
		  // options
		  cellAlign: 'left',
		  contain: true
		});


        $( function()
        {
            var targets = $( '[rel~=tooltip]' ),
                target  = false,
                tooltip = false,
                title   = false;
			
            targets.bind( 'mouseenter', function()
            {
                target  = $( this );
                tip     = target.attr( 'title' );
                tooltip = $( '<div id="tooltip"></div>' );
                if( !tip || tip == '' )
                    return false;
                target.removeAttr( 'title' );
                tooltip.css( 'opacity', 0 )
                       .html( tip )
                       .appendTo( 'body' );
				
                var init_tooltip = function()
                {
                    if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                        tooltip.css( 'max-width', $( window ).width() / 2 );
                    else
                        tooltip.css( 'max-width', 340 );
                    var pos_left = target.offset().left + ( target.outerWidth() ) + 20,
                        pos_top  = target.offset().top - tooltip.outerHeight() + 30;
    
                    
                    tooltip.css( { left: pos_left, top: pos_top } )
                           .animate( { top: '+=10', opacity: 1 }, 50 );
                };
                init_tooltip();
                $( window ).resize( init_tooltip );
                var remove_tooltip = function()
                {
                    tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
                    {
                        $( this ).remove();
                    });
                    target.attr( 'title', tip );
                };
				
                target.bind( 'mouseleave', remove_tooltip );
                tooltip.bind( 'click', remove_tooltip );
            });
        });

jQuery(document).ready(function($){
	
	// Smooth scroll home nav
		$('.smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-38
			 }, 2000, function(){
		
			   /* when done, add hash to url
			    (default click behaviour)*/
			   window.location.hash = hash;
			 });
		
		});

	
});