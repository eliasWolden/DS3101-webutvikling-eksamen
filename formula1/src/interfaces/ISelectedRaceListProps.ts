import { SelectedDriverListProps } from "./ISelectedDriverListProps";

export interface SelectedRaceListProps extends SelectedDriverListProps {
    updateAmountOfWins: (wins: number) => void;
  }