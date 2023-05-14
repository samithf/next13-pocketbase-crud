export default function Modal({ id, isOpen }: any) {
  return (
    <>
      <div className={`modal ${isOpen ? "modal-open" : ""}`} id={id}>
        <div className="modal-box w-10/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <button className="btn btn-sm btn-circle absolute right-2 top-2">
            x
          </button>
          <p className="py-4">
            Youve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action"></div>
        </div>
      </div>
    </>
  );
}
