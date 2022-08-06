#!/usr/bin/env node
import readlineSync from 'readline-sync';

const GREETING = 'Welcome to the Brain Games!';
const NUMBER_OF_TRIES = 3;
const LEFT_BORDER = 0;
const RIGHT_BORDER = 100;

const getRandomInt = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

const guessEven = (numberTries, min, max, greeting) => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberTries; i += 1) {
    const number = getRandomInt(min, max);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

guessEven(NUMBER_OF_TRIES, LEFT_BORDER, RIGHT_BORDER, GREETING);
