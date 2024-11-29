import { ReactNode } from 'react';

interface GroupsLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "PLP | Groups",
  description: "兴趣社团",
};

export default function GroupsLayout({
    children, // will be a page or nested layout
  }: GroupsLayoutProps) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
   
        {children}
      </section>
    )
  }