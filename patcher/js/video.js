flashembed("example", 
		
	{
		src:'http://cache.lego.com/flash/VideoPlayer/versions/3.21/movieplayer_v.3.21.swf',
		width: 305, 
		height: 240
	},
		
	{config: {   
		autoPlay: false,
		autoBuffering: true,
		controlBarBackgroundColor:'0x000000',
		initialScale: 'scale',
		// LEGO Animation goes here (try to get the best quality and use various themes)
		videoFile: 'http://cache.lego.com/upload/contentTemplating/Starwars2Home2012MovieOverlay/otherfiles/downloadECAE2BC77D45B7DB7646A9F879B50D00.f4v'
                        
	}} 
);
