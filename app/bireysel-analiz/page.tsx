'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  weights: Record<string, number>; // optional, if needed
};

type QuizResult = {
  profile: string;
  recommendedTags: string[];
};

export default function Quiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/quiz`)
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = () => {
    // Check if all questions answered clearly
    if (questions.some(q => !answers[q.id])) {
      alert("Lütfen tüm soruları cevaplayınız!");
      return;
    }
  
    const formattedAnswers = questions.map(q => ({
      questionId: q.id,
      selectedOption: answers[q.id]
    }));
  
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/quiz/submit`, { answers: formattedAnswers })
      .then(res => setResult(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold">Bireysel Analiz</h1>
      <p className="mt-2">Politik duruşunuzu öğrenin ve özel öneriler alın!</p>

      {!result ? (
        <div className="mt-6">
          {questions.map(q => (
            <div key={q.id} className="mb-4 border-b border-gray-700 pb-3">
              <h3 className="font-semibold">{q.question}</h3>
              {Array.isArray(q.options) && q.options.map(opt => (
                <label key={opt} className="block mt-2">
                  <input 
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    onChange={() => setAnswers({...answers, [q.id]: opt})}
                  /> {opt}
                </label>
              ))}
            </div>
          ))}
          <button 
            onClick={handleSubmit} 
            className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Sonuçları Göster
          </button>
        </div>
      ) : (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Sonuç: {result.profile}</h2>
          <p className="mt-2">Size özel önerilen konular:</p>
          <ul className="list-disc list-inside mt-2">
            {result.recommendedTags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}