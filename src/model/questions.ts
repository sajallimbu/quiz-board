export const quizQuestions = [
    {
        Name: 'Typescript',
        Id: 'TS',
        Questions: [
            {
                Question:
                    "What are the three main 'simple types' in TypeScript?",
                Info: '',
                Options: [
                    'Boolean, Number, String',
                    'Array, Object, Boolean',
                    'Object, String, Number',
                    'Object, Array, Symbol',
                ],
                Answer: 'Object, String, Number',
            },
            {
                Question:
                    "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
                Info: '',
                Options: ['Implicit', 'Explicit'],
                Answer: 'Implicit',
            },
            {
                Question:
                    'True or False: TypeScript can always correctly infer a variables type.',
                Info: '',
                Options: ['True', 'False'],
                Answer: 'False',
            },
            {
                Question:
                    'You can disable implicit variable type assignment by enabling the compiler option:',
                Info: '',
                Options: [
                    'noImplicitAny',
                    'Implicit = FALSE',
                    'autoTypeAssignment = FALSE',
                    'noAutoType',
                ],
                Answer: 'autoTypeAssignment = FALSE',
            },
            {
                Question:
                    "You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
                Info: '',
                Options: [
                    'strictChecksRequired',
                    'noAutoType',
                    'strictNullChecks',
                    'noFalseyInits',
                ],
                Answer: 'strictChecksRequired',
            },
            {
                Question:
                    "______ is similar to 'any', but a safer alternative when uncertain about the type.",
                Info: '',
                Options: ['unknown', 'never', 'similar'],
                Answer: 'never',
            },
            {
                Question:
                    "What is the inherited type for the variable example in `const example = ['Dylan']`?",
                Info: '',
                Options: ['string[]', 'any[]', 'unknown[]', 'string'],
                Answer: 'unknown[]',
            },
            {
                Question:
                    "What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly\n        string[] = ['Coding', 'God']`?",
                Info: '',
                Options: [
                    'Allows no changes and is there simply to be read\n        from and not modified',
                    'Makes it private and can only be used in the file its created',
                    'Makes you read it for better clean code',
                    'Allows only adding but not deleting elements in the array',
                ],
                Answer: 'Allows only adding but not deleting elements in the array',
            },
            {
                Question:
                    'True or False: TypeScript will always correctly infer the type of an array.',
                Info: '',
                Options: ['True', 'False'],
                Answer: 'False',
            },
            {
                Question:
                    'Which is a successful example of this tuple `[number, string]`?',
                Info: '',
                Options: [
                    "const ourTuple = [101, 'Coding\n        God']",
                    "const ourTuple = ['Coding God', 101]",
                    "const ourTuple = [101, 101, 'Coding God', 'Coding God']",
                    'const ourTuple = [101]',
                ],
                Answer: "const ourTuple = [101, 'Coding\n        God']",
            },
            {
                Question: 'Type Aliases are mostly used with ______.',
                Info: '',
                Options: ['Strings', 'Booleans', 'Numbers'],
                Answer: 'Booleans',
            },
            {
                Question:
                    'True or False: Interfaces are similar to type aliases, but only for object types?',
                Info: '',
                Options: ['False', 'True'],
                Answer: 'False',
            },
            {
                Question:
                    '________ an interface will have the same properties as that interface.',
                Info: '',
                Options: ['Extending', 'Idolizing', 'Duplicating', 'Improving'],
                Answer: 'Duplicating',
            },
            {
                Question: 'What are the two types of enums?',
                Info: '',
                Options: [
                    'String and Number',
                    'Number and Number Array',
                    'String and Boolean',
                    'Number and Boolean',
                ],
                Answer: 'String and Number',
            },
            {
                Question: 'Numeric enums first value is defaulted to what?',
                Info: '',
                Options: ['0', '5', '10', '1'],
                Answer: '0',
            },
            {
                Question:
                    "True or False: 'keyof' can be used with index signatures to extract the index type.",
                Info: '',
                Options: ['True', 'False'],
                Answer: 'True',
            },
            {
                Question: 'Definitely Typed is...',
                Info: '',
                Options: [
                    'the official name of TypeScript',
                    'a superset of TypeScript',
                    'a project whose goal is to make types dynamic',
                    'a project that provides a central\n        repository of TypeScript definitions for NPM packages which do not have types',
                ],
                Answer: 'the official name of TypeScript',
            },
            {
                Question:
                    'True or False: Generics can not be assigned default values.',
                Info: '',
                Options: ['True', 'False'],
                Answer: 'False',
            },
            {
                Question:
                    'What is the type of the parameter: `function ex(param1?: string){}`?',
                Info: '',
                Options: [
                    'string | null',
                    'string',
                    'unknown',
                    'string | undefined',
                ],
                Answer: 'unknown',
            },
            {
                Question:
                    '_____ is a return type for when nothing is returned.',
                Info: '',
                Options: ['void', 'any', 'unknown', 'any[]'],
                Answer: 'any[]',
            },
            {
                Question:
                    'Access modifiers control the ______ of properties and methods.',
                Info: '',
                Options: ['visibility', 'mocking', 'type', 'inheritance'],
                Answer: 'visibility',
            },
            {
                Question:
                    'True or False: public modifiers allow access to the class members from anywhere.',
                Info: '',
                Options: ['True', 'False'],
                Answer: 'True',
            },
            {
                Question:
                    'When a class extends another class and replaces the members of its parent it is called what?',
                Info: '',
                Options: ['inheriting', 'extending', 'overload', 'override'],
                Answer: 'overload',
            },
            {
                Question:
                    'True or False: protected modifiers only are allowed in the inherited class.',
                Info: '',
                Options: ['True', 'False'],
                Answer: 'False',
            },
        ],
    },
    {
        Name: 'Javascript',
        Id: 'JS',
        Questions: [
            {
                Question: 'Inside which HTML element do we put the JavaScript?',
                Info: '',
                Options: ['<script>', '<scripting>', '<js>', '<javascript>'],
                Answer: '<script>',
            },
            {
                Question:
                    'What is the correct JavaScript syntax to change the content of the HTML element below?<p\n        id="demo">This is a demonstration.</p>',
                Info: '',
                Options: [
                    '#demo.innerHTML = "Hello World!";',
                    'document.getElementById("demo").innerHTML = "Hello World!";',
                    'document.getElementByName("p").innerHTML = "Hello World!";',
                    'document.getElement("p").innerHTML = "Hello World!";',
                ],
                Answer: 'document.getElementById("demo").innerHTML = "Hello World!";',
            },
            {
                Question: 'Where is the correct place to insert a JavaScript?',
                Info: '',
                Options: [
                    'The <head> section',
                    'The <body> section',
                    'Both the <head> section and the\n        <body> section are correct    Correct\n            answer',
                ],
                Answer: 'Both the <head> section and the\n        <body> section are correct    Correct\n            answer',
            },
            {
                Question:
                    'What is the correct syntax for referring to an external script called "xxx.js"?',
                Info: '',
                Options: [
                    '<script name="xxx.js">',
                    '<script\n        src="xxx.js">',
                    '<script href="xxx.js">',
                ],
                Answer: '<script\n        src="xxx.js">',
            },
            {
                Question:
                    'The external JavaScript file must contain the <script> tag.',
                Info: '',
                Options: ['False', 'True'],
                Answer: 'False',
            },
            {
                Question: 'How do you write "Hello World" in an alert box?',
                Info: '',
                Options: [
                    'alertBox("Hello World");',
                    'msgBox("Hello World");',
                    'msg("Hello World");',
                    'alert("Hello World");',
                ],
                Answer: 'alert("Hello World");',
            },
            {
                Question: 'How do you create a function in JavaScript?',
                Info: '',
                Options: [
                    'function myFunction()',
                    'function:myFunction()',
                    'function = myFunction()',
                ],
                Answer: 'function myFunction()',
            },
            {
                Question: 'How do you call a function named "myFunction"?',
                Info: '',
                Options: [
                    'call function myFunction()',
                    'myFunction()',
                    'call myFunction()',
                ],
                Answer: 'myFunction()',
            },
            {
                Question: 'How to write an IF statement in JavaScript?',
                Info: '',
                Options: [
                    'if i == 5 then',
                    'if i = 5',
                    'if (i == 5)',
                    'if i = 5 then',
                ],
                Answer: 'if (i == 5)',
            },
            {
                Question:
                    'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                Info: '',
                Options: [
                    'if (i <> 5)',
                    'if (i != 5)',
                    'if i =! 5 then',
                    'if i <> 5',
                ],
                Answer: 'if (i != 5)',
            },
            {
                Question: 'How does a WHILE loop start?',
                Info: '',
                Options: [
                    'while i = 1 to 10',
                    'while (i <= 10)',
                    'while (i <= 10; i++)',
                ],
                Answer: 'while (i <= 10)',
            },
            {
                Question: 'How does a FOR loop start?',
                Info: '',
                Options: [
                    'for (i = 0; i <= 5; i++)',
                    'for (i = 0; i <= 5)',
                    'for (i <= 5; i++)',
                    'for i = 1 to 5',
                ],
                Answer: 'for (i = 0; i <= 5; i++)',
            },
            {
                Question: 'How can you add a comment in a JavaScript?',
                Info: '',
                Options: [
                    '//This is a comment',
                    '<!--This is a comment-->',
                    "'This is a comment",
                ],
                Answer: '//This is a comment',
            },
            {
                Question:
                    'How to insert a comment that has more than one line?',
                Info: '',
                Options: [
                    '/*This comment hasmore than one\n        line*/',
                    '//This comment hasmore than one line//',
                    '<!--This comment hasmore than one line-->',
                ],
                Answer: '/*This comment hasmore than one\n        line*/',
            },
            {
                Question:
                    'What is the correct way to write a JavaScript array?',
                Info: '',
                Options: [
                    'var colors = ["red", "green",\n        "blue"]',
                    'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                    'var colors = "red", "green", "blue"',
                    'var colors = (1:"red", 2:"green", 3:"blue")',
                ],
                Answer: 'var colors = ["red", "green",\n        "blue"]',
            },
            {
                Question:
                    'How do you round the number 7.25, to the nearest integer?',
                Info: '',
                Options: [
                    'Math.round(7.25)',
                    'Math.rnd(7.25)',
                    'rnd(7.25)',
                    'round(7.25)',
                ],
                Answer: 'Math.round(7.25)',
            },
            {
                Question:
                    'How do you find the number with the highest value of x and y?',
                Info: '',
                Options: [
                    'top(x, y)',
                    'ceil(x, y)',
                    'Math.ceil(x, y)',
                    'Math.max(x, y)',
                ],
                Answer: 'Math.max(x, y)',
            },
            {
                Question:
                    'What is the correct JavaScript syntax for opening a new window called "w2" ?',
                Info: '',
                Options: [
                    'w2 =\n        window.new("http://www.w3schools.com");    Your\n            answer',
                    'w2 =\n        window.open("http://www.w3schools.com");    Correct\n            answer',
                ],
                Answer: 'w2 =\n        window.open("http://www.w3schools.com");    Correct\n            answer',
            },
            {
                Question: 'JavaScript is the same as Java.',
                Info: '',
                Options: ['True', 'False'],
                Answer: 'False',
            },
            {
                Question: "How can you detect the client's browser name?",
                Info: '',
                Options: [
                    'client.navName',
                    'navigator.appName',
                    'browser.name',
                ],
                Answer: 'navigator.appName',
            },
            {
                Question:
                    'Which event occurs when the user clicks on an HTML element?',
                Info: '',
                Options: ['onclick', 'onmouseclick', 'onmouseover', 'onchange'],
                Answer: 'onclick',
            },
            {
                Question: 'How do you declare a JavaScript variable?',
                Info: '',
                Options: ['variable carName;', 'v carName;', 'var carName;'],
                Answer: 'var carName;',
            },
            {
                Question:
                    'Which operator is used to assign a value to a variable?',
                Info: '',
                Options: ['*', '=', '-', 'x'],
                Answer: '=',
            },
            {
                Question:
                    'What will the following code return: Boolean(10 > 9)',
                Info: '',
                Options: ['NaN', 'true', 'false'],
                Answer: 'true',
            },
            {
                Question: 'Is JavaScript case-sensitive?',
                Info: '',
                Options: ['No', 'Yes'],
                Answer: 'Yes',
            },
        ],
    },
]
