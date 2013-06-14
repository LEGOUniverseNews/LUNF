/*
*  How to use the Dynamic Feed Control, which has pretty UI already made for you!
*  Don't forget to check out the options:
*  http://www.google.com/uds/solutions/dynamicfeed/reference.html
*/

google.load('feeds', '1');

function OnLoad() {
  var feeds = [
    {
      title: 'TheDailyBrick',
      url: 'http://www.thedailybrick.co.uk/blog/feed'
    }
  ];

  var options = {
    stacked : true,
    horizontal : false,
    title : "TheDailyBrick"
  };

  new GFdynamicFeedControl(feeds, 'content', options);
  document.getElementById('content').style.width = "400px";
}

google.setOnLoadCallback(OnLoad);