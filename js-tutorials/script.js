// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    document.getElementById("changeParagraphExt").addEventListener('click', changeParagraphExternal);

    function changeParagraphExternal() {
      console.log("click button");
      document.getElementById("externalDemo").innerHTML = "Paragraph changed.";
    }

});
