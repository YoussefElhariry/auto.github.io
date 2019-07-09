//function to copy the same shipping name and zip to the billing details.
function billingFunction(){

	if(document.getElementById('same').checked)
	{
		var name=document.getElementById("shippingName").value;   
		var zip=document.getElementById("shippingZip").value;     

		document.getElementById("billingName").value = name;  
		document.getElementById("billingZip").value = zip;
	}

	else
	{	document.getElementById("billingName").value = "";  
		document.getElementById("billingZip").value = "";
	}
}


