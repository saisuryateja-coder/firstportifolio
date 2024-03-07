export default function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#6fa871] text-white  py-3 px-10 rounded-[5px] text-sm">
      {name}
    </button>
  );
}
