// All source code Copyright 2013 Cope Consultancy Services. All rights reserved


function fetchValues(_args) {
	// returns a list of prices from an array of stocks
	
	if (_args.stocks.length > 0) {
		var stocks = new String;
		for (i=0; i< _args.stocks.length; i++) {
			stocks += ',"'+_args.stocks[i]+'"';
		}
		// lose the first character ','
		stocks = stocks.substr(1);
		
		var theYql = 'SELECT * from yahoo.finance.quotes WHERE symbol IN (' + stocks + ')';
		console.log(theYql);
		// send the query off to yahoo
		Ti.Yahoo.yql(theYql, function(e) {
			Ti.API.info(e.data);
			
			return e.data;
		});
	}
};

function populateTable(_args) {
	
};
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create base root window
//

var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

var stockList = Ti.UI.createTableView({});

fetchValues({stocks:['APPL']});

win1.add(stockList);
win1.open();
