export default function Title({ title, subTitle, divider }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-center my-10">
        <h1 className="font-black text-4xl capitalize">{title}</h1>
        <p className="w-6/12 mx-auto my-3">{subTitle}</p>
        {/* divider if true, otherwise don't show the divider'*/}
        {divider && <div className="w-20 bg-slate-700 h-0.5 my-3 mx-auto rounded-full"></div>}
      </div>
    </>
  );
}
