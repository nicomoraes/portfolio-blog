import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(string: string) {
  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const date = new Date(string);

  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();

  return `${dd} de ${month[mm]} de ${yyyy}`;
}

const MAXIMUM_DAYS_TO_CONSIDER_AS_NEW = 14;

export function isNewRepository(repositoryCreationDate: string) {
  const repositoryDate = new Date(repositoryCreationDate);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - repositoryDate.getTime();
  const daysDiff = timeDiff / (1000 * 3600 * 24);

  return daysDiff > MAXIMUM_DAYS_TO_CONSIDER_AS_NEW ? false : true;
}