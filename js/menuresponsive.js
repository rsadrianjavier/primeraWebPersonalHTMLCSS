Menu_Activated = false;

function ActivarMenu(){
	
		if(Menu_Activated==false){
			
			altura = -160;
			move = setInterval(function(){
				altura+=4;

				if (altura == 0) clearInterval(move);

				document.getElementById("main").style.top 
					= altura + "px";
			},1)

			Menu_Activated = true;

		} else{

			altura = 0;

			move = setInterval(function(){
				altura+=4;

				if (altura == 160) clearInterval(move);
			
				document.getElementById("main").style.top = "-" + altura + "px";
			},1)
			
			Menu_Activated = false;
			
		}
	
	}