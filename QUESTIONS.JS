const QUESTIONS = [
  {
    id: 1,
    text: "Tính \\(\\int x^2 dx\\).",
    options: [
      "\\(\\frac{1}{3}x^3 + C\\)",
      "\\(2x + C\\)",
      "\\(x^3 + C\\)",
      "\\(3x^3 + C\\)"
    ],
    answerIndex: 0,
    explain: "Nguyên hàm của \\(x^n\\) là \\(\\frac{x^{n+1}}{n+1}\\)."
  },
  {
    id: 2,
    text: "Nguyên hàm của \\(\\cos x\\) là gì?",
    options: [
      "\\(\\sin x + C\\)",
      "\\(-\\sin x + C\\)",
      "\\(\\cos x + C\\)",
      "\\(\\tan x + C\\)"
    ],
    answerIndex: 0,
    explain: "Vì \\((\\sin x)' = \\cos x\\)."
  },
  {
    id: 3,
    text: "Tính \\(\\int e^x dx\\).",
    options: [
      "\\(e^x + C\\)",
      "\\(xe^x + C\\)",
      "\\(\\ln x + C\\)",
      "\\(x + C\\)"
    ],
    answerIndex: 0,
    explain: "Nguyên hàm của \\(e^x\\) là chính nó."
  }
];