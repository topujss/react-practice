import { MdOutlineClose } from 'react-icons/md';

export default function Alert({ type, msg, hide }) {
  return (
    <>
      <h1 className={`${type} border p-4 rounded flex justify-between items-center`}>
        {msg}
        <MdOutlineClose
          className="cursor-pointer"
          onClick={() => hide({ status: false, msg: '', type: 'bg-red-100 border-red-400 text-red-700' })}
        />
      </h1>
    </>
  );
}
