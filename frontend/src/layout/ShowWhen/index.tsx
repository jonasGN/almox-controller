interface ShowWhenProps {
  condition: boolean;
  children: React.ReactNode;
}

/**
 * This element do not render a new DOM element. It just render the children
 * when `condition` is `true`
 */
export const ShowWhen = (props: ShowWhenProps): JSX.Element | null => {
  const { condition, children } = props;

  if (!condition) return null;

  return <>{children}</>;
};
