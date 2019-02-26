var myrequest= new XMLHttpRequest();
var products = new Array;
var pro;
var count =0;
myrequest.open('get','https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json');
myrequest.send();
myrequest.onreadystatechange =function()
{
	if(this.readyState==4)
		{
			

			pro =JSON.parse(this.responseText);
				
	//			console.log(products.ProductCollection);
			products=pro.ProductCollection;
			
			for(var i =0 ;i< products.length;i++)
				{
					products[i].count=1;
				}
//		console.log(products);
			
			for(var i =0 ;i< products.length;i++)
				{
					
					
					//cart
					var span_obj= document.createElement('span');
					span_obj.classList.add('addtocart');
					
					var a_cart_obj= document.createElement("a");
					a_cart_obj.setAttribute('onclick','fun_detail(products['+i+'])');
					
					
					var i_obj= document.createElement('i');
					i_obj.classList.add('icon-shopping-cart');
					
					a_cart_obj.appendChild(i_obj);
					span_obj.appendChild(a_cart_obj);
					
					var p_1=document.createElement('p');
					p_1.appendChild(span_obj);
					
					
					var cart_div=document.createElement('div');
					cart_div.classList.add('cart');
					
					cart_div.appendChild(p_1);
					
							
					// div which contains img of the product
					var img_obj= document.createElement('div');
					img_obj.classList.add('product-img');
					img_obj.setAttribute('style','background-image: url( '+products[i].ProductPicUrl+')');

					
					
					img_obj.appendChild(cart_div);
					
					var pro_entry= document.createElement('div');
					pro_entry.classList.add('product-entry');
					
					pro_entry.appendChild(img_obj);
					
							
					//create elements to write price and name of product
					var div_pro=document.createElement('div');
					div_pro.classList.add('desc');
					
					var h_name_obj = document.createElement("h3");
					h_name_obj.innerHTML=products[i].Name;
								

					var a_name_obj = document.createElement("a");
					a_name_obj.setAttribute('onclick','fun_display(products['+i+'])');
					a_name_obj.href="#";
					
					var p2=document.createElement('p');
					p2.classList.add('price');
					
					var span_2=document.createElement('span');
					var span2_txt=document.createTextNode(products[i].Price+' $');
					span_2.appendChild(span2_txt);
					p2.appendChild(span_2);
					

					a_name_obj.appendChild(h_name_obj);
					div_pro.appendChild(a_name_obj);
					div_pro.appendChild(p2);
//					div.append(h_name_obj);

					pro_entry.appendChild(div_pro);
					
//					var price_p=document.createElement('p');
//					var p_text=document.createTextNode(products[i].Price+' $');
//					price_p.classList.add('price');
//					price_p.appendChild(p_text);
//					div_pro.appendChild(price_p);

					var div_class = document.createElement('div');
					div_class.classList.add('col-md-3');
					div_class.classList.add('text-center');
					div_class.appendChild(pro_entry);
					
							
					var first_div=document.getElementById('pro_details');
					first_div.append(div_class);
					
					
							
				}			
		}
//	else{
//		
//		alert("you are offline! try later");
//	}
		
}

// home in the nav bar
var pro_home=document.getElementById('pro_details');
var product_div =document.getElementById('product_detail');
var cartdiv = document.getElementById('cart');
var div_contact =document.getElementById('contactid');
	var about_div =document.getElementById('about_id');
				
					function home_fun()
						{		
							
								about_div.style.display="block";
								div_contact.style.display = "none";
								product_div.style.display="none";
								cartdiv.style.display = "none"; 
								pro_home.style.display="block";	
								
							
							
							
						}

// set in local storage

var arr = new Array;
var arr_product = new Array;

var idarr= new Array;

var c=0;
function fun_detail(storage,c)
{
	
//	console.log(c);
	
	if(typeof(c) == 'undefined')
		{ 
			c =0;
		}
	
	var obj_product =localStorage.getItem('product');
	if(obj_product)
		{
			
			arr=[];
			var json_obj=JSON.parse(obj_product);
			
//			console.log(json_obj);
				for (var key in json_obj) 
				{
					arr.push(json_obj[key]);
					idarr.push(json_obj[key].ProductId);
				}

//				console.log(arr);
				if (idarr.includes(storage.ProductId))
					{
						
			//			console.log("ex");
						var id=storage.ProductId;
						for(var i=0;i<arr.length;i++)
						{
//							var in_id=arr_product.indexOf(id);
								if(id==arr[i].ProductId)
									{	
//										console.log(c);
										if(c == 0)
										{
											arr[i].count= 1+ arr[i].count;
											//console.log(arr[i]);
										} 
										else
										{
//											console.log((arr[i].count));
//											console.log(typeof(c));
											arr[i].count= parseInt(c)  + arr[i].count ;
											//console.log(arr[i].count);
										}
										
									}


						}

					}
				else
					{ 
						
						if(c==0)
							{
								storage.count=1;
							}
						else
							{
								storage.count= c ;
							}
						
	//					arr.push(arr_product);
//						console.log(storage);
						arr.push(storage);

					}
		}
	
	else{
		
		
				var json_obj=JSON.parse(obj_product);


				for (var key in json_obj) 
				{
					arr.push(json_obj[key]);
					idarr.push(json_obj[key].ProductId);
				}
					
						if(c==0)
							{
								storage.count=1;
							}
						else
							{
								storage.count= c ;
							}
					
					arr.push(storage);
		

				}
	localStorage.setItem('product',JSON.stringify(arr));
				

	
	
}



