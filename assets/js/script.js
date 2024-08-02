$(document).ready(function () {
  setInterval(function () {
    $.ajax({
      type: "GET",
      url: "/get_time",
      dataType: "text",
      success: function (data) {
      const epochValue = data * 1000; // Example epoch value in milliseconds
      const date = new Date(epochValue);
      $("#epochtime").text("Current Time: " + date.toUTCString());
      console.log(date.toUTCString());
      console.log("Time Epoch: " + data);
      },
    });
  }, 2000);
});
