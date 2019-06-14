/**
 * Donal Moloney
 * Lab2
 * SE 2840
 * Dr.Hornick
 * 12/14/17
 */
class CoinFlipper {

    /**
     * Static function that runs the class when the button is clicked
     */
    static onLoad(){
        let coinFlipper = new CoinFlipper();
        var x = document.getElementById("myBtn");
        x.onclick = function(){
            coinFlipper.init();
    };
    }

    /**
     * Gathers user input, controls execution, and measures how long it takes to execute.
     */
    init() {
        this.max = 0;
        this.frequency = [];
        let stringNumCoins = "invalidNumCoins";
        let stringNumRep = "invalidNumThrows";
        this.validNumCoins;
        this.validNumRep;
        document.getElementById("totalTime").innerHTML = "";
        document.getElementById("invalidNumCoins").innerHTML = "<p style='color: white'></p>";
        document.getElementById("invalidNumThrows").innerHTML = "<p style='color: white'></p>";
        document.getElementById("output").innerHTML = "";
                this.numberOfCoins = document.getElementById("input1").value;
                this.numberOfRepetitions = document.getElementById("input2").value;
                this.validNumRep = this.validateInput(this.numberOfRepetitions, stringNumRep);
                this.validNumCoins = this.validateInput(this.numberOfCoins, stringNumCoins)
        if(this.validNumCoins === true && this.validNumRep === true){
            this.length = this.numberOfCoins + 1;
            for (var i = 0; i < this.length; i++) {
                this.frequency.push(0);
            }
            var start = new Date();
            start.getTime();
            this.flipCoin();
            var stop = new Date();
            stop.getTime();
            var totalTime = stop - start;
            this.printHistogram();
            document.getElementById("totalTime").innerHTML = "Coin flipper Time: " + totalTime + " ms ";
        }
    }


        /**
         * This method checks to see if the user inputted values are correct, if the input is incorrect it throws an error.
         * @param input - the user input
         * @returns {boolean} returns true if input is valid
         */
        validateInput(input, name)
        {
            //todo add input also make sure that width is width is correct
           if (input  === "") {
               document.getElementById(name).innerHTML =  "ERR: input can not be blank, must be non-dec. number";
               document.getElementById(name).style.color = "red";
               document.getElementById(name).style.width = "300px";
           } else {
               input = parseFloat(input);
               if (input < 1) {
                   document.getElementById(name).innerHTML = "ERR: input must be a non-dec. number at least one";
                   document.getElementById(name).style.color = "red";
                   document.getElementById(name).style.width = "300px";
               }else if (name === "invalidNumCoins" && input > 10) {
                   document.getElementById(name).innerHTML = "ERR: input must be a non-dec. number less than 10";
                   document.getElementById(name).style.color = "red";
                   document.getElementById(name).style.width = "300px";
                   document.get
               } else if (isNaN(input) === true) {
                   document.getElementById(name).innerHTML = "ERR: input must be a number";
                   document.getElementById(name).style.color = "red";
                   document.getElementById(name).style.width = "300px";

               } else if (isFinite(input) === false) {
                   document.getElementById(name).innerHTML = " ERR: input must be a finite number";
                   document.getElementById(name).style.color = "red";
                   document.getElementById(name).style.width = "300px";
               } else if (Number.isInteger(input) === false) {
                   document.getElementById(name).innerHTML = "ERR: input must not be a fraction";
                   document.getElementById(name).style.color = "red";
                   document.getElementById(name).style.width = "300px";
               } else {
                   return true;
               }
           }
        }

        /**
         * This method flips a specified number of coins a specified number of times,
         * and gathers the number of times a certain number of heads occurred in each flip into the frequency[] array.
         */
        flipCoin(){
            for (var i = 0; i < this.numberOfRepetitions; i++) {
                var heads = this.singleFlip();
                this.frequency[heads]++;

            }
        }

        /**
         *This method flips a specified number of coins and returns the number heads that occurred in the flip.
         * It makes use of a random number generator to randomly generate heads or tails for each coin flipped.
         * @return the number of heads that occurred in the flip
         */
        singleFlip(){
            var heads = 0;
            for (var i = 0; i < this.numberOfCoins; i++) {
                heads += Math.floor(Math.random() * 2);
            }
            return heads;
        }

        /**
         * This method prints a histogram of the number of heads that occurred for a specified number of flips
         */
        printHistogram()
        {
            let fractionOfReps =0;
            let numOfAsterisks = 0;
            let string = "";
            document.getElementsByName("outPutHeader").innerHTML = "Number of time each head count occurred" +
                this.numberOfRepetitions + " flips of " + this.numberOfCoins + "coins";
            this.max = this.findMax(this.numberOfCoins,this.numberOfRepetitions,this.frequency);
            for (var heads = 0; heads <= this.numberOfCoins; heads++) {
                fractionOfReps = this.frequency[heads] / this.numberOfRepetitions;
                numOfAsterisks = Math.round(fractionOfReps * 100);
                //todo need to change the width
                string += "<tr class='headsOutPut'><th>" + heads + "</th>" + "<th class='frequencyOutPut'>" + this.frequency[heads] + "</th><th class='progress' width="+this.max+";>" +
                    "<progress class='progressBar' value=" + numOfAsterisks+" max=" + this.max +"></th></tr><br>";

            }
            document.getElementById("output").innerHTML = string
            document.getElementById("output").innerHTML = string

        }

    findMax(numOfCoins, numOfRepetitions, freq) {
        this.tempMax = 0;
        this.tempFOR;
        this.tempHeads;
        this.tempNumAst;
        for (this.tempHeads = 0; this.tempHeads <= numOfCoins; this.tempHeads++) {
            this.tempFOR = freq[this.tempHeads] / numOfRepetitions;
            this.tempNumAst = Math.round(this.tempFOR * 100);
            if(this.tempNumAst > this.tempMax){
                this.tempMax = this.tempNumAst;
            }
        }
        return this.tempMax;
    }
    }