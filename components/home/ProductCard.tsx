interface ProductCardProps {
  bgUrl: string;
  title: string;
}

const ProductCard = ({ bgUrl, title }: ProductCardProps) => {
  return (
    <div
      className="relative h-full min-h-96 w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat shadow-lg"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {/* Bottom text with blur */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] backdrop-blur-lg [mask:linear-gradient(transparent,white,white)]">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-3xl font-bold text-white">{title} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
