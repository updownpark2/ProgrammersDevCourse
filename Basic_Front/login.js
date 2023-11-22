function compareValiable() {
  let num = 10;
  alert(`num=${num}`);
  num = 20;
  alert(`num=${num}`);
}

function alertIdValue() {
  const Id = document.getElementById("txt_id");
  if (Id.value === ``) {
    alert("입력값이 없습니다.");
  } else if (Id.value !== ``) {
    alert(Id.value);
  }
}
