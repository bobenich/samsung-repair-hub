
export interface SurveyQuestion {
  id: string;
  question: string;
  options: string[];
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 'device',
    question: 'Какое устройство Samsung требует ремонта?',
    options: ['Смартфон', 'Планшет', 'Ноутбук', 'Телевизор', 'Умные часы', 'Другое']
  },
  {
    id: 'problem',
    question: 'Какая проблема возникла с вашим устройством?',
    options: ['Не включается', 'Разбит экран', 'Проблемы с батареей', 'Не работает камера', 'Медленная работа', 'Другое']
  },
  {
    id: 'time',
    question: 'Как давно возникла проблема?',
    options: ['Сегодня', 'Неделю назад', 'Месяц назад', 'Более месяца']
  },
  {
    id: 'urgency',
    question: 'Насколько срочно вам нужен ремонт?',
    options: ['Очень срочно (в течение дня)', 'В ближайшие 1-2 дня', 'В течение недели', 'Не срочно']
  },
  {
    id: 'priority',
    question: 'Что для вас наиболее важно при выборе сервиса?',
    options: ['Низкая цена', 'Быстрота ремонта', 'Гарантия на работу', 'Официальные запчасти', 'Удобное расположение сервиса', 'Отзывы и репутация']
  },
  {
    id: 'discount',
    question: 'Хотели бы вы получить скидку на первый ремонт?',
    options: ['Да, конечно!', 'Нет, спасибо']
  }
];
