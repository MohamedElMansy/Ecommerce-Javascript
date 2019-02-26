

function cart_fun()
{
	
	var tot=0;
	var cartdiv = document.getElementById('cart');
	cartdiv.innerHTML="";
	
	var pro_in_storage= localStorage.getItem('product');

	var json_cart=JSON.parse(pro_in_storage);
	var cart_pro = new Array;
	
	for (var key in json_cart) 
	{
		cart_pro.push(json_cart[key]);
	}
	//console.log(cart_pro);
	
	var div1 =document.createElement('div');
	div1.classList.add("row");
	div1.classList.add("row-pb-md");
	
	var div2=document.createElement('div');
	div2.classList.add("col-md-101");
	div2.classList.add("col-md-offset-1");
	
	var div3=document.createElement('div');
	div3.classList.add("product-name");
	
	var div4=document.createElement('div');
	div4.classList.add('one-forth');
	div4.classList.add('text-center');
	
	var span1=document.createElement('span');
	var span1_txt= document.createTextNode('Product Details');
	
	var div5=document.createElement('div');
	div5.classList.add('one-eight');
	div5.classList.add('text-center');
	
	var span2=document.createElement('span');
	var span2_txt= document.createTextNode('Price');
	
	var div6=document.createElement('div');
	div6.classList.add('one-eight');
	div6.classList.add('text-center');
	
	var span3=document.createElement('span');
	var span3_txt= document.createTextNode('Quantity');
	
	var div7=document.createElement('div');
	div7.classList.add('one-eight');
	div7.classList.add('text-center');
	
	var span4=document.createElement('span');
	var span4_txt= document.createTextNode('Total');


	span1.appendChild(span1_txt);
	span2.appendChild(span2_txt);
	span3.appendChild(span3_txt);
	span4.appendChild(span4_txt);

	div7.appendChild(span4);
	div6.appendChild(span3);
	div5.appendChild(span2);
	div4.appendChild(span1);
	
	div3.appendChild(div4);
	div3.appendChild(div5);
	div3.appendChild(div6);
	div3.appendChild(div7);

	
	div2.appendChild(div3);
	
	
	for(var i = 0;i<cart_pro.length;i++)
		
		{
			
			var div9 =document.createElement('div');
			div9.classList.add('product-cart');

			var div10=document.createElement('div');
			div10.classList.add("one-forth");

			var div11=document.createElement('div');
			div11.classList.add('product-img');
			div11.setAttribute('style',"background-image: url("+cart_pro[i].ProductPicUrl+");");

			var div12=document.createElement('div');
			div12.classList.add('display-tc');

			var h1= document.createElement('h3');
			var h1_txt= document.createTextNode(cart_pro[i].Name);
			
			h1.appendChild(h1_txt);
			div12.appendChild(h1);
			div10.appendChild(div11);
			div10.appendChild(div12);

			var div13=document.createElement('div');
			div13.classList.add('one-eight');
			div13.classList.add('text-center');

			var div14=document.createElement('div');
			div14.classList.add('display-tc');

			var span6=document.createElement('span');
			span6.classList.add('price');
			var span6_txt=document.createTextNode(cart_pro[i].Price);
			
			span6.appendChild(span6_txt);
			div14.appendChild(span6);
			div13.appendChild(div14);
			
			var div15=document.createElement('div');
			div15.classList.add('one-eight');
			div15.classList.add('text-center');

			var div16=document.createElement('div');
			div16.classList.add('display-tc');
			
			var input1=document.createElement('input');
			input1.classList.add('form-control');
			input1.classList.add('input-number');
			input1.classList.add('text-center');

			input1.setAttribute('type','text');
			input1.setAttribute('id','quantity');
			input1.setAttribute('name','quantity');
			input1.setAttribute('value',cart_pro[i].count);
			input1.setAttribute('min','1');
			input1.setAttribute('max',cart_pro[i].Quantity);
			
			div16.appendChild(input1);
			div15.append(div16);


			var div17=document.createElement('div');
			div17.classList.add('one-eight');
			div17.classList.add('text-center');

			var div18=document.createElement('div');
			div18.classList.add('display-tc');

			var span7=document.createElement('span');
			span7.classList.add('price');
			var span7_txt=document.createTextNode((cart_pro[i].Price)*(cart_pro[i].count));
			tot=tot+(cart_pro[i].Price)*(cart_pro[i].count);
			span7.appendChild(span7_txt);
			div18.appendChild(span7);
			div17.appendChild(div18);


			
			
			div9.appendChild(div10);
			div9.appendChild(div13);
			div9.appendChild(div15);
			div9.appendChild(div17);
//			div9.appendChild(div19);
			
			div2.appendChild(div9);
		}
	

	
	div1.appendChild(div2);

	cartdiv.append(div1);
	
	
	var total_div = '<div class="row">'+
	'					<div class="col-md-10 col-md-offset-1">'+
	'						<div class="total-wrap">'+
	'							<div class="row">'+
	'								<div class="col-md-6 col-md-push-7 text-center">'+
	'									<div class="total">'+
	'										<div class="grand-total">'+
	'											<p><span><strong>Total:</strong></span><span>'+tot+' $'+'</span></p>'+
	'										</div>'+
	'									</div>'+
	'								</div>'+
	'							</div>'+
	'						</div>'+
	'					</div>'+
	'				</div>';

	cartdiv.insertAdjacentHTML('beforeend',total_div);
	

	var parent_div =document.getElementById('pro_details');
	var product_div =document.getElementById('product_detail');
	var div_contact =document.getElementById('contactid');
	var about_div =document.getElementById('about_id');
				
	
		about_div.style.display="none";
     	cartdiv.style.display = "block";
		parent_div.style.display="none";
		product_div.style.display="none";
		div_contact.style.display="none";

}
	
