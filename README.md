# Intro

Tool for generating and checking passwords following some ridiculous rules:

- Standard rules
  - At least X characters
  - must include lower-case character
  - must include upper-case character
  - must include special character
  - must include a digit
- Non-standard rules
  - must include a specific emoji
  - must be a palindrome
  - must contain word XXXXX
  - all letters should be be lower-case, upper-case alternating
  - password must include this color in hex
  - password length must be a prime number, or from Fibbonacci sequence

Made for https://github.com/Algorithm-Arena/weekly-challenge-10-password-generator
Inspiration is taken from https://neal.fun/password-game/ as well

# Some rules I have considered during brainstorming

- must include an emoji
  - must be a specific emoji - like a sad expression, or herbivore animal
- must be a palindrome
- must include all letters for English alphabet
  - can't include letters AA, BB, CC
- Digits must add up to XX
- must contain word XXX
  - must encode this word in the Morse code
- must include a Roman numeral
- must include a two letter symbol from the periodic table
- must include name of XXX country
- all letters should be be lower-case, upper-case alternating
- password must include this color in hex
- password length must be a prime number

# Additional rules suggested by AI

ChatGPT:
Of course! Here are some delightfully absurd password rules:

- Your password must contain at least one emoji, but it cannot be the same emoji twice in a row. 🦄😂
- It must include the name of your favorite childhood pet, followed by the square root of your shoe size, rounded to the nearest whole number.
- The first letter of your password must be uppercase, the second letter must be a consonant, and the third letter must be a symbol from the Wingdings font.
- Your password must be a palindrome, but only if read backwards in Pig Latin.
- It should contain the Fibonacci sequence, but each number must be spelled out in a different language.
- Include the title of your favorite book, but with every vowel replaced by a different number between 0 and 9 (in order of appearance).
- At least one character in your password must be an ancient Egyptian hieroglyphic.
- Your password should contain a haiku describing your favorite dessert, with each line separated by a special character.

- It must start with the first letter of your astrological sign, followed by the ASCII value of your favorite movie's main character.
- Your password should resemble a musical composition, with each character representing a note on a scale, and it must be playable on a kazoo.

- Your password must be between 12 and 16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character, but it should also contain a memorable phrase from your favorite childhood book or movie.
- Include a memorable date, such as your birthday or the release date of your favorite movie, but intersperse it with random symbols and numbers to increase complexity.
- Your password should be a combination of two unrelated words separated by a special character, but one of the words should be in a language you're learning to help reinforce vocabulary.
- It must contain a mix of alphanumeric characters and symbols, but you can substitute certain letters with visually similar characters, like replacing "O" with "0" or "S" with "$".
- Include a phrase that holds personal significance to you, such as a line from your favorite song or a motivational quote, and capitalize some random letters within the phrase for added complexity.
- Your password should be based on a memorable event, such as the date of your graduation or your first pet's name, combined with a string of numbers that represent a significant milestone in your life.
- It must be easy for you to remember but hard for others to guess, so consider using a passphrase made up of a string of words that form a coherent sentence or phrase, but add a unique twist like replacing spaces with underscores or inserting numbers between words.
- Include a mix of uppercase and lowercase letters along with numbers and symbols, but make it easy to type by avoiding characters that require special key combinations or shifting fingers away from the home row on a keyboard.
- Your password should be unique for each account you create, but you can create a system for generating and remembering them, such as using a base phrase combined with elements unique to each account, like the website name or a keyword associated with the account.
- It must be resistant to dictionary attacks, so avoid using common words or phrases as passwords and consider incorporating uncommon words, misspellings, or nonsensical combinations of characters.

LeChat:
Sure, here are some ridiculously complex password rules that could still be implemented in code:

- The password must be exactly 37 characters long. No more, no less.
- It must contain at least one character from each of the following sets: uppercase letters, lowercase letters, numbers, special symbols, emojis, and non-English characters.
- The password must not contain any dictionary words in any language.
- It must include at least three different math symbols (e.g., +, -, \*, /, =, <, >) and they must form a valid mathematical expression that equals to 42.
- The password must contain the binary representation of a prime number, which must be at least 8 bits long.
- It must not contain any repeating sequences of three or more characters (e.g., "abcabc" or "123123").
- The password must contain at least two different smiley faces, one representing a positive emotion and one representing a negative emotion.
- It must include the name of a city, but the city name must be spelled backwards.
- The password must contain the hexadecimal color code of a shade of green.
- It must not contain any personal information, such as names, birthdates, or addresses.
- The password must be changed every 30 days, and the new password must not be any of the previous 12 passwords.
- It must be typed in reverse order when entering it for the second time to confirm it.

Sure, here are some more ridiculously complex password rules:

- The password must contain at least one musical note symbol and one astrological sign.
- It must include the chemical symbol of a noble gas element.
- The password must contain the name of a famous scientist, but with the first and last names reversed.
- It must include the ASCII art representation of a animal, and the animal must be indigenous to Antarctica.
- The password must contain the latitude and longitude coordinates of a location, rounded to two decimal places.
- It must include the name of a programming language, but with all vowels removed.
- The password must contain the Morse code representation of the word "password".
- It must include the name of a mythological creature, but with the letters in reverse order.
- The password must contain the IP address of a website that is currently in the top 100 most visited websites according to Alexa rankings.
- It must include the name of a famous mathematician, but with the letters in alphabetical order.
- The password must contain the ISBN-13 of a book that was published in the last year.
- It must include the name of a constellation, but with the vowels replaced by numbers (e.g., "Or10n" for "Orion").

Again, while these rules are technically implementable in code, they would be extremely difficult for users to remember and follow, and could lead to frustration and security risks if users resort to writing down their passwords or using easily guessable patterns.
