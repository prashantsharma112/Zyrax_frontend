import Button from "../components/subComponents/Button";
export default function LogoutModal({ onClose, onConfirm }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold mb-2">Confirm Logout</h2>
          <p>Are you sure you want to log out?</p>
          <div className="flex justify-end gap-4 mt-4">
            <Button className=" text-black px-4 py-2 rounded" onClick={onClose}>Cancel</Button>
            <Button className=" px-4 py-2 rounded" onClick={onConfirm}>Logout</Button>
          </div>
        </div>
      </div>
    );
  }
  