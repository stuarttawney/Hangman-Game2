Main = {};
Main.WordArray =[];
Main.WordUArray =[];
Main.Lives = 4;
Main.NumberInWordBank = Words.Length;
Main.Word = "test";
Main.WordU = "";
	//Functions start here
	Main.PullWord =Function() {
		Main.Word=Words.List[(Math.floor(Math.random()*Main.NumberInWordBank))];
	}
	Main.SetUnderline =function() {
		Main.PullWord();
			for(i = 0; i<Main.Word.Length; i++){
				Main.WordArray[i]=Main.Word.charAt(i);
				Main.WordUArray[i]="_";
			}
			Main.WordU=Main.WordUArray.join("")
			document.getElementById("WORD").innerHTML = Main.WordU;
			document.getElementById("numLetters").innerHTML = Main.Word.Length;
	}
	Main.UpdateLetter = Function(letter) {
		Main.Changes = 0;
			for(i = 0;i<Main.Word.Length; i++){
				Main.WordArray[i] = Main.Word.charAt(i);
				if(Main.Word.charAt(i) == letter) {
					Main.WordUArray[i] == letter;
					Main.Changes += 1;
				}

			}
			if(Main.Changes < 1) {
				Main.Lives -=1;
				document.getElementById("lives").innerHTML = Main.Lives;
			}
			Main.WordU = Main.WordUArray.join("");
			document.getElementById("WORD").innerHTML = Main.WordU;
			Main.Word1 = Main.WordArray.join("");
			Main.Word2 = Main.WordUArray.join("");
			if(Main.Word1 == Main.Word2) {
				alert("You Won! Loading a New Word");
				window.location.reload;

			}
	}