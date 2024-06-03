import supabase from '../supabaseClient';

export const fetchQuestions = async () => {
  let { data: questions, error } = await supabase
    .from('questions')
    .select('*');

  if (error) {
    console.error('Error fetching questions', error);
    return []; // Return an empty array in case of an error
  }

  if (questions) {
    return questions.map(question => ({
      ...question,
      options: [
        { optionText: question.option_a, isCorrect: question.correct_answer === 'A' },
        { optionText: question.option_b, isCorrect: question.correct_answer === 'B' },
        { optionText: question.option_c, isCorrect: question.correct_answer === 'C' },
        { optionText: question.option_d, isCorrect: question.correct_answer === 'D' },
      ]
    }));
  } else {
    return []; // Return an empty array if questions is null
  }
};
