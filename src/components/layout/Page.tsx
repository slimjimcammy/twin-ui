import { Container } from "./Container";

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export function Page({ children, className }: PageProps) {
  return (
    <Container
      width="screen"
      height="screen"
      className={className}
      padding="xxl"
    >
      {children}
    </Container>
  );
}
