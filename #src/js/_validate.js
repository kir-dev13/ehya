$(".send-form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      pass: {
        required: "Поле не должно быть пустым",
      },
      name: {
        required: "Поле не должно быть пустым",
      },
      email: {
        required: "Заполните поле",
        email: "Адрес электронной почты должен быть в формате имя@домен",
      },
    },
  });
});
