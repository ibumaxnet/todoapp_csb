import "./styles.css";

const onClickAdd = () => {
  // テキストボックスから値を取得し、テキストボックスを初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  incompListAdd(inputText);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());

// 削除ボタンで削除
function delListAct(target, listname) {
  console.log("削除", target);
  document.getElementById(listname).removeChild(target);
}

// 未完Listを作成
function incompListAdd(listText) {
  const incompCntDiv = document.createElement("div");
  incompCntDiv.className = "list-row";

  const incompCntLi = document.createElement("li");
  incompCntLi.innerText = listText;

  const incompCompBtn = document.createElement("button");
  incompCompBtn.innerText = "完了";
  incompCompBtn.addEventListener("click", () => {
    const delTarget = incompCompBtn.parentNode;
    delListAct(delTarget, "incomplete-list");
    compListAdd(listText);
  });

  const incompDelBtn = document.createElement("button");
  incompDelBtn.innerText = "削除";
  incompDelBtn.addEventListener("click", () => {
    const delTarget = incompCompBtn.parentNode;
    delListAct(delTarget, "incomplete-list");
    console.log("削除", listText);
  });

  incompCntDiv.appendChild(incompCntLi);
  incompCntDiv.appendChild(incompCompBtn);
  incompCntDiv.appendChild(incompDelBtn);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(incompCntDiv);
}

// 完了に追加
function compListAdd(contText) {
  const compConDiv = document.createElement("div");
  compConDiv.className = "list-row";
  const compConLi = document.createElement("li");
  compConLi.innerText = contText;
  const compConIncompBtn = document.createElement("button");
  compConIncompBtn.innerText = "戻す";
  compConIncompBtn.addEventListener("click", () => {
    const restoreTarget = compConIncompBtn.parentNode;
    // ボタンの前の要素のtextを取得
    const restoreText = compConIncompBtn.previousElementSibling.innerText;
    delListAct(restoreTarget, "complete-list");

    incompListAdd(restoreText);
  });

  // 完了リストに追加
  compConDiv.appendChild(compConLi);
  compConDiv.appendChild(compConIncompBtn);
  document.getElementById("complete-list").appendChild(compConDiv);
}
