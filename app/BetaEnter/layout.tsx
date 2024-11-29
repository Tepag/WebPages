import { ReactNode } from 'react';

interface GroupsLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "PLP | Beta Entry",
  description: "进入兴趣社团",
};

export default function GroupsLayout({
    children, // will be a page or nested layout
  }: GroupsLayoutProps) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        ciao ciao dal layout
   
        {children}
      </section>
    )
  }