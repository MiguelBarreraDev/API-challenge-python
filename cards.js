let data = [
	{
		"id": "0",
		"question": "What is a Holbie?",
		"response": {
			"a": "Lifelless person",
			"b": "A god",
			"c": "Programmer",
			"d": "Person who does not pass the checker"
		}
	},
	{
		"id": "1",
		"question": "What function would you use to print the type of an object?",
		"response": {
			"a": "str",
			"b": "typeof",
			"c": "id",
			"d": "type"
		}
	},
	{
		"id": "2",
		"question": "How do you get the variable identifier?",
		"response": {
			"a": "type",
			"b": "id",
			"c": "indetify",
			"d": "isinstance"
		}
	},
	{
		"id": "3",
		"question": ">>> s1 = \"Best\"\n>>> s2 = s1\n>>> print(s1 is s2)",
		"response": {
			"a": "False, because they are diferent variables",
			"b": "True, because they both store \"Best\"",
			"c": "False, because they occupy a different memory space",
			"d": "True, because they both refer to the same object"
		}
	},
	{
		"id": "4",
		"question": "Who created python?",
		"response": {
			"a": "Dennis Ritchie",
			"b": "Guido van Rossum",
			"c": "Bill Joy",
			"d": "Richard Stallman"
		}
	},
	{
		"id": "5",
		"question": ">>> a = 89\n>>> b = a\n>>> print(a is b)",
		"response": {
			"a": "True, because both are worth 89",
			"b": "False, because 'is' compare objects and not values",
			"c": "True, because python preloads a list of integers in a range that includes al 89",
			"d": "False, because they do not refer to the same object"
		}
	}
]

module.exports = data;
