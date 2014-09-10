var App = App ||{
	O1 : function(ponto){
		var raiz = Math.sqrt(ponto);
		var roundRaiz = Math.round(raiz);
		var x,y;
		if( raiz % roundRaiz == 0){
			if(raiz % 2 == 0){
				x = raiz/-2;
				y = raiz/-2;
			}else{
				x = (raiz/2) - 0.5;
				y = (raiz/2) + 0.5;
			}
		}else{
			var diferenca = ponto - (roundRaiz*roundRaiz);
			if(roundRaiz % 2 == 0){
				x = roundRaiz/-2;
				y = roundRaiz/-2;

				if(diferenca > 0){
					x+=  diferenca;
				}else{
					y-=  diferenca;
				}
			}else{
				x = (roundRaiz/2) - 0.5;
				y = (roundRaiz/2) + 0.5;

				if(diferenca > 0){
					x-=  diferenca;
				}else{
					y+=  diferenca;
				}
			}
		}
		return "P=("+x+","+y+")";
	},
	On: function(ponto){
		var i = 0;
		var resultado;
		while( i++ < ponto){
			resultado = App.O1(i);
		}
		return resultado;
	}
}