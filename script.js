
  $(document).ready(function () {
    $(".btn-filter").click(function () {
      const filter = $(this).attr("data-filter");

      $(".gallery-item").each(function () {
        const category = $(this).attr("data-category");

        if (filter === "all" || filter === category) {
          $(this).fadeIn(600);
        } else {
          $(this).fadeOut(600);
        }
      });
    });
  });
