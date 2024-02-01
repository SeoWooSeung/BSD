$(function () {
  $(".main_slide").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    fade: true,
  });

  $(".sub_slide").slick({
    arrows: false,
    autoplay: true,
    fade: true,
  });

  $(".news_box .left").on("click", function () {
    $(".news_box .sub_slide").slick("slickPrev");
  });

  $(".news_box .right").on("click", function () {
    $(".news_box .sub_slide").slick("slickNext");
  });

  $(".main_visual .lnk button").on("click", function (e) {
    e.preventDefault();

    let idx = $(this).parent().index();
    console.log(idx);
    $(".main_visual .main_slide").slick("slickGoTo", idx);
  });

  $(".mbt").on("click", function () {
    $(".gnb").toggleClass("on");
    $(".h1").toggleClass("on");
    $(".header").toggleClass("on");
    $(".icon").toggleClass("on");
  });

  $(".main_visual .wheel").on("click", function (e) {
    e.preventDefault(); //a태그 때문에 화면 깜빡임 없애기//
    // console.log($(this.hash).offset().top);
    let H = $(this.hash).offset().top;
    $("html,body").animate({ scrollTop: H }, 800);
  });

  $(".company .pf_right_slide").slick({
    arrows: false,
    slidesToShow: 4,
    asNavFor: ".company .pf_left_slide",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".company .bt_left").on("click", function () {
    $(".company .pf_left_slide").slick("slickPrev");
  });

  $(".company .bt_right").on("click", function () {
    $(".company .pf_right_slide").slick("slickNext");
  });

  $(".mbtn").on("click", () => {
    $(".header").toggleClass("active");
  });

  $(".m_News .news_box .right_tap .tab_tit>li a").on("click", function (e) {
    //1.a를 클릭했을때 새로고침 되지 않게 하기
    e.preventDefault();
    //2.번호를 받아오기
    let idx = $(this).parent().index();
    //3.번호의 부합하는  .tab_con>li를 보여주기
    $(".m_News .news_box .right_tap .tab_con>li").removeClass("on");
    $(".m_News .news_box .right_tap .tab_con>li").eq(idx).addClass("on");

    //4. 메뉴의 스타일 붙이기
    $(".m_News .news_box .right_tap .tab_tit>li").removeClass("on");
    $(".m_News .news_box .right_tap .tab_tit>li").eq(idx).addClass("on");
  });

  $(".mbtn").on("click", () => {
    $("#header").toggleClass("active");
  });

  $(".mbtn").on("click", function () {
    $(".gnb").toggleClass("on");
  });
});
