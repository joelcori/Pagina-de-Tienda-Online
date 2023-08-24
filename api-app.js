$(document).ready(function () {
    $.ajax({
      url: "https://fast-api-98w2.onrender.com/", // URL del servidor que proporciona los datos
      method: "GET", // Método de solicitud
      dataType: "json", // Tipo de datos que esperas recibir
      success: function (data) {
        $("#box").append(
          "<div class='messages__item messages__item--operator'><div class='msg'><p>" +
            data.mensaje +
            "</p></div></div>"
        );
      },
      error: function (xhr, status, error) {
        // Función que se ejecuta en caso de error
        console.error("Error: " + error);
      },
    });
  });
  $("#btnLoadData").click(function (event) {
    event.preventDefault();
    // Cuando se haga clic en el botón con el id "btnLoadData", se ejecutará esta función
    let entradaCliente = document
      .querySelector("#entrada")
      .value.toString();

    $("#box").append(
      "<div class='messages__item messages__item--visitor'><div class='icon'></div><div class='msg'><p>" +
        entradaCliente +
        "</p></div></div>"
    );
    let result = $.ajax({
      type: "POST",
      url: "https://fast-api-98w2.onrender.com/" + entradaCliente,
      data: entradaCliente,
      success: function (result) {
        console.log("se envio con exito");
        $("#box").append(
          "<div class='messages__item messages__item--operator'><div class='msg'><p>" +
            result.rpta +
            "</p></div></div>"
        );

      },
      error: function () {
        // alert("no se envio con exito");
      },
    });

   
  });