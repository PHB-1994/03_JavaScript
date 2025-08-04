const childInput = document.getElementById("childInput");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  const inputId = childInput.value;

  opener.document.getElementById("inputId").value = inputId;

  window.close();
});
