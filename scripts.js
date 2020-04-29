
$(".add").click(() => {
    $("ul").append(`<li> ${$("input").val()} <button class="remove">
    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMzMzMzMzt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzMzMzMzMztzdHJva2Utd2lkdGg6MzI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT48ZyBpZD0iTGF5ZXJfMSIvPjxnIGlkPSJMYXllcl8yIj48Zz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzg4LjMxLDExMC43MWgtNjMuNTlDMzIzLjg5LDczLjUxLDI5My4zOSw0My41LDI1Niw0My41cy02Ny44OSwzMC4wMS02OC43Miw2Ny4yMWgtNjMuNTkgICAgIGMtMjQuMzQsMC00NC4wOCwxOS43My00NC4wOCw0NC4wOHYxLjI1YzAsMjQuMzQsMTkuNzMsNDQuMDgsNDQuMDgsNDQuMDhoMjY0LjYxYzI0LjM0LDAsNDQuMDgtMTkuNzMsNDQuMDgtNDQuMDh2LTEuMjUgICAgIEM0MzIuMzgsMTMwLjQ0LDQxMi42NSwxMTAuNzEsMzg4LjMxLDExMC43MXogTTI1Niw3NS4wNWMxOS45OSwwLDM2LjM1LDE1Ljg2LDM3LjE2LDM1LjY2aC03NC4zMyAgICAgQzIxOS42NSw5MC45MSwyMzYuMDEsNzUuMDUsMjU2LDc1LjA1eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIzLjcsMjMxLjY2Yy0xLjQ5LDAtMi45Ny0wLjA0LTQuNDMtMC4xM3YxODMuMjljMCwyOS42NCwyNC4wMyw1My42Nyw1My42Nyw1My42N2gxNjYuMTEgICAgIGMyOS42NCwwLDUzLjY3LTI0LjAzLDUzLjY3LTUzLjY3VjIzMS41NGMtMS40NiwwLjA5LTIuOTQsMC4xMy00LjQzLDAuMTNIMTIzLjd6IE0yMzAuOTUsNDA5LjkxYzAsOC43MS03LjA3LDE1Ljc4LTE1Ljc4LDE1Ljc4ICAgICBjLTguNzIsMC0xNS43OC03LjA3LTE1Ljc4LTE1Ljc4VjI5NC4yOGMwLTguNzIsNy4wNi0xNS43OCwxNS43OC0xNS43OGM4LjcxLDAsMTUuNzgsNy4wNiwxNS43OCwxNS43OFY0MDkuOTF6IE0zMTIuNiw0MDkuOTEgICAgIGMwLDguNzEtNy4wNiwxNS43OC0xNS43OCwxNS43OGMtOC43MSwwLTE1Ljc4LTcuMDctMTUuNzgtMTUuNzhWMjk0LjI4YzAtOC43Miw3LjA3LTE1Ljc4LDE1Ljc4LTE1Ljc4ICAgICBjOC43MiwwLDE1Ljc4LDcuMDYsMTUuNzgsMTUuNzhWNDA5LjkxeiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" alt="">
      </button>
    <button class="done"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNGQ0ZDRkO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iMDMiIGlkPSJfMDMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyLDBBMTIsMTIsMCwxLDAsMjQsMTIsMTIsMTIsMCwwLDAsMTIsMFptMCwyMkExMCwxMCwwLDEsMSwxOS44MSw1Ljc3Yy4yMS4yNy40MS41NS42LjgzaDBjLjE4LjI5LjM1LjU4LjUxLjg5QTEwLDEwLDAsMCwxLDEyLDIyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExLDE0LjU5LDUuOTQsOS41Miw0LjUyLDEwLjk0LDExLDE3LjQxLDE5LjQxLDlhOCw4LDAsMCwwLTEtMS44WiIvPjwvZz48L3N2Zz4=" alt=""></button>
    </li>`);
    $("input").val("");
})

$("ul").on("click", ".done", function(){
    $(this).closest("li").css("text-decoration" , "line-through")
})

$("ul").on("click", ".remove", function(){
    $(this).closest("li").remove();
})




// $('button').click(() => {
//   $('ul').append(`<li>${$('input').val()}</li>`);
//   $('li:last-child').click((event) => {
//     $(event.target).toggleClass('completed');
//   });
//   $('input').val('');
// });

