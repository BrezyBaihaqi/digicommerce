export const AuthLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-[420px]">{children}</div>
    </main>
  );
};
