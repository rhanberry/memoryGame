
//$(newboard);

$(document).ready(function() {
	$("#startbutton").click(newboard);
	

});



var cardimg = [
	'<img src=http://www.xaltgilbert.com/wp-content/uploads/2013/07/Safety-195x195.png>',
	'<img src=http://www.xaltgilbert.com/wp-content/uploads/2013/07/Safety-195x195.png>',

	'<img src= http://www.dieselsc.com/wp/wp-content/uploads/2011/12/bruce-lee-195x195.jpg>',
	'<img src= http://www.dieselsc.com/wp/wp-content/uploads/2011/12/bruce-lee-195x195.jpg>', 

	'<img src= http://plumbingtodayinc.com/wp-content/uploads/2015/08/wastewater-treatment-new-195x195.png>', 
	'<img src= http://plumbingtodayinc.com/wp-content/uploads/2015/08/wastewater-treatment-new-195x195.png>',

	'<img src= http://www.hard2kill26.com/wp/wp-content/uploads/2014/01/injection-195x195.jpg>', 
	'<img src= http://www.hard2kill26.com/wp/wp-content/uploads/2014/01/injection-195x195.jpg>', 

	'<img src= http://images.akamai.steamusercontent.com/ugc/544134303669285770/34CE9586D94264FE66614070AB6DEB6F4B987581/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C128:128&composite-to=*,*%7C128:128&background-color=black>',
	'<img src= http://images.akamai.steamusercontent.com/ugc/544134303669285770/34CE9586D94264FE66614070AB6DEB6F4B987581/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C128:128&composite-to=*,*%7C128:128&background-color=black>', 
	
	'<img src= https://primetimepregnancy.files.wordpress.com/2012/03/wtp-active-cup-mealtime-photo-195x195-pr-038.jpg?w=490>', 
	'<img src= https://primetimepregnancy.files.wordpress.com/2012/03/wtp-active-cup-mealtime-photo-195x195-pr-038.jpg?w=490>', 

	'<img src= http://www.mosalingua.com/en/files/2014/10/3114768397_65d02e933b-195x195.jpg>', 
	'<img src= http://www.mosalingua.com/en/files/2014/10/3114768397_65d02e933b-195x195.jpg>', 

	'<img src= http://leverhawk.com/wp-content/uploads/2013/11/rax-logo-195x195.png>', 
	'<img src= http://leverhawk.com/wp-content/uploads/2013/11/rax-logo-195x195.png>', 

	'<img src= http://cdn.iopscience.com/images/0004-637X/794/2/151/Full/apj501269f14_lr.jpg>', 
	'<img src= http://cdn.iopscience.com/images/0004-637X/794/2/151/Full/apj501269f14_lr.jpg>',

	'<img src= http://cdn.iopscience.com/images/0967-3334/36/3/441/Full/pmea507781f02_online.jpg>', 
	'<img src= http://cdn.iopscience.com/images/0967-3334/36/3/441/Full/pmea507781f02_online.jpg>',

	'<img src= http://www.pittydecals.com/thumbnail.asp?file=assets/images/anonymous_by_zaysancho-d3aqimh.png&maxx=300&maxy=0>', 
	'<img src= http://www.pittydecals.com/thumbnail.asp?file=assets/images/anonymous_by_zaysancho-d3aqimh.png&maxx=300&maxy=0>',

	'<img src= http://www.lns.cornell.edu/~seb/celestia/billboard-1k.jpg>', 
	'<img src= http://www.lns.cornell.edu/~seb/celestia/billboard-1k.jpg>'

	];
var cardval = [];
var cardids = [];
var tiles_flipped = 0;
	
	Array.prototype.cardshuffle = function(){
	    
	    var i = this.length, j, temp;
	    
	    while(--i > 0){
	    
	        j = Math.floor(Math.random() * (i+1));
	        temp = this[j];
	        this[j] = this[i];
	        this[i] = temp;
	   		console.log();
	    }
	};

	//This function dynamically generates a new gameboard

	function newboard(){
		
		tiles_flipped = 0;
		var output = '';
	    


	    cardimg.cardshuffle();
		
			for(var i = 0; i < cardimg.length; i++){
				output += '<div id="tile_'+i+'" onclick="cardflip(this,\''+cardimg[i]+'\')"></div>';
				console.log();	
			}
		
			
			
		
		
		document.getElementById('gameboard').innerHTML = output;
	}
	

	//This function contains the actual game logic, whereupon you flip tiles and the matching ones stay face up

	function cardflip(tile,val){
		if(tile.innerHTML == "" && cardval.length < 2){
			
			tile.style.background = 'white';
			tile.innerHTML = val;
			
			if(cardval.length == 0){
				cardval.push(val);
				cardids.push(tile.id);
			} 
			
			else if(cardval.length == 1){
				cardval.push(val);
				cardids.push(tile.id);
				
				if(cardval[0] == cardval[1]){
					tiles_flipped += 2;
					// Clear both arrays
					cardval = [];
	            	cardids = [];
					// Check to see if the whole board is cleared
					
					if(tiles_flipped == cardimg.length){
						alert("YOU WON!!! GOOD JOB!");
						document.getElementById('gameboard').innerHTML = "";
						newboard();
					}
				} 
				
				//This loop flips the tiles back if there isn't a match

				else {
					function flipback(){
					    // Flip the 2 tiles back over
					    var tile_1 = document.getElementById(cardids[0]);
					    var tile_2 = document.getElementById(cardids[1]);
					    tile_1.style.background = 'url(http://img1.wikia.nocookie.net/__cb20100502232308/adventuretimewithfinnandjake/images/e/e4/At_100x100_iconjake.jpg) center no-repeat red';
	            	    tile_1.innerHTML = "";
					    tile_2.style.background = 'url(http://img1.wikia.nocookie.net/__cb20100502232308/adventuretimewithfinnandjake/images/e/e4/At_100x100_iconjake.jpg) center no-repeat red';
	            	    tile_2.innerHTML = "";
					    // Clear both arrays
					    cardval = [];
	            	    cardids = [];
					}
					setTimeout(flipback, 700);
				}
			}
		}

	console.log();
	}
//window.addEventListener("load", newboard());
console.log('loaded');