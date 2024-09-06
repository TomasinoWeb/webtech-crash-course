import React, { useEffect, useState } from 'react';

// Function to shuffle an array
const shuffleArray = (
  array: Array<'pink' | 'cyan' | 'purple' | 'lime'>,
): Array<'pink' | 'cyan' | 'purple' | 'lime'> => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Function to generate a sequence ensuring no two adjacent colors are the same
const generateColorSequence = (
  colors: Array<'pink' | 'cyan' | 'purple' | 'lime'>,
  count: number,
): Array<'pink' | 'cyan' | 'purple' | 'lime'> => {
  const sequence: Array<'pink' | 'cyan' | 'purple' | 'lime'> = [];
  let prevColor = null;

  for (let i = 0; i < count; i++) {
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === prevColor);
    sequence.push(color);
    prevColor = color;
  }

  return sequence;
};

const colorVariants: Array<'pink' | 'cyan' | 'purple' | 'lime'> = [
  'pink',
  'cyan',
  'purple',
  'lime',
];

const colorClasses = {
  pink: 'bg-pink-700',
  cyan: 'bg-cyan-900',
  purple: 'bg-purple-900',
  lime: 'bg-lime-900',
};

interface CardProps {
  title: string;
  task: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, task, index }) => {
  const [colorSequence, setColorSequence] = useState<
    Array<'pink' | 'cyan' | 'purple' | 'lime'>
  >([]);

  useEffect(() => {
    // Generate the color sequence when the component mounts
    const shuffledColors = shuffleArray(colorVariants);
    setColorSequence(generateColorSequence(shuffledColors, 10));
  }, []);

  // Use the index to select the color from the sequence
  const colorVariant = colorSequence[index % colorSequence.length];

  return (
    <div
      className={`w-full rounded-xl shadow-lg  ${colorClasses[colorVariant]} m-2 p-4`}
    >
      <div className="w-full p-4">
        <h2 className="mb-2 text-xl font-semibold text-slate-100">{title}</h2>
        <p className="mb-4 text-slate-400">{task}</p>
      </div>
    </div>
  );
};

export default Card;
