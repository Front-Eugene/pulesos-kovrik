function openModalView() {
  Swal.fire({
    title: "Оставьте отзыв",
    html: '<div > <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input><input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
    confirmButtonText: "Отправить отзыв",
  }).then(() => {
    Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success");
  });
}
$(document).ready(function () {
  function t(t) {
    return (
      "<span>" +
      (t = ("00" + t).substr(-2))[0] +
      "</span><span>" +
      t[1] +
      "</span>"
    );
  }
  $(".reviews_list").slick({
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow_left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow_right.png"></button>',
  }),
    $("a[href^='#']").click(function () {
      var t = $(this).attr("href");
      return (
        $("html, body").animate({ scrollTop: $(t).offset().top + "px" }), !1
      );
    }),
    $(".icon__main").click(function () {
      $("#ul").slideToggle();
    }),
    (function e() {
      var n = new Date(),
        i = new Date();
      i.setHours(23),
        i.setMinutes(59),
        i.setSeconds(59),
        23 === n.getHours() &&
          59 === n.getMinutes() &&
          59 === n.getSeconds &&
          i.setDate(i.getDate() + 1);
      var o = Math.floor((i.getTime() - n.getTime()) / 1e3),
        s = Math.floor(o / 3600);
      o -= 3600 * s;
      var r = Math.floor(o / 60);
      (o -= 60 * r),
        $(".timer .hours").html(t(s)),
        $(".timer .minutes").html(t(r)),
        $(".timer .seconds").html(t(o)),
        setTimeout(e, 200);
    })();
}),
  (function () {
    let t = new Date(),
      e = new Date(t.getTime() - 432e6),
      n = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
      ];
    $(".by").html(e.getDate() + " " + n[e.getMonth()] + " "),
      (e = new Date(t.getTime())),
      $(".to").html(
        e.getDate() + " " + n[e.getMonth()] + " " + e.getFullYear() + " года"
      );
  })();
