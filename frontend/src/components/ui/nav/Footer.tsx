export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-[100%] flex gap-2 bg-rose-500 text-white font-semibold p-8 items-center justify-center text-sm">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <span>|</span>
      <p>Janotes</p>
    </footer>
  );
}
