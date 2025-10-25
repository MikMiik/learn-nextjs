type Props = {
  params: Promise<{ id: number }>;
};

const ProductDetail = async ({ params }: Props) => {
  const { id } = await params;
  return <div className="">ProductDetail {id}</div>;
};

export default ProductDetail;
