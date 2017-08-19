var data = '[{"menu":{"drinks":[{"coke":"20"},{"coke":"20"}],"food":[{"munchies":[{"name":"Popcorn Chicken", "description":"", "price":4.99},{"name":"Garlic Parmesan Fries", "description":"", "price":4.99},{"name":"Garlic Parmesan Tots", "description":"", "price":5.50},{"name":"BBC House Fries", "description":"(Brisket, Guacamole, Cheese, & Sauce)", "price":6.99},{"name": "BBC Quesadilla", "description":"Choice of Chicken or Brisket", "price":5.99}],"sandwiches":[{"name":"BLT", "description":"Bacon, Lettuce, Tomatoes with B Sauce", "price":7.00},{"name":"Bosa Club", "description":"Ham, Turkey, Bacon, Avocado Spread with B Sauce", "price":8.00},{"name":"Chicken Club", "description":"Chicken Breast, Bacon, Avocado Spread with B Sauce", "price":8.00},{"name":"Chipotle Turkey OR Chicken", "description":"Turkey OR Chicken, Avocado Spread with Chipotle Sauce", "price":8.00},{"name":"Pastrami", "description":"Pastrami, Pepperoncini, Deli Mustard with Chipotle Sauce", "price":9.00},{"name":"The OMG", "description":"Turkey, Bacon, Cucumbers, Spinach, Avocado Spread, & Deli Mustard with B Sauce on Toasted Marble Rye Bread", "price":8.00},{"name":"The Veggie", "description":"Spinach, Cucumbers, Avocado Spread, Pepperoncini, Pickled Carrots and Daikon with Deli Mustard and B Sauce on Toasted Marble Rye Bread", "price":8.00},{"name":"Turkey OR Chicken Pesto", "description":"Turkey OR Chicken with Provolone and Pesto Sauce", "price":9.00}],"panini":[{"name":"Bosa Club", "description":"Turkey, Ham, Bacon, Tomatoes, Provolone and Sprouts with B Sauce", "price":8.00},{"name":"Chicken Club", "description":"Chicken Breast, Bacon, Spinach, Tomatoes with Havarti and B Sauce", "price":8.00},{"name":"Chipotle Chicken OR Turkey", "description":"Chicken OR Turkey, Tomatoes, Caramelized Onions and Havarti with Chipotle Sauce", "price":8.00},{"name":"Garlic Chicken", "description":"Chicken Breast and Spinach with Provolone and Swiss", "price":8.00},{"name":"Pastrami", "description":"Pastrami, Caramelized Onions, Pepper Jack and Deli Mustard with Chipotle Sauce", "price":9.00},{"name":"The Veggie", "description":"Tomatoes, Spinach, Sprouts, Caramelized Onions and Havarti with Deli Mustard and B Sauce", "price":8.00},{"name":"Smoked BBQ Brisket", "description":"BBQ Brisket, Caramelized Onions, Sharp Cheddar and Provolone with Chipotle Sauce", "price":8.00},{"name":"Turkey OR Chicken Pesto", "description":"Turkey OR Chicken, Tomatoes, Sprouts with Provolone and Pesto Sauce", "price":9.00}],"vietnamese sandwiches":[{"name":"Chicken", "description":"Grilled Thinly Sliced Marinated Chicken", "price":6.00},{"name":"Pork Bologna", "description":"Vietnamese Ham (Gio Lua)", "price":6.00},{"name":"Smoked Brisket", "description":"", "price":7.00}],"grilled cheese":[{"name":"Original Grilled Cheese", "description":"Texas Toast", "price":7.00},{"name":"Chicken Grilled Cheese", "description":"", "price":8.00},{"name":"BBQ Smoked Brisket Grilled Cheese", "description":"", "price":8.00},{"name":"Philly Cheese Steak Grilled Cheese", "description":"Swiss & Chipotle Sauce", "price":8.00},{"name":"Pastrami Grilled Cheese", "description":"Chipotle Sauce", "price":9.00}],"Add-Ons":[{"name":"Bacon (2 Strips)", "description":"", "price":2.00},{"name":"Ham", "description":"", "price":3.00},{"name":"Turkey", "description":"", "price":3.00},{"name":"Chicken", "description":"", "price":4.00},{"name":"Pastrami", "description":"", "price":4.00},{"name":"Side of Sauce", "description":"", "price":1.25},{"name":"Cheese (2 Slices)", "description":"", "price":1.50},{"name":"Avocado Spread", "description":"", "price":3.00}]}]}}]';

