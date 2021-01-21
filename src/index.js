import "./styles.css";

const onClickAdd = () => {
  // テキストボックスから値を取得し、テキストボックスを初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 入力内容を元に未完了のToDoを追加する
  const incompDiv = document.createElement("div");
  // div作成
  incompDiv.className = "list-row";

  // li作成
  const incompLi = document.createElement("li");
  incompLi.innerText = inputText;

  // button 作成
  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
    const relocateTarget = compBtn.parentNode;
    // ボタンの前の要素のtextを取得
    const relocateText = compBtn.previousElementSibling.innerText;
    document.getElementById("incomplete-list").removeChild(relocateTarget);
    // 完了に追加
    const compDiv = document.createElement("div");
    compDiv.className = "complete-list";
    const compLi = document.createElement("li");
    compLi.innerText = relocateText;
    const incompBtn = document.createElement("button");
    incompBtn.innerText = "戻す";

    // 未完了リストに追加
    compDiv.appendChild(compLi);
    compLi.appendChild(incompBtn);
    document.getElementById("complete-list").appendChild(compDiv);
    console.log(compDiv);
  });

  const deleBtn = document.createElement("button");
  deleBtn.innerText = "削除";
  deleBtn.addEventListener("click", () => {
    // 削除ボタンで削除
    const delTarget = deleBtn.parentNode;
    document.getElementById("incomplete-list").removeChild(delTarget);
  });

  // div に li を追加
  incompDiv.appendChild(incompLi);
  incompDiv.appendChild(compBtn);
  incompDiv.appendChild(deleBtn);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(incompDiv);
  // console.log(deleBtn);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
