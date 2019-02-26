
var navbar = '<nav class="colorlib-nav" role="navigation">'+
'			<div class="top-menu">'+
'				<div class="container">'+
'					<div class="row">'+
'						<div class="col-xs-2">'+
'							<div id="colorlib-logo">Store</div>'+
'						</div>'+
'						<div class="col-xs-10 text-right menu-1">'+
'							<ul>'+
'								<li><a onclick="home_fun()" href="#">Home</a></li>'+
'								<li><a href="#" onclick="about_fun()">About</a></li>'+
'								<li ><a href="#" onclick="contact_fun()">Contact</a></li>'+
'								<li ><a  href="#" onclick="cart_fun()"><i class="icon-shopping-cart"></i> Cart</a></li>'+
'							</ul>'+
'						</div>'+
'					</div>'+
'				</div>'+
'			</div>'+
'		</nav>';

var bar =document.getElementById('page');
bar.insertAdjacentHTML('afterbegin',navbar);
	
