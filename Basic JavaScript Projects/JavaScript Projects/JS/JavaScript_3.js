function displayRelation(family) {
    var familyRelation = family.getAttribute("data-family-relation");
    alert("My " + familyRelation + " is named " + family.innerHTML);
}