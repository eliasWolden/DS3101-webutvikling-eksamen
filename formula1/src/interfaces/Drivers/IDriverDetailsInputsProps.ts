interface DriverDetailsInputsProps {
  name: string;
  age: number;
  nationality: string;
  teamId: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