// var data = '[{
// 	"menu":{
// 		"drinks":[
// 			{"coke":"20"},
// 			{"coke":"20"}
// 		], 
// 		"food":[
// 			{
// 				"munchies": 
// 				[ 
// 					{"name":"Popcorn Chicken", "description":"", "price":4.99}, 
// 					{"name":"Garlic Parmesan Fries", "description":"", "price":4.99},
// 					{"name":"Garlic Parmesan Tots", "description":"", "price":5.50}, 
// 					{"name":"BBC House Fries", "description":"(Brisket, Guacamole, Cheese, & Sauce)", "price":6.99}, 
// 					{"name": "BBC Quesadilla", "description":"Choice of Chicken or Brisket", "price":5.99}
// 				], 
// 				"sandwiches": 
// 				[
// 					{"name":"BLT", "description":"Bacon, Lettuce, Tomatoes with B Sauce", "price":7.00}, 
// 					{"name":"Bosa Club", "description":"Ham, Turkey, Bacon, Avocado Spread with B Sauce", "price":8.00},
// 					{"name":"Chicken Club", "description":"Chicken Breast, Bacon, Avocado Spread with B Sauce", "price":8.00}, 
// 					{"name":"Chipotle Turkey OR Chicken", "description":"Turkey OR Chicken, Avocado Spread with Chipotle Sauce", "price":8.00},
// 					{"name":"Pastrami", "description":"Pastrami, Pepperoncini, Deli Mustard with Chipotle Sauce", "price":9.00}, 
// 					{"name":"The OMG", "description":"Turkey, Bacon, Cucumbers, Spinach, Avocado Spread, & Deli Mustard with B Sauce on Toasted Marble Rye Bread", "price":8.00},
// 					{"name":"The Veggie", "description":"Spinach, Cucumbers, Avocado Spread, Pepperoncini, Pickled Carrots and Daikon with Deli Mustard and B Sauce on Toasted Marble Rye Bread", "price":8.00}, 
// 					{"name":"Turkey OR Chicken Pesto", "description":"Turkey OR Chicken with Provolone and Pesto Sauce", "price":9.00}
// 				], 
// 				"panini": 
// 				[
// 					{"name":"Bosa Club", "description":"Turkey, Ham, Bacon, Tomatoes, Provolone and Sprouts with B Sauce", "price":8.00}, 
// 					{"name":"Chicken Club", "description":"Chicken Breast, Bacon, Spinach, Tomatoes with Havarti and B Sauce", "price":8.00},
// 					{"name":"Chipotle Chicken OR Turkey", "description":"Chicken OR Turkey, Tomatoes, Caramelized Onions and Havarti with Chipotle Sauce", "price":8.00}, 
// 					{"name":"Garlic Chicken", "description":"Chicken Breast and Spinach with Provolone and Swiss", "price":8.00},
// 					{"name":"Pastrami", "description":"Pastrami, Caramelized Onions, Pepper Jack and Deli Mustard with Chipotle Sauce", "price":9.00}, 
// 					{"name":"The Veggie", "description":"Tomatoes, Spinach, Sprouts, Caramelized Onions and Havarti with Deli Mustard and B Sauce", "price":8.00},
// 					{"name":"Smoked BBQ Brisket", "description":"BBQ Brisket, Caramelized Onions, Sharp Cheddar and Provolone with Chipotle Sauce", "price":8.00}, 
// 					{"name":"Turkey OR Chicken Pesto", "description":"Turkey OR Chicken, Tomatoes, Sprouts with Provolone and Pesto Sauce", "price":9.00}
// 				],
// 				"vietnamese sandwiches": 
// 				[
// 					{"name":"Chicken", "description":"Grilled Thinly Sliced Marinated Chicken", "price":6.00}, 
// 					{"name":"Pork Bologna", "description":"Vietnamese Ham (Gio Lua)", "price":6.00},
// 					{"name":"Smoked Brisket", "description":"", "price":7.00}
// 				],
// 				"grilled cheese": 
// 				[
// 					{"name":"Original Grilled Cheese", "description":"Texas Toast", "price":7.00}, 
// 					{"name":"Chicken Grilled Cheese", "description":"", "price":8.00},
// 					{"name":"BBQ Smoked Brisket Grilled Cheese", "description":"", "price":8.00}, 
// 					{"name":"Philly Cheese Steak Grilled Cheese", "description":"Swiss & Chipotle Sauce", "price":8.00},
// 					{"name":"Pastrami Grilled Cheese", "description":"Chipotle Sauce", "price":9.00}
// 				],
// 				"Add-Ons": 
// 				[
// 					{"name":"Bacon (2 Strips)", "description":"", "price":2.00}, 
// 					{"name":"Ham", "description":"", "price":3.00},
// 					{"name":"Turkey", "description":"", "price":3.00}, 
// 					{"name":"Chicken", "description":"", "price":4.00},
// 					{"name":"Pastrami", "description":"", "price":4.00},
// 					{"name":"Side of Sauce", "description":"", "price":1.25}, 
// 					{"name":"Cheese (2 Slices)", "description":"", "price":1.50},
// 					{"name":"Avocado Spread", "description":"", "price":3.00}
// 				]
// 			}	
// 		]
// 	}
// }]';


