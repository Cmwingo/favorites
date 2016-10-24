$(document).ready(function(){
  $("#favorites").submit(function(event){
    event.preventDefault();
    var favoriteInputs = [];
    $("input:checkbox:checked").each(function(){
      favoriteInputs.push($(this).val());
    });
    console.log(favoriteInputs);

    var rearrangedInputs = [favoriteInputs.slice(0, 1)];
    rearrangedInputs.push(favoriteInputs.slice(2, 3));
    rearrangedInputs.push(favoriteInputs.slice(1, 2));
    alert(rearrangedInputs);
  });
});
