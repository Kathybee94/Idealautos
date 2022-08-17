/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var source= new Array();

 source["None"]=0;
 source["Lagos"]=100;
 source["Others"]=160;
 source["North"]=300;

var destination= new Array();
 destination["None"]=0;
 destination["Lagos"]=100;
 destination["Others"]=160;
 destination["North"]=300;

function getServicesType()
{
    var servicesType=0;
    var theForm = document.forms["calculationform"];
    var selectedServicesType = theForm.elements["source"];
     
    servicesType = source[selectedServicesType.value];

    return servicesType;
}

function getGoodsType()
{
    var goodsType=0;
    var theForm = document.forms["calculationform"];
    var selectedGoodsType = theForm.elements["destination"];
     
    goodsType = destination[selectedGoodsType.value];

    return goodsType;
}

function getExpressDelivery()
{
    var expressprice=0;
    var theForm = document.forms["calculationform"];
    var includeExpress = theForm.elements["expressdelivery"];

    if(includeExpress.checked==true)
    {
        expressprice=50;
    }
    return expressprice;
}

function getInsurance()
{
    var insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeInsurance = theForm.elements["insurance"];

    if(includeInsurance.checked==true)
    {
        insuranceprice=75;
    }
    return insuranceprice;
}

function getPackaging()
{
    var packagingprice=0;
    var theForm = document.forms["calculationform"];
    var includePackaging = theForm.elements["packaging"];

    if(includePackaging.checked==true)
    {
        packagingprice=30;
    }
    return packagingprice;
}

function getFragileYes()
{
    var fragileyes=0;
    var theForm = document.forms["calculationform"];
    var includeFragile = theForm.elements["fragileyes"];

    if(includeFragile.checked==true)
    {
        fragileyes=30;
    }
    return fragileyes;
}
 
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getServicesType() + getGoodsType() + getExpressDelivery() + getInsurance() + getPackaging() + getFragileYes();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price = ₦"+ServicesPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
}