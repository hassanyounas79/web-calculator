let string = "0";
let Mplus = 0;
let Mminus = 0;
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        innerhtml = e.target.innerHTML;
        if (innerhtml == "C") {
            string = "0";

        }
        else if (innerhtml == "M+") {
            if (Mplus == 0) {
                Mplus = eval(string);

            }
            else {
                Mplus = Mplus + eval(string);
            }
            string = Mplus;


        }
        else if (innerhtml == "M-") {
            if (Mminus == 0) {
                Mminus = eval(string);

            }
            else {
                Mminus = Mminus - eval(string);
            }
            string = Mminus;


        }
        else if (innerhtml == "=") {
            string = eval(string);
        }
        else {
            if (string == "0") {
                if (innerhtml == "*" || innerhtml == "/" || innerhtml == "-" || innerhtml == "+") {

                }
                else {
                    string = e.target.innerHTML;
                }

            }
            else {
                string = string + e.target.innerHTML;
            }
        }
        document.querySelector(".area").value = string;

    })
});
