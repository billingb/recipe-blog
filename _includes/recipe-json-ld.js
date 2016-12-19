{% assign recipe = site.data.recipes[page.recipe] %}
{% assign nutrition = recipe.nutrition %}
{% assign ingredients = '' | split: '|' %}
{% for ingredient_group in recipe.ingredients %}
  {% for ingredient in ingredient_group.children %}
    {% assign ingredients = ingredients | push: ingredient %}
  {% endfor %}
{% endfor %}
 {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "name": "{{recipe.name}}",
    "image": "{{site.url}}/images/{{recipe.photo}}",
    "author": {
    "@type": "Person",
    "name": "Brendan Billingsley"
   },
   "datePublished": "{{recipe.date}}",
   "description": "{{recipe.description}}",
   "prepTime": "{{recipe.prepTime}}",
   "cookTime": "{{recipe.cookTime}}",
   "totalTime": "{{recipe.totalTime}}",
   "recipeYield": "{{recipe.yield}}",
   "nutrition": {
     "@type": "NutritionInformation",
     "servingSize": "{{nutrition.serving_size}}",
     "calories": "{{nutrition.calories}}",
     "fatContent": "{{nutrition.total_fat}}"
   },
   "recipeIngredient": [
   "{{ ingredients | join: '", "'}}"
   ],
   "recipeInstructions": "\n{{recipe.directions | join: '\n'}}"
 }
