const messages = [
  [
    "You are enough!",
    "You are beautiful",
    "You deserve peace and freedom",
    "The universe loves you",
    "You are loved",
    "You are a part of the great collective of life",
    "You have so much potential",
    "You can become whatever you want to become",
    "You are powerful",
  ],
  [
    "the sun is shining somewhere",
    "there is life all arround you",
    "the universe is waiting to be exlored",
    "mother earth gives you life",
    "grounding charges you with electrons",
    "fresh air is free",
    "love is power",
  ],
  [
    ":)",
    "have fun",
    "be at peace",
    "feel the love",
    "life is good",
    "go journal",
    "go meditate",
    "feel alive",
    "be aligned",
    "be your autentic self",
  ],
];

function randomMessageGenerator() {
  let randomMessage = [];
  for (const part of messages) {
    randomMessage.push(part[Math.floor(Math.random() * part.length)]);
  }
  return randomMessage.join(", ");
}

console.log(randomMessageGenerator());
