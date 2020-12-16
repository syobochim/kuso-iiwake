// 要素を取得
const button = document.getElementById("button");
const form = document.getElementById("reason");
const bye = document.getElementById("bye");
const radioNodeList = form.reason;
let iiwake;

async function clickEvent() {
    const reason = radioNodeList.value;
    if (reason === "") {
    } else {
        iiwake = document.getElementById(reason);
        iiwake.play();
    }
};

async function endEvent() {
        iiwake.pause();
};


//addEventListenerで登録
button.addEventListener("click", clickEvent);
bye.addEventListener("click", endEvent);