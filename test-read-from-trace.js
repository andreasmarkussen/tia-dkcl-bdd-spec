console.log("Testing reading from trace");

var host = "localhost",
	username = "scott",
	password = "tiger";
var trace_name = "AMA_BDD_010203"; // Set to what ever matches? get from UI?

var last_trace_no = undefined;
var baseline_trace_no = undefined; // used to mark when to start searching?

function readLinesFromOracleDb(){
	// Read line from Oracle DB Trace table
	var where_clause = ""
	if(last_trace_no === undefined){
		where_clause = " and timestamp > now() - 10 seconds"; // Lst
	}
	else {
		where_clause = " and trace_line_no > " & last_trace_no
	}
	var sql_query = "select * from tia.trace_text where 1 " & where_clause
	var res = do_sql_query(sql_query);
	return ['A','B'];
	/*foreach(r in res){
		// Process and find max val?
	}*/
}

function waitForTraceStatement(trace_search_pattern){
	console.log("Waiting for '"+trace_search_pattern+"'");
	// Read lines to see if is there
	// wait 1 second
	// read lines again.. > Repeat
	// after 30 seconds, die, say it did not happend.
	// if found - return the line
	// if not found ??
	// use the Promise thing to ensure that the events are handled properly. 
}


function timeout(ms) {
 //var d = webdriver.promise.defer();
 return true;
 var d = Promise.defer();
 var start = Date.now();
 setTimeout(function() {
   d.fulfill(Date.now() - start);
 }, ms);
 return d.promise;
}

function printElapsed(ms) {
 console.log('time: ' + ms + ' ms');
}

//timeout(750).then(printElapsed);
//timeout(500).then(printElapsed);

// time: 500 ms
// time: 750 ms
waitForTraceStatement("FDK form loaded");