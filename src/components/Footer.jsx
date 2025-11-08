export default function Footer() {
  return (
    <footer className="bg-peach text-center py-6 border-t border-gray-300 mt-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} V Films — All rights reserved.
      </p>
    </footer>
  );
}
