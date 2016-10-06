const listen = () => {

  $("#restaurant-choices + button").on("click", () => {
    var selections = $('#restaurant-choices');
    var select = selections.find(":selected");
    //var select = $(selections.find(":selected"));
    $.ajax({
      type: "POST",
      url: `/api/days/${currentDay}/restaurants`,
      data: {
        id: select.attr("name")
      }
    })
    .done(() => {
      console.log("DONE");
    });
  })

  $("#hotel-choices + button").on("click", () => {
    var selections = $('#hotel-choices');
    var select = selections.find(":selected");
    //var select = $(selections.find(":selected"));
    $.ajax({
      type: "POST",
      url: `/api/days/${currentDay}/hotels`,
      data: {
        id: select.attr("name")
      }
    })
    .done(() => {
      console.log("DONE");
    });
  })

  $("#activity-choices + button").on("click", () => {
    var selections = $('#activity-choices');
    var select = selections.find(":selected");
    //var select = $(selections.find(":selected"));
    $.ajax({
      type: "POST",
      url: `/api/days/${currentDay}/activities`,
      data: {
        id: select.attr("name")
      }
    })
    .done(() => {
      console.log("DONE");
    });
  })
}
