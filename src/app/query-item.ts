export interface QueryItem {
  id: string;
  question: string;
  answers: AnswerItem[];
}

export interface AnswerItem {
  text: string;
  value: number; // Level of Introvert/Extrovert. Ranges 0 - 4.
}
