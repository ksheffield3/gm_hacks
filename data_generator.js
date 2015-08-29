function get_hard_brakes()
{
	if(document.getElementById("brake_time").value=="week")
	{
		document.getElementById("total_brakes").innerHTML = 2;
	}
	if(document.getElementById("brake_time").value=="month")
	{
		document.getElementById("total_brakes").innerHTML = 4;
	}
	if(document.getElementById("brake_time").value=="year")
	{
		document.getElementById("total_brakes").innerHTML = 5;
	
	}
}


function get_brake_avg()
{
	if(document.getElementById("brake_avg").value=="week")
	{
		document.getElementById("avg_brake").innerHTML = 0.5;
	}
	if(document.getElementById("brake_avg").value=="month")
	{
		document.getElementById("avg_brake").innerHTML = .02;
	}
	if(document.getElementById("brake_avg").value=="year")
	{
		document.getElementById("avg_brake").innerHTML = 0.1;
	}
}


function get_speed_avg()
{
	if(document.getElementById("speed_avg").value=="week")
	{
		document.getElementById("avg_speed").innerHTML = "35 mph";
	}
	if(document.getElementById("speed_avg").value=="month")
	{
		document.getElementById("avg_speed").innerHTML = "46 mph";
	}
	if(document.getElementById("speed_avg").value=="year")
	{
		document.getElementById("avg_speed").innerHTML = "42 mph";
	}	
}

function get_max_speed()
{
	if(document.getElementById("max_speed").value=="week")
	{
		document.getElementById("speed_max").innerHTML = "62 mph";
	}
	if(document.getElementById("max_speed").value=="month")
	{
		document.getElementById("speed_max").innerHTML = "75 mph";
	}
	if(document.getElementById("max_speed").value=="year")
	{
		document.getElementById("speed_max").innerHTML = "78 mph";
	}	
}


function get_stab_report()
{
	if(document.getElementById("stab_report").value=="week")
	{
		document.getElementById("report_stab").innerHTML = "2 times";
	}
	if(document.getElementById("stab_report").value=="month")
	{
		document.getElementById("report_stab").innerHTML = "2 times";
	}
	if(document.getElementById("stab_report").value=="year")
	{
		document.getElementById("report_stab").innerHTML = "3 times";
	}	
}




function get_distance_driven()
{
	if(document.getElementById("distance_driven").value=="week")
	{
		document.getElementById("drive_distance").innerHTML = "152 miles";
	}
	if(document.getElementById("distance_driven").value=="month")
	{
		document.getElementById("drive_distance").innerHTML = "607 miles";
	}
	if(document.getElementById("distance_driven").value=="year")
	{
		document.getElementById("drive_distance").innerHTML = "7,834 miles";
	}	
}

function get_trips()
{
	if(document.getElementById("num_trips").value=="week")
	{
		document.getElementById("total_trips").innerHTML = "5 trips";
	}
	if(document.getElementById("num_trips").value=="month")
	{
		document.getElementById("total_trips").innerHTML = "23 trips";
	}
	if(document.getElementById("num_trips").value=="year")
	{
		document.getElementById("total_trips").innerHTML = "239 trips";
	}	
}

function get_midnight_trips()
{
	if(document.getElementById("midnight_trips").value=="week")
	{
		document.getElementById("trips_midnight").innerHTML = "0 trips";
	}
	if(document.getElementById("midnight_trips").value=="month")
	{
		document.getElementById("trips_midnight").innerHTML = "0 trips";
	}
	if(document.getElementById("midnight_trips").value=="year")
	{
		document.getElementById("trips_midnight").innerHTML = "2 trips";
	}	
}

function get_fuel_econ()
{
	if(document.getElementById("fuel_econ").value=="week")
	{
		document.getElementById("econ_fuel").innerHTML = "25 miles/gallon";
	}
	if(document.getElementById("fuel_econ").value=="month")
	{
		document.getElementById("econ_fuel").innerHTML = "28 miles/gallon";
	}
	if(document.getElementById("fuel_econ").value=="year")
	{
		document.getElementById("econ_fuel").innerHTML = "26 miles/gallon";
	}	
}







