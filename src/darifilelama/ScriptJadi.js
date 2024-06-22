document.addEventListener("DOMContentLoaded", function () {
    var filterUl = document.getElementById("filter");
    var heroList = document.querySelector(".hero-list");

    filterUl.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            // Remove the "active" class from all li elements
            var filterItems = filterUl.getElementsByTagName("li");
            for (var i = 0; i < filterItems.length; i++) {
                filterItems[i].classList.remove("active");
            }

            // Add the "active" class to the clicked li element
            event.target.classList.add("active");
            
            // Get the selected category using the dataset property
            var selectedCategories = event.target.dataset.category;
            console.log(selectedCategories)

            // Filter the hero list based on the selected category
            filterHeroes(selectedCategories);
        }
    });

    function filterHeroes(category) {
        var heroes = heroList.getElementsByClassName("hero_card");

        for (var i = 0; i < heroes.length; i++) {
            var hero = heroes[i];
            var heroCategories = hero.dataset.category.split(' ');
            if (category === "all" || heroCategories.includes(category)) {
                hero.style.display = "flex";
            } else {
                hero.style.display = "none";
            }
        }
    }
});



