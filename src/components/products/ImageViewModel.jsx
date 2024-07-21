import { Modal, Button } from "flowbite-react";

function ImageViewModel({
  openModal,
  setOpenModal,
  imgPath: { current: imgPath },
}) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <Modal.Header>View Images</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={imgPath} alt={imgPath} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageViewModel;
