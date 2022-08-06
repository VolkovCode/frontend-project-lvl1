#!/usr/bin/env node
import askName from './cli.js';

const saluteUser = () => {
  const GREETING = 'Welcome to the Brain Games!';
  console.log(GREETING);
};

saluteUser();
askName();

export default saluteUser;
