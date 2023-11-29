import Navigation from "@/Components/Navigation";

export default function layout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
