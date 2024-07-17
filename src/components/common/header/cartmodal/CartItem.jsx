const CartItem = ({ product }) => {
  return (
    <li key={product.id} className="flex items-center py-6">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-16 w-16 flex-none rounded-md border border-gray-200"
      />
      <div className="ml-4 flex-auto">
        <h3 className="font-medium text-gray-900">
          <a href={product.href}>{product.name}</a>
        </h3>
        <p className="text-gray-500">{product.color}</p>
      </div>
    </li>
  );
};

export default CartItem;
