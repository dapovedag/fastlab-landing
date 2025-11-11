"use client";

import { useState, useEffect, useMemo } from "react";

interface AnimatedTitleProps {
  title: string;
  highlight: string;
}

export default function AnimatedTitle({ title, highlight }: AnimatedTitleProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  // Memoizar el texto completo y los rangos de palabras
  const { fullText, wordRanges, titleLength } = useMemo(() => {
    const fullText = title + " " + highlight;
    const titleLength = title.length + 1;
    const words = fullText.split(' ');

    let charCounter = 0;
    const wordRanges = words.map(word => {
      const start = charCounter;
      const end = charCounter + word.length;
      charCounter = end + 1;
      return { word, start, end };
    });

    return { fullText, wordRanges, titleLength };
  }, [title, highlight]);

  useEffect(() => {
    let appearInterval: NodeJS.Timeout;
    let disappearInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const animationCycle = () => {
      let currentChar = 0;

      appearInterval = setInterval(() => {
        currentChar++;
        setVisibleChars(currentChar);

        if (currentChar >= fullText.length) {
          clearInterval(appearInterval);

          pauseTimeout = setTimeout(() => {
            let disappearChar = fullText.length;

            disappearInterval = setInterval(() => {
              disappearChar--;
              setVisibleChars(disappearChar);

              if (disappearChar <= 0) {
                clearInterval(disappearInterval);

                restartTimeout = setTimeout(() => {
                  animationCycle();
                }, 500);
              }
            }, 30);
          }, 5000);
        }
      }, 50);
    };

    animationCycle();

    return () => {
      clearInterval(appearInterval);
      clearInterval(disappearInterval);
      clearTimeout(pauseTimeout);
      clearTimeout(restartTimeout);
    };
  }, [fullText]);

  return (
    <div className="w-full min-h-[80px] lg:min-h-[100px]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-[1.3]">
        {wordRanges.map((wordRange, wordIndex) => {
          const isHighlight = wordRange.start >= titleLength;
          return (
            <span key={wordIndex} className="inline-flex whitespace-nowrap mr-[0.22em] mb-2">
              {wordRange.word.split('').map((char, charIndex) => {
                const globalIndex = wordRange.start + charIndex;
                const isVisible = globalIndex < visibleChars;

                return (
                  <span
                    key={charIndex}
                    className={`inline-block transition-all duration-300 ${isHighlight ? 'text-primary' : ''}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                      transitionDelay: isVisible ? `${globalIndex * 20}ms` : '0ms',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
