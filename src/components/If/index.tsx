type Props = {
  condition: boolean;
  children: any;
};

export const If: React.FC<Props> = ({condition, children}) =>
  condition && children;
