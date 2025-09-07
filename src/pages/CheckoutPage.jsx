import React from "react";
import { Link } from "react-router"; // or react-router-dom

export default function CheckoutPage() {
  const demoProducts = [
    { id: 1, title: "Product 1", quantity: 2, total: 500, images: "/image1.jpg" },
    { id: 2, title: "Product 2", quantity: 1, total: 300, images: "/image2.jpg" },
  ];

  const totalPrice = demoProducts.reduce((sum, p) => sum + p.total, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-gray-700">Product</th>
                <th className="py-3 px-4 text-gray-700">Quantity</th>
                <th className="py-3 px-4 text-gray-700">Price</th>
                <th className="py-3 px-4 text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {demoProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4 flex items-center gap-4">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <span>{product.title}</span>
                  </td>
                  <td className="py-3 px-4">{product.quantity}</td>
                  <td className="py-3 px-4">BDT {product.total / product.quantity}</td>
                  <td className="py-3 px-4 font-medium">BDT {product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-6 flex justify-between items-center border-t pt-6">
          <span className="text-xl font-semibold">Total: BDT {totalPrice}</span>
          <Link
            to="/payment"
            className="bg-brand text-white px-6 py-2 rounded-full font-medium hover:bg-brand-dark transition"
          >
            Proceed to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
