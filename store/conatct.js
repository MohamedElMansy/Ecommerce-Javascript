

function contact_fun()
{
		var contact_page =  '<div id="colorlib-contact">'+
		'			<div class="container">'+
		'				<div class="row">'+
		'					<div class="col-md-10 col-md-offset-1">'+
		'						<div class="contact-wrap">'+
		'							<h3>Get In Touch</h3>'+
		'							<form name="contact">'+
		'								<div class="row form-group">'+
		'									<div class="col-md-6 padding-bottom">'+
		'										<label for="fname">Name</label>'+
		'										<input type="text" id="name" name="name" class="form-control" placeholder="Your firstname">'+
		'									</div>'+
		'								'+
		'								</div>'+
		''+
		'								<div class="row form-group">'+
		'									<div class="col-md-12">'+
		'										<label for="email">Email</label>'+
		'										<input type="text" id="email" name="email" class="form-control" placeholder="Your email address">'+
		'									</div>'+
		'								</div>'+
			'                           <div class="row form-group">'+
		'									<div class="col-md-12">'+
		'										<label for="subject">Subject</label>'+
		'										<input type="text" id="subject" name="subject" class="form-control" placeholder="Your subject of this message">'+
		'									</div>'+
		'								</div>'+
			'                          <div class="row form-group">'+
		'									<div class="col-md-12">'+
		'										<label for="message">Message</label>'+
		'										<textarea id="message" name="message" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>'+
			'                            </div>'+
		'								</div>'+
		'								<div class="form-group text-center">'+
		'									<input type="submit" value="Send Message" class="btn btn-primary">'+
		'								</div>'+
		'							</form>		'+
		'							'+
		'						</div>'+
		'					</div>'+
		'				</div>'+
		'			</div>'+
		'		</div>';







		var div_contact =document.getElementById('contactid');
		div_contact.innerHTML="";
		div_contact.insertAdjacentHTML('beforeend',contact_page);


		var contact = document.forms['contact'];

		contact.addEventListener('submit',function(e)
												{	
														e.preventDefault();
														var data = { 
														"name":contact['name'].value,
														"email":contact['email'].value,
														"subject":contact['subject'].value,
														"message":contact['message'].value

													}

													var newrequest = new XMLHttpRequest();

													newrequest.open('POST','http://js.vacsera.com/api/final-project');

													newrequest.setRequestHeader("Content-Type", "application/json");
													newrequest.send(JSON.stringify(data));

												});
	
	
	var parent_div=document.getElementById('pro_details');
	var product_div =document.getElementById('product_detail');
	var cartdiv = document.getElementById('cart');
	var about_div =document.getElementById('about_id');

	
		about_div.style.display="none";
     	parent_div.style.display = "none";
		product_div.style.display="none";
		cartdiv.style.display="none";
		div_contact.style.display="block";
  	 

}
