import { Container } from "./Container";

export interface PageProps {
  children: React.ReactNode;
  className?: string;
  padding?: "xs" | "sm" | "md" | "lg";
}

export function Page({ children, className, padding }: PageProps) {
  return (
    <Container
      width="screen"
      height="screen"
      className={className}
      padding={padding}
    >
      {children}
    </Container>
  );
}
