import ShareTweet from "./thank-you-tweet";

interface iModal {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const AppModal = ({ children, openModal, closeModal }: iModal) => {
  return (
    <div className="modal fade" id="cgpaModal" tabIndex={-1} role="dialog">
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white text-center p-3 rounded shadow-lg w-[80%] md:max-w-md grid grid-cols-1 place-items-center">
            
            {children}

            <div className="flex mt-10 gap-10 flex-row items-center justify-between">
            <button
              onClick={closeModal}
              className="bg-blue-500 text-[13px] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              close
            </button>
            <ShareTweet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
