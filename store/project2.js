//after click on product name and goto product detail page
var pro_detail=new Array;
function fun_display(pro_detail)
{

			var product_detail = '<div class="colorlib-shop">'+
		'			<div class="container">'+
		'				<div class="row row-pb-lg">'+
		'					<div class="col-md-10 col-md-offset-1">'+
		'						<div class="product-detail-wrap">'+
		'							<div class="row">'+
		'								<div class="col-md-5">'+
		'									<div class="product-entry">'+
		'										<div class="product-img" style="background-image: url('+pro_detail.ProductPicUrl+');">'+
		'											'+
		'										</div>'+
		'									</div>'+
		'								</div>'+
		'								<div class="col-md-7">'+
		'									<div class="desc">'+
		'										<h3>'+pro_detail.Name+'</h3>'+
		'										<p class="price">'+
		'											<span>'+pro_detail.Price+' $</span> '+
		'											'+
		'										</p>'+
		'										<p>'+pro_detail.Description+'.</p>'+
		'										'+
		'										'+
		'										<div class="row row-pb-sm">'+
		'											<div class="col-md-4">'+
		'                                    <div class="input-group">'+
		'                                    	<span class="input-group-btn">'+
		'                                       	<button type="button" id="min_btn" class="quantity-left-minus btn"  data-type="minus" data-field="">'+
		'                                          <i class="icon-minus2"></i>'+
		'                                       	</button>'+
		'                                   		</span>'+
		'                                    	<input type="text" id="pro_q" name="quantity" class="form-control input-number" value="1" min="1" max="'+pro_detail.Quantity+'">'+
		'                                    	<span class="input-group-btn">'+
		'                                       	<button type="button" id="max_btn" class="quantity-right-plus btn" data-type="plus" data-field="">'+
		'                                            <i class="icon-plus2"></i>'+
		'                                        </button>'+
		'                                    	</span>'+
		'                                 	</div>'+
		'                        			</div>'+
		'										</div>'+
		'										<p><a id ="id_a" class="btn btn-primary btn-addtocart "><i class="icon-shopping-cart"></i> Add to Cart</a></p>'+
		'									</div>'+
		'								</div>'+
		'							</div>'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+
		'		</div>';
	
	
	var product_div=document.getElementById("product_detail");
		product_div.innerHTML="";
		product_div.insertAdjacentHTML('beforeend',product_detail);
	

// ===============quantity min , max btn==========
	var q_input=document.getElementById('pro_q');
	var max_count=q_input.getAttribute('max');
	var min_count=q_input.getAttribute('min');
	var curr_qu= q_input.getAttribute('value');
	
	var btn_min = document.getElementById('min_btn');
	btn_min.addEventListener('click',function(){
		
		if((curr_qu -1) >= min_count)
			{
				q_input.setAttribute('value',(--curr_qu));
			}
		else
				{
					alert('not avalible');
				}
		
	});
	
	
	var btn_max = document.getElementById('max_btn');
	btn_max.addEventListener('click',function(){
	
		if(( curr_qu+1) <= max_count)
			{
				q_input.setAttribute('value',( ++curr_qu));
			}
		else
			{
					alert('not avalible quantity');
			}
			
		
	});
	
//========= cart btn===============	
	var a_id = document.getElementById("id_a")
	
	a_id.addEventListener('click',function(){
//		console.log(curr_qu);
		fun_detail(pro_detail,curr_qu);
		cart_fun();
	})

	
	
//====================================
	var parent_div=document.getElementById('pro_details');
	var div_contact =document.getElementById('contactid');
	var about_div =document.getElementById('about_id');
				
	
		about_div.style.display="none";
		div_contact.style.display = "none";
     	parent_div.style.display = "none";
		product_div.style.display="block";
  	 

}
