type Props = {
  searchParams: Promise<{
    status: string;
    keyword: string;
  }>;
};

const ProductPage = async ({ searchParams }: Props) => {
  const { status, keyword } = await searchParams;
  console.log(status, keyword);

  return <div className="">ProductPage</div>;
};

export default ProductPage;
