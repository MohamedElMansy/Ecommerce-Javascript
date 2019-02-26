

function about_fun(){
	
	var about = '<head>'+
	'     <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
	''+
	'     <title>One Page Resume</title>'+
	''+
	'     <style type="text/css">'+
	'        * { margin: 0; padding: 0; }'+
	'        body { font: 16px Helvetica, Sans-Serif; line-height: 24px; background: url(images/noise.jpg); }'+
	'        .clear { clear: both; }'+
	'        #page-wrap { width: 800px; margin: 40px auto 60px; }'+
	'        #pic { float: right; margin: -30px 0 0 0; }'+
	'        h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }'+
	'        h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }'+
	'        h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }'+
	'        p { margin: 0 0 16px 0; }'+
	'        a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }'+
	'        a:hover { border-bottom-style: solid; color: black; }'+
	'        ul { margin: 0 0 32px 17px; }'+
	'        #objective { width: 500px; float: left; }'+
	'        #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }'+
	'        dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }'+
	'        dd { width: 600px; float: right; }'+
	'        dd.clear { float: none; margin: 0; height: 15px; }'+
	'     </style>'+
	'</head>'+
	''+
	'<body>'+
	''+
	'    <div id="page-wrap">'+
	'    '+
	'        <img src="images/man-.jpg" alt="Photo of Cthulu" id="pic" />'+
	'    '+
	'        <div id="contact-info" class="vcard">'+
	'        '+
	'            <!-- Microformats! -->'+
	'        '+
	'            <h1 class="fn">Mohamed Hossam ElMansy</h1>'+
	'        '+
	'            <p>'+
	'                phone: <span class="tel">01144201048</span><br />'+
	'                Email: <a class="email" href="mailto:">eng.mohamedelmansy94@gmail.com</a>'+
	'            </p>'+
	'        </div>'+
	'                '+
	'        <div id="objective">'+
	'            <p>'+
	'                 PHP Developer seeks employment as part of a dynamic software development team.'+
	'            </p>'+
	'        </div>'+
	'        '+
	'        <div class="clear"></div>'+
	'        '+
	'        <dl>'+
	'            <dd class="clear"></dd>'+
	'            '+
	'            <dt>Education</dt>'+
	'            <dd>'+
	'                <h2>Bachelor degree in Computing and control systems</h2>'+
	'                <p><strong>Faculty of Engineering Mansoura University</strong>'+
	'                   <strong>GPA:</strong> Good</p>'+
	'            </dd>'+
	'            '+
	'            <dd class="clear"></dd>'+
	'            '+
	'            <dt>Skills</dt>'+
	'            <dd>'+
	'                <h2>Technologies</h2>'+
	'                <p>Html - Css - Javascript - jquery - ajax - php - oop - laravel framework</p>'+
	'                '+
	'            </dd>'+
	'            '+
	'            '+
	'            <dd class="clear"></dd>'+
	'            '+
	'            <dt>Hobbies</dt>'+
	'            <dd>Sport - programming</dd>'+
	'            '+
	'            <dd class="clear"></dd>'+
	'            '+
	'            <dd class="clear"></dd>'+
	'        </dl>'+
	'        '+
	'        <div class="clear"></div>'+
	'    '+
	'    </div>'+
	''+
	'</body>';
	
	var about_div =document.getElementById('about_id');
	about_div.innerHTML="";
	about_div.insertAdjacentHTML('beforeend',about);
	
	var parent_div =document.getElementById('pro_details');
	var product_div =document.getElementById('product_detail');
	var div_contact =document.getElementById('contactid');
	var cartdiv = document.getElementById('cart');
	
     	cartdiv.style.display = "none";
		parent_div.style.display="none";
		product_div.style.display="none";
		div_contact.style.display="none";
		about_div.style.display="block";
	
	
	
}
