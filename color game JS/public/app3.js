alert("Wellcome to color game !");

let round;
let round_count = 0;
let try_count = 0;
let wrong = 0;
let Color = Math.floor(Math.random() * 10);

const GetRound = () => {
    round = $("#round").val();
    round_count = 0;
    if (Number(round) && round != 0) {
        $("#anwser").val("");;
        $("#onstart").addClass("d-none");
        $("#onplay").removeClass("d-none");
    }
    else {
        alert(`you can't play ${round} round`);
        alert(`${round} it's not a number`);
    }
}

const GetAnwser = () => {
    let anwser = $("#anwser").val();
    anwser.trim();

    if (anwser != null && anwser != "") {
        CheckAnwser(anwser.toLowerCase());
    }
}

const CheckAnwser = (anwser) => {
    let Check = GetColor();
    if (round_count != round) {
        for (let i = 0; i < Check.length - 1; i++) {
            if (anwser == Check[i]) {
                round_count += 1;
                try_count += 1;
                $("#display").css("background", `${$("#anwser").val()}`)
                alert("Correct !! :)")
                MakeAnwser(Check);
                break
            }
            if (i == 2) {
                wrong += 1;
                try_count += 1;
                alert("Worng !! :(")
            }
        }
        $("#label").text(`No. ${round_count + 1}`);

        console.log(`Round ${round} : Count ${round_count} : bool ${round == round_count}`);
    }

    if (round_count == round) {
        $("#onplay").addClass("d-none");
        $("#Reset").removeClass("d-none");
        document.querySelector("#rate").innerHTML += `<label>Accuracy Rate : ${((round / try_count) * 100).toFixed(2)}</label>`;
        document.querySelector("#rate").innerHTML += `<label>Wrong : ${wrong}</label>`;
    }
}

const MakeAnwser = (anwser) => {
    document.querySelector(".anwser").innerHTML += `<div style="background:${anwser[2]}; color:${anwser[3]};">${round_count}</div>`;
    Color = Math.floor(Math.random() * 10);
}

const GetColor = () => {
    let Check;
    switch (Color) {
        case 0:
            Check = ["สีขาว", "ขาว", "white", "#333333"]
            break;
        case 1:
            Check = ["สีแดง", "แดง", "red", "#ffbaba"]
            break;
        case 2:
            Check = ["สีส้ม", "ส้ม", "orange", "#ffd17c"]
            break;
        case 3:
            Check = ["สีเหลือง", "เหลือง", "yellow", "#b8b802"]
            break;
        case 4:
            Check = ["สีเขียว", "เขียว", "green", "#66FF66"]
            break;
        case 5:
            Check = ["สีน้ำเงิน", "น้ำเงิน", "blue", "#6666FF"]
            break;
        case 6:
            Check = ["สีม่วง", "ม่วง", "purple", "#E600E5"]
            break;
        case 7:
            Check = ["สีชมพู", "ชมพู", "pink", "#fd8b9e"]
            break;
        case 8:
            Check = ["สีเทา", "เทา", "gray", "#4D4D4D"]
            break;
        case 9:
            Check = ["สีดำ", "ดำ", "black", "#CCCCCC"]
            break;
    }

    return Check;
}

const BTN_GetColor = (num) => {
    switch (num) {
        case 0:
            $("#anwser").val("white");;
            break;
        case 1:
            $("#anwser").val("red");;
            break;
        case 2:
            $("#anwser").val("orange");;
            break;
        case 3:
            $("#anwser").val("yellow");;
            break;
        case 4:
            $("#anwser").val("green");;
            break;
        case 5:
            $("#anwser").val("blue");;
            break;
        case 6:
            $("#anwser").val("purple");;
            break;
        case 7:
            $("#anwser").val("pink");;
            break;
        case 8:
            $("#anwser").val("gray");;
            break;
        case 9:
            $("#anwser").val("black");;
            break;
    }
}