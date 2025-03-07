
import { CheckCircle } from 'lucide-react';
import Button from './subComponents/Button';

export default function ThankYouCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-80">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
        <h2 className="text-xl font-semibold mt-4">Thank You</h2>
        <p className="text-gray-600 mt-2">Your subscription has been processed successfully.</p>
        <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
          Check Your Subscription
        </Button>
      </div>
    </div>
  );
}
