import { ReactNode } from 'react';

interface JoinUsProps {
  children: ReactNode;
}

export default function JoinUs({
    children, // will be a page or nested layout
  }: JoinUsProps) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
   
        {children}
      </section>
    )
  }