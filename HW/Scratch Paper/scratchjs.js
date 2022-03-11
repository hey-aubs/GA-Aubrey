function selectPet(petType){
    let thisPetData = petData[petType];

    // Set the title
    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;

    // Empty the specification data
    document.querySelector(".petsDataSpecs").innerHTML="";

    // Add the space required, size, weight, trainability
    let listData = "";

    listData += "<dt>Size</dt><dd>"+thisPetData.size+"</dd>";

    // Add the foods
    listData += "<dt>Foods</dt><dd><ul>";
    for(var i=0;i<thisPetData.foods.length;i++){
        listData += "<li>"+thisPetData.foods[i]+"</li>";
    }
    listData += "</ul></dd>";
    document.querySelector(".petsDataSpecs").innerHTML= listData;
}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial value
    selectPet( document.querySelector("#petType").value);

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener('change',function(){
        var petType = this.value;
        selectPet(petType);
    });
});