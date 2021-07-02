 // function addTwoNumbersPopup(number1, number2 )
            // {
            //     var addresult = addTwoNumbers(number1, number2)
            //     alert("Answer:" + addresult)
            // }
            // function substractTwoNumbersPopup(number1, number2)
            // {
            //     var substractresult = substractTwoNumbers(number1, number2 )
            //     alert("Answer:" + substractresult)
            // }
            // function multiplyTwoNumbersPopup(number1, number2)
            // {
            //     var multiplyresult = multiplyTwoNumbers(number1, number2 )
            //     alert("Answer:" + multiplyresult)
            // }
            // function divideTwoNumbersPopup(number1, number2)
            // {
            //     var divideresult = divideTwoNumbers(number1, number2 )
            //     alert("Answer:" + divideresult)
            // }

            function addTwoNumbers(number1, number2 )
            
            {
                var addresult = parseInt(number1) + parseInt(number2)
                // console.log("Result of Add " + addresult)
                return addresult
            }
            function showAddNumberResultOnPage(number1, number2)
            {
                var addResult = addTwoNumbers(number1, number2)
                    // console.log("value returned is " + addResult)
                if(addResult>= 1400)
                {
                    document.getElementById("result").innerHTML = "Score = " + addResult + "  You Passed  ";

                }
                else if(addResult<=900)
                {
                    document.getElementById("result").innerHTML = "Score = " + addResult + "  Study Doofus ";   
                }
                else {
                    document.getElementById("result").innerHTML = "Score = " + addResult;
                } 
                    
            }
            function substractTwoNumbers(number1, number2 )
            
            {
                var substractresult = parseInt(number1) - parseInt(number2)
                console.log("Result of Substraction " + substractresult)
                return substractresult
            }
            function showSubstractNumberResultOnPage(number1, number2)
            {
                var substractResult = substractTwoNumbers(number1, number2)
                console.log("value returned is " + substractResult)
                document.getElementById("result").innerHTML = "Result of Substraction = " + substractResult;
            }
            function multiplyTwoNumbers(number1, number2 )
            
            {
                var multiplyresult = parseInt(number1) * parseInt(number2)
                console.log("Result of Multiplication " + multiplyresult)
                return multiplyresult
            }
            function showMultiplyNumberResultOnPage(number1, number2)
            {
                var multiplyResult = multiplyTwoNumbers(number1, number2)
                console.log("value returned is " + multiplyResult)
                document.getElementById("result").innerHTML = "Result of Multiplication = " + multiplyResult;
            }
            function divideTwoNumbers(number1, number2 )
            
            {
                var divideresult = parseInt(number1) / parseInt(number2)
                console.log("Result of Division " + divideresult)
                return divideresult
            }
            function showDivideNumberResultOnPage(number1, number2)
            {
                var divideResult;
                if(number2==0)
                {
                    document.getElementById("result").innerHTML = "Denominator(number 2) Can Not be 0  ";  
                }
                else {
                    divideResult = divideTwoNumbers(number1, number2)
                    console.log("value returned is " + divideResult)
                    document.getElementById("result").innerHTML = "Result of Division = " + divideResult;
                }
                
            }