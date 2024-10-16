window.onload = function() {
    let headers = new Headers();
    
    fetch('https://oauq7xqqr4.execute-api.ca-central-1.amazonaws.com/prod/recipes',{
        method:"GET",
        headers:headers
    })
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipeList');
            const recipes = JSON.parse(data.body);
            recipes.forEach(recipe => {
                const recipeItem = document.createElement('tr');
                recipeItem.innerHTML = `<td>${recipe.name}</td><td>${recipe.instructions}</td>`;
                recipeList.appendChild(recipeItem);
            });
        });
};