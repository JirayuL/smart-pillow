$(() => {
  let hour = 0
  let minute = 0

  const url = 'http://ecourse.cpe.ku.ac.th/exceed/api'

  setInterval(() => {
    let time = new Date()
    $('#time').html(time)

    let hourNow = time.getHours()
    let minuteNow = time.getMinutes()
    if (hour == hourNow && minute == minuteNow) {
      $.ajax({
        type: "POST",
        url: url + '/classic_palm-alarm/set',
        data: {
          value: 1
        },
        dataType: "text",
        success: function (response) {
          setTimeout(() => {
            $.ajax({
              type: "POST",
              url: url + '/classic_palm-alarm/set',
              data: {
                value: 0
              },
              dataType: "dataType"
            });
          }, 5000)
        }
      });
    }
  }, 1000)

  $('#setAlarm').on("click", function () {
    hour = $('#hour').val()
    minute = $('#minute').val()
    console.log(hour + ':' + minute)
    alert('You set alarm at ' + hour + ':' + minute)
  })
})
