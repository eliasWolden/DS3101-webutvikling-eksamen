interface RaceDetailsInputsProps {
  winnerName: string;
  winnerTime: string;
  numberOfLaps: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
