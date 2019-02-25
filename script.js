var runnningIndex = 0;

var data = [{
    content: "Ile to 2 + 2?",
    answers: ["1", "2", "4", "18,5"],
    answer: 3
    
},{
    content: "Ile to 6 + 2?",
    answers: ["8", "4", "4.1", "18,5"],
    answer: 1
    
},{
    content: "Ile to 0 / 0?",
    answers: ["dużo", "bardzo dużo", "super bardzo dużo", "nie"],
    answer: 4
    
},{
    content: "Ile to 0 * 0?",
    answers: ["mało", "0", "nie wiem", "dużo"],
    answer: 2
    
}];

function displaySingleQuestion(tab, index){
   $("#questions").html("<h2>"+tab[index].content+"</h2>"+"<br>"+convertAnswersToString(tab[index].answers)+"<br>");

}

function convertAnswersToString(answers){
                var strAnswers="";
                var inputId="";
                strAnswers+="<div>";
                for(i=0; i<answers.length; i++){
                inputId="option"+(i+1);
                console.log((i+1)+". "+answers[i]);
                strAnswers+="<input type=\"radio\" id=\"" +inputId + "\" /> " + (i+1)+". "+answers[i]+"<br>";
                }
                strAnswers+="</div>";
                return strAnswers;
        }
        
        function wypisz(){

           
            $(data).each(function(){
            
                $("#questions").append("<h2>"+this.content+"</h2>"+"<br>"+convertAnswersToString(this.answers));
            
            });
            
        $("#questions").append(data[2].content);
        
        
        }


        $(document).ready(function(){
            console.log("qlwjn");
            displaySingleQuestion(data, runnningIndex);
            $("#btnNext").click(function(){
            runnningIndex++;
            displaySingleQuestion(data, runnningIndex);
            });
        });

   /*var liczba1 = document.getElementById('pole1');
            var liczba2 = document.getElementById('pole2');
            var button = document.getElementById('button');
            var wynik = document.getElementById('wynik');
            var text = "";
            

            
               // wynik.innerHTML = +liczba1.value + +liczba2.value;
                //wynik.innerHTML = +liczba1.value + +liczba2.value;

                for(i=liczba1; i<=liczba2; i++){
                   text = text + i + " ";
                }
                wynik.innerHTML = text;

                var cars = ["BMW","Audi","Mercedes","Polonez"];
                console.log(cars[2]);
                console.log(cars.length);
                for(i=0; i<=3;i++){
                    console.log(cars[i]);
                }*/