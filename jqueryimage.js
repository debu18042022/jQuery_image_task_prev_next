// $(".buttons").on("click", "#prev", function () {
//   // Change src attribute of image
//   $("img").attr("src","https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg");
// });

// $(".buttons").on("click", "#next", function () {
//   // Change src attribute of image
//   $("img").attr("src","https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80");
// });

$(document).ready(function () {
  const arr = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    "http://cdn.eso.org/images/screen/eso1907a.jpg",
    "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    "https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=",
    "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    "https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg",
    "https://www.w3schools.com/howto/img_forest.jpg",
    "https://gratisography.com/wp-content/uploads/2022/02/gratisography-car-in-field-free-stock-photo-800x525.jpg",
    "https://images.unsplash.com/photo-1532293059839-97a2d8d74138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&w=1000&q=80",
    "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  ];
  $("img").attr("src", arr[6]);
  var i=6;
  $(".buttons").on("click","#prev",function(){
    $("img").attr("src",arr[i-1]);
    i-=1;
    if(i==0){
      i=arr.length;
    }
  });
  $(".buttons").on("click","#next",function(){
    $("img").attr("src",arr[i+1]);
    i+=1;
    if(i==arr.length){
      i=0;
    }
  });
});
